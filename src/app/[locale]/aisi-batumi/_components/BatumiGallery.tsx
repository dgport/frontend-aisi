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
    <div className="w-full py-16 ">
      <div className="w-full">
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 backdrop-blur-2xl border border-slate-600/30 rounded-2xl overflow-hidden 
              transition-all duration-300 hover:scale-[1.02] transform-gpu hover:shadow-2xl hover:shadow-slate-700/30 hover:border-slate-500/50"
            >
              <div className="relative h-64">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="object-cover"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {image.title}
                </h3>
                <p className="text-white/80">{image.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
