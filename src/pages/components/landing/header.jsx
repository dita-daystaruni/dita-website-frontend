import React from 'react'
import Navbar from '../common/navbar'
import Sidebar from '../common/sidebar'
import Chatbot from '../common/chatbot'

const Header = () => {
  return (
    <main className="flex flex-col h-[100vh] w-full 
                     bg-cover header-photo
                     dark:bg-gradient-to-tr dark:from-slate-900 dark:to-blue-500">
    <Navbar/>
    <Sidebar/>
    <div className="h-3/5 p-5 max-md:p-6 mx-auto my-auto w-full flex flex-col justify-between">
        <h1 className='text-7xl font-bold font-sans ml-20 my-auto dark:text-white max-sm:text-5xl max-sm:text-center max-sm:ml-0'>DITA WEBSITE</h1>
    </div>
    <Chatbot/>
    </main>
  )
}

export default Header