"use client";

import React, {
  useState,
  useMemo,
  useCallback,
  useEffect,
  useRef,
} from "react";
import { useQuery } from "@tanstack/react-query";
import { floorPlansAPI } from "@/routes/floorPlans";
import { useApartmentPaths } from "@/hooks/UseApartmentsPaths";
import { ApartmentOverlay } from "@/components/shared/overlay/ApartmentOverlay";
import { useParams } from "next/navigation";
import {
  STATUS_MAX_SIZE,
  STATUS_ORIGINAL_DIMENSIONS,
} from "@/constants/statusFloorSizes";
import { ImageResizer } from "@/components/shared/responsiveImage/FloorPlanResizer";
import { FloorSelector } from "@/components/shared/floorInfo/FloorSelect";
import { ApartmentDetailsSheet } from "@/components/shared/apartmentInfo/ApartmentDetailsSheet";
import { useFloorStore } from "@/zustand/floorStore";
import { Loader2 } from "lucide-react";

interface ParamIds {
  buildingId: string;
  floorPlanId: string;
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

const MemoizedApartmentOverlay = React.memo(ApartmentOverlay);

const MemoizedFloorSelector = React.memo(
  FloorSelector,
  (prevProps, nextProps) => {
    return (
      prevProps.floorRangeStart === nextProps.floorRangeStart &&
      prevProps.floorRangeEnd === nextProps.floorRangeEnd &&
      prevProps.buildingId === nextProps.buildingId &&
      prevProps.floorPlanId === nextProps.floorPlanId &&
      prevProps.disabled === nextProps.disabled
    );
  }
);
MemoizedFloorSelector.displayName = "MemoizedFloorSelector";

const FloorPlanImageSection = React.memo(
  ({
    selectedFloorPlan,
    floorPlanId,
    originalDimensions,
    maxDimensions,
    isMobile,
    apartmentAreas,
    hoveredApartment,
    setHoveredApartment,
    handleApartmentClick,
    currentFloor,
  }: {
    selectedFloorPlan: any;
    floorPlanId: string;
    originalDimensions: any;
    maxDimensions: any;
    isMobile: boolean;
    apartmentAreas: any[];
    hoveredApartment: number | null;
    setHoveredApartment: (id: number | null) => void;
    handleApartmentClick: (flatId: number, flatNumber: number) => void;
    currentFloor: number | undefined;
  }) => {
    const imagePath = useMemo(() => {
      if (!selectedFloorPlan) return "/placeholder.svg";

      const imageUrl = isMobile
        ? selectedFloorPlan.mobile_image
        : selectedFloorPlan.desktop_image;

      const baseURL =
        process.env.NEXT_PUBLIC_IMAGE_URL ||
        (typeof window !== "undefined" ? window.location.origin : "");

      return `${baseURL}/${imageUrl}`;
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
              key={`${area.flatId}-${currentFloor}`}
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
      [apartmentAreas, hoveredApartment, handleApartmentClick, currentFloor]
    );

    return (
      <div className="flex-1 min-h-0 relative">
        <div className="w-full h-full">
          <ImageResizer
            imageSrc={imagePath}
            altText={`${
              selectedFloorPlan?.name || "Building"
            } - Floor ${currentFloor} Plan`}
            originalDimensions={originalDimensions}
            maxDimensions={maxDimensions}
            isMobile={isMobile}
            priority
            key={`plan-${floorPlanId}`}
          >
            {apartmentOverlays}
          </ImageResizer>
        </div>
      </div>
    );
  },
  (prevProps, nextProps) => {
    return (
      prevProps.floorPlanId === nextProps.floorPlanId &&
      prevProps.isMobile === nextProps.isMobile &&
      prevProps.hoveredApartment === nextProps.hoveredApartment &&
      JSON.stringify(prevProps.apartmentAreas) ===
        JSON.stringify(nextProps.apartmentAreas) &&
      prevProps.selectedFloorPlan?.id === nextProps.selectedFloorPlan?.id
    );
  }
);
FloorPlanImageSection.displayName = "FloorPlanImageSection";

export default function StatusFloorPlanPage() {
  const [hoveredApartment, setHoveredApartment] = useState<number | null>(null);
  const [selectedApartment, setSelectedApartment] = useState<
    SelectedApartment | undefined
  >(undefined);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const params = useParams();
  const apartmentsDataCache = useRef<Map<string, any>>(new Map());

  const {
    currentFloor,
    buildingId: storeBuildingId,
    floorPlanId: storeFloorPlanId,
    setBuildingContext,
  } = useFloorStore();

  const parseIds = useCallback((): ParamIds => {
    const idArray = Array.isArray(params.id) ? params.id : [params.id];
    return {
      buildingId: idArray[0] || "",
      floorPlanId: idArray[1] || "",
    };
  }, [params.id]);

  const { buildingId, floorPlanId } = parseIds();

  useEffect(() => {
    if (
      buildingId &&
      floorPlanId &&
      (buildingId !== storeBuildingId || floorPlanId !== storeFloorPlanId)
    ) {
      setBuildingContext(buildingId, floorPlanId);
    }
  }, [
    buildingId,
    floorPlanId,
    storeBuildingId,
    storeFloorPlanId,
    setBuildingContext,
  ]);

  const hasValidIds = Boolean(buildingId && floorPlanId);

  const { data: floorPlans = [], isLoading: floorPlansLoading } = useQuery<
    any[]
  >({
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
    if (!floorPlans?.length || !floorPlanId) return null;
    return (
      floorPlans.find((plan) => plan.id.toString() === floorPlanId) || null
    );
  }, [floorPlans, floorPlanId]);

  const floorRangeProps = useMemo(
    () => ({
      floorRangeStart: selectedFloorPlan?.floor_range_start,
      floorRangeEnd: selectedFloorPlan?.floor_range_end,
    }),
    [selectedFloorPlan?.floor_range_start, selectedFloorPlan?.floor_range_end]
  );

  const { data: apartmentsData } = useQuery({
    queryKey: ["apartments", buildingId, floorPlanId, currentFloor],
    queryFn: async () => {
      if (!hasValidIds || !currentFloor) return null;

      const cacheKey = `${buildingId}-${floorPlanId}-${currentFloor}`;

      if (apartmentsDataCache.current.has(cacheKey)) {
        return apartmentsDataCache.current.get(cacheKey);
      }

      const data = await floorPlansAPI.getApartments(
        buildingId,
        floorPlanId,
        currentFloor.toString()
      );

      apartmentsDataCache.current.set(cacheKey, data);

      return data;
    },
    staleTime: 10 * 60 * 1000,
    gcTime: 30 * 60 * 1000,
    retry: 2,
    enabled: hasValidIds && Boolean(currentFloor),
    select: (data) => data || { apartments: [] },
  });

  const { isMobile, apartmentAreas } = useApartmentPaths(apartmentsData);

  const stableSetHoveredApartment = useCallback((id: number | null) => {
    setHoveredApartment(id);
  }, []);

  const handleApartmentClick = useCallback(
    (flatId: number, flatNumber: number) => {
      const apartmentInfo = apartmentsData?.apartments?.[0]?.apartments?.[0];
      if (!apartmentInfo) {
        console.warn("No apartment info found for the current floor plan.");
        return;
      }

      const apartmentData = apartmentInfo.apartments?.find(
        (apartment: any) => Number(apartment.flat_number) === flatNumber
      );

      if (apartmentData) {
        const formattedApartment: SelectedApartment = {
          id: Number.parseInt(apartmentData.flat_id),
          number: apartmentData.flat_number,
          area: Number.parseFloat(apartmentData.square_meters) || 0,
          status: apartmentData.status,
          floor: apartmentInfo.floor || currentFloor,
          price: apartmentData.sqm_price
            ? Number.parseFloat(apartmentData.sqm_price) *
              Number.parseFloat(apartmentData.square_meters)
            : undefined,
          images: apartmentData.images || [],
        };

        setSelectedApartment(formattedApartment);
        setIsSheetOpen(true);
      }
    },
    [apartmentsData, currentFloor]
  );

  const imageSectonProps = useMemo(
    () => ({
      selectedFloorPlan,
      floorPlanId,
      originalDimensions: STATUS_ORIGINAL_DIMENSIONS,
      maxDimensions: STATUS_MAX_SIZE,
      isMobile,
      apartmentAreas,
      hoveredApartment,
      setHoveredApartment: stableSetHoveredApartment,
      handleApartmentClick,
      currentFloor,
    }),
    [
      selectedFloorPlan,
      floorPlanId,
      isMobile,
      apartmentAreas,
      hoveredApartment,
      stableSetHoveredApartment,
      handleApartmentClick,
      currentFloor,
    ]
  );

  const isInitialLoading = floorPlansLoading && !floorPlans.length;

  if (isInitialLoading) {
    return (
      <main className="w-full pt-24 md:pt-28 pb-10 min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="bg-white/95 backdrop-blur-sm p-6 rounded-lg border border-gray-200 flex flex-col items-center">
          <Loader2 className="h-10 w-10 text-indigo-600 animate-spin mb-2" />
          <p className="text-gray-900">Loading building data...</p>
        </div>
      </main>
    );
  }

  return (
    <main
      className={`w-full pt-24 md:pt-28 pb-10 min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 ${
        isMobile ? "min-h-screen overflow-y-auto" : "h-auto"
      }`}
    >
      <div className={`flex flex-col ${isMobile ? "" : "h-full"}`}>
        <div className="flex w-full justify-center items-center">
          <MemoizedFloorSelector
            buildingId={buildingId}
            floorPlanId={floorPlanId}
            {...floorRangeProps}
          />
        </div>

        <FloorPlanImageSection {...imageSectonProps} />

        <ApartmentDetailsSheet
          isOpen={isSheetOpen}
          onClose={() => setIsSheetOpen(false)}
          apartment={selectedApartment || null}
        />
      </div>
    </main>
  );
}
