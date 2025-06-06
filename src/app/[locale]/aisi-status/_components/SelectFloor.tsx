"use client";

import { useState, useRef, useEffect } from "react";
import DesktopImage from "@/root/public/images/status/Status2.png";
 
import Image from "next/image";
import { useMediaQuery } from "@/use-media-query";
import { FloorOverlay } from "@/components/shared/overlay/FloorOverlay";
import { useRouter } from "next/navigation";
import { Building, Layers, Home, Car, Calendar } from "lucide-react";
import {
  desktopAreas,
  mobileAreas,
} from "@/constants/coordinants/statusFloorCoord";
import background from "@/root/public/images/bg-body.jpg";

const ORIGINAL_IMAGE_WIDTH = 1920;
const MOBILE_IMAGE_WIDTH = 1457;

export default function SelectFloor() {
  const [hoveredApartment, setHoveredApartment] = useState<number | null>(null);
  const [scaleFactor, setScaleFactor] = useState<number>(1);
  const imageRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery("(max-width: 768px)");

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

  const router = useRouter();

  const handleFloorClick = (floorId: number) => {
    const buildingId = 1;
    const floorPlanId = 1;

    router.push(`/aisi-goderdzi/${buildingId}/${floorPlanId}/${floorId}`);
  };

  const currentImage = DesktopImage;
  const currentAreas = isMobile ? mobileAreas : desktopAreas;

  return (
    <section
      style={{ backgroundImage: `url(${background.src})` }}
      className="px-4 md:px-8 lg:px-16 py-10 bg-white"
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
              <Image
                ref={imageRef}
                src={currentImage || "/placeholder.svg"}
                alt="Floor plan image"
                className="w-full"
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
              {currentAreas.map((area) => (
                <FloorOverlay
                  key={area.id}
                  flatId={area.id}
                  flatNumber={area.id}
                  coords={area.coords}
                  hoveredApartment={hoveredApartment}
                  setHoveredApartment={setHoveredApartment}
                  handleFloorClick={() => handleFloorClick(area.id)}
                  scaleFactor={scaleFactor}
                />
              ))}
              {hoveredApartment && (
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-6xl md:text-8xl opacity-70 pointer-events-none z-20 drop-shadow-lg">
                  {hoveredApartment}
                </div>
              )}
            </div>
          </div>
          <div className="w-full xl:w-1/3">
            <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 backdrop-blur-2xl border-2 border-white/10 rounded-3xl p-6 h-full hover:border-white/25 transition-all duration-700 ease-out">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Building className="mr-3 h-6 w-6 text-white" />
                Building Overview
              </h2>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 backdrop-blur-2xl border-2 border-white/10 p-4 rounded-2xl hover:border-white/25 transition-all duration-300 hover:scale-[1.02] transform-gpu">
                    <div className="flex items-center mb-2">
                      <Layers className="h-5 w-5 mr-2 text-white" />
                      <span className="text-sm text-white/80">
                        Total Floors
                      </span>
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
                      <span className="text-sm text-white/80">
                        Parking Spots
                      </span>
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
                  <h4 className="text-white font-medium mb-2">
                    How to Navigate
                  </h4>
                  <ul className="text-sm text-white/80 space-y-1">
                    <li>• Hover over colored areas to see floor numbers</li>
                    <li>• Click on any floor to view apartment details</li>
                    <li>• Each color represents a different floor level</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}