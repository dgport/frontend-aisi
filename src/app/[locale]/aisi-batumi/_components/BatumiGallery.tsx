"use client";
import type { JSX } from "react";
import Image from "next/image";
import Otis from "@/root/public/images/batumi/Otis.png";
import Parking from "@/root/public/images/batumi/Parking.png";
import Gym from "@/root/public/images/batumi/Gym.png";
import Elevator from "@/root/public/images/batumi/Elevator.png";
import { WaveShape } from "@/components/shared/waveShape/WaveShape";

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
    <section className="relative w-full ">
      <WaveShape position="top" className="hidden md:block" />
      <div className="w-full px-4 md:px-8 lg:px-16 py-16 md:py-32 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 relative">
        <div className="container mx-auto">
          <div className="grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-white/30 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative h-48 md:h-56 overflow-hidden rounded-t-2xl">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1280px) 25vw, 25vw"
                    priority={index < 2}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                </div>
                <div className="p-4 md:p-6 relative">
                  <div className="absolute -top-2 left-4 md:left-6 w-12 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <h3 className="font-bold text-lg md:text-xl text-white mb-2 md:mb-3 group-hover:text-blue-100 transition-colors duration-300">
                    {image.title}
                  </h3>
                  <p className="text-sm text-white/70 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                    {image.description}
                  </p>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full transition-all duration-500 ease-out" />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/3 rounded-full blur-2xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/3 rounded-full blur-3xl" />
      </div>
      <WaveShape position="bottom" className="hidden md:block" />
    </section>
  );
}