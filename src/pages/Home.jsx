import React from 'react';
import SocialMedia from "../components/SocialMedia";
import Typewriter from 'typewriter-effect';



const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-[#f4f7f5] text-[#0c0f0a]'>
      <SocialMedia />
      <div className='max-w-screen-lg mx-auto flex flex-col justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col items-center justify-center h-full'>
          <h2 className='text-4xl sm:text-4xl font-normal'>
            RANDOLPH ROY
          </h2>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
              .typeString(" Software Developer")
              .pauseFor(2000)
              .deleteAll()
              .typeString("Technical Project Manager")
              .pauseFor(2000)
              .deleteAll()
              .typeString("Creative Manager")
              .pauseFor(2000)
              .deleteAll()
              .start();
            }}
            options={{
              autoStart: true,
              loop: true,
            }}
             />
{ /*           <p className='text-[#1d1f20] py-4 max-w-md'>
          Software Developer
          </p> */}
        <div>
            <a
            href='https://drive.google.com/file/d/1DSmpH3iGZP2uWCzok8jNen-BZWU3L20r/view?usp=sharing'
            target = "_blank"
            rel="noreferrer"
            >
            <button 
            className='inline-block px-2 py-1 my-3 border-2 border-[#0c0f0a] rounded text-xs items-center hover:bg-[#0c0f0a] hover:border-[#0c0f0a] hover:text-[#f4f7f5]'            >
              View Résumé
             
            </button>
            </a>
          </div>
        </div>

      </div>
      
    </div>
  )
}

export default Home

