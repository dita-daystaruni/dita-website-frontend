import React from 'react'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <main className='w-screen h-screen p-5 bg-slate-200 dark:bg-slate-950'>
      <div className='w-full h-full flex flex-col justify-evenly'>
        <h1 className='text-8xl max-sm:text-6xl font-bold mx-auto dark:text-white'>404</h1>
        <h1 className='mx-auto text-4xl max-sm:text-2xl dark:text-white'>Page Not Found</h1>
        <button className='mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
            <Link to='/'>Go Home...</Link>
        </button>
      </div>
    </main>
  )
}

export default Error