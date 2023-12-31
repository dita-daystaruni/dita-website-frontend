import React from "react";
import { defaultOptions } from "../../../utils/animations";
import { Tilt } from "react-tilt";

const DarkCard = ({ title, date,image,description,location,time, link,github }) => {
  return (
    <Tilt options={defaultOptions} className="cursor-pointer">
      <div className="flex flex-col h-full">
        <div className="max-w-sm bg-custom-navy-blue border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="w-full h-[200px] overflow-hidden">
            {/*DYNAMIC IMAGE*/}
            <img src={image} alt="" class="w-full h-full object-cover" />
          </div>
          <div className="p-5">
            <div>
              <h5 className="mb-2 text-2xl font-bold tracking-tight">
                {/*DYNAMIC TITLE*/}
                {title}
              </h5>
            </div>
            <p className="mb-3 font-normal">
              {/* DYNAMIC CONTENT*/}
              {description}
            </p>
            <div className="border-t border-black">
              <p className="mt-4">
                {location} ・ {date}
              </p>
            </div>
            {github && (
              <section>
              <div className="flex justify-between mt-4">
                <a href={github} className="text-blue-500 hover:underline">
                  View Github
                </a>
              </div>
              </section>
            )}
            {link && (
              <div className="flex justify-between mt-4">
                <a href={link} className="text-blue-500 hover:underline">
                  View Project
                </a>
                <p className="text-gray-500">{time}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Tilt>
  );
};

export default DarkCard;
