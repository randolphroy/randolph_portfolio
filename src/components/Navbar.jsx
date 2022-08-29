import React from 'react'
import { FaBars, FaTimes} from 'react-icons/fa'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () => {

    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav)



return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 text-[#1d1f20] bg-[#f4f7f5]'>
        <div>
            <h1 className='text-xl ml-2 font-extrabold text-[#1d1f20]'>randolphroy<span className='text-[#ff206e] font-black'>.</span></h1>
        </div>
        <div>
            <ul className='hidden md:flex flex-row justify-between'>
                <NavLink to='/' className='px-4'>home</NavLink>
                <NavLink to='/about' className='px-4'>about</NavLink>
                <NavLink to='/projects' className='px-4'>projects</NavLink>

            </ul>
        </div>
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>

        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#f4f7f5] flex flex-col justify-center items-center'}>
            <NavLink to='/' className='py-6 text-xl'>home</NavLink>
            <NavLink to='/about' className='py-6 text-xl'>about</NavLink>
            <NavLink to='/projects' className='py-6 text-xl'>projects</NavLink>
        </ul>
        

    </div>
    )
}

export default Navbar