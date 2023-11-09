import Image from 'next/image'
import React from 'react'

const Guide = () => {
  return (
    <div className='flex flex-col '>
        <div className=' padding-container  w-full  pb-24 '>
<Image src="camp.svg" width={50} height={50} alt="" className='ml-8 mb-4'/>
    <p className='uppercase font-bold text-3xl text-green-600 ml-8 lg:gap-10'>We Are Here For You </p>
    
    <div className='flex flex-wrap justify-between gap-5 h-8 w-full'>
        <h2 className='uppercase font-bold text-purple-700 text-5xl ml-8 mt-4 lg:text-5xl sm:text-xl'>Guide you to your adventure</h2>

    </div>
        </div>
<div className='flex max-container relative w-full border-2 border-blue-400 '>
    <Image src="/boat.png" alt="" width={1440} height={580}/>

</div>

    </div>
  )
}

export default Guide