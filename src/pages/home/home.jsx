import React from "react";
import Navbar from "../components/navBar";
import Hero from "../components/landing/header/hero";
import About from "../components/landing/about";
import Projects from "../components/landing/Projects";
import EventsLayout from "../components/landing/events/eventsLayout";
import Patnership from "../components/landing/patnership";
import Services from "../components/landing/services";
import Team from "../components/landing/team";
import Footer from "../components/landing/footer";

const Home = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <EventsLayout />
      <Services />
      <Projects />
      <Team />
      <Patnership />
      <Footer />
    </main>
  );
};

export default Home;
