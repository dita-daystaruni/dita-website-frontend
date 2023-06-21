import React from "react";
import About from "../components/landing/about";
import EventsLayout from "../components/landing/events/eventsLayout";
import Services from "../components/landing/services";

const Home = () => {
  return (
    <main>
      <About />
      <EventsLayout/>
      <Services/>
    </main>
  );
};

export default Home;
