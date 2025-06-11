"use client";

import React, { useEffect, useState, useMemo, useCallback } from "react";

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

export const FloorOverlay: React.FC<ApartmentAreaProps> = React.memo(
  ({
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

    // Memoize the clip path to prevent recalculation
    const clipPath = useMemo(
      () => getClipPathPolygon(coords, scaleFactor),
      [coords, scaleFactor]
    );

    // Optimize mobile detection - only run once
    useEffect(() => {
      const checkMobile = () => {
        setIsMobile(window.innerWidth <= 768 || "ontouchstart" in window);
      };

      checkMobile();

      // Use a debounced resize handler
      let timeoutId: NodeJS.Timeout;
      const debouncedResize = () => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(checkMobile, 150);
      };

      window.addEventListener("resize", debouncedResize);
      return () => {
        window.removeEventListener("resize", debouncedResize);
        clearTimeout(timeoutId);
      };
    }, []);

    // Optimize hint animation - only run when component mounts
    useEffect(() => {
      const hintInterval = setInterval(() => {
        setShowHint(true);
        setTimeout(() => setShowHint(false), 1000);
      }, 2500);

      return () => clearInterval(hintInterval);
    }, []); // Empty dependency array

    const handleMouseEnter = useCallback(() => {
      if (!isMobile) setHoveredApartment(flatId);
    }, [isMobile, setHoveredApartment, flatId]);

    const handleMouseLeave = useCallback(() => {
      if (!isMobile) setHoveredApartment(null);
    }, [isMobile, setHoveredApartment]);

    const handleClick = useCallback(() => {
      if (isMobile) {
        setHoveredApartment(isHovered ? null : flatId);
      }
      handleFloorClick(flatId, flatNumber);
    }, [
      isMobile,
      isHovered,
      flatId,
      flatNumber,
      setHoveredApartment,
      handleFloorClick,
    ]);

    const getOverlayClasses = useMemo(() => {
      let classes = `absolute top-0 left-0 w-full h-full transition-all duration-300 cursor-pointer`;

      if (isMobile) {
        if (isHovered) {
          classes += ` bg-blue-500/70 border-2 border-white shadow-xl`;
        } else if (showHint) {
          classes += ` border-2 border-blue-400 animate-pulse-border`;
        } else {
          classes += ` bg-blue-200/20 border border-blue-100/50`;
        }
      } else {
        if (isHovered) {
          classes += ` bg-blue-400/60 border-2 border-white shadow-lg`;
        } else if (showHint) {
          classes += ` border-2 border-blue-400 animate-pulse-border`;
        } else {
          classes += ` bg-blue-100/15 border border-blue-50/30 hover:bg-blue-200/25`;
        }
      }
      return classes;
    }, [isMobile, isHovered, showHint]);

    return (
      <>
        <style jsx>{`
          @keyframes pulse-border {
            0% {
              border-color: rgba(96, 165, 250, 0.4);
            }
            50% {
              border-color: rgba(96, 165, 250, 1);
            }
            100% {
              border-color: rgba(96, 165, 250, 0.4);
            }
          }
          .animate-pulse-border {
            animation: pulse-border 1s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          }
        `}</style>
        <div
          style={{ clipPath }}
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50/10 to-blue-100/10 border border-blue-50/20"
        />
        <div
          style={{ clipPath }}
          className={`${getOverlayClasses} hover:shadow-xl`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick}
        />
      </>
    );
  },
  (prevProps, nextProps) => {
    // Custom comparison function for better memoization
    return (
      prevProps.flatId === nextProps.flatId &&
      prevProps.flatNumber === nextProps.flatNumber &&
      prevProps.hoveredApartment === nextProps.hoveredApartment &&
      prevProps.scaleFactor === nextProps.scaleFactor &&
      JSON.stringify(prevProps.coords) === JSON.stringify(nextProps.coords)
    );
  }
);

FloorOverlay.displayName = "FloorOverlay";
