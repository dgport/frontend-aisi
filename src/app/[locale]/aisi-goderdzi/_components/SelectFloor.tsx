"use client";

import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import DesktopImage from "@/root/public/images/goderdzi/FloorSelectDesktop.jpg";
import MobileImage from "@/root/public/images/goderdzi/FloorSelectMobile.jpg";
import Image from "next/image";
import { useMediaQuery } from "@/use-media-query";
import { FloorOverlay } from "@/components/shared/overlay/FloorOverlay";
import { useRouter } from "next/navigation";
import { Building, Layers, Home, Car, Calendar, Loader2 } from "lucide-react";
import {
  desktopAreas,
  mobileAreas,
} from "@/constants/coordinants/goderdziFloorCoord";
import background from "@/root/public/images/bg-body.jpg";
import { useFloorStore } from "@/zustand/floorStore";

const ORIGINAL_IMAGE_WIDTH = 1920;
const MOBILE_IMAGE_WIDTH = 1457;

// Memoized FloorOverlay component
const MemoizedFloorOverlay = React.memo(
  FloorOverlay,
  (prevProps, nextProps) => {
    return (
      prevProps.flatId === nextProps.flatId &&
      prevProps.hoveredApartment === nextProps.hoveredApartment &&
      prevProps.scaleFactor === nextProps.scaleFactor &&
      JSON.stringify(prevProps.coords) === JSON.stringify(nextProps.coords)
    );
  }
);
MemoizedFloorOverlay.displayName = "MemoizedFloorOverlay";

// Memoized building stats component
const BuildingStats = React.memo(() => (
  <div className="space-y-4">
    <div className="grid grid-cols-2 gap-4">
      <div className="bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 backdrop-blur-2xl border-2 border-white/10 p-4 rounded-2xl hover:border-white/25 transition-all duration-300 hover:scale-[1.02] transform-gpu">
        <div className="flex items-center mb-2">
          <Layers className="h-5 w-5 mr-2 text-white" />
          <span className="text-sm text-white/80">Total Floors</span>
        </div>
        <div className="font-bold text-2xl text-white">4</div>
      </div>
      <div className="bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 backdrop-blur-2xl border-2 border-white/10 p-4 rounded-2xl hover:border-white/25 transition-all duration-300 hover:scale-[1.02] transform-gpu">
        <div className="flex items-center mb-2">
          <Home className="h-5 w-5 mr-2 text-white" />
          <span className="text-sm text-white/80">Total Units</span>
        </div>
        <div className="font-bold text-2xl text-white">36</div>
      </div>
      <div className="bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 backdrop-blur-2xl border-2 border-white/10 p-4 rounded-2xl hover:border-white/25 transition-all duration-300 hover:scale-[1.02] transform-gpu">
        <div className="flex items-center mb-2">
          <Car className="h-5 w-5 mr-2 text-white" />
          <span className="text-sm text-white/80">Parking Spots</span>
        </div>
        <div className="font-bold text-2xl text-white">42</div>
      </div>
      <div className="bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 backdrop-blur-2xl border-2 border-white/10 p-4 rounded-2xl hover:border-white/25 transition-all duration-300 hover:scale-[1.02] transform-gpu">
        <div className="flex items-center mb-2">
          <Calendar className="h-5 w-5 mr-2 text-white" />
          <span className="text-sm text-white/80">Completion</span>
        </div>
        <div className="font-bold text-2xl text-white">2025</div>
      </div>
    </div>
    <div className="mt-6 p-4 bg-gradient-to-br from-slate-800/50 via-slate-700/50 to-slate-900/50 backdrop-blur-xl border-2 border-white/10 rounded-2xl hover:border-white/25 transition-all duration-300">
      <h4 className="text-white font-medium mb-2">How to Navigate</h4>
      <ul className="text-sm text-white/80 space-y-1">
        <li>• Hover over colored areas to see floor numbers</li>
        <li>• Click on any floor to view apartment details</li>
        <li>• Each color represents a different floor level</li>
      </ul>
    </div>
  </div>
));
BuildingStats.displayName = "BuildingStats";

export default function GoderdziSelectFloor() {
  const [hoveredApartment, setHoveredApartment] = useState<number | null>(null);
  const [scaleFactor, setScaleFactor] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);

  const imageRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const router = useRouter();

  // Zustand store actions
  const { setBuildingContext, setCurrentFloor } = useFloorStore();

  // Stable scale factor update function
  const updateScaleFactor = useCallback(() => {
    if (imageRef.current) {
      const currentImageWidth = imageRef.current.clientWidth;
      const baseWidth = isMobile ? MOBILE_IMAGE_WIDTH : ORIGINAL_IMAGE_WIDTH;
      setScaleFactor(currentImageWidth / baseWidth);
    }
  }, [isMobile]);

  // Optimized resize observer setup
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    const debouncedUpdate = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(updateScaleFactor, 100);
    };

    const resizeObserver = new ResizeObserver(debouncedUpdate);

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    window.addEventListener("resize", debouncedUpdate);

    return () => {
      clearTimeout(timeoutId);
      if (containerRef.current) {
        resizeObserver.unobserve(containerRef.current);
      }
      resizeObserver.disconnect();
      window.removeEventListener("resize", debouncedUpdate);
    };
  }, [updateScaleFactor]);

  // Stable floor click handler
  const handleFloorClick = useCallback(
    (floorId: number) => {
      const buildingId = 1;
      const floorPlanId = 1;

      setIsLoading(true);

      // Set building context and floor in Zustand store
      setBuildingContext(buildingId.toString(), floorPlanId.toString());
      setCurrentFloor(floorId);

      setTimeout(() => {
        router.push(`/aisi-goderdzi/${buildingId}/${floorPlanId}/${floorId}`);
      }, 300);
    },
    [router, setBuildingContext, setCurrentFloor]
  );

  // Stable image load handler
  const handleImageLoad = useCallback(() => {
    setImageLoaded(true);
    updateScaleFactor();

    setTimeout(() => {
      setIsLoading(false);
    }, 100);
  }, [updateScaleFactor]);

  // Stable hover handlers
  const stableSetHoveredApartment = useCallback((id: number | null) => {
    setHoveredApartment(id);
  }, []);

  // Memoized current image and areas
  const currentImage = useMemo(
    () => (isMobile ? MobileImage : DesktopImage),
    [isMobile]
  );
  const currentAreas = useMemo(
    () => (isMobile ? mobileAreas : desktopAreas),
    [isMobile]
  );

  return (
    <section
      style={{ backgroundImage: `url(${background.src})` }}
      className="px-4 md:px-8 lg:px-16 py-10 bg-white min-h-screen"
    >
      <div className="container2">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Select Your Floor
          </h1>
        </div>
        <div className="flex flex-col xl:flex-row gap-8">
          <div ref={containerRef} className="relative w-full xl:w-2/3">
            <div className="relative w-full bg-gray-50 rounded-lg border-3 border-slate-500 overflow-hidden">
              {isLoading && (
                <div className="absolute inset-0 z-50 flex items-center justify-center bg-slate-900/80 backdrop-blur-sm">
                  <div className="bg-white/95 backdrop-blur-sm p-6 rounded-lg border border-gray-200 flex flex-col items-center">
                    <Loader2 className="h-10 w-10 text-indigo-600 animate-spin mb-2" />
                    <p className="text-gray-900">Loading floor plan...</p>
                  </div>
                </div>
              )}

              <Image
                ref={imageRef}
                src={currentImage || "/placeholder.svg"}
                alt="Floor plan image"
                className={`w-full transition-opacity duration-300 ${
                  isLoading ? "opacity-60" : ""
                }`}
                priority
                onLoad={handleImageLoad}
              />

              {imageLoaded &&
                !isLoading &&
                currentAreas.map((area) => (
                  <MemoizedFloorOverlay
                    key={area.id}
                    flatId={area.id}
                    flatNumber={area.id}
                    coords={area.coords}
                    hoveredApartment={hoveredApartment}
                    setHoveredApartment={stableSetHoveredApartment}
                    handleFloorClick={() => handleFloorClick(area.id)}
                    scaleFactor={scaleFactor}
                  />
                ))}

              {hoveredApartment && imageLoaded && !isLoading && (
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-6xl md:text-8xl opacity-70 pointer-events-none z-20 drop-shadow-lg">
                  {hoveredApartment}
                </div>
              )}
            </div>
          </div>

          <div className="w-full xl:w-1/3">
            <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 backdrop-blur-2xl border-2 border-white/10 rounded-3xl p-6 h-full hover:border-white/25 transition-all duration-700 ease-out">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Building className="mr-3 h-6 w-6 text-white" />
                Building Overview
              </h2>
              <BuildingStats />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
