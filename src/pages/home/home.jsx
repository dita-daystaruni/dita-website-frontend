import React from "react";
import About from "../components/landing/about";
import Announcements from "../components/landing/announcements";
import EventsLayout from "../components/landing/events/eventsLayout";
import Patnership from "../components/landing/patnership";
import Services from "../components/landing/services";
import Team from "../components/landing/team";

const Home = () => {
  return (
    <main>
      <About />
      <EventsLayout/>
      <Services/>
      <Announcements/>
      <Team/>
      <Patnership/>
    </main>
  );
};

export default Home;
