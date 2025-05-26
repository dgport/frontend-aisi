"use client";

import type React from "react";

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
  const isHovered = hoveredApartment === flatId;

  const getBackgroundColor = () => {
    if (isHovered) {
      return "bg-indigo-400/60 border-2 border-white shadow-lg";
    }
    return "";
  };

  return (
    <div
      key={flatId}
      style={{
        clipPath: getClipPathPolygon(coords, scaleFactor),
      }}
      className={`absolute top-0 left-0 w-full h-full transition-all duration-300 cursor-pointer ${getBackgroundColor()} hover:shadow-xl`}
      onMouseEnter={() => setHoveredApartment(flatId)}
      onMouseLeave={() => setHoveredApartment(null)}
      onClick={() => handleFloorClick(flatId, flatNumber)}
    />
  );
};
