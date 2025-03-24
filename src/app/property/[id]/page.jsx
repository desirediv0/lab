'use client';

import Image from 'next/image';
import { FaUsers, FaMusic, } from 'react-icons/fa';
import { TbRulerMeasure } from 'react-icons/tb';
import { useParams } from 'next/navigation';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

const propertyDetails = {
    1: {
        id: 1,
        images: ["/image.jpg", "/image-1.jpg", "/image-2.jpg"],
        label: "Available",
        location: "Downtown Music Hall, New York",
        title: "PREMIUM MUSIC VENUE WITH STAGE AND EQUIPMENT",
        description: "A state-of-the-art music venue featuring premium sound equipment, multiple stages, and versatile performance spaces. Perfect for concerts, music festivals, and private events.",
        capacity: 500,
        stages: 2,
        area: "1000 m²",
        price: "$1,200",
        amenities: ["Professional Sound System", "Lighting Setup", "Green Room", "Bar Area", "Security System"],
        features: {
            parking: true,
            wifi: true,
            soundProof: true,
            backstageArea: true
        }
    },
};

const PropertyDetails = () => {
    const params = useParams();
    const property = propertyDetails[params.id];

    if (!property) {
        return <div className="container mx-auto px-6 py-12">Property not found</div>;
    }

    return (
        <div className="container mx-auto px-6 lg:px-20 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Main Image with Carousel */}
                <div className="space-y-4">
                    <Carousel className="w-full">
                        <CarouselContent>
                            {property.images.map((image, index) => (
                                <CarouselItem key={index}>
                                    <div className="p-1">
                                        <div className="relative h-[500px] w-full">
                                            <Image
                                                src={image}
                                                alt={`${property.title} ${index + 1}`}
                                                fill
                                                className="rounded-xl object-cover"
                                            />
                                        </div>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="left-2" />
                        <CarouselNext className="right-2" />
                    </Carousel>

                    {/* Thumbnail Preview */}
                    <div className="grid grid-cols-3 gap-4">
                        {property.images.map((img, index) => (
                            <Image
                                key={index}
                                src={img}
                                alt={`${property.title} ${index + 1}`}
                                width={200}
                                height={150}
                                className="rounded-xl w-full h-32 object-cover cursor-pointer hover:opacity-80"
                            />
                        ))}
                    </div>
                </div>

                {/* Details */}
                <div className="space-y-6">
                    <span className="bg-black text-white px-4 py-2 rounded-full">
                        {property.label}
                    </span>
                    <h1 className="text-3xl font-bold">{property.title}</h1>
                    <p className="text-black text-xl">{property.location}</p>
                    <p className="text-gray-600">{property.description}</p>

                    <div className="grid grid-cols-3 gap-4 text-center">
                        <div className="border p-4 rounded-lg">
                            <FaUsers className="mx-auto text-2xl text-black mb-2" />
                            <p className="text-sm text-gray-600">Capacity</p>
                            <p className="font-bold">{property.capacity}</p>
                        </div>
                        <div className="border p-4 rounded-lg">
                            <FaMusic className="mx-auto text-2xl text-black mb-2" />
                            <p className="text-sm text-gray-600">Stages</p>
                            <p className="font-bold">{property.stages}</p>
                        </div>
                        <div className="border p-4 rounded-lg">
                            <TbRulerMeasure className="mx-auto text-2xl text-black mb-2" />
                            <p className="text-sm text-gray-600">Area</p>
                            <p className="font-bold">{property.area}</p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold">Amenities</h3>
                        <ul className="grid grid-cols-2 gap-4">
                            {property.amenities.map((amenity, index) => (
                                <li key={index} className="flex items-center">
                                    <span className="w-2 h-2 bg-black rounded-full mr-2"></span>
                                    {amenity}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="border-t pt-6">
                        <div className="flex justify-between items-center">
                            <div>
                                <span className="text-3xl font-bold">{property.price}</span>
                                <span className="text-gray-500">/night</span>
                            </div>
                            <button className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-900">
                                Book Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PropertyDetails;
