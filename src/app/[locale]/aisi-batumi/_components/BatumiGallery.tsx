"use client"

import { useState, useEffect } from "react";
import img from "@/root/public/images/Cover1.png";
import Image from "next/image";

// Use placeholder images with variety of aspect ratios
const galleryImages = [
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

export default function SimpleMasonryGallery() {
  const [columns, setColumns] = useState(3);

  // Adjust number of columns based on screen width
  useEffect(() => {
    const handleResize = () => {
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

  // Create optimized column arrays for the masonry layout
  const createMasonryLayout = () => {
    const columnHeights = Array(columns).fill(0);
    const columnItems = Array(columns)
      .fill()
      .map(() => []);

    galleryImages.forEach((image) => {
      // Find the column with the least height
      const shortestColumnIndex = columnHeights.indexOf(
        Math.min(...columnHeights)
      );

      // Add image to the shortest column
      columnItems[shortestColumnIndex].push(image);

      // Update the height of that column
      columnHeights[shortestColumnIndex] += 1 / image.aspectRatio;
    });

    return columnItems;
  };

  const masonryColumns = createMasonryLayout();

  return (
    <div className="w-full">
      <h3 className="text-2xl font-semibold mb-6">Property Gallery</h3>

      {/* Masonry Grid */}
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
