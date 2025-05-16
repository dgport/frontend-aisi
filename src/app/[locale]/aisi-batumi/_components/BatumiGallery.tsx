"use client";

import { useState, useEffect, JSX } from "react";
import Image from "next/image";
import img from "@/root/public/images/Cover1.png";

interface GalleryImage {
  src: string | any;
  alt: string;
  aspectRatio: number;
}

const galleryImages: GalleryImage[] = [
  {
    src: img,
    alt: "Goderdzi Green Views",
    aspectRatio: 3 / 2,
  },
  {
    src: img,
    alt: "Goderdzi Nature Surroundings",
    aspectRatio: 3 / 4,
  },
  {
    src: img,
    alt: "Goderdzi Pool Area",
    aspectRatio: 4 / 3,
  },
  {
    src: img,
    alt: "Goderdzi Exterior",
    aspectRatio: 1 / 1,
  },
  {
    src: img,
    alt: "Goderdzi Interior",
    aspectRatio: 3 / 4,
  },
  {
    src: img,
    alt: "Goderdzi View",
    aspectRatio: 9 / 8,
  },
  {
    src: img,
    alt: "Goderdzi Lounge",
    aspectRatio: 5 / 3,
  },
];

export default function SimpleMasonryGallery(): JSX.Element {
  const [columns, setColumns] = useState<number>(3);

  useEffect(() => {
    const handleResize = (): void => {
      if (window.innerWidth < 640) {
        setColumns(1);
      } else if (window.innerWidth < 1024) {
        setColumns(2);
      } else {
        setColumns(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const createMasonryLayout = (): GalleryImage[][] => {
    const columnHeights: number[] = Array(columns).fill(0);
    const columnItems: GalleryImage[][] = Array(columns)
      .fill(null)
      .map(() => []);

    galleryImages.forEach((image) => {
      const shortestColumnIndex: number = columnHeights.indexOf(
        Math.min(...columnHeights)
      );

      columnItems[shortestColumnIndex].push(image);
      columnHeights[shortestColumnIndex] += 1 / image.aspectRatio;
    });

    return columnItems;
  };

  const masonryColumns: GalleryImage[][] = createMasonryLayout();

  return (
    <div className="w-full">
      <h3 className="text-2xl font-semibold mb-6">Property Gallery</h3>
      <div className="flex flex-wrap gap-3">
        {masonryColumns.map((column, colIndex) => (
          <div key={colIndex} className="flex-1 min-w-0 flex flex-col gap-3">
            {column.map((image, imgIndex) => (
              <div
                key={`${colIndex}-${imgIndex}`}
                className="overflow-hidden rounded-lg shadow-md"
              >
                <div
                  className="relative"
                  style={{
                    paddingTop: `${(1 / image.aspectRatio) * 60}%`,
                  }}
                >
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    width={600}
                    height={600}
                  />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
