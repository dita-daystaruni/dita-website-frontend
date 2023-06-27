import React from 'react'
import { useRef } from 'react';

import GreyRedirectBtn from "../common/greyRedirectBtn";
import { team } from '../../../utils/team';

const Team = () => {
    const sliderRef = useRef(null);

    let defaultTransform = 0;
    const handleNextBtn = ()=>{
        defaultTransform = defaultTransform - 398;
        let slider = sliderRef.current;
        if (Math.abs(defaultTransform) >= slider.scrollWidth / 1.7)
            defaultTransform = 0;
        slider.style.transform = "translateX(" + defaultTransform + "px)";
    }
    const handlePrevBtn = ()=>{
        let slider = sliderRef.current;
        if (Math.abs(defaultTransform) === 0) defaultTransform = 0;
        else defaultTransform = defaultTransform + 398;
        slider.style.transform = "translateX(" + defaultTransform + "px)";
    }
  return (
    <section className="flex justify-between py-20 max-sm:flex-col">
      {/* FIrst div */}
      <div className="max-w-sm mx-20 max-sm:mx-10">
        <h3 className="font-bold text-2xl mb-10">
          KIPRAH DOSEN TENAGA PENDIDIKAN DAN MAHASISWA
        </h3>
        <p>
          STMIK “AMIKBANDUNG” selalu memiliki dosen berpengalaman dan
          berkompeten, serta memiliki mahasiswa yang berpotensi dan terampil
          yang selalu mengharumkan nama bangsa Indonesia di tiap angkatannya.
        </p>
        <GreyRedirectBtn margin_right={0} margin_top_bottom="my-10" />
      </div>
      <div className="max-w-full">
        <div className="flex items-center justify-center w-full h-full sm: px-4">
          <div className="w-full relative flex items-center justify-center">
            <button
              aria-label="slide backward"
              className="absolute z-30 left-0 ml-10 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
              id="prev"
              onClick={handlePrevBtn}
            >
              <svg
                className="dark:text-gray-900"
                width="8"
                height="14"
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 1L1 7L7 13"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
              <div
                id="slider"
                ref={sliderRef}
                className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700"
              >
                {/* import teams utility containing names, pictures and their role */}
                {team.map((member) => {
                    return (
                <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="object-cover object-center w-full"
                  />
                  <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                    <h2 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white dark:text-gray-900">
                      {member.role}
                    </h2>
                    <div className="flex h-full items-end pb-6">
                      <h3 className="lg:text-xl leading-4 text-base lg:leading-5 text-white dark:text-gray-900">
                        {member.name}
                      </h3>
                    </div>
                  </div>
                </div>   
                )})
                }
              </div>
            </div>
            <button
              aria-label="slide forward"
              className="absolute z-30 right-0 mr-10 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
              id="next"
              onClick={handleNextBtn}
            >
              <svg
                className="dark:text-gray-900"
                width="8"
                height="14"
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L7 7L1 13"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team