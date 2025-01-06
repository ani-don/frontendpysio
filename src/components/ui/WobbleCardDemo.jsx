import React from "react";
import { WobbleCard } from "./WobbleCard";


export function WobbleCardDemo() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Our Vision
          </h2>
          <p className="mt-4 text-left text-base/6 text-neutral-200">
          focused on being a preferred partner of choice to other Healthcare Providers for their physiotherapy requirements.
          </p>
        </div>
        <img
          src="https://media.btetechnologies.com/wp-content/uploads/20191025124455/BTe-SimulatorII-Occupational-therapy-Functional-Rehabilitation.jpg"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px]">
        <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
        Our Approach
        </h2>
        <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
        Our approach to your recovery is what makes us UNIQUE. We believe in involving you in your treatment.
        </p>
      </WobbleCard>
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]"
      >
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
           
          WE bring the EXPERTISE,YOU commit and follow through with IMPLEMENTATION.
          </h2>
          <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
          The end result is that you recover and get back to your life; and take ownership of your physical health too.
          </p>
        </div>
        <img
          src="https://healthcareapn.ca/wp-content/uploads/TENS-Machine.jpg"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>

    </div>
  );
}
