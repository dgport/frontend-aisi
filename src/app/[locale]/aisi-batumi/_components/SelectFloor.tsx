"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useMediaQuery } from "@/use-media-query";
import { useRouter } from "next/navigation";
import { Building, Layers, Home, Calendar, Loader2 } from "lucide-react";
import SitePlanImage from "@/root/public/images/batumi/SelectBuilding.png";
import MobileSitePlan from "@/root/public/images/batumi/SelectBuilding.png";
import { buildings } from "@/constants/coordinants/buildingFloorCoord";

const ORIGINAL_IMAGE_WIDTH = 768;
const MOBILE_IMAGE_WIDTH = 768;

export default function SelectFloor() {
  const [hoveredBuilding, setHoveredBuilding] = useState<string | null>(null);
  const [selectedBuilding, setSelectedBuilding] = useState<string | null>(null);
  const [buildingId, setBuildingId] = useState<string | null>(null);
  const [floorPlan, setSelectedFloorplan] = useState<string | null>(null);
  const [hoveredFloor, setHoveredFloor] = useState<string | null>(null);
  const [scaleFactor, setScaleFactor] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const imageRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const router = useRouter();

  useEffect(() => {
    const updateScaleFactor = () => {
      if (imageRef.current) {
        const currentImageWidth = imageRef.current.clientWidth;
        const baseWidth = isMobile ? MOBILE_IMAGE_WIDTH : ORIGINAL_IMAGE_WIDTH;
        setScaleFactor(currentImageWidth / baseWidth);
      }
    };

    const timer = setTimeout(updateScaleFactor, 100);
    const resizeObserver = new ResizeObserver(() => {
      clearTimeout(timer);
      setTimeout(updateScaleFactor, 100);
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    window.addEventListener("resize", updateScaleFactor);

    return () => {
      clearTimeout(timer);
      if (containerRef.current) {
        resizeObserver.unobserve(containerRef.current);
      }
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateScaleFactor);
    };
  }, [isMobile]);

  const handleBuildingClick = (
    buildingId: string,
    floorPlan: string,
    buildingIndex: string
  ) => {
    setIsLoading(true);
    // Simulate loading time
    setTimeout(() => {
      setSelectedBuilding(buildingId);
      setHoveredFloor(null);
      setSelectedFloorplan(floorPlan);
      setBuildingId(buildingIndex);
      setIsLoading(false);
    }, 800); // 800ms delay to show the loading state
  };

  const handleBuildingHover = (buildingId: string) => {
    setHoveredBuilding(buildingId);
  };

  const handleFloorClick = (floorId: string) => {
    if (buildingId) {
      setIsLoading(true);
      // Navigate after a short delay to show loading state
      setTimeout(() => {
        router.push(`/aisi-batumi/${buildingId}/${floorPlan}/${floorId}`);
      }, 300);
    }
  };

  const handleFloorHover = (floorId: string) => {
    setHoveredFloor(floorId);
  };

  const getCurrentImage = () => {
    if (selectedBuilding) {
      const building = buildings.find((b) => b.id === selectedBuilding);
      return building?.image || SitePlanImage;
    }
    return isMobile ? MobileSitePlan : SitePlanImage;
  };

  const getCurrentFloors = () => {
    if (selectedBuilding) {
      const building = buildings.find((b) => b.id === selectedBuilding);
      return building ? building.floors : [];
    }
    return [];
  };

  const renderRightPanel = () => {
    if (isLoading) {
      return (
        <div className="flex flex-col items-center justify-center h-full">
          <Loader2 className="h-10 w-10 text-blue-500 animate-spin mb-4" />
          <p className="text-gray-700 text-lg">Loading building details...</p>
        </div>
      );
    }

    if (selectedBuilding) {
      return (
        <>
          <h2 className="text-2xl font-bold mb-4">
            Building {selectedBuilding}: Select Your Floor
          </h2>
          <p className="text-gray-700 mb-6">
            Explore our available floors and find your perfect home. Hover over
            the floor plan on the left to view details for each floor.
          </p>

          <div className="mb-6">
            <h3 className="font-semibold text-lg mb-3 flex items-center">
              <Building className="mr-2 h-5 w-5" />
              Building Overview:
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-3 rounded-md flex items-center">
                <Layers className="h-5 w-5 mr-2 text-gray-500" />
                <div>
                  <div className="text-sm text-gray-500">Total Floors</div>
                  <div className="font-bold text-lg">12</div>
                </div>
              </div>
              <div className="bg-gray-50 p-3 rounded-md flex items-center">
                <Home className="h-5 w-5 mr-2 text-gray-500" />
                <div>
                  <div className="text-sm text-gray-500">Total Units</div>
                  <div className="font-bold text-lg">48</div>
                </div>
              </div>
              <div className="bg-gray-50 p-3 rounded-md flex items-center">
                <Home className="h-5 w-5 mr-2 text-gray-500" />
                <div>
                  <div className="text-sm text-gray-500">Available Units</div>
                  <div className="font-bold text-lg">24</div>
                </div>
              </div>
              <div className="bg-gray-50 p-3 rounded-md flex items-center">
                <Calendar className="h-5 w-5 mr-2 text-gray-500" />
                <div>
                  <div className="text-sm text-gray-500">Completion</div>
                  <div className="font-bold text-lg">2025</div>
                </div>
              </div>
            </div>
          </div>

          {hoveredFloor && (
            <div className="mt-6 bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">
                Floor {hoveredFloor}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Units</p>
                  <p className="font-bold">4</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Available</p>
                  <p className="font-bold">2</p>
                </div>
              </div>
            </div>
          )}
        </>
      );
    } else {
      return (
        <>
          <h2 className="text-2xl font-bold mb-4">Select Your Building</h2>
          <p className="text-gray-700 mb-6">
            Explore our available buildings and find your perfect home. Hover
            over the site plan on the left to view details for each building.
          </p>

          <div className="mb-6">
            <h3 className="font-semibold text-lg mb-3 flex items-center">
              <Building className="mr-2 h-5 w-5" />
              Project Overview:
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-3 rounded-md flex items-center">
                <Layers className="h-5 w-5 mr-2 text-gray-500" />
                <div>
                  <div className="text-sm text-gray-500">Total Buildings</div>
                  <div className="font-bold text-lg">4</div>
                </div>
              </div>
              <div className="bg-gray-50 p-3 rounded-md flex items-center">
                <Home className="h-5 w-5 mr-2 text-gray-500" />
                <div>
                  <div className="text-sm text-gray-500">Total Units</div>
                  <div className="font-bold text-lg">192</div>
                </div>
              </div>
              <div className="bg-gray-50 p-3 rounded-md flex items-center">
                <Home className="h-5 w-5 mr-2 text-gray-500" />
                <div>
                  <div className="text-sm text-gray-500">Available Units</div>
                  <div className="font-bold text-lg">96</div>
                </div>
              </div>
              <div className="bg-gray-50 p-3 rounded-md flex items-center">
                <Calendar className="h-5 w-5 mr-2 text-gray-500" />
                <div>
                  <div className="text-sm text-gray-500">Completion</div>
                  <div className="font-bold text-lg">2025</div>
                </div>
              </div>
            </div>
          </div>

          {hoveredBuilding && (
            <div className="mt-6 bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">
                Building {hoveredBuilding}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Floors</p>
                  <p className="font-bold">12</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Units</p>
                  <p className="font-bold">48</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Available</p>
                  <p className="font-bold">24</p>
                </div>
              </div>
            </div>
          )}
        </>
      );
    }
  };

  return (
    <section>
      <div className="flex flex-col md:flex-row gap-10 ">
        <div ref={containerRef} className="relative w-full md:w-1/2">
          <div className="relative w-full">
            <Image
              ref={imageRef}
              src={getCurrentImage()}
              alt="Building plan image"
              className={`w-full rounded-lg ${isLoading ? "opacity-60" : ""}`}
              priority
              onLoad={() => {
                if (imageRef.current) {
                  const baseWidth = isMobile
                    ? MOBILE_IMAGE_WIDTH
                    : ORIGINAL_IMAGE_WIDTH;
                  setScaleFactor(imageRef.current.clientWidth / baseWidth);
                }
              }}
            />

            {isLoading && (
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-80 p-6 rounded-lg shadow-md flex flex-col items-center">
                <Loader2 className="h-10 w-10 text-blue-500 animate-spin mb-2" />
                <p className="text-gray-700">Loading...</p>
              </div>
            )}

            {!selectedBuilding && !isLoading && (
              <svg className="absolute top-0 left-0 h-full w-full">
                {buildings.map((building) => (
                  <polygon
                    key={building.id}
                    points={building.coords
                      .map(
                        (point) =>
                          `${point.x * scaleFactor},${point.y * scaleFactor}`
                      )
                      .join(" ")}
                    fill={
                      hoveredBuilding === building.id
                        ? "rgba(0, 123, 255, 0.3)"
                        : "rgba(0, 0, 0, 0)"
                    }
                    stroke={
                      hoveredBuilding === building.id
                        ? "rgba(0, 123, 255, 0.8)"
                        : "rgba(255, 255, 255, 0.5)"
                    }
                    strokeWidth="2"
                    className="cursor-pointer"
                    onClick={() =>
                      handleBuildingClick(
                        building.id,
                        building.floorPlan,
                        building.buidlingId
                      )
                    }
                    onMouseEnter={() => handleBuildingHover(building.id)}
                    onMouseLeave={() => setHoveredBuilding(null)}
                  />
                ))}
              </svg>
            )}

            {selectedBuilding && !isLoading && (
              <svg className="absolute top-0 left-0 h-full w-full">
                {getCurrentFloors().map((floor) => (
                  <polygon
                    key={floor.id}
                    points={floor.coords
                      .map(
                        (point) =>
                          `${point.x * scaleFactor},${point.y * scaleFactor}`
                      )
                      .join(" ")}
                    fill={
                      hoveredFloor === floor.id
                        ? "rgba(0, 123, 255, 0.3)"
                        : "rgba(0, 0, 0, 0)"
                    }
                    stroke={
                      hoveredFloor === floor.id
                        ? "rgba(0, 123, 255, 0.8)"
                        : "rgba(255, 255, 255, 0.5)"
                    }
                    strokeWidth="2"
                    className="cursor-pointer"
                    onClick={() => handleFloorClick(floor.id)}
                    onMouseEnter={() => handleFloorHover(floor.id)}
                    onMouseLeave={() => setHoveredFloor(null)}
                  />
                ))}
              </svg>
            )}

            {!selectedBuilding && hoveredBuilding && !isLoading && (
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-80 px-4 py-2 rounded-lg shadow-md pointer-events-none">
                <h3 className="text-xl font-bold text-blue-600">
                  Building {hoveredBuilding}
                </h3>
              </div>
            )}

            {selectedBuilding && hoveredFloor && !isLoading && (
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-80 px-4 py-2 rounded-lg shadow-md pointer-events-none text-8xl font-bold opacity-50">
                {hoveredFloor}
              </div>
            )}

            {selectedBuilding && !isLoading && (
              <button
                className="absolute top-4 left-4 bg-white bg-opacity-80 px-4 py-2 rounded-lg shadow-md hover:bg-opacity-100 transition-all"
                onClick={() => {
                  setIsLoading(true);
                  setTimeout(() => {
                    setSelectedBuilding(null);
                    setHoveredFloor(null);
                    setIsLoading(false);
                  }, 500);
                }}
              >
                ← Back to Site Plan
              </button>
            )}
          </div>
        </div>
        <div
          className="w-full md:w-1/2 border border-gray-300 rounded-lg overflow-auto"
          style={{ maxHeight: isMobile ? "auto" : undefined }}
        >
          <div className="bg-white p-6 rounded-lg shadow-sm h-full flex flex-col">
            {renderRightPanel()}
          </div>
        </div>
      </div>
    </section>
  );
}