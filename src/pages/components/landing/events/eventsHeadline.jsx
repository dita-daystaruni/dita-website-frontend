import React from 'react'

import seatsVenue from '../../../../assets/Rectangle 9(1).png'
import EventsParagraph from './eventsParagraph'

const EventsHeadline = () => {
  return (
    <section className="flex justify-between max-lg:flex-col max-lg:self-center">
      {/* Div for first flex item */}
      <div className="py-10 px-10 max-w-xl ml-24 mt-10 p-10 mr-24 max-sm:py-2 max-sm:px-2 max-sm:mx-5">
        <h3 className="font-bold text-2xl mb-10">DITA EVENTS</h3>
        {/* Picture representing events venue */}
        <img src={seatsVenue} alt="events venue" />
      </div>
      {/* Div for second flex item */}
      <div className="max-w-md mt-12 p-5 mx-24 max-sm:p-0 max-md:mx-5">
        <h3 className="font-normal mb-6">
          Discover the Vibrant Community of DITA: Daytstar University's Resource
          Lab for Computer Science Enthusiasts
        </h3>
        <h4 className="font-light mb-4">Exciting Update | Must-Know</h4>
        <h3 className="font-semibold mb-4">
          Empowering DITA Members: why should you join dita?
        </h3>
        <EventsParagraph>
          DITA (Daytstar University's Resource Lab) is a bustling haven for
          computer science enthusiasts at Daytstar University. It serves as a
          meeting ground for brilliant minds who gather to work, collaborate,
          and exchange ideas, pushing the boundaries of innovation and progress.
        </EventsParagraph>
        <EventsParagraph>
          Within the walls of DITA, a sense of intellectual camaraderie thrives
          as members engage in stimulating conversations and share their
          expertise. The lab fosters a culture of continuous learning and
          provides a platform for students to sharpen their skills and explore
          new frontiers in computer science.
        </EventsParagraph>
        <EventsParagraph>
          DITA is a hub of activity, hosting various events such as coding
          competitions, workshops, and seminars. Here, individuals with a shared
          passion for technology come together to inspire and challenge each
          other, propelling their knowledge and capabilities to new heights.
        </EventsParagraph>
      </div>
    </section>
  );
}

export default EventsHeadline