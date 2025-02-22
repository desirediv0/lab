import Image from 'next/image'
import React from 'react'


const ServiceData = [
  {
    img :"/drug-icon.webp",
    title: "Target identification",
    desc : "Natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam."
  },
  {
    img :"/drug-icon-2.webp",
    title: "Compound screening",
    desc : "Natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam."
  },
  {
    img :"/drug-icon-3.webp",
    title: "Preclinical testing",
    desc : "Natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam."
  },
]
const Service = () => {
  return (
    <>
     {/* third section */}
    
          <section className="flex items-center justify-start p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
              {/* First Item */}
             {
              ServiceData.map((data,idx)=> (
                <div key={idx} className="max-w-lg px-16 py-16 flex flex-col space-y-4">
                <div className="text-blue-500 text-4xl">
                  <Image
                    src={data.img}
                    alt="Banner Image"
                    width={70}
                    height={100}
                    className=""
                  />
                </div>
                <h2 className="text-xl font-semibold text-gray-800 capitalize">
                  {data.title}
                </h2>
                <p className="text-gray-600">
                  {data.desc}
                </p>
              </div>
              ))
             }
            </div>
          </section>
    
    </>
  )
}

export default Service
