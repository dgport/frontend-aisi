"use client";

import { FC, useEffect, useState } from "react";

interface Coordinate {
  x: number;
  y: number;
}

interface ApartmentAreaProps {
  flatId: number;
  flatNumber: number;
  status: string;
  coords: Coordinate[];
  hoveredApartment: number | null;
  setHoveredApartment: (id: number | null) => void;
  onApartmentClick?: (flatId: number, flatNumber: number) => void;
  scaleFactorX?: number;
  scaleFactorY?: number;
}

const getClipPathPolygon = (
  coords: Coordinate[],
  scaleFactorX = 1,
  scaleFactorY = 1
) => {
  if (!coords || coords.length < 3) {
    console.error("Invalid coordinates for clip path", coords);
    return "none";
  }

  return `polygon(${coords
    .map(({ x, y }) => `${x * scaleFactorX}px ${y * scaleFactorY}px`)
    .join(", ")})`;
};

const calculateCenter = (
  coords: Coordinate[],
  scaleFactorX = 1,
  scaleFactorY = 1
): { x: number; y: number } => {
  if (!coords || coords.length < 3) return { x: 0, y: 0 };

  const sum = coords.reduce(
    (acc, coord) => ({
      x: acc.x + coord.x * scaleFactorX,
      y: acc.y + coord.y * scaleFactorY,
    }),
    { x: 0, y: 0 }
  );

  return {
    x: sum.x / coords.length,
    y: sum.y / coords.length,
  };
};

export const ApartmentOverlay: FC<ApartmentAreaProps> = ({
  flatId,
  flatNumber,
  status,
  coords,
  hoveredApartment,
  setHoveredApartment,
  onApartmentClick = () => {},
  scaleFactorX = 1,
  scaleFactorY = 1,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPulsing, setIsPulsing] = useState(false);

  useEffect(() => {
    setIsVisible(false);

    const showTimeout = setTimeout(() => {
      setIsVisible(true);
    }, (flatId % 5) * 100);

    const pulseTimeout = setTimeout(() => {
      setIsPulsing(true);
    }, 1500);

    return () => {
      clearTimeout(showTimeout);
      clearTimeout(pulseTimeout);
    };
  }, [coords, flatId]);

  const getStatusColor = () => {
    switch (status?.toLowerCase()) {
      case "free":
      case "available":
        return "bg-green-200/30";
      case "reserved":
        return "bg-yellow-200/30";
      case "sold":
        return "bg-red-800/30";
      default:
        return "bg-gray-200/30";
    }
  };

  const getStatusBorderColor = () => {
    switch (status?.toLowerCase()) {
      case "free":
      case "available":
        return hoveredApartment === flatId
          ? "border-green-400"
          : "border-green-500";
      case "reserved":
        return hoveredApartment === flatId
          ? "border-yellow-400"
          : "border-yellow-500";
      case "sold":
        return hoveredApartment === flatId
          ? "border-red-400"
          : "border-red-500";
      default:
        return hoveredApartment === flatId
          ? "border-gray-400"
          : "border-gray-500";
    }
  };

  const getStatusTextColor = () => {
    switch (status?.toLowerCase()) {
      case "free":
      case "available":
        return "text-green-700";
      case "reserved":
        return "text-yellow-700";
      case "sold":
        return "text-red-700";
      default:
        return "text-gray-700";
    }
  };

  if (!coords || coords.length < 3) {
    return null;
  }

  const center = calculateCenter(coords, scaleFactorX, scaleFactorY);

  return (
    <>
      <div
        key={flatId}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          clipPath: getClipPathPolygon(coords, scaleFactorX, scaleFactorY),
          pointerEvents: "auto",
          transition: "all 0.3s ease",
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "scale(1)" : "scale(0.95)",
        }}
        className={`
          ${hoveredApartment === flatId ? "bg-blue-200/50" : getStatusColor()}
          ${hoveredApartment === flatId ? "shadow-lg" : ""}
          border-4 ${getStatusBorderColor()}
          ${
            isPulsing && hoveredApartment !== flatId
              ? "animate-border-pulse"
              : ""
          }
          transition-all duration-500
        `}
        onMouseEnter={() => setHoveredApartment(flatId)}
        onMouseLeave={() => setHoveredApartment(null)}
        onClick={() => onApartmentClick(flatId, flatNumber)}
      />

      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          clipPath: getClipPathPolygon(coords, scaleFactorX, scaleFactorY),
          pointerEvents: "none",
          opacity: isVisible ? 0.4 : 0,
          filter: "blur(4px)",
        }}
        className={`
          border-3 ${getStatusBorderColor()}
          ${isPulsing ? "animate-glow" : ""}
          transition-all duration-700
        `}
      />

      <div
        style={{
          position: "absolute",
          left: `${center.x}px`,
          top: `${center.y}px`,
          transform: `translate(-50%, -50%) ${
            isVisible ? "scale(1)" : "scale(0.8)"
          }`,
          pointerEvents: "none",
          opacity: isVisible ? 1 : 0,
        }}
        className={`
          z-10 flex flex-col items-center justify-center
          bg-white/90 rounded-lg px-2 py-1 shadow-md
          ${hoveredApartment === flatId ? "scale-110" : "scale-100"}
          transition-all duration-500
        `}
      >
        <span className="font-bold text-sm">{flatNumber}</span>
        <span className={`text-xs capitalize ${getStatusTextColor()}`}>
          {status}
        </span>
      </div>
    </>
  );
};
