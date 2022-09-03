import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import laCanchaLogo from '../assets/portfolio/la-cancha-logo.jpg'
import TravelMule from '../assets/portfolio/travelmule-white-big.jpg'
import ExciteBike from '../assets/portfolio/excitebike.jpg';



const ProjectDetailsPage = () => {
    const projects = [
        {
          id: 1,
          src: ExciteBike,
        },
        {
          id: 2,
          src: laCanchaLogo,
        },
        {
          id: 3,
          src: TravelMule,
        }
      ]

    const [foundProject, setFoundProject] = useState(null);

    const { projectId } = useParams();
    console.log('projectID -->', projectId);

    useEffect(() => {
        const project = projects.find((projectObj) => {
            return projectObj.id === projectId;
        })
        if (project) {
            setFoundProject(projects);
        }
    }, [projectId]);


    return (
        <div className = 'w-full md:h-screen bg-[#f4f7f5] text-[#0c0f0a]'>
            



           {/*  <div>ProjectDetailsPage</div>
            {!foundProject && <h3>Project not found!</h3>}

            {foundProject && (
            <>
                <div key={foundProject.id} className='bg-[#ffffff] p-2 rounded-md drop-shadow-md'>
                    <img className='rounded-md drop-shadow-md' alt='' />
                    <p>{foundProject.description}</p>
                    <div className='flex items-center justify-center'>
                        <button className='w-1/2 px-6 py-3 m-4 '>Demo</button>
                        <button className='w-1/2 px-6 py-3 m-4 '>Code</button>
                    </div>
                </div>

            </>
    )} */}
        </div>
    )
}

export default ProjectDetailsPage