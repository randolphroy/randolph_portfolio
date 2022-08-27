import React from 'react';
import { FaGithub, FaLinkedinIn, FaFileDownload, FaInstagram } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';


const SocialMedia = () => {


  return (
    <div className='hidden lg:flex fixed flex-col top-[35%] left-2'>
      <ul>
        <li className='w-[140px] h-[60px] flex justify-between items-center duration-300'>
          <a className='flex justify-between items-center w-full text-[#0c0f0a]'
            href='https://www.linkedin.com/in/randolphroy/'
            target="_blank">
            <FaLinkedinIn size={20} />
          </a>
        </li>
        <li className='w-[140px] h-[60px] flex justify-between items-center duration-300'>
          <a className='flex justify-between items-center w-full text-[#0c0f0a]'
            href='https://github.com/randolphroy'
            target="_blank">
            <FaGithub size={20} />
          </a>
        </li>
        <li className='w-[140px] h-[60px] flex justify-between items-centerduration-300'>
          <a className='flex justify-between items-center w-full text-[#0c0f0a]'
            href='https://www.instagram.com/randolphroy_/'
            target="_blank">
            <FaInstagram size={20} />
          </a>
        </li>

      </ul>
    </div>
  )
}

export default SocialMedia