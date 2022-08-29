import React from 'react';
import { FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';



const SocialMedia = () => {


  return (
    <div className='hidden lg:flex fixed flex-col top-[33%] left-2'>
      <ul>
        <li className='w-[140px] h-[60px] flex justify-between items-center duration-300'>
          <a className='flex justify-between items-center w-full text-[#0c0f0a]'
            href='https://www.linkedin.com/in/randolphroy/'
            target="_blank"
            rel="noreferrer">
            <FaLinkedinIn size={25} />
          </a>
        </li>
        <li className='w-[140px] h-[60px] flex justify-between items-center duration-300'>
          <a className='flex justify-between items-center w-full text-[#0c0f0a]'
            href='https://github.com/randolphroy'
            target="_blank"
            rel="noreferrer">
            <FaGithub size={25} />
          </a>
        </li>
        <li className='w-[140px] h-[60px] flex justify-between items-centerduration-300'>
          <a className='flex justify-between items-center w-full text-[#0c0f0a]'
            href='https://www.instagram.com/randolphroy_/'
            target="_blank"
            rel="noreferrer">
            <FaInstagram size={25} />
          </a>
        </li>
        <li className='w-[140px] h-[60px] flex justify-between items-centerduration-300'>
          <a className='flex justify-between items-center w-full text-[#0c0f0a]'
            href='mailto:randolphroy@me.com'
            target="_blank"
            rel="noreferrer">
            <HiMail size={25} />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default SocialMedia