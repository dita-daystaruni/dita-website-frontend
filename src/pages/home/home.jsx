import React from "react";
import About from "../components/landing/about";
import Announcements from "../components/landing/announcements";
import EventsLayout from "../components/landing/events/eventsLayout";
import Services from "../components/landing/services";

const Home = () => {
  return (
    <main>
      <About />
      <EventsLayout/>
      <Services/>
      <Announcements/>
    </main>
  );
};

export default Home;
