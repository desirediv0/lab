import Image from 'next/image'
import React from 'react'

const Banner = ({heading, src, className}) => {
  return (
    <div className='relative'>
    <Image src={src || "/banner.jpg"} alt="Banner Image" width={1000} height={1000} className="w-full h-[50vh] md:h-[70vh] object-cover" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
        <h1 className={`text-4xl md:text-6xl font-bold mb-4 ${className}`}>{heading}</h1>
      </div>
    </div>
  )
}

export default Banner
