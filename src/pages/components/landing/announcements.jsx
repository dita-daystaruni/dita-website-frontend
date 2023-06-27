import React from 'react'

import announcements from "../../../assets/announcement.png";
import GreyRedirectBtn from "../common/greyRedirectBtn";

const Announcements = () => {
  return (
    <section className="flex justify-between bg-black text-white max-sm:flex-col">
      {/* Div for first flex item */}
      <div className="py-10 ml-24 mt-10 mr-24 max-md:px-0 max-sm:mx-0 max-sm:py-5 max-sm:px-5">
        <h3 className="font-bold text-2xl mb-10">ANNOUNCEMENTS</h3>
        <h3 className="font-bold mb-3 text-lg">
          Beasiswa Full Bagi Mahasiswa Berminat *S & K Berlaku
        </h3>
        <p className="mb-2">22-Januari-2023</p>
        <p className="mb-2">
          STMIK “AMIKBANDUNG” memiliki program beasiswa full bagi mahasiswa
          kurang mampu yang berprestasi. mem- bantu dalam peningkatan harapan
          kerja melalui diseminasi ilmu pengetahuan, teknologi informasi dan
          komunikasi.
        </p>
        <p className="mb-10">
          di tahun 2023 kami menyediakan kuota sebanyak 56 orang. Dapatkan
          beasiswa dan perbesar angka peluang harapan kerja melalui diseminasi
          ilmu pengetahuan..
        </p>
        <GreyRedirectBtn margin_right={0} margin_top_bottom="5" />
      </div>
      {/* Div for second flex item */}
      <div className="py-10 max-w-xl mr-24 mt-10 ml-24 max-sm:mx-0 max-sm:px-5">
        {/* Picture representing events venue */}
        <img src={announcements} alt="events venue" />
        <p>
          Beasiswa di peruntukan bagi mahasiswa kurang mampu dengan syarat dan
          ketentuan tertentu. Lihat S&K berlaku
        </p>
      </div>
    </section>
  );
}

export default Announcements