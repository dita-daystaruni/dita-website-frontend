import React from "react";
// import BlueRedirectBtn from "./blueRedirectBtn";
import { defaultOptions } from "../../../utils/animations";
import { Tilt } from "react-tilt";

const DarkCard = ({ title, date,image,description,location,time }) => {
  return (
    <Tilt options={defaultOptions} className="cursor-pointer">
      <div className="flex flex-col h-full">
        <div className="max-w-sm bg-custom-navy-blue border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700">
          <div>
            {/* TODO: ADD IMAGES TO RESPECTIVE CARDS */}
            <img src={image} alt="" />
          </div>
          <div className="p-5">
            <div>
              <h5 className="mb-2 text-2xl font-bold tracking-tight">
                {/*TODO: DYNAMICALLY CHANGE HEADING*/}
                {title}
              </h5>
            </div>
            <p className="mb-3 font-normal">
              {/* TODO: DYNAMICALLY CHANGE CONTENT*/}
              {description}
            </p>
            {/* <BlueRedirectBtn /> */}
            <div className="border-t border-black">
              <p className="mt-4">{location} ・ {date} ・ {time}</p>
            </div>
          </div>
        </div>
      </div>
    </Tilt>
  );
};

export default DarkCard;
