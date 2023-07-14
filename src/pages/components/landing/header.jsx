import React from 'react'
import Navbar from '../common/navbar'
import Sidebar from '../common/sidebar'
import Chatbot from '../common/chatbot'
import bgImage from "../../../../public/unsplash_dsvJgiBJTOs.png";

const Header = () => {
  return (
    <main className="flex flex-col h-[90vh] w-full bg-gradient-to-tr dark:from-slate-900 dark:to-blue-500 max-lg:h-[60vh] max-sm:h-[50vh]"
    style={{
      backgroundImage: `url(${bgImage})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    }}
    >
      <Navbar />
      <Sidebar />
      <div className="dark:text-white ml-20 p-5 max-md:p-6 max-md:ml-5 mx-auto my-auto w-full flex flex-col justify-between">
        <h3 className="font-bold">Since 12 Februari 1983</h3>
        <h1 className="text-7xl font-bold font-sans max-sm:text-4xl max-sm:ml-0">
          DITA WEBSITE
        </h1>
      </div>
      <Chatbot />
    </main>
  );
}

export default Header