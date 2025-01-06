import React from 'react'

const Faq = () => {
  return (
    <div
    class="relative w-full  bg-white px-6 pt-10 pb-8 sm:mt-36 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-2xl sm:rounded-lg sm:px-10">
    <div class="mx-auto px-5">
        <div class="flex flex-col items-center">
            <h2 class="mt-5 text-center text-3xl font-bold tracking-tight md:text-5xl">FAQ</h2>
            <p class="mt-3 text-lg text-neutral-500 md:text-xl">Frequenty asked questions about physiotherapy

            </p>
        </div>
        <div class="mx-auto mt-8 grid max-w-xl divide-y divide-neutral-200">
            <div class="py-5">
                <details class="group">
                    <summary class="flex cursor-pointer list-none items-center justify-between font-medium">
                        <span> 1.What is Integrated Physio Care by CB Physiotherapy</span>
                        <span class="transition group-open:rotate-180">
                                <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                    stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                    <path d="M6 9l6 6 6-6"></path>
                                </svg>
                            </span>
                    </summary>
                    <p class="group-open:animate-fadeIn mt-3 text-neutral-600">Integrated Care Focusses on better Outcomes by using a combination of therapies and delivery models that suit you the best for short term relief as well as long term management of your condition. It Starts with an all-around assessment followed by a personalized treatment program consisting of various types of therapies. Our Efforts Continue after the treatment is over as you would be given an exercise prescription/schedule to be followed at home. Video Library and supported mobile app help in adherence to prescribed exercises and reduce the chances of problem recurrence.
                    </p>
                </details>
            </div>
            <div class="py-5">
                <details class="group">
                    <summary class="flex cursor-pointer list-none items-center justify-between font-medium">
                        <span> 2.What are the services Offered by CB Physiotherapy in India?</span>
                        <span class="transition group-open:rotate-180">
                                <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                    stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                    <path d="M6 9l6 6 6-6"></path>
                                </svg>
                            </span>
                    </summary>
                    <p class="group-open:animate-fadeIn mt-3 text-neutral-600"> Physiotherapy Offers treatments in our partner clincs & Physiotherapy at Home Service ( currently in major metros in India). We Also provide Remote / virtual physiotherapy session. VIrtual Physiotherapy Sessions generally asessment of your condition and then an exercise prescription is given for the same. Home Exercises for managemnt of ortho / neuro conditions is enabled by our mobile app.
                        
                    </p>
                </details>
            </div>
            <div class="py-5">
                <details class="group">
                    <summary class="flex cursor-pointer list-none items-center justify-between font-medium">
                        <span> 3.Do you Offer Remote Physiotherapy / VIrtual Physiotherapy to Overseas Patients.</span>
                        <span class="transition group-open:rotate-180">
                                <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                    stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                    <path d="M6 9l6 6 6-6"></path>
                                </svg>
                            </span>
                    </summary>
                    <p class="group-open:animate-fadeIn mt-3 text-neutral-600">Yes, If you are located outside India, you can still avial our remote physiotehrapy services. After booking a remote therapy session. Our team wil schedule a remote therapy session over whatsapp/ gooogle meet / zoom meeting. After the session home exercise sessions will be given or if needed the exercise sessions can be done under the guidance of our physio over video calling.
                    </p>
                </details>
            </div>
       
        </div>
    </div>
</div>




  )
}

export default Faq
