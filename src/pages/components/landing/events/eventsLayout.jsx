import React from "react";

import EventsHeadline from "./eventsHeadline";
import DarkCard from "../../common/DarkCard";

const EventsLayout = () => {
  return (
    <main className="bg-black text-white pb-10">
      <EventsHeadline />
      <div className="flex justify-center ">
        <div className="grid grid-cols-3 gap-10 items-center mt-4">
          <DarkCard
            heading="Prodi Informatika Raih Akredit.."
            content="UKM AMIK menjadi Perwakilan.. "
          />
          <DarkCard
            heading="Diseminasi Teknologi CSRG"
            content="CSRG menjadi pemateri seminar wawasan teknologi ke beberapa pelosok negeri guna mendukung wawasan teknologi merata. "
          />
          <DarkCard
            heading="UKM AMIK menjadi Perwakilan.. "
            content="CSRG menjadi satu-satunya perwakilan dari Indonesia di event Engineering Con- ferences, USA."
          />
        </div>
      </div>
    </main>
  );
};

export default EventsLayout;
