import React from 'react'
import Chatbot from '../../common/chatbot'
import hero from "../../../../assets/hero2.jpg";

const Hero = () => {
  return (
    <main
      className="flex flex-col h-[90vh] w-full bg-gradient-to-tr dark:from-slate-900 dark:to-blue-500 max-lg:h-[60vh] max-sm:h-[50vh]"
      style={{
        backgroundImage: `url(${hero})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "#000000",
      }}
    >
      <div className="dark:text-white ml-20 p-5 max-md:p-6 max-md:ml-5 mx-auto my-auto w-full flex flex-col justify-between">
        <h3 className="font-bold">Unlocking Potential Through Technology.</h3>
        <h1 className="text-7xl font-bold font-sans max-sm:text-4xl max-sm:ml-0">
          Elevate. Innovate.
        </h1>
      </div>
      <Chatbot />
    </main>
  );
}

export default Hero