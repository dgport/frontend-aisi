"use client";

import React, { useState, useMemo, useCallback } from "react";
import { useQuery } from "@tanstack/react-query";
import { floorPlansAPI } from "@/routes/floorPlans";
import { useApartmentPaths } from "@/hooks/UseApartmentsPaths";
import { ApartmentOverlay } from "@/components/shared/overlay/ApartmentOverlay";
import { useParams } from "next/navigation";
import { ImageResizer } from "@/components/shared/responsiveImage/FloorPlanResizer";
import {
  BATUMI_MAX_SIZE,
  BATUMI_ORIGINAL_DIMENSIONS,
} from "@/constants/batumiFloorSizes";
import { FloorSelector } from "@/components/shared/floorInfo/FloorSelect";
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

export default function FloorPlanPage() {
  const [hoveredApartment, setHoveredApartment] = useState<number | null>(null);
  const [selectedApartment, setSelectedApartment] = useState<
    SelectedApartment | undefined
  >(undefined);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const params = useParams();

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

  const { data: floorPlans = [] } = useQuery<any[]>({
    queryKey: ["floorPlanList", buildingId],
    queryFn: async () => {
      if (!buildingId) return [];
      const response = await floorPlansAPI.getList(buildingId);
      return response;
    },
    staleTime: 5 * 60 * 1000,
    gcTime: 30 * 60 * 1000,
    retry: 2,
    enabled: Boolean(buildingId),
  });

  const selectedFloorPlan = useMemo(() => {
    if (!floorPlans?.length) return null;
    return (
      floorPlans.find((plan) => plan.id.toString() === floorPlanId) || null
    );
  }, [floorPlans, floorPlanId]);

  const block = useMemo(() => {
    return floorPlanId === "2" ? "b_block" : "a_block";
  }, [floorPlanId]);

  const originalDimensions = useMemo(
    () => BATUMI_ORIGINAL_DIMENSIONS[block],
    [block]
  );
  const maxDimensions = useMemo(() => BATUMI_MAX_SIZE[block], [block]);

  const { data: apartmentsData } = useQuery({
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

  const imagePath = useMemo(() => {
    if (!selectedFloorPlan) return "/placeholder.svg";

    const imageUrl = isMobile
      ? selectedFloorPlan.mobile_image
      : selectedFloorPlan.desktop_image;

    return `${process.env.NEXT_PUBLIC_IMAGE_URL}/${imageUrl}`;
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

  return (
    <main
      className={` w-full  pt-24 md:pt-28 pb-10 min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900  ${
        isMobile ? "min-h-screen overflow-y-auto" : "h-auto"
      }`}
    >
      <div className={`flex flex-col ${isMobile ? "" : "h-full"}`}>
        <div className="flex w-full justify-center items-center">
          <FloorSelector
            currentFloor={Number.parseInt(floorId)}
            floorRangeStart={selectedFloorPlan?.floor_range_start}
            floorRangeEnd={selectedFloorPlan?.floor_range_end}
            buildingId={buildingId}
            floorPlanId={floorPlanId}
            route="aisi-batumi"
          />
        </div>

        <div className="flex-1 min-h-0">
          <MemoizedImageResizer
            imageSrc={imagePath}
            altText={`${
              selectedFloorPlan?.name || "Building"
            } - Floor ${floorId} Plan`}
            originalDimensions={originalDimensions}
            maxDimensions={maxDimensions}
            isMobile={isMobile}
            priority
            key={`floor-${floorId}-plan-${floorPlanId}`}
          >
            {apartmentOverlays}
          </MemoizedImageResizer>
        </div>
        <ApartmentDetailsSheet
          isOpen={isSheetOpen}
          onClose={() => setIsSheetOpen(false)}
          apartment={selectedApartment || null}
        />
      </div>
    </main>
  );
}