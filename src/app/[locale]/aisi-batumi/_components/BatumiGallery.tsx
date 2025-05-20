"use client";

import type { JSX } from "react";
import Image from "next/image";
import Otis from "@/root/public/images/batumi/Otis.png";
import Parking from "@/root/public/images/batumi/Parking.png";
import Gym from "@/root/public/images/batumi/Gym.png";
import Elevator from "@/root/public/images/batumi/Elevator.png";
import { useMediaQuery } from "@/use-media-query";

interface GalleryImage {
  src: string | any;
  alt: string;
  title: string;
  description: string;
}

const galleryImages: GalleryImage[] = [
  {
    src: Otis,
    alt: "Goderdzi Green Views",
    title: "Beautiful Surroundings",
    description: "Enjoy the lush green views surrounding the property",
  },
  {
    src: Parking,
    alt: "Goderdzi Nature Surroundings",
    title: "Natural Environment",
    description: "Located in a pristine natural setting with fresh air",
  },
  {
    src: Gym,
    alt: "Goderdzi Pool Area",
    title: "Swimming Pool",
    description:
      "This building features a luxurious swimming pool for residents",
  },
  {
    src: Elevator,
    alt: "Goderdzi Exterior",
    title: "Modern Exterior",
    description: "Contemporary architectural design with premium materials",
  },
];

export default function PropertyGallery(): JSX.Element {
  const isMobile = useMediaQuery("(max-width: 639px)");
  const isTablet = useMediaQuery("(min-width: 640px) and (max-width: 767px)");
  const isLaptop = useMediaQuery("(min-width: 768px) and (max-width: 1023px)");

  const columns = isMobile ? 1 : isTablet ? 2 : isLaptop ? 3 : 4;

  return (
    <div className="w-full px-4 py-8">
      <h2 className="text-3xl font-bold mb-8 text-center">Property Gallery</h2>

      <div
        className={`grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-${columns}`}
      >
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100 transition-transform duration-300 hover:shadow-lg"
          >
            <div className="relative h-64">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="object-cover"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {image.title}
              </h3>
              <p className="text-gray-600">{image.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
