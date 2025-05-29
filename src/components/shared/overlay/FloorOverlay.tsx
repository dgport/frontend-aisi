"use client";

import type React from "react";
import { useEffect, useState } from "react";

interface Coordinate {
  x: number;
  y: number;
}

interface ApartmentAreaProps {
  flatId: number;
  flatNumber: number;
  coords: Coordinate[];
  hoveredApartment: number | null;
  setHoveredApartment: (id: number | null) => void;
  handleFloorClick?: (flatId: number, flatNumber: number) => void;
  scaleFactor: number;
}

const getClipPathPolygon = (coords: Coordinate[], scaleFactor: number) => {
  return `polygon(${coords
    .map(({ x, y }) => `${x * scaleFactor}px ${y * scaleFactor}px`)
    .join(", ")})`;
};

export const FloorOverlay: React.FC<ApartmentAreaProps> = ({
  flatId,
  flatNumber,
  coords,
  hoveredApartment,
  setHoveredApartment,
  handleFloorClick = () => alert(`Apartment #${flatNumber} clicked`),
  scaleFactor,
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const isHovered = hoveredApartment === flatId;

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768 || "ontouchstart" in window);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const getBackgroundColor = () => {
    if (isMobile) {
      return isHovered
        ? "bg-indigo-500/70 border-2 border-white shadow-xl"
        : "bg-indigo-300/40 border border-indigo-200";
    } else {
      return isHovered
        ? "bg-indigo-400/60 border-2 border-white shadow-lg"
        : "";
    }
  };

  return (
    <div
      key={flatId}
      style={{
        clipPath: getClipPathPolygon(coords, scaleFactor),
      }}
      className={`absolute top-0 left-0 w-full h-full transition-all duration-300 cursor-pointer ${getBackgroundColor()} hover:shadow-xl`}
      onMouseEnter={() => !isMobile && setHoveredApartment(flatId)}
      onMouseLeave={() => !isMobile && setHoveredApartment(null)}
      onClick={() => {
        if (isMobile) {
          setHoveredApartment(isHovered ? null : flatId);
        }
        handleFloorClick(flatId, flatNumber);
      }}
    />
  );
};