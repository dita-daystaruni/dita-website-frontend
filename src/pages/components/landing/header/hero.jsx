import React from "react";
import hero from "../../../../assets/hero3.jpg";

const Hero = () => {
  return (
    <div className="w-full h-[70vh] sm:h-[90vh] relative" id="home">
      <img
        src={hero}
        alt="Background Placeholder"
        className="w-full h-[70vh] sm:h-[90vh] object-cover"
      />
      {/* overlay div */}
      <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,.6)]" />
      <div className="absolute w-full h-full top-0 flex flex-col justify-center items-start px-[14px] sm:px-[1em] md:px-[3em] lg:px-[5em] text-white">
        <h3 className="text-white font-bold">
          Unlocking Potential Through Technology.
        </h3>
        <h1 className="text-7xl font-bold font-sans max-sm:text-4xl max-sm:ml-0">
          Elevate. Innovate.
        </h1>
      </div>
      {/* TODO: ADD CHATBOT */}
    </div>
  );
};

export default Hero;
