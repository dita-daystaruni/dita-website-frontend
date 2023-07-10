import React from 'react'
import Navbar from '../navbar'
import Sidebar from '../sidebar'
import Chatbot from '../chatbot'

const Header = () => {
  return (
    <main className="flex flex-col h-[100vh] w-full 
                     bg-gradient-to-tr p-4 from-slate-300 to-blue-500
                     dark:bg-gradient-to-tr dark:from-slate-900 dark:to-blue-500">
    <Navbar/>
    <Sidebar/>
    <div className="h-3/5 p-5 max-md:p-6 mx-auto my-auto w-full flex flex-col justify-between">
        <h1 className='text-7xl font-bold font-sans ml-20 my-auto dark:text-white max-sm:text-5xl max-sm:mx-auto'>DITA WEBSITE</h1>
    </div>
    <h1 className="dark:text-white max-sm:text-sm text-center">Copyright 2023</h1>
    <Chatbot/>
    </main>
  )
}

export default Header