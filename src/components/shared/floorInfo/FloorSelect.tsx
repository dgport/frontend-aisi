"use client";

import React, { JSX } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";

interface FloorSelectorProps {
  currentFloor: number;
  floorRangeStart: number;
  floorRangeEnd: number;
  buildingId: string;
  floorPlanId: string;
  route: string;
  disabled?: boolean;
}

export function FloorSelector({
  currentFloor,
  floorRangeStart,
  floorRangeEnd,
  buildingId,
  floorPlanId,
  route,
  disabled = false,
}: FloorSelectorProps): JSX.Element | null {
  const router = useRouter();

  const availableFloors: number[] = React.useMemo(() => {
    if (
      typeof floorRangeStart !== "number" ||
      typeof floorRangeEnd !== "number"
    ) {
      return [];
    }

    return Array.from(
      { length: floorRangeEnd - floorRangeStart + 1 },
      (_, i) => floorRangeStart + i
    );
  }, [floorRangeStart, floorRangeEnd]);

  const handleFloorChange = (value: string): void => {
    if (buildingId && floorPlanId) {
      router.replace(`/${route}/${buildingId}/${floorPlanId}/${value}`);
    }
  };

  if (availableFloors.length <= 1) {
    return null;
  }

  return (
    <div className="flex items-center">
      <span className="text-lg text-blue-700 font-medium mr-4">
        Select Floor:
      </span>
      <Select
        value={currentFloor.toString()}
        onValueChange={handleFloorChange}
        disabled={disabled}
      >
        <SelectTrigger className="w-20 h-8 cursor-pointer bg-blue-50 border-blue-200 text-blue-900">
          <SelectValue className="cursor-pointer" />
        </SelectTrigger>
        <SelectContent>
          {availableFloors.map((floor) => (
            <SelectItem
              className="cursor-pointer text-base"
              key={floor}
              value={floor.toString()}
            >
              {floor}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
