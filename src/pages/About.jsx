import React from 'react'
import SocialMedia from '../components/SocialMedia'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#f4f7f5] text-[#0c0f0a]'>
        <SocialMedia />
        <div className='max-w-screen-md px-12 mx-auto flex flex-col justify-center items-center w-full h-full'>
            <div className='pb-8' >
                <p className='text-xl inline border-b-2 border-[#0c0f0a]'>
                    About
                </p>
            </div>
            <p className='text-sm mt-10 '>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit cumque asperiores obcaecati tempore libero repellat 
                atque impedit recusandae iusto eum dignissimos dicta illo sequi hic, totam aliquid voluptatibus eligendi. Dignissimos.
            </p>
            
            <br />
            <p className='text-sm'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id dolorem minus nobis iusto dolores repellat dolore! Magni 
                magnam perferendis culpa ratione modi enim assumenda officia, dolores sint, minus quae illo?
            </p>
        </div>

    </div>
  )
}

export default About