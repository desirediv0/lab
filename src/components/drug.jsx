import Image from 'next/image'
import React from 'react'

const Drug = () => {
  return (
    <>
          {/* medicine */}
     
           <section className="mt-28">
             <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 lg:gap-16">
                 {/* Text */}
                 <span className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-800 capitalize text-center md:text-left">
                   Advancing medicine,
                 </span>
     
                 {/* Image */}
                 <div className="flex-shrink-0 relative w-[150px] h-[150px] md:w-[200px] md:h-[200px] ">
                   <Image
                     src="/medi.webp"
                     alt="Medicine Innovation"
                     fill
                     className="rounded-lg object-contain"
                   />
                 </div>
               </div>
             </div>
           </section>
     
           {/* Section 2 */}
           <section className="">
             <div className="max-w-6xl mx-auto px-2 sm:px-6 lg:px-4">
               <div className="flex flex-col md:flex-row-reverse items-center justify-center md:gap-12 lg:gap-8">
                 {/* Text */}
                 <span className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-800 capitalize text-center md:text-left">
                   innovating to improve lives
                 </span>
                 {/* Image */}
                 <div className="flex-shrink-0 relative w-[150px] h-[150px] md:w-[200px] md:h-[200px]">
                   <Image
                     src="/dna.webp"
                     alt="DNA Research"
                     fill
                     className="rounded-lg object-contain"
                   />
                 </div>
               </div>
             </div>
           </section>
      
    </>
  )
}

export default Drug
