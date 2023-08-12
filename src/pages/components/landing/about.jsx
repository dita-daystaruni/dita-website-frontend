import React, { useEffect } from "react";
import { motion, useAnimate,useInView } from "framer-motion";

import athi_main from '../../../assets/athi_main.png';
import athiCampus from '../../../assets/athiCampus.png';

const About = () => {
 const [scope, animate] = useAnimate();
 const isInView = useInView(scope);
  useEffect(() => {
    if (isInView) {
      animate(scope.current, { opacity: 1 });
    }
  }, [isInView,animate,scope]);

  return (
    <main className="max-w-full bg-gray-200 ease-in" id="about">
      <section className="md:flex md:justify-between max-lg:flex-col">
        <div className="md:py-10 md:px-10 max-w-lg ml-24 p-10 mr-24 max-sm:py-5 max-sm:px-0 max-sm:mx-5">
          <h3 className="font-bold text-2xl mb-5">What is DITA</h3>
          <motion.p
            className="text-lg"
            ref={scope}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            DITA is first of all a <b>community</b>. We learn <b>together </b>
            and <b>grow </b>
            together. We <b>
              strive for excellence as upcoming professionals.
            </b>{" "}
            We are quick to embrace new members and introduce them into our
            culture. We are a <b>tech hub.</b> Technology is our surname. In
            DITA, you matter.
          </motion.p>
        </div>
        <div>
          {/* Picture representing about us picture 1 */}
          <img
            className="md:max-w-lg md:p-10 mr-24 max-sm:p-0 max-sm:ml-0"
            alt="campus view"
            src={athi_main}
          />
        </div>
      </section>
      <section className="md:flex md:justify-between max-lg:flex-col">
        {/* Picture representing about us picture 1 */}
        <img
          className="sm:max-w-lg md:p-10 md:ml-24 max-sm:p-0 max-sm:ml:0 max-sm:mt-10"
          alt="lecture theater"
          src={athiCampus}
        />
        <div className="md:py-10 md:px-10 md:max-w-lg md:ml-24 md:mt-10 md:p-10 md:mr-24 max-sm:px-5 py-8">
          <h3 className="font-bold text-2xl mb-5">SEE OUR PROJECTS</h3>
          <motion.p
            className="text-lg"
            ref={scope}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            Take a look at some of the projects that we&apos;ve been
            responsiblefor since we began this communivty of technologists
            amongst us in Daystar Univeristy.
            <div className="text-left mt-10">
            {/* TODO: ADD REDIRECT TO PROJECTS SECTION */}
            </div>
          </motion.p>
        </div>
      </section>
    </main>
  );
};

export default About;
