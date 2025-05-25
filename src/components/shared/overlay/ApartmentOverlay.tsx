"use client";

import { type FC, useEffect, useState } from "react";
import { motion } from "framer-motion";

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

  useEffect(() => {
    setIsVisible(false);

    const showTimeout = setTimeout(() => {
      setIsVisible(true);
    }, (flatId % 8) * 80);

    return () => {
      clearTimeout(showTimeout);
    };
  }, [coords, flatId]);

  const getStatusStyles = () => {
    const isHovered = hoveredApartment === flatId;

    switch (status?.toLowerCase()) {
      case "free":
      case "available":
        return {
          background: isHovered ? "bg-emerald-500/40" : "bg-emerald-500/25",
          textColor: "text-emerald-700",
          badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
          glowColor: "shadow-emerald-500/20",
        };
      case "reserved":
        return {
          background: isHovered ? "bg-amber-500/40" : "bg-amber-500/25",
          textColor: "text-amber-700",
          badgeColor: "bg-amber-100 text-amber-800 border-amber-200",
          glowColor: "shadow-amber-500/20",
        };
      case "sold":
        return {
          background: isHovered ? "bg-red-500/40" : "bg-red-500/25",
          textColor: "text-red-700",
          badgeColor: "bg-red-100 text-red-800 border-red-200",
          glowColor: "shadow-red-500/20",
        };
      default:
        return {
          background: isHovered ? "bg-slate-500/40" : "bg-slate-500/25",
          textColor: "text-slate-700",
          badgeColor: "bg-slate-100 text-slate-800 border-slate-200",
          glowColor: "shadow-slate-500/20",
        };
    }
  };

  const getStatusIcon = () => {
    switch (status?.toLowerCase()) {
      case "free":
      case "available":
        return "✓";
      case "reserved":
        return "⏳";
      case "sold":
        return "✕";
      default:
        return "?";
    }
  };

  if (!coords || coords.length < 3) {
    return null;
  }

  const center = calculateCenter(coords, scaleFactorX, scaleFactorY);
  const styles = getStatusStyles();
  const isHovered = hoveredApartment === flatId;

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.95 }}
        transition={{ duration: 0.4, delay: (flatId % 8) * 0.08 }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          clipPath: getClipPathPolygon(coords, scaleFactorX, scaleFactorY),
          pointerEvents: "auto",
          cursor: "pointer",
        }}
        className={`
          ${styles.background}
          border-2 border-white
          ${isHovered ? `${styles.glowColor} shadow-lg` : ""}
          transition-all duration-300 ease-out
        `}
        onMouseEnter={() => setHoveredApartment(flatId)}
        onMouseLeave={() => setHoveredApartment(null)}
        onClick={() => onApartmentClick(flatId, flatNumber)}
      />

      {isHovered && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            clipPath: getClipPathPolygon(coords, scaleFactorX, scaleFactorY),
            pointerEvents: "none",
            filter: "blur(8px)",
          }}
          className={`${styles.background} border-white border-4`}
        />
      )}

      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 10 }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isVisible ? 1 : 0.8,
          y: isVisible ? 0 : 10,
        }}
        transition={{ duration: 0.4, delay: (flatId % 8) * 0.08 + 0.2 }}
        style={{
          position: "absolute",
          left: `${center.x}px`,
          top: `${center.y}px`,
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          zIndex: 20,
        }}
        className="flex flex-col items-center justify-center gap-1"
      >
        <div className="bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg border border-gray-200">
          <span className="font-bold text-lg text-gray-900">{flatNumber}</span>
        </div>
        <div
          className={`
            ${styles.badgeColor}
            px-2 py-1 rounded-full text-xs font-medium
            border shadow-sm backdrop-blur-sm
            flex items-center gap-1
          `}
        >
          <span className="text-xs">{getStatusIcon()}</span>
          <span className="capitalize">{status}</span>
        </div>
      </motion.div>
      {status?.toLowerCase() === "available" && !isHovered && (
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            clipPath: getClipPathPolygon(coords, scaleFactorX, scaleFactorY),
            pointerEvents: "none",
          }}
          className="border-2 border-emerald-400"
        />
      )}
      {isHovered && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.2 }}
          style={{
            position: "absolute",
            left: `${center.x}px`,
            top: `${center.y - 60}px`,
            transform: "translateX(-50%)",
            pointerEvents: "none",
            zIndex: 30,
          }}
          className="bg-slate-800 text-white px-3 py-2 rounded-lg shadow-xl border border-slate-600 text-sm font-medium"
        >
          <div className="text-center">
            <div className="font-semibold">Apartment {flatNumber}</div>
            <div
              className={`text-xs ${styles.textColor.replace(
                "text-",
                "text-"
              )}`}
            >
              Status: {status}
            </div>
          </div>
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-800"></div>
        </motion.div>
      )}
    </>
  );
};