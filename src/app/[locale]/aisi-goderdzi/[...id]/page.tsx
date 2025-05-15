"use client";

import React, { useState, useMemo, useCallback, useTransition } from "react";
import { useQuery } from "@tanstack/react-query";
import { floorPlansAPI } from "@/routes/floorPlans";
import { useApartmentPaths } from "@/hooks/UseApartmentsPaths";
import { ApartmentOverlay } from "@/components/shared/overlay/ApartmentOverlay";
import { useParams, useRouter } from "next/navigation";
import {
  GODERDZI_MAX_SIZE,
  GODERDZI_ORIGINAL_DIMENSIONS,
} from "@/constants/goderdziFloorSizes";
import { ImageResizer } from "@/components/shared/responsiveImage/FloorPlanResizer";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import LocaleSwitcher from "@/i18n/LocaleSwitcher";

import FloorSelectorCarousel from "../../../../components/shared/floorInfo/SelectFloorCarousel";
import { ApartmentDetailsSheet } from "@/components/shared/apartmentInfo/ApartmentDetailsSheet";

interface ParamIds {
  buildingId: string;
  floorPlanId: string;
  floorId: string;
}

interface SelectedApartment {
  id: number;
  number: number;
  area?: number;
  rooms?: number;
  status: string;
  floor?: number;
  price?: number;
  images?: string[];
}
const MemoizedImageResizer = React.memo(ImageResizer);
const MemoizedApartmentOverlay = React.memo(ApartmentOverlay);

const LoadingIndicator = ({ message = "Loading..." }) => (
  <div className="flex flex-col items-center justify-center h-full w-full">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600 mb-4"></div>
    <p className="text-gray-600 text-sm">{message}</p>
  </div>
);

export default function FloorPlanPage() {
  const [isPending, startTransition] = useTransition();
  const [hoveredApartment, setHoveredApartment] = useState<number | null>(null);
  const [selectedApartment, setSelectedApartment] = useState<
    SelectedApartment | undefined
  >(undefined);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const params = useParams();
  const router = useRouter();

  const parseIds = useCallback((): ParamIds => {
    const idArray = Array.isArray(params.id) ? params.id : [params.id];
    return {
      buildingId: idArray[0] || "",
      floorPlanId: idArray[1] || "",
      floorId: idArray[2] || "",
    };
  }, [params.id]);

  const { buildingId, floorPlanId, floorId } = parseIds();
  const hasValidIds = Boolean(buildingId && floorPlanId && floorId);

  const {
    data: floorPlans = [],
    isLoading: isLoadingFloorPlans,
    error: floorPlansError,
  } = useQuery<any[]>({
    queryKey: ["floorPlanList", buildingId],
    queryFn: async () => {
      if (!buildingId) return [];

      try {
        const response = await floorPlansAPI.getList(buildingId);
        return response;
      } catch (err) {
        console.error("Error fetching floor plans:", err);
        return [];
      }
    },
    staleTime: 5 * 60 * 1000,
    gcTime: 30 * 60 * 1000,
    retry: 2,
    enabled: Boolean(buildingId),
  });

  const {
    data: apartmentsData,
    isLoading: isLoadingApartments,
    error: apartmentsError,
  } = useQuery({
    queryKey: ["apartments", buildingId, floorPlanId, floorId],
    queryFn: async () => {
      if (!hasValidIds) throw new Error("Missing required IDs");
      return floorPlansAPI.getApartments(buildingId, floorPlanId, floorId);
    },
    staleTime: 5 * 60 * 1000,
    gcTime: 30 * 60 * 1000,
    retry: 2,
    enabled: hasValidIds,
  });

  const isLoading = isLoadingFloorPlans || isLoadingApartments;
  const hasError =
    floorPlansError || apartmentsError || (!floorPlans.length && !isLoading);

  const { isMobile, apartmentAreas } = useApartmentPaths(apartmentsData);

  const handleApartmentClick = useCallback(
    (flatId: number, flatNumber: number) => {
      const apartmentData =
        apartmentsData?.apartments?.[0]?.apartments?.[0]?.apartments?.find(
          (apartment: any) => Number(apartment.flat_number) === flatNumber
        );

      if (apartmentData) {
        const formattedApartment = {
          id: parseInt(apartmentData.flat_id),
          number: apartmentData.flat_number,
          area: parseFloat(apartmentData.square_meters) || 0,
          status: apartmentData.status,
          floor: apartmentsData?.apartments?.[0]?.apartments?.[0]?.floor || 1,
          price: apartmentData.sqm_price
            ? parseFloat(apartmentData.sqm_price) *
              parseFloat(apartmentData.square_meters)
            : undefined,
          images: apartmentData.images || [],
        };

        setSelectedApartment(formattedApartment);
        setIsSheetOpen(true);
      }
    },
    [apartmentsData]
  );

  const handleCloseSheet = () => {
    setIsSheetOpen(false);
  };

  const availableFloors = useMemo(() => [1, 2, 3, 4], []);

  const handleFloorSelect = useCallback(
    (floor: number) => {
      if (Number(floorId) === floor) return;

      startTransition(() => {
        router.replace(`/aisi-goderdzi/${buildingId}/${floorPlanId}/${floor}`, {
          scroll: false,
        });
      });
    },
    [router, buildingId, floorPlanId, floorId]
  );

  const handleBack = useCallback(() => {
    router.back();
  }, [router]);

  const imagePath = useMemo(() => {
    if (floorPlans.length > 0) {
      return isMobile
        ? `http://localhost:3001/${floorPlans[0]?.mobile_image}`
        : `http://localhost:3001/${floorPlans[0]?.desktop_image}`;
    }
    return "/placeholder.svg";
  }, [floorPlans, isMobile]);

  const apartmentOverlays = useCallback(
    ({
      scaleFactorX,
      scaleFactorY,
    }: {
      scaleFactorY: number;
      scaleFactorX: number;
    }) => (
      <>
        {apartmentAreas.map((area) => (
          <MemoizedApartmentOverlay
            key={area.flatId}
            flatId={area.flatId}
            flatNumber={area.flatNumber}
            status={area.status}
            coords={area.coords}
            hoveredApartment={hoveredApartment}
            setHoveredApartment={setHoveredApartment}
            onApartmentClick={handleApartmentClick}
            scaleFactorX={scaleFactorX}
            scaleFactorY={scaleFactorY}
          />
        ))}
      </>
    ),
    [apartmentAreas, hoveredApartment, handleApartmentClick]
  );

  const shouldShowHeader = !isLoading || isPending;

  return (
    <main
      className={`relative ${
        isMobile ? "min-h-screen" : "h-screen"
      } w-full bg-gray-50 ${
        isMobile ? "overflow-y-auto" : "overflow-hidden"
      } z-50`}
    >
      {isLoading && !isPending ? (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
          <LoadingIndicator message="Loading floor plan data..." />
        </div>
      ) : hasError ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-50">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md">
            <h1 className="text-2xl font-bold text-red-700 mb-2">
              Unable to Load Data
            </h1>
            <p className="text-gray-700 mb-4">
              We couldn't load the floor plan data. Please try again later or
              contact support.
            </p>
            <Button
              onClick={handleBack}
              className="bg-red-600 hover:bg-red-700 text-white"
            >
              Go Back
            </Button>
          </div>
        </div>
      ) : (
        <div className={`flex flex-col ${isMobile ? "" : "h-full"}`}>
          {shouldShowHeader && (
            <div className="bg-white flex justify-start items-center rounded-xl shadow-lg py-5 px-4 md:px-10">
              <div className="flex-shrink-0">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleBack}
                  disabled={isPending}
                  className="flex items-center gap-1"
                >
                  <ChevronLeft size={16} />
                  <span className="hidden md:inline">Back</span>
                </Button>
              </div>

              <div className="mx-4 flex items-center">
                <div className="bg-blue-50 border border-blue-200 rounded-lg px-4 py-1.5 flex items-center">
                  <span className="text-sm text-blue-700 font-medium">
                    Floor: {floorId}
                  </span>
                </div>
              </div>

              <FloorSelectorCarousel
                availableFloors={availableFloors}
                currentFloor={Number(floorId)}
                onFloorSelect={handleFloorSelect}
                isPending={isPending}
              />

              <LocaleSwitcher />
            </div>
          )}

          {isPending ? (
            <div className="absolute inset-0 bg-white/60 flex items-center justify-center z-10">
              <LoadingIndicator message={`Loading floor ${floorId} data...`} />
            </div>
          ) : (
            <div
              className={`${
                isMobile ? "mt-2" : "flex-1 overflow-hidden min-h-0"
              }`}
            >
              <MemoizedImageResizer
                imageSrc={imagePath || "/placeholder.svg"}
                altText={`Floor ${floorId} Plan`}
                originalDimensions={GODERDZI_ORIGINAL_DIMENSIONS}
                maxDimensions={GODERDZI_MAX_SIZE}
                isMobile={isMobile}
                priority
                key={`floor-${floorId}`}
              >
                {apartmentOverlays}
              </MemoizedImageResizer>
            </div>
          )}

          <ApartmentDetailsSheet
            isOpen={isSheetOpen}
            onClose={handleCloseSheet}
            apartment={selectedApartment || null}
          />
        </div>
      )}
    </main>
  );
}
