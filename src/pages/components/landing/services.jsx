import React from "react";
import GreyCard from "../common/greyCard";
import computerRepair from "../../../assets/hardware.jpg"
import software from "../../../assets/software.jpg"
import teaching from "../../../assets/teaching.jpg"

const Services = () => {
  return (
    <section className="pb-10">
      <div className="px-20 max-sm:px-5">
        <div className="flex justify-between pt-10 max-sm:flex-col">
          <h3 className="font-bold text-2xl mb-10">SERVICES WE OFFER</h3>
        </div>
      </div>
      <div className="flex justify-center md:px-5 ">
        <div className="grid grid-cols-3 gap-10 items-center mt-4 max-sm:grid-cols-1">
          <GreyCard
            heading="Computer and Laptop Repairs"
            content="Empowering devices, unleashing potential. Expert computer and laptop repairs for students and beyond. Trust us with your tech challenges. At dita your digital journey begins here"
            image={computerRepair}
          />
          <GreyCard
            heading="Software updates and installation"
            content="Stay current, stay secure. Seamless software updates and installation services for optimized performance. Unlock the latest features and protect your system."
            image={software}
          />
          <GreyCard
            heading="Teaching and Training for Students"
            content="Empowering students with the latest tech know-how. Learn software updates and installation from the experts. Stay ahead in the digital age with our student-focused teaching and training services"
            image={teaching}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
