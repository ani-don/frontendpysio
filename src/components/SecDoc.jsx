import React from 'react'
import vido  from'../assets/8313525-hd_1080_1920_30fps.mp4'
import img  from'../assets/download.png'


const SecDoc = () => {
  return (
    <>
    <section className="pt-10 bg-gray-100 sm:pt-16 lg:pt-24 mt-12">
    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">What are the Benefits of Physiotherapy</h2>
            <p className="mt-6 text-lg text-gray-900">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
            <a href="#" title="" className="inline-flex items-center justify-center px-6 py-4 mt-12 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:bg-blue-700" role="button">
                <svg className="w-5 h-5 mr-2 -ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Contact our support
            </a>
        </div>
    </div>

    <div className="container mx-auto 2xl:px-12">
        <img className="w-full mt-6" src="https://png.pngtree.com/png-vector/20240103/ourmid/pngtree-medical-doctors-group-isolated-health-png-image_11263678.png" alt="" />
    </div>
</section>


<section className="py-10 bg-gray-50 sm:py-16 lg:py-24 mt-5" >
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-stretch gap-y-10 md:grid-cols-2 md:gap-x-20">
            <div className="relative grid grid-cols-2 gap-6 mt-10 md:mt-0">
                <div className="overflow-hidden aspect-w-3 aspect-h-4">
                    <img className="object-cover object-top origin-top scale-150" src="https://th.bing.com/th/id/OIP.dLlocJ0fqLf7weepMTG-JwHaLH?w=1600&h=2400&rs=1&pid=ImgDetMain" alt="" />
                </div>

                <div className="relative">
                    <div className="h-full overflow-hidden aspect-w-3 aspect-h-4">
                        <video className="object-cover scale-100 lg:origin-bottom-right" src={vido} autoPlay loop muted alt="" />
                    </div>

                 
                </div>

                <div className="absolute -translate-x-1/2 left-1/2 -top-16">
                    <img className="w-32 h-32" src={img} alt="" />
                </div>
            </div>

            <div className="flex flex-col items-start xl:px-16">
                <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Growth Of Our Community</h2>
                <p className="mt-4 text-base leading-relaxed text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>

                <a href="#" title="" className="inline-flex items-center justify-center px-5 py-4 mt-8 text-base font-semibold text-white transition-all duration-200 rounded-md hover:opacity-90 focus:opacity-90 lg:mt-auto bg-gradient-to-r from-fuchsia-600 to-blue-600" role="button">
                    Get Appointment Now
                    <svg className="w-5 h-5 ml-8 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                </a>
            </div>
        </div>
    </div>
</section>
</>

  )
}

export default SecDoc
