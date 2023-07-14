import React from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { Switch } from "@headlessui/react";
import useDarkMode from "../../../hooks/useDarkMode";

const ThemeToggler = () => {
  const [isDarkMode, toggleDarkMode] = useDarkMode();
  return (
    <div className="text-2xl w-full flex flex-row items-center">
      <Switch.Group>
        <Switch
          checked={isDarkMode}
          onChange={toggleDarkMode}
          className={`${
            isDarkMode ? "bg-slate-800" : "bg-slate-800"
          } relative inline-flex h-6 w-12 items-center rounded-full drop-shadow-md transition-all ease-in-out duration-300`}
        >
          <MoonIcon className="w-4 h-4 text-slate-300 translate-x-1" />
          <SunIcon className="w-4 h-4 text-yellow-400 translate-x-2" />
          <span
            className={`${
              isDarkMode ? "translate-x-6 bg-white" : "translate-x-1 bg-white"
            } 
                        absolute drop-shadow-md w-4 h-4 rounded-full transition-all delay-200`}
          />
        </Switch>
      </Switch.Group>
    </div>
  );
};

export default ThemeToggler;
