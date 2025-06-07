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
  const [showHint, setShowHint] = useState(false);
  const isHovered = hoveredApartment === flatId;

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768 || "ontouchstart" in window);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const hintInterval = setInterval(() => {
      setShowHint(true);
      setTimeout(() => setShowHint(false), 1000);
    }, 1500);

    return () => clearInterval(hintInterval);
  }, []);

  const getBackgroundColor = () => {
    if (isMobile) {
      if (isHovered) {
        return "bg-blue-500/70 border-2 border-white shadow-xl";
      } else if (showHint) {
        return "bg-blue-300/50 border border-blue-200 animate-pulse";
      } else {
        return "bg-blue-200/20 border border-blue-100/50";
      }
    } else {
      if (isHovered) {
        return "bg-blue-400/60 border-2 border-white shadow-lg";
      } else if (showHint) {
        return "bg-blue-300/40 border border-blue-200 animate-pulse";
      } else {
        return "bg-blue-100/15 border border-blue-50/30 hover:bg-blue-200/25";
      }
    }
  };

  return (
    <>
      <div
        style={{
          clipPath: getClipPathPolygon(coords, scaleFactor),
        }}
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50/10 to-blue-100/10 border border-blue-50/20"
      />
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
    </>
  );
};
