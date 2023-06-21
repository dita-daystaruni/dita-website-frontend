import React from "react";

import about1 from "../../../assets/unsplash_gQtUcKahZoQ.png";
import about2 from "../../../assets/unsplash_dsvJgiBJTOs.png";


const About = () => {
  return (
    <main className="max-w-full bg-gray-200">
      <section className="flex flex-row justify-between">
        <div className="py-10 px-10 max-w-lg ml-24 mt-10">
          <h3 className="font-bold text-2xl mb-5">What is DITA</h3>
          <p>
            Kampus STMIK “AMIKBANDUNG” sebagai perguruan tinggi yang menjadi
            sumber keahlian teknologi informasi dan komunikasi dalam menyediakan
            tenaga-tenaga di dunia industri kreatif (para digital talent).
          </p>
        </div>
        <div>
          {/* Picture representing about us picture 1 */}
          <img
            className="max-w-lg p-10 mr-24"
            alt="campus view"
            src={about1}
          />
        </div>
      </section>
      <section className="flex flex-row justify-between">
        {/* Picture representing about us picture 1 */}
        <img
          className="max-w-lg p-10 ml-24"
          alt="lecture theater"
          src={about2}
        />
        <div className="py-10 px-10 max-w-lg ml-24 mt-10 p-10 mr-24">
          <h3 className="font-bold text-2xl mb-5 text-right">
            SEE OUR PROJECTS
          </h3>
          <p className="text-right">
            Take a look at some of the prrojects that we&apos;ve been
            responsiblefor since we began this communivty of technologists
            amongst us in Daystar Univeristy.
          </p>
        </div>
      </section>
    </main>
  );
};

export default About;
