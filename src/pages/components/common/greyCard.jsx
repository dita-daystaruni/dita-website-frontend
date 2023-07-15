import React from "react";
import { Tilt } from "react-tilt";

import { defaultOptions } from "../../../utils/animations";
import GreyRedirectBtn from "./greyRedirectBtn";
import dummyImage from "../../../assets/unsplash_dsvJgiBJTOs.png";



const GreyCard = ({ heading, content }) => {
  return (
    <Tilt options={defaultOptions} className="cursor-pointer">
    <div className="flex flex-col h-full dark:text-white">
      <div className="max-w-sm bg-gray-200 border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700">
        <div>
          {/* TODO: ADD IMAGES TO RESPECTIVE CARDS */}
          <img src={dummyImage} alt="" />
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
            <GreyRedirectBtn margin_top_bottom="my-10" margin_right="" text=""/>
          </div>
          <div className="border-t border-black">
            <p className="mt-4">ICT theater ・ 25 Januari 2023 ・ 10:05</p>
          </div>
        </div>
      </div>
    </div>
    </Tilt>
  );
};

export default GreyCard;
