import React from "react";
import DarkCard from "../common/DarkCard";
import chilltonsProject from '../../../assets/projects/chilltonsProject.png';
import examTimeTableProject from '../../../assets/projects/examTimeTableProject.png';
import swapSokoProject from '../../../assets/projects/swapSokoProject.png';

const Projects = () => {

  return (
    <section
      className="bg-black text-white pb-10 px-20 max-sm:px-5"
      id="projects"
    >
      <div className="flex justify-between pt-10 max-sm:flex-col">
        <h3 className="font-bold text-2xl mb-10">OUR PROJECTS</h3>
      </div>
      <div className="flex justify-center md:px-5 ">
        <div className="grid grid-cols-3 gap-10 items-center mt-4 max-sm:grid-cols-1">
          <DarkCard
            title="Chilltons restaurant website"
            description="Chilltons restaurant website. Built with React, Tailwind CSS, and Nodejs."
            image={chilltonsProject}
            date="September 2021"
            location="https://dita-website.vercel.app/"
            time="live"
            link="https://daystar-shop.web.app/"
            github="https://github.com/gitkrakenite/chilltons-food-web-app"
          />
          <DarkCard
            title="Daystar exam time table app"
            description="Daystar exam time table app. Built with React, Tailwind CSS and Nodejs."
            image={examTimeTableProject}
            date="September 2021"
            location="https://exam.dita.co.ke/"
            time="live"
            link="https://exam.dita.co.ke/"
            github="https://github.com/dita-daystaruni"
          />
          <DarkCard
            title="Swap Soko"
            description="E-commerce website. Built with React, Tailwind CSS and Nodejs."
            image={swapSokoProject}
            date="September 2021"
            location="https://dita-website.vercel.app/"
            time="live"
            link="https://swap-soko.web.app/"
            github={false}
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
