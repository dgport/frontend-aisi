"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useMediaQuery } from "@/use-media-query";
import { useRouter } from "next/navigation";
import {
  Building,
  Layers,
  Home,
  Calendar,
  Loader2,
  ArrowLeft,
} from "lucide-react";
import SitePlanImage from "@/root/public/images/batumi/SelectBuilding.png";
import MobileSitePlan from "@/root/public/images/batumi/SelectBuilding.png";
import { buildings } from "@/constants/coordinants/buildingFloorCoord";
import { FloorOverlay } from "@/components/shared/overlay/FloorOverlay";
import { useTranslations } from "next-intl";

const ORIGINAL_IMAGE_WIDTH = 768;
const MOBILE_IMAGE_WIDTH = 768;

export default function SelectFloor() {
  const t = useTranslations("batumi");
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

  useEffect(() => {
    const preloadImages = () => {
      buildings.forEach((building) => {
        if (building.image) {
          const img = new window.Image();
          img.src =
            typeof building.image === "string"
              ? building.image
              : building.image.src;
        }
      });
    };
    const timer = setTimeout(preloadImages, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleBuildingClick = (
    buildingId: string,
    floorPlan: string,
    buildingIndex: string
  ) => {
    setIsLoading(true);

    setTimeout(() => {
      setSelectedBuilding(buildingId);
      setHoveredFloor(null);
      setSelectedFloorplan(floorPlan);
      setBuildingId(buildingIndex);
      setIsLoading(false);
    }, 200);
  };

  const handleFloorClick = (floorId: string) => {
    if (buildingId) {
      setIsLoading(true);
      setTimeout(() => {
        router.push(`/aisi-batumi/${buildingId}/${floorPlan}/${floorId}`);
      }, 300);
    }
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
    return (
      <div className="flex flex-col gap-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
          <Building className="mr-3 h-6 w-6 text-indigo-600" />
          {t("selectBuilding")}
        </h2>
        <>
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-gray-900 mb-4 flex items-center">
              <Layers className="mr-2 h-5 w-5 text-indigo-600" />
              {t("aBlock")}
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 border border-gray-200 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <Layers className="h-5 w-5 mr-2 text-indigo-600" />
                  <span className="text-sm text-gray-600">
                    {t("totalFloors")}
                  </span>
                </div>
                <div className="font-bold text-2xl text-gray-900">26</div>
              </div>
              <div className="bg-gray-50 border border-gray-200 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <Home className="h-5 w-5 mr-2 text-indigo-600" />
                  <span className="text-sm text-gray-600">
                    {t("totalUnits")}
                  </span>
                </div>
                <div className="font-bold text-2xl text-gray-900">475</div>
              </div>
              <div className="bg-gray-50 border border-gray-200 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <Calendar className="h-5 w-5 mr-2 text-indigo-600" />
                  <span className="text-sm text-gray-600">
                    {t("completion")}
                  </span>
                </div>
                <div className="font-bold text-2xl text-gray-900">2028</div>
              </div>
            </div>
          </div>
        </>
        <>
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-gray-900 mb-4 flex items-center">
              <Layers className="mr-2 h-5 w-5 text-indigo-600" />
              {t("bBlock")}
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 border border-gray-200 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <Layers className="h-5 w-5 mr-2 text-indigo-600" />
                  <span className="text-sm text-gray-600">
                    {t("totalFloors")}
                  </span>
                </div>
                <div className="font-bold text-2xl text-gray-900">15</div>
              </div>
              <div className="bg-gray-50 border border-gray-200 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <Home className="h-5 w-5 mr-2 text-indigo-600" />
                  <span className="text-sm text-gray-600">
                    {t("totalUnits")}
                  </span>
                </div>
                <div className="font-bold text-2xl text-gray-900">98</div>
              </div>
              <div className="bg-gray-50 border border-gray-200 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <Calendar className="h-5 w-5 mr-2 text-indigo-600" />
                  <span className="text-sm text-gray-600">
                    {t("completion")}
                  </span>
                </div>
                <div className="font-bold text-2xl text-gray-900">2030</div>
              </div>
            </div>
          </div>
        </>
      </div>
    );
  };

  return (
    <section className="min-h-screen bg-white">
      <div className="container2">
        <div className="flex flex-col xl:flex-row gap-8">
          <div ref={containerRef} className="relative w-full xl:w-1/2">
            <div className="relative w-full bg-gray-50 rounded-lg border border-gray-200 overflow-hidden shadow-lg">
              <Image
                ref={imageRef}
                src={getCurrentImage() || "/placeholder.svg"}
                alt="Building plan image"
                className={`w-full transition-opacity duration-300 ${
                  isLoading ? "opacity-60" : ""
                }`}
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
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-sm p-6 rounded-lg border border-gray-200 shadow-lg flex flex-col items-center">
                  <Loader2 className="h-10 w-10 text-indigo-600 animate-spin mb-2" />
                  <p className="text-gray-900">Loading...</p>
                </div>
              )}
              {!selectedBuilding &&
                !isLoading &&
                buildings.map((building) => (
                  <FloorOverlay
                    key={building.id}
                    flatId={Number.parseInt(building.id)}
                    flatNumber={Number.parseInt(building.id)}
                    coords={building.coords}
                    hoveredApartment={
                      hoveredBuilding ? Number.parseInt(hoveredBuilding) : null
                    }
                    setHoveredApartment={(id) =>
                      setHoveredBuilding(id?.toString() || null)
                    }
                    handleFloorClick={() =>
                      handleBuildingClick(
                        building.id,
                        building.floorPlan,
                        building.buidlingId
                      )
                    }
                    scaleFactor={scaleFactor}
                  />
                ))}
              {selectedBuilding &&
                !isLoading &&
                getCurrentFloors().map((floor) => (
                  <FloorOverlay
                    key={floor.id}
                    flatId={Number.parseInt(floor.id)}
                    flatNumber={Number.parseInt(floor.id)}
                    coords={floor.coords}
                    hoveredApartment={
                      hoveredFloor ? Number.parseInt(hoveredFloor) : null
                    }
                    setHoveredApartment={(id) =>
                      setHoveredFloor(id?.toString() || null)
                    }
                    handleFloorClick={() => handleFloorClick(floor.id)}
                    scaleFactor={scaleFactor}
                  />
                ))}
              {!selectedBuilding && hoveredBuilding && !isLoading && (
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-sm px-6 py-3 rounded-lg border border-gray-200 shadow-lg pointer-events-none">
                  <h3 className="text-xl font-bold text-indigo-600">
                    {t("building")} {hoveredBuilding === "1" ? "A" : "B"}
                  </h3>
                </div>
              )}

              {selectedBuilding && hoveredFloor && !isLoading && (
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-6xl md:text-8xl opacity-70 pointer-events-none z-20 drop-shadow-lg">
                  {hoveredFloor}
                </div>
              )}
              {selectedBuilding && !isLoading && (
                <button
                  className="absolute cursor-pointer top-4 left-4 bg-white/95 backdrop-blur-sm text-gray-900 px-4 py-2 rounded-lg border border-gray-200 shadow-md hover:bg-gray-50 transition-all duration-200 flex items-center gap-2"
                  onClick={() => {
                    setIsLoading(true);
                    setTimeout(() => {
                      setSelectedBuilding(null);
                      setHoveredFloor(null);
                      setIsLoading(false);
                    }, 500);
                  }}
                >
                  <ArrowLeft size={16} />
                  {t("back")}
                </button>
              )}
            </div>
          </div>
          <div className="w-full xl:w-1/2">
            <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 h-full">
              {renderRightPanel()}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
