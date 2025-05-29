"use client";

import { useTranslations } from "next-intl";
import { type FC } from "react";

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
  if (!coords || coords.length < 3) return "none";

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
  const t = useTranslations("main");

  const getStatusStyles = () => {
    const isHovered = hoveredApartment === flatId;

    switch (status?.toLowerCase()) {
      case "free":
      case "available":
        return {
          background: isHovered ? "bg-green-600/70" : "bg-green-500/40",
          textColor: "text-green-800",
          badgeColor: "bg-green-100 text-green-800 border-green-300",
        };
      case "reserved":
        return {
          background: isHovered ? "bg-yellow-600/70" : "bg-yellow-500/40",
          textColor: "text-yellow-800",
          badgeColor: "bg-yellow-100 text-yellow-800 border-yellow-300",
        };
      case "sold":
        return {
          background: isHovered ? "bg-red-600/70" : "bg-red-500/40",
          textColor: "text-red-800",
          badgeColor: "bg-red-100 text-red-800 border-red-300",
        };
      default:
        return {
          background: isHovered ? "bg-gray-600/70" : "bg-gray-500/40",
          textColor: "text-gray-800",
          badgeColor: "bg-gray-100 text-gray-800 border-gray-300",
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

  const getTranslatedStatus = () => {
    switch (status?.toLowerCase()) {
      case "free":
      case "available":
        return t("available");
      case "reserved":
        return t("res");
      case "sold":
        return t("sold");
      default:
        return status;
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
      <div
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
          transition-all duration-200
          ${isHovered ? "shadow-lg" : ""}
        `}
        onMouseEnter={() => setHoveredApartment(flatId)}
        onMouseLeave={() => setHoveredApartment(null)}
        onClick={() => onApartmentClick(flatId, flatNumber)}
      />
      <div
        style={{
          position: "absolute",
          left: `${center.x}px`,
          top: `${center.y}px`,
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          zIndex: 20,
        }}
        className="flex flex-col items-center gap-1"
      >
        <div className="bg-white/85 backdrop-blur-sm rounded-full px-2 py-0.5 shadow-sm border border-gray-200">
          <span className="font-medium text-xs text-gray-700">
            #{flatNumber}
          </span>
        </div>

        <div
          className={`
            ${styles.badgeColor}
            px-2 py-1 rounded-full text-xs font-medium
            border shadow-sm backdrop-blur-sm
            flex items-center gap-1
          `}
        ></div>
      </div>
      {isHovered && (
        <div
          style={{
            position: "absolute",
            left: `${center.x}px`,
            top: `${center.y - 70}px`,
            transform: "translateX(-50%)",
            pointerEvents: "none",
            zIndex: 30,
          }}
          className="bg-slate-800 text-white px-3 py-2 rounded-lg shadow-xl border border-slate-600 text-sm font-medium"
        >
          <div className="text-center">
            <div className="font-semibold">
              {t("apartment")} # {flatNumber}
            </div>
            <span className="text-xs mr-2 ">{getStatusIcon()}</span>
            <span className="capitalize">{getTranslatedStatus()}</span>
          </div>
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-800"></div>
        </div>
      )}
    </>
  );
};