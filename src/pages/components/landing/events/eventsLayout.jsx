import React from 'react'

import EventsHeadline from './eventsHeadline'
import EventCards from './eventCards';

const EventsLayout = () => {
  return (
    <main className="bg-black text-white">
      <EventsHeadline />
      <div className="grid grid-cols-3 max-width items-center mt-4">
        <EventCards
          heading="Prodi Informatika Raih Akredit.."
          content="UKM AMIK menjadi Perwakilan.. "
        />
        <EventCards
          heading="Diseminasi Teknologi CSRG"
          content="CSRG menjadi pemateri seminar wawasan teknologi ke beberapa pelosok negeri guna mendukung wawasan teknologi merata. "
        />
        <EventCards
          heading="UKM AMIK menjadi Perwakilan.. "
          content="CSRG menjadi satu-satunya perwakilan dari Indonesia di event Engineering Con- ferences, USA."
        />
      </div>
    </main>
  );
}

export default EventsLayout