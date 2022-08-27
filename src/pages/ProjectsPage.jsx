import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import laCanchaLogo from '../assets/portfolio/la-cancha-logo.jpg'
import TravelMule from '../assets/portfolio/travelmule-white-big.jpg'
import ExciteBike from '../assets/portfolio/excitebike.jpg'

const ProjectsPage = () => {

  return (
    <div className='w-full md:h-screen bg-[#f4f7f5] text-[#0c0f0a]'>

      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
        </div>

        {/* Containing DIV */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 mt-14 px-12 sm:px-8 justify-center'>
          <div className=''>
            <img className='rounded-md' src={ExciteBike} alt='' />
            <div className='flex items-center justify-center'>
              <button className='w-1/2 px-6 py-3 m-4 '>Demo</button>
              <button className='w-1/2 px-6 py-3 m-4 '>Code</button>
            </div>
          </div>
          <div>
            <img className='rounded-md' src={laCanchaLogo} alt='' />
            <div className='flex items-center justify-center'>
              <button className='w-1/2 px-6 py-3 m-4 '>Demo</button>
              <button className='w-1/2 px-6 py-3 m-4 '>Code</button>
            </div>
          </div>
          <div>
            <img className='rounded-md' src={TravelMule} alt='' />
            <div className='flex items-center justify-center'>
              <button className='w-1/2 px-6 py-3 m-4 '>Demo</button>
              <button className='w-1/2 px-6 py-3 m-4 '>Code</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default ProjectsPage