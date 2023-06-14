// eslint-disable-next-line no-unused-vars
import React from 'react'

const Home = () => {
  return (
    <main className="flex flex-col h-screen w-full bg-gradient-to-tr p-4 from-slate-300 to-blue-500">
    <div className="h-3/5 p-5 mx-auto my-auto w-full flex flex-col justify-between">
        <h1 className='text-7xl font-bold font-sans text-center'>Dita Website</h1>
        <h1 className='text-2xl font-bold font-sans text-center'>Coming Soon</h1>
        <h1 className='text-md font-sans text-center'>
            To edit this page, go to <code className='text-md text-center'>dita-website\src\pages\home\home.jsx</code> 
        </h1>
    </div>
    <h1 className='text-sm text-center mb-16'>Open from 
       <a href='https://github.com/dita-daystaruni/dita-website'
       className='text-green-600'> Github</a></h1>
    <h1>Copyright 2023</h1>
    </main>
  )
}

export default Home