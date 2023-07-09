import React, { useEffect } from "react";
import { motion, useAnimate,useInView } from "framer-motion";

import about1 from "../../../assets/unsplash_gQtUcKahZoQ.png";
import about2 from "../../../assets/unsplash_dsvJgiBJTOs.png";

const About = () => {
 const [scope, animate] = useAnimate();
 const isInView = useInView(scope);
  useEffect(() => {
    if (isInView) {
      animate(scope.current, { opacity: 1 });
    }
  }, [isInView]);

  return (
    <main className="max-w-full bg-gray-200">
      <section className="md:flex md:justify-between max-lg:flex-col">
        <div className="md:py-10 md:px-10 max-w-lg ml-24 p-10 mr-24 max-sm:py-5 max-sm:px-0 max-sm:mx-5">
          <h3 className="font-bold text-2xl mb-5">What is DITA</h3>
          <motion.p
            ref={scope}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            Kampus STMIK “AMIKBANDUNG” sebagai perguruan tinggi yang menjadi
            sumber keahlian teknologi informasi dan komunikasi dalam menyediakan
            tenaga-tenaga di dunia industri kreatif (para digital talent).
          </motion.p>
        </div>
        <div>
          {/* Picture representing about us picture 1 */}
          <img
            className="md:max-w-lg md:p-10 mr-24 max-sm:p-0 max-sm:ml-0"
            alt="campus view"
            src={about1}
          />
        </div>
      </section>
      <section className="md:flex md:justify-between max-lg:flex-col">
        {/* Picture representing about us picture 1 */}
        <img
          className="sm:max-w-lg md:p-10 md:ml-24 max-sm:p-0 max-sm:ml:0 max-sm:mt-10"
          alt="lecture theater"
          src={about2}
        />
        <div className="md:py-10 md:px-10 md:max-w-lg md:ml-24 md:mt-10 md:p-10 md:mr-24 max-sm:px-5 py-8">
          <h3 className="font-bold text-2xl mb-5 text-right">
            SEE OUR PROJECTS
          </h3>
          <motion.p
            ref={scope}
            className="text-right"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            Take a look at some of the prrojects that we&apos;ve been
            responsiblefor since we began this communivty of technologists
            amongst us in Daystar Univeristy.
          </motion.p>
        </div>
      </section>
    </main>
  );
};

export default About;
