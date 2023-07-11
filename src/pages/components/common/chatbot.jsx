import { ChatBubbleBottomCenterIcon } from '@heroicons/react/24/outline'
import React, { useState } from 'react';
import profile from '../../../assets/unsplash_dsvJgiBJTOs.png';
import { BsSendFill } from 'react-icons/bs';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  }
  
  return (
    <div className='fixed bottom-5 max-sm:bottom-12 right-5 max-sm:right-10'>
        <button className='rounded-full p-5 bg-slate-200 dark:bg-slate-900'
           onClick={handleButtonClick}>
            <ChatBubbleBottomCenterIcon className='w-5 h-5 text-black dark:text-white'/>
        </button>
        {isOpen && 
          (
            <ChatMsgDialog/>
          )}
    </div>
  )
}

export const ChatMsgDialog = () => {
  return (
    <div className='fixed bottom-20 max-sm:bottom-28 rounded-md drop-shadow-md
                    right-5 w-80 h-3/4 max-sm:h-2/3 p-6 bg-slate-200 dark:bg-slate-900'>
      <div className='relative flex flex-col h-full'>
      <section className='flex flex-col justify-between items-center'>
        <div className="relative">
            <img alt='profile' src={profile} 
             className='relative w-16 h-16 rounded-full'/>
             <span className='absolute bottom-0 left-0 w-4 h-4 rounded-full border-2 border-slate-200 dark:border-slate-900 bg-green-500'/>
        </div>
        <h1 className='font-semibold dark:text-white'>DITA Chatbot</h1>
        <h3 className='text-sm text-green-500'>online</h3>
      </section>
      <hr className='border-slate-800 mt-5 dark:border-slate-300'/>
        <TypeMsg/>
      </div>
      
    </div>
  )
}

export const TypeMsg = () => {
  // const [msg, setMsg] = useState('');
  // const [msgs, setMsgs] = useState([]);

  // const handleMsgChange = (e) => {
  //   setMsg(e.target.value);
  // }

  // const handleMsgSubmit = (e) => {
  //   e.preventDefault();
  //   setMsgs([...msgs, msg]);
  //   setMsg('');
  // }

  return (
    <div className='absolute bottom-1 flex flex-row w-full justify-between items-center'>
      <input className='rounded-full p-2 bg-white w-4/5 h-10'/>
      <button className='bg-gradient-to-bl rounded-full from-blue-800 to-blue-500 w-9 h-9'>
          <BsSendFill className="m-auto text-white dark:text-slate-800"/>
      </button>
    </div>
  )
}
    


