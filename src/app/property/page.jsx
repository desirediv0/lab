import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { FaUsers, FaMusic } from 'react-icons/fa'
import { TbRulerMeasure } from 'react-icons/tb'

const properties = [
    {
        id: 1,
        image: "/image.jpg",
        label: "Available",
        location: "Downtown Music Hall, New York",
        title: "PREMIUM MUSIC VENUE WITH STAGE AND EQUIPMENT",
        capacity: 500,
        stages: 2,
        area: "1000 m²",
        price: "$1,200",
        link: "/property/1",
    },
    {
        id: 2,
        image: "/image-2.jpg",
        label: "New Venue",
        location: "Jazz Corner, Chicago",
        title: "INTIMATE JAZZ CLUB WITH SOUND SYSTEM",
        capacity: 200,
        stages: 1,
        area: "400 m²",
        price: "$800",
        link: "/property/1",
    },
    {
        id: 3,
        image: "/image-3.jpg",
        label: "Featured",
        location: "Pasadena 809b-2, Oklahoma",
        title: "SUPER DELUXE BED ROOM NEAR SEA BEACH",
        capacity: 4,
        stages: 2,
        area: "6×8 m²",
        price: "$2,400",
        link: "/property/1",
    },
    {
        id: 4,
        image: "/image-1.jpg",
        label: "Featured",
        location: "Pasadena 809b-2, Oklahoma",
        title: "SUPER DELUXE BED ROOM NEAR SEA BEACH",
        capacity: 4,
        stages: 2,
        area: "6×8 m²",
        price: "$2,400",
        link: "/property/1",
    },
    {
        id: 5,
        image: "/image.jpg",
        label: "Featured",
        location: "Pasadena 809b-2, Oklahoma",
        title: "SUPER DELUXE BED ROOM NEAR SEA BEACH",
        capacity: 4,
        stages: 2,
        area: "6×8 m²",
        price: "$2,400",
        link: "/property/1",
    },
    {
        id: 6,
        image: "/image-3.jpg",
        label: "Featured",
        location: "Pasadena 809b-2, Oklahoma",
        title: "SUPER DELUXE BED ROOM NEAR SEA BEACH",
        capacity: 4,
        stages: 2,
        area: "6×8 m²",
        price: "$2,400",
        link: "/property/1",
    },
];

const Props = () => {
    return (
        <>
            <div className="container mx-auto px-6 lg:px-20 py-12 text-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {properties.map((property) => (
                        <Link key={property.id} href={property.link} passHref>
                            <div className="bg-white rounded-xl shadow-md p-4 cursor-pointer hover:shadow-lg transition">
                                <div className="relative">
                                    <Image
                                        src={property.image}
                                        alt={property.title}
                                        width={400}
                                        height={250}
                                        className="rounded-lg w-full h-60 object-cover"
                                    />
                                    <span className="absolute top-3 left-3 bg-black text-white px-3 py-1 rounded-full text-sm">
                                        {property.label}
                                    </span>
                                </div>
                                <p className="text-black mt-4">{property.location}</p>
                                <h3 className="text-lg font-semibold">{property.title}</h3>
                                <div className="flex justify-center gap-4 text-gray-600 text-sm mt-3">
                                    <span className="flex items-center">
                                        <FaUsers className="mr-2" /> {property.capacity} Capacity
                                    </span>
                                    <span className="flex items-center">
                                        <FaMusic className="mr-2" /> {property.stages} Stages
                                    </span>
                                    <span className="flex items-center">
                                        <TbRulerMeasure className="mr-2" /> {property.area}
                                    </span>
                                </div>
                                <div className="flex justify-between items-center mt-4">
                                    <span className="text-xl font-bold">
                                        {property.price}{" "}
                                        <span className="text-gray-500 text-sm">/night</span>
                                    </span>
                                    <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-900">
                                        Book Now
                                    </button>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Props