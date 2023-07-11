import React, { useState } from 'react'
import useDarkMode from '../../hooks/useDarkMode'
import { Switch } from "@headlessui/react"
import { Bars3Icon, MagnifyingGlassIcon, MoonIcon, SunIcon } from '@heroicons/react/24/solid'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const handleDropdown = () => {
    setIsOpen(!isOpen);
  }
  return (
    <nav className="fixed top-0 left-0 w-full h-16 flex flex-row  
                  bg-transparent p-3 my-auto">
        <div className='mx-auto w-full h-full max-sm:w-1/2 flex items-end flex-row justify-end space-x-5 max-md:justify-center'>
          <Search/>
          <button onClick={handleDropdown} className='py-3 px-4 rounded-md bg-slate-200 dark:bg-slate-900 flex flex-row items-center'>
            <Bars3Icon className='w-5 h-5 text-black dark:text-white'/>
          </button>
          {isOpen &&
            (
              <Dropdown/>
            )}
        </div>
    </nav>
  )
}

export const Toggle = () => {
  const  [isDarkMode, toggleDarkMode]  = useDarkMode();

  return (
    <div className='fixed bottom-0 left-0 rounded-b-md w-full h-17 p-3 flex flex-row items-center'>
    <Switch.Group>
      <Switch.Label className={'dark:text-white mx-5 font-bold text-sm'}>Dark Mode</Switch.Label>
      <Switch
        checked={isDarkMode}
        onChange={toggleDarkMode}
        className={`${isDarkMode ? 'bg-slate-800' : 'bg-slate-800'
          } relative inline-flex h-6 w-12 items-center rounded-full drop-shadow-md transition-all ease-in-out duration-300`}
      >
      <MoonIcon className='w-4 h-4 text-slate-300 translate-x-1'/>
      <SunIcon className='w-4 h-4 text-yellow-400 translate-x-2'/>  
      <span className={`${isDarkMode ? 'translate-x-6 bg-white' : 'translate-x-1 bg-white'} 
                        absolute drop-shadow-md w-4 h-4 rounded-full transition-all delay-200`}/>    
      </Switch>
    </Switch.Group>
    </div>
  );
};

export const Search = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="flex flex-row justify-center items-center">
      <input
        className='rounded-l-md py-3 px-4 w-24 text-black text-center dark:text-white leading-tight 
                  focus:outline-1 focus:w-40 bg-slate-200 dark:bg-slate-900 focus:bg-white dark:focus:text-black
                  dark:focus:bg-white max-md:focus:w-64
                  drop-shadow-md transition-all ease-in-out duration-200'
        id="search"
        placeholder="Search"
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className='bg-slate-200 dark:bg-slate-900 hover:bg-slate-700 drop-shadow-md dark:text-white font-bold py-3 px-4 rounded-r-md'>
       <MagnifyingGlassIcon className='w-5 h-5 text-black dark:text-white'/>
      </button>
    </div>
  );
};

export const Dropdown = () => {
  return (
    <div className='absolute p-5 top-16 right-3 max-sm:right-6 w-9/12 h-auto max-sm:w-11/12 max-sm:
                    bg-slate-200 dark:bg-slate-900 rounded-md drop-shadow-md'>
       <div className='relative'>
          <Toggle/>
       </div>
    </div>
  );
};

