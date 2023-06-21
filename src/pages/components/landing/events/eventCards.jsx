import React from 'react'
import EventsBtn from './eventsBtn';

const EventCards = ({heading,content}) => {
  return (
    <div className="max-w-sm bg-custom-navy-blue border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700">
      <div>
        {/* TODO: ADD IMAGES TO RESPECTIVE CARDS */}
        <img src="/docs/images/blog/image-1.jpg" alt="" />
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
        <EventsBtn />
        <p className="border-t-0">ICT theater ・ 25 Januari 2023 ・ 10:05</p>
      </div>
    </div>
  );
}

export default EventCards