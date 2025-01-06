import { useState, useEffect } from 'react';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch blogs from the backend
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/blogs'); // Backend endpoint
        if (!response.ok) throw new Error('Failed to fetch blogs');
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return <div className="text-center py-6">Loading blogs...</div>;
  }

  return (








    <div className="relative bg-gray-50 px-6 pt-16 pb-20 lg:px-8 lg:pt-24 lg:pb-28">
  
  <div className="relative mx-auto max-w-7xl">
    <div className="text-center">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Latest News</h2>
      <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
      Latest Happenings & hot topics in the field of physiotherapy along with updates from CB Physiotherapy</p>
    </div>
    
  

    <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">



    { blogs.length > 0 ? (

blogs.map((blog) =>(

  <div key={blog._id} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
  <div className="flex-shrink-0">
    <img className="blogs h-56 w-full object-cover " src={`http://localhost:4000${blog.image}`} alt=""/>
  </div>
  <div className="flex flex-1 flex-col justify-between bg-white p-6">
    <div className="flex-1">
      <p className="text-sm font-medium text-indigo-600">
        <a href="" className="hover:underline">know more</a>
      </p>
      <a href="#" className="mt-2 block">
        <p className="text-xl font-semibold text-gray-900">{blog.title}</p>
        <p className="mt-3 text-base text-gray-500">{blog.content}</p>
      </a>
    </div>
    <div className="mt-6 flex items-center">
      <div className="flex-shrink-0">
        <a href="#">
          <span className="sr-only">Roel Aufderehar</span>
          <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="no image wants"/>
        </a>
      </div>
      <div className="ml-3">
        <p className="text-sm font-medium text-gray-900">
          <a href="#" className="hover:underline">Roel Aufderehar</a>
        </p>
        <div className="flex space-x-1">
        <p classNameName="text-sm text-gray-500">
              Posted on: {new Date(blog.createdAt).toLocaleDateString()}
            </p>
          <span aria-hidden="true">·</span>
          
        </div>
      </div>
    </div>
  </div>
</div>

))


  ) :(
      <div classNameName="text-center text-gray-600">No blogs found.</div>
    )}
    </div>
</div>
</div>


  



  


     


      
  




  );
};

export default Blogs;
