"use client";

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
    if (!isHovered) {
      return "bg-transparent";
    }

    return "bg-blue-200/50";
  };

  return (
    <div
      key={flatId}
      style={{
        clipPath: getClipPathPolygon(coords, scaleFactor),
      }}
      className={`absolute top-0 left-0 w-full h-full transition-colors duration-300 cursor-pointer ${getBackgroundColor()}`}
      onMouseEnter={() => setHoveredApartment(flatId)}
      onMouseLeave={() => setHoveredApartment(null)}
      onClick={() => handleFloorClick(flatId, flatNumber)}
    />
  );
};
