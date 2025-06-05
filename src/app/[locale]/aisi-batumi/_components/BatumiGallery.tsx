"use client";
import type { JSX } from "react";
import Image from "next/image";
import Otis from "@/root/public/images/batumi/Otis.png";
import Parking from "@/root/public/images/batumi/Parking.png";
import Gym from "@/root/public/images/batumi/Gym.png";
import Elevator from "@/root/public/images/batumi/Elevator.png";

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
  return (
    <div className="relative w-full">
      {/* Simplified top wave */}
      <div className="hidden md:block absolute top-0 w-full z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 90"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            fill="#FFFFFF"
            d="M0,90L40,82C80,75,160,60,240,60C320,60,400,75,480,75C560,75,640,60,720,52C800,45,880,45,960,52C1040,60,1120,75,1200,75C1280,75,1360,60,1400,52L1440,45L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
          />
        </svg>
      </div>

      <div className="w-full px-4 md:px-8 lg:px-16 py-16 md:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative">
        <div className="container mx-auto">
          <div className="grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-white/30 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                {/* Simplified hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Image container */}
                <div className="relative h-48 md:h-56 overflow-hidden rounded-t-2xl">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1280px) 25vw, 25vw"
                    priority={index < 2}
                  />
                  {/* Simplified overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                </div>

                {/* Content area */}
                <div className="p-4 md:p-6 relative">
                  {/* Accent line */}
                  <div className="absolute -top-2 left-4 md:left-6 w-12 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <h3 className="font-bold text-lg md:text-xl text-white mb-2 md:mb-3 group-hover:text-blue-100 transition-colors duration-300">
                    {image.title}
                  </h3>
                  <p className="text-sm text-white/70 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                    {image.description}
                  </p>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full transition-all duration-500 ease-out" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Simplified background decorations */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/3 rounded-full blur-2xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/3 rounded-full blur-3xl" />
      </div>

      {/* Simplified bottom wave */}
      <div className="hidden md:block absolute bottom-0 w-full z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 100"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            fill="#FFFFFF"
            d="M0,20L40,32C80,45,160,70,240,70C320,70,400,45,480,45C560,45,640,70,720,77C800,85,880,75,960,70C1040,65,1120,70,1200,70C1280,70,1360,65,1400,62L1440,60L1440,100L1400,100C1360,100,1280,100,1200,100C1120,100,1040,100,960,100C880,100,800,100,720,100C640,100,560,100,480,100C400,100,320,100,240,100C160,100,80,100,40,100L0,100Z"
          />
        </svg>
      </div>
    </div>
  );
}