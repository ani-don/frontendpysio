import React from 'react'

const Feed = () => {
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
  <div className="mx-auto max-w-3xl text-center">
    <h2 className="text-3xl font-bold text-red-900 sm:text-4xl">THOROUGHLY VETTED EXPERTS</h2>

    <p className="mt-4 text-gray-500 sm:text-xl">
    With expertise, our Clinics are equipped with latest approved technologies in Spine, Sports & Chiropractic Care to ensure that you get the best care.
    </p>
  </div>

  <dl  className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-4">
    <div className="flex flex-col rounded-lg border border-blue-500 px-4 py-8 text-center">
      <dt className="order-last text-lg font-medium text-gray-500">Happy Patients</dt>

      <dd className="text-4xl font-bold text-blue-600 md:text-5xl">+1000</dd>
    </div>

    <div className="flex flex-col rounded-lg border border-red-500 px-4 py-8 text-center">
      <dt className="order-last text-lg font-medium text-gray-500">Total Branches</dt>

      <dd className="text-4xl font-bold text-red-600 md:text-5xl">20</dd>
    </div>

    <div className="flex flex-col rounded-lg border border-blue-500 px-4 py-8 text-center">
      <dt className="order-last text-lg font-medium text-gray-500">Senior Doctors</dt>

      <dd className="text-4xl font-bold text-blue-600 md:text-5xl">+20</dd>
    </div>

    <div className="flex flex-col rounded-lg border border-red-500 px-4 py-8 text-center">
      <dt className="order-last text-lg font-medium text-gray-500">Years Of Experience</dt>

      <dd className="text-4xl font-bold text-red-600 md:text-5xl">+5</dd>
    </div>
  </dl>
</div>
  )
}

export default Feed
