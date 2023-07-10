import React from "react";

export default function Sidebar() {
  return (
    <div
      className="bg-slate-400 dark:bg-slate-900 w-12 h-screen fixed top-0 left-0 z-10                      bg-opacity-50 backdrop-blur-sm backdrop-brightness-125 dark:bg-opacity-50 dark:backdrop-brightness-125
                      transition-all duration-150
                      max-sm:w-full max-sm:h-12"
    >
      <Contents />
    </div>
  );
}

export const Contents = () => {
  return (
    <div className="flex flex-col justify-evenly items-center h-full">
      <div
        className="h-full flex flex-col max-sm:flex-row max-sm:w-full 
                        justify-around items-center"
      >
        <h1
          className="text-xs -rotate-90 font-bold hover:underline hover:underline-offset-4
                         text-black dark:text-white max-sm:rotate-0"
        >
          WELCOME
        </h1>
        <h1
          className="text-xs -rotate-90 font-bold hover:underline hover:underline-offset-4
                         text-black dark:text-white max-sm:rotate-0"
        >
          ABOUT US
        </h1>
        <h1
          className="text-xs -rotate-90 font-bold hover:underline hover:underline-offset-4
                         text-black dark:text-white max-sm:rotate-0"
        >
          EVENTS
        </h1>
        <h1
          className="text-xs -rotate-90 font-bold hover:underline hover:underline-offset-4
                         text-black dark:text-white max-sm:rotate-0"
        >
          SERVICES
        </h1>
        <h1
          className="text-xs -rotate-90 font-bold hover:underline hover:underline-offset-4
                         text-black dark:text-white max-sm:rotate-0"
        >
          ANNOUNCEMENTS
        </h1>
        <h1
          className="text-xs -rotate-90 font-bold hover:underline hover:underline-offset-4
                         text-black dark:text-white max-sm:rotate-0"
        >
          PEOPLE AND PARTNERS
        </h1>
      </div>
    </div>
  );
};
