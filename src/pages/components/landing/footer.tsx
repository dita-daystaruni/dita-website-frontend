import React from "react";

import {
  aboutCampus,
  contactUs,
  relatedLinks,
  socialMediaLinks,
} from "../../../utils/footerLinks";

const Footer = () => {
  return (
    <main>
      <div className=" text-white flex justify-center mt-10">
        <section
          className="bg-custom-navy-blue flex p-10 overflow-hidden"
          style={{ gap: "4em", marginBottom: "-4em" }}
        >
          <div>
            <h1 className="font-semibold text-2xl mb-5">BE PART OF US</h1>
            <button
              className="border-2 p-5 font-semibold"
              style={{ borderWidth: "5px" }}
            >
              DAFTAR SEKARANG
            </button>
          </div>
          <p className="m-10">
            Ayo bergabung dengan STMIK “AMIKBANDUNG” dan bangun masa depanmu
            dengan program studi terbaik
          </p>
        </section>
      </div>
      <div className="bg-black text-white">
        <footer className="pt-10">
          <section className="md:flex w-full content-center justify-between px-20 py-10">
            <h1 className="font-bold text-xl">BRAND</h1>
            <div className="flex flex-col gap-4">
              <h1 className="font-semibold text-lg">About Campus</h1>
              {aboutCampus.map((about) => {
                return (
                  <div key={about.id} className="mb-2">
                    <a className="hover:underline" href={about.link}>
                      {about.name}
                    </a>
                  </div>
                );
              })}
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="font-semibold text-lg">Related Links</h1>
              {relatedLinks.map((related) => {
                return (
                  <div key={related.id}>
                    <a href={related.link}>{related.name}</a>
                  </div>
                );
              })}
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="font-semibold text-lg">Contact Us</h1>
              {contactUs.map((contact) => {
                return (
                  <div key={contact.id}>
                    <a className="flex content-center" href={contact.link}>
                      {contact.icon}
                      {contact.name}
                    </a>
                  </div>
                );
              })}
            </div>
          </section>
        </footer>
        <hr
          className="flex justify-center h-px my-8 w-5 bg-gray-200 border-0"
          style={{ width: "75vw", marginLeft: "auto", marginRight: "auto" }}
        />
        <div className="md:flex w-3/6 content-center justify-center">
          <section className="flex gap-10 my-10 justify-center content-center">
            {socialMediaLinks.map((social) => {
              return (
                <div key={social.id}>
                  <a className="mx-4" href={social.link}>
                    {social.icon}
                  </a>
                </div>
              );
            })}
          </section>
        </div>
        <p
          className="font-thin text-sm text-center my-2"
          style={{
            fontSize: ".9em",
            paddingBottom: "2em",
          }}
        >
          2023 | STMIK “AMIKBANDUNG”. All Right Reserved
        </p>
      </div>
    </main>
  );
};

export default Footer;
