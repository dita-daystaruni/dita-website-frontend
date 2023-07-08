import { ChatBubbleBottomCenterIcon } from '@heroicons/react/24/outline'
import React from 'react'

export default function Chatbot() {
  return (
    <div className='fixed bottom-5 right-5'>
        <button className='rounded-full p-5 bg-slate-200 dark:bg-slate-900'>
            <ChatBubbleBottomCenterIcon className='w-5 h-5 text-black dark:text-white'/>
        </button>
    </div>
  )
}


