import React from 'react'
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const EventsBtn = () => {
  return (
    <button className='flex gap-4 my-10'>
      <BsFillArrowRightCircleFill size={30} color="#075EDF" />
      <p className='mt-1'>Read more about this news</p>
    </button>
  );
}

export default EventsBtn