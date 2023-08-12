import React from "react";
import { Tilt } from "react-tilt";

import { defaultOptions } from "../../../utils/animations";

const GreyCard = ({ heading, content,image }) => {
  return (
    <Tilt options={defaultOptions} className="cursor-pointer">
      <div className="flex flex-col h-full dark:text-white">
        <div className="max-w-sm bg-gray-200 border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="w-full h-[200px] overflow-hidden">
            {/* TODO: ADD IMAGES TO RESPECTIVE CARDS */}
            <img src={image} alt="" />
          </div>
          <div className="p-5">
            <div>
              <h5 className="mb-2 text-2xl font-bold tracking-tight">
                {/*TODO: DYNAMICALLY CHANGE HEADING*/}
                {heading}
              </h5>
            </div>
            <p className="mb-3 font-normal">
              {/* TODO: DYNAMICALLY CHANGE CONTENT*/}
              {content}
            </p>
            <div>
            </div>
            <div className="border-t border-black">
              <p className="mt-4">
                Daystar University ・ DITA Resource lab ・ Athi-River ・
              </p>
            </div>
          </div>
        </div>
      </div>
    </Tilt>
  );
};

export default GreyCard;
