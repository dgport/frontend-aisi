"use client";

import { useState, useRef, useEffect } from "react";
import DesktopImage from "@/root/public/images/goderdzi/FloorSelectDesktop.jpg";
import MobileImage from "@/root/public/images/goderdzi/FloorSelectMobile.jpg";
import Image from "next/image";
import { useMediaQuery } from "@/use-media-query";
import { FloorOverlay } from "@/components/shared/overlay/FloorOverlay";
import { useRouter } from "next/navigation";
import { Building, Layers, Home, Car, Calendar } from "lucide-react";
import {
  desktopAreas,
  mobileAreas,
} from "@/constants/coordinants/goderdziFloorCoord";

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

  const currentImage = isMobile ? MobileImage : DesktopImage;
  const currentAreas = isMobile ? mobileAreas : desktopAreas;

   

  return (
    <section>
      <div className="flex flex-col md:flex-row gap-10">
        <div ref={containerRef} className="relative w-full md:w-2/3">
          <div className="relative w-full">
            <Image
              ref={imageRef}
              src={currentImage}
              alt="Floor plan image"
              className="w-full rounded-lg"
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
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-8xl opacity-50 pointer-events-none">
                {hoveredApartment}
              </div>
            )}
          </div>
        </div>

        <div className="w-full md:w-1/3 border border-gray-300 rounded-lg overflow-auto">
          <div className="bg-white p-6 rounded-lg shadow-sm h-full flex flex-col">
            <h2 className="text-2xl font-bold mb-4">Select Your Floor</h2>
            <p className="text-gray-700 mb-6">
              Explore our available floors and find your perfect home. Hover
              over the floor plan on the left to view details for each floor.
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
                    <div className="font-bold text-lg">4</div>
                  </div>
                </div>
                <div className="bg-gray-50 p-3 rounded-md flex items-center">
                  <Home className="h-5 w-5 mr-2 text-gray-500" />
                  <div>
                    <div className="text-sm text-gray-500">Total Units</div>
                    <div className="font-bold text-lg">36</div>
                  </div>
                </div>
                <div className="bg-gray-50 p-3 rounded-md flex items-center">
                  <Car className="h-5 w-5 mr-2 text-gray-500" />
                  <div>
                    <div className="text-sm text-gray-500">Parking Spots</div>
                    <div className="font-bold text-lg">42</div>
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
          </div>
        </div>
      </div>
    </section>
  );
}
