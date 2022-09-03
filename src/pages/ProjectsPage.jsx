import React from 'react';
import laCanchaLogo from '../assets/portfolio/la-cancha-logo.jpg'
import TravelMule from '../assets/portfolio/travelmule-blue-big.jpg'
import ExciteBike from '../assets/portfolio/excitebike.jpg';
import { Link } from 'react-router-dom';

const ProjectsPage = () => {



  return (
    <div className='md:h-screen bg-[#f4f7f5] text-[#0c0f0a]' >

      <div className='max-w-[1000px] mx-auto p-2 flex flex-col justify-center w-full h-full'>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 mt-14 p-12 sm:px-8 justify-center'>
          <div className='bg-white rounded-b-md'>
            <img className='rounded-t-md' src={ExciteBike} alt='' />
            <div>
            <p className='text-sm p-2 mt-2'>Built with HTML5, Bootstrap, Javascript, Canvas</p>
            </div>
            <div className='flex items-center justify-center'>
              <button className='w-1/2 px-6 py-3 m-4 '>Demo</button>
              <button className='w-1/2 px-6 py-3 m-4 '>Code</button>
            </div>
          </div>
          <div className='bg-white rounded-b-md'>
            <img className='rounded-t-md' src={laCanchaLogo} alt='' />
            <div>
            <p className='text-sm p-2 mt-2'>Built with MongoDB, Mongoose, Express.js, Bootstrap, Handlebars and Node.js</p>
            </div>
            <div className='flex items-center justify-center'>
                <a
                href='https://github.com/randolphroy/project2-ironhack'
                target = "_blank"
                rel="noreferrer"
                >
                <button className='px-2 py-2 m-4 border-2 border-[#0c0f0a] rounded text-sm items-center hover:bg-[#0c0f0a] hover:border-[#0c0f0a] hover:text-[#f4f7f5]'>Github Repo</button>
                </a>
            </div>
          </div>
          <div className='bg-white rounded-b-md'>
              <img className='rounded-t-md' src={TravelMule} alt='' />
            <div>
            <p className='text-sm p-2 mt-2'>Built with React.js, Tailwind CSS, Express.js, Node.js and MongoDB</p>
            </div>
            <div className='flex items-center justify-center'>
                <a
                href='https://github.com/randolphroy/project-travel-mule-client'
                target = "_blank"
                rel="noreferrer"
                >
                <button className='px-2 py-2 m-4 border-2 border-[#0c0f0a] rounded text-sm items-center hover:bg-[#0c0f0a] hover:border-[#0c0f0a] hover:text-[#f4f7f5]'>Github Repo</button>
                </a>
            </div>
          </div>
        </div>

      </div>
    </div>


  )
}


export default ProjectsPage