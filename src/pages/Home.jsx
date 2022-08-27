import React from 'react'
import {FaArrowRight} from "react-icons/fa"
import SocialMedia from "../components/SocialMedia"
import RandolphResume from "../assets/portfolio/Randolph_Resume_8-16-designed.pdf"



const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-[#f4f7f5] text-[#0c0f0a]'>
      <SocialMedia />
      <div className='max-w-screen-lg mx-auto flex flex-col justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col items-center justify-center h-full'>
          <h2 className='text-4xl sm:text-4xl font-normal'>
            RANDOLPH ROY
          </h2>
          <p className='text-[#1d1f20] py-4 max-w-md'>
          Software Developer
          </p>
        <div>
            <button 
            className='inline-block px-6 py-2 my-3 border-2 border-[#0c0f0a] rounded text-sm items-center hover:bg-[#0c0f0a] hover:border-[#0c0f0a] hover:text-[#f4f7f5]'
            href='https://drive.google.com/file/d/1DSmpH3iGZP2uWCzok8jNen-BZWU3L20r/view?usp=sharing'
            target = "_blank"
            >
              Download Résumé
             
            </button>
          </div>
        </div>

      </div>
      
    </div>
  )
}

export default Home

