import { MegaphoneIcon } from '@heroicons/react/24/solid';
import { BsPeople, BsPersonGear } from 'react-icons/bs';
import React from 'react'
import { FaHome, FaInfoCircle } from 'react-icons/fa';
import { CalendarIcon } from '@heroicons/react/24/outline';

export default function Sidebar() {
  return (
    <div className='bg-slate-400 dark:bg-slate-900 w-12 h-screen fixed top-0 left-0 z-10                      bg-opacity-50 backdrop-blur-sm backdrop-brightness-125 dark:bg-opacity-50 dark:backdrop-brightness-125
                      transition-all duration-150 
                      max-sm:w-full max-sm:h-12 max-sm:-top-10 max-sm:hover:top-0'>
      <Contents/>
    </div>
  )
}

export const Contents = () => {
    const icons = [FaHome, FaInfoCircle, CalendarIcon, BsPersonGear, MegaphoneIcon, BsPeople];
    return (
        <div className='flex flex-col justify-evenly items-center h-full'>
        <div className='h-full flex flex-col max-sm:flex-row max-sm:w-full 
                        justify-around items-center'>
            {icons.map((Icon, index) => (
                <Icon key={index} className='text-black dark:text-white w-5 h-5'/>
            ))}
        </div>
      </div>
    )
}
