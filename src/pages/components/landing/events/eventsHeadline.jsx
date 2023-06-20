import React from 'react'

import seatsVenue from '../../../../assets/Rectangle 9(1).png'
import EventsParagraph from './eventsParagraph'
import EventsBtn from './eventsBtn';

const EventsHeadline = () => {
  return (
    <section className="flex flex-row justify-between">
      {/* Div for first flex item */}
      <div className="py-10 px-10 max-w-xl ml-24 mt-10 p-10 mr-24">
        <h3 className="font-bold text-2xl mb-10">DITA EVENTS</h3>
        {/* Picture representing events venue */}
        <img src={seatsVenue} alt="events venue" />
      </div>
      {/* Div for second flex item */}
      <div className="max-w-md mt-12 p-5 mx-24">
        <h3 className="font-normal mb-6">
          Campus News berisikan berita-berita terupdate seputar STMIK
          “AMIKBANDUNG”
        </h3>
        <h4 className="font-light mb-4">Hot News | Trending#1</h4>
        <h3 className="font-semibold mb-4">
          8 Semester tak Kunjung Menerima Uang Saku Gerakan Mahasiswa Anti Asmui
          Laporkan Kasus Ke Pengadilan.
        </h3>
        <EventsParagraph>
          Lorem ipsum dolor sit amet consectetur. Ullamcorper euis- mod
          phasellus mattis sociis sagittis aenean turpis purus lectus. In
          quisque tincidunt magna posuere ut donec.
        </EventsParagraph>
        <EventsParagraph>
          Laoreet sed tellus molestie sed erat dignissim. Vitae nunc maecenas
          nulla mi venenatis facilisi maecenas id. Eget suspendisse morbi
          dignissim ultrices ut facilisi aenean parturient. Tincidunt elit a
          posuere cursus. Et egestas mag.
        </EventsParagraph>
        <EventsParagraph>
          id egestas duis at egestas etiam sed. Neque id viverra....
        </EventsParagraph>
          <EventsBtn/>
      </div>
    </section>
  );
}

export default EventsHeadline