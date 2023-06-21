import React from "react";
import GreyRedirectBtn from "../common/greyRedirectBtn";
import GreyCard from '../common/greyCard';

const Services = () => {
  return (
    <section>
      <div className="px-20 mt-12">
        <div className="flex justify-between">
          <h3 className="font-bold text-2xl mb-10">SERVICES WE OFFER</h3>
          <GreyRedirectBtn margin_top_bottom="" margin_right={"mr-20"} />
        </div>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-3 gap-10 items-center mt-4">
          <GreyCard
            heading="Webinar Pentingnya Keamana..."
            content="Membangun rasa kepedulian akan ke- amanan data pribadi. "
          />
          <GreyCard
            heading="Seminar Share it CSRG"
            content="Share it CSRG merupakan seminar rutin yang digelar sebulan sekali. pembahasan seminar kali ini akan sangat menarik, karena membahas cryptography."
          />
          <GreyCard
            heading="Sertijab UKM CSRG 2023/2024 "
            content=" Serah terima jabatan UKM CSRG kepengu- rusan 2023/2024 di glear di aula kampus."
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
