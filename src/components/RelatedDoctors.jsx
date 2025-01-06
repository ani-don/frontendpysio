import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

const RelatedDoctors = ({ speciality, docId }) => {
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);

  // Correctly initialize state
  const [relDocs, setRelDocs] = useState([]);

  useEffect(() => {
    if (doctors.length > 0 && speciality) {
      const doctorsData = doctors.filter(
        (doc) => doc.speciality === speciality && doc._id !== docId
      );
      setRelDocs(doctorsData);
    }
  }, [doctors, speciality, docId]);

  return (
<>
    <div className='flex flex-col items-center gap-4 my-6 text-gray-900 md:mx-10'>
    <h1 className='text-3xl font-medium'>Related Physios</h1>
    <p className='sm:w-1/3 text-center text-sm text-gray-500'>Simply browse our Extensive list of Trusted Physiotherapists</p>
   
  
</div>

<div className='flex flex-row  gap-5 w-100%'>
    {
        relDocs.slice(0, 5).map((item,index) => ( 
<div style={{width:"500px"}}   className="   relative h-96 max-w-sm mx-0 mt-20 px-5 py-8 group rounded-3xl bg-gray-200 overflow-hidden shadow-xl">

    <img    src={item.image}      alt="" className="absolute w-full h-full inset-0 object-cover"/>
    
    <div  key={index}
        className="absolute inset-0 w-full h-full rounded-3xl bg-black bg-opacity-0 transition duration-500 backdrop-filter group-hover:bg-opacity-20 group-hover:backdrop-blur">
    </div>
 
    <div className="flex items-center gap-2  text-sm text-center text-green-500">
              <p className="w-2 h-2 bg-green-500 rounded-full"></p>
              <p>Available</p>
            </div>
            
    <div className="absolute inset-x-5  text-black">
        <h2 className="text-lg  font-semibold mb-2">{item.name}</h2>
        <p style={{fontSize:"8px"}} class="text-sm text-red-500 font-medium uppercase tracking-wider mb-6">{item.speciality}</p>
      
    </div>
    
    
        
    <button onClick={() =>{ navigate(`/appointment/${item._id}`); scrollTo(0,0)} } class="absolute inset-x-5 bottom-8 py-3 rounded-2xl font-semibold bg-white shadow-lg hidden transition duration-200 hover:bg-gray-300 group-hover:block">Learn More</button>

</div>
))}
</div>
</>
  );
};

export default RelatedDoctors;
