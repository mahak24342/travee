import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { NAV_LINKS } from '../constants'
const Navbar = () => {
  return (
    <nav className=' flexBetween max-container padding-container relative z-30 py-5'>
<Link href="/">
    <div className='flex ml-8 gap-10 justify-between mr-4'>
    <div className='flex '>
    <h2 className='font-bold text-2xl text-green-400 '>
        TR

    </h2>
    <h2 className='font-bold text-2xl text-green-900'>AVEE</h2>
    </div>
    <div className='mr-10 pr-10 flex gap-10 '>
    <ul className='hidden h-full gap-12 lg:flex   '> 
{
    NAV_LINKS.map((link)=>(
        <Link href={link.href} key={link.key} className='regular-16 text-gray-500 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold'>{link.label}</Link>
    ))
}

    </ul>
    <button className='flex border w-55 h-15  lg:flexCentre  bg-green-500 p-3 mb-13 rounded-full mr-7'>Login</button>
    </div>
   
    </div>

</Link>

    </nav>
  )
}

export default Navbar