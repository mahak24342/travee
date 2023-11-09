
import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className='max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap:28 lg:py-20   xl:flex-row '>

    <div className='relative z-20 flex flex-1 flex-col xl:w-1/2 '>
<Image src="camp.svg" alt=" " width={50} height={50} className=' absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]' />
 <h1 className=' bold-52 lg:bold-88 font-extrabold text-7xl mt-2  '>Lets Explore World</h1>

  <p className="regular-16 mt-6 text-gray-600 xl:max-w-[520px]">
          We want to be on each of your journeys seeking the satisfaction of seeing the incorruptible beauty of nature. We can help you on an adventure around the world in just one app
        </p>
<div className='my-11 flex flex-wrap gap-5'>
    <div className='flex items-center gap-2 sm:ml-5 mr-5'>
        {Array(5).fill(1).map((_,index)=>(
            <Image src="star.svg" key={index} alt=" " width={24} height={24}/>
        ))}
    </div>
    <p className='bold-16 lg:bold-20 sm:font-xs sm:m-5  text-blue-800 font-bold flex gap-2 '>198k
        <span className='regular-16 lg:regular-20 ml-1 font-regular'>Excellent Experiencesss</span>
    </p>
</div>
   <div className='flex flex-col w-full gap-3 sm:flex-row '>
  
  <button className='rounded-full p-3 ml-2 h-15 w-55  bg-green-500'>Book Now</button>
  <button className='rounded-full p-3 ml-2 h-15 border-2 border-green-500'>Travel Now</button>
    </div> 
</div>
<div className="relative flex flex-1 items-start">
        <div className="relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-green-900 px-7 py-8">

           <div className="flex flex-col">
            <div className="flexBetween flex justify-between">
              <p className="regular-16 text-gray-200">Location</p>
              <Image src="close.svg" alt="close" width={24} height={24} />
            </div>
            <p className="bold-20 text-white">Aguas Calientes</p>
          </div>

          <div className="flexBetween">
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-200">Distance</p>
              <p className="bold-20 text-white">173.28 mi</p>
            </div>
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-200">Elevation</p>
              <p className="bold-20 text-white">2.040 km</p>
            </div>
            </div>
            </div>
</div>
    </div>
  )
}

export default Hero