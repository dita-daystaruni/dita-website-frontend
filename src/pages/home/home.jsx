import React from "react";
import Navbar from "../components/navBar";
import Hero from "../components/landing/hero";
import About from "../components/landing/about";
import Announcements from "../components/landing/announcements";
import EventsLayout from "../components/landing/events/eventsLayout";
import Patnership from "../components/landing/patnership";
import Services from "../components/landing/services";
import Team from "../components/landing/team";
import Footer from "../components/landing/footer";

const Home = () => {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <About />
      <EventsLayout/>
      <Services/>
      <Announcements/>
      <Team/>
      <Patnership/>
      <Footer/>
    </main>
  );
};

export default Home;
