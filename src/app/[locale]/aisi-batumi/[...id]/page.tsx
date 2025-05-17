"use client";

import React, { useState, useMemo, useCallback } from "react";
import { useQuery } from "@tanstack/react-query";
import { floorPlansAPI } from "@/routes/floorPlans";
import { useApartmentPaths } from "@/hooks/UseApartmentsPaths";
import { ApartmentOverlay } from "@/components/shared/overlay/ApartmentOverlay";
import { useParams, useRouter } from "next/navigation";
import { ImageResizer } from "@/components/shared/responsiveImage/FloorPlanResizer";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import LocaleSwitcher from "@/i18n/LocaleSwitcher";
import { ApartmentDetailsSheet } from "@/components/shared/apartmentInfo/ApartmentDetailsSheet";
import {
  BATUMI_MAX_SIZE,
  BATUMI_ORIGINAL_DIMENSIONS,
} from "@/constants/batumiFloorSizes";
import { FloorSelector } from "@/components/shared/floorInfo/FloorSelect";

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

  const selectedFloorPlan = useMemo(() => {
    if (!floorPlans || floorPlans.length === 0) return null;

    return (
      floorPlans.find((plan) => plan.id.toString() === floorPlanId) || null
    );
  }, [floorPlans, floorPlanId]);

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
    floorPlansError ||
    apartmentsError ||
    (!isLoading && (!floorPlans.length || !selectedFloorPlan));

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

  const handleBack = useCallback(() => {
    router.back();
  }, [router]);

  const imagePath = useMemo(() => {
    if (selectedFloorPlan) {
      return isMobile
        ? `${process.env.NEXT_PUBLIC_IMAGE_URL}/${selectedFloorPlan.mobile_image}`
        : `${process.env.NEXT_PUBLIC_IMAGE_URL}/${selectedFloorPlan.desktop_image}`;
    }
    return "/placeholder.svg";
  }, [selectedFloorPlan, isMobile]);

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

  const shouldShowHeader = !isLoading;

  return (
    <main
      className={`relative ${
        isMobile ? "min-h-screen" : "h-screen"
      } w-full bg-gray-50 ${
        isMobile ? "overflow-y-auto" : "overflow-hidden"
      } z-50`}
    >
      {isLoading ? (
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
                  className="flex items-center gap-1"
                >
                  <ChevronLeft size={16} />
                  <span className="hidden md:inline">Back</span>
                </Button>
              </div>

              <div className="mx-4 flex items-center gap-3">
                <FloorSelector
                  currentFloor={parseInt(floorId)}
                  floorRangeStart={selectedFloorPlan?.floor_range_start}
                  floorRangeEnd={selectedFloorPlan?.floor_range_end}
                  buildingId={buildingId}
                  floorPlanId={floorPlanId}
                  route="aisi-batumi"
                />
              </div>

              <LocaleSwitcher />
            </div>
          )}

          <div
            className={`${
              isMobile ? "mt-2" : "flex-1 overflow-hidden min-h-0"
            }`}
          >
            <MemoizedImageResizer
              imageSrc={imagePath || "/placeholder.svg"}
              altText={`${
                selectedFloorPlan?.name || "Building"
              } - Floor ${floorId} Plan`}
              originalDimensions={BATUMI_ORIGINAL_DIMENSIONS}
              maxDimensions={BATUMI_MAX_SIZE}
              isMobile={isMobile}
              priority
              key={`floor-${floorId}-plan-${floorPlanId}`}
            >
              {apartmentOverlays}
            </MemoizedImageResizer>
          </div>

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
