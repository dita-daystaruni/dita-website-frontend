import React, { useEffect, useState } from "react";
import axios from "axios";
import EventsHeadline from "./eventsHeadline";
import DarkCard from "../../common/DarkCard";


const EventsLayout = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(
          "https://dita-website.vercel.app/api/v1/events/all"
        );
        setEvents(response.data.event); // Access nested 'event' property
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <main className="bg-black text-white pb-10">
      <EventsHeadline />
      <div className="flex justify-center md:px-5 ">
        <div className="grid grid-cols-3 gap-10 items-center mt-4 max-sm:grid-cols-1">
          {events.map((event) => (
            <section key={event._id}>
              <DarkCard
                title={event.title}
                description={event.description}
                image={event.image}
                date={event.date}
                location={event.location}
                time={event.time}
              />
            </section>
          ))}
        </div>
      </div>
    </main>
  );
};

export default EventsLayout;
