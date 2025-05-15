import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";

// Create a reusable FloorSelector component
export function FloorSelector({
  currentFloor,
  floorRangeStart,
  floorRangeEnd,
  buildingId,
  floorPlanId,
  route,
  disabled = false,
}) {
  const router = useRouter();

  // Generate array of available floors
  const availableFloors = React.useMemo(() => {
    if (
      typeof floorRangeStart !== "number" ||
      typeof floorRangeEnd !== "number"
    ) {
      return [];
    }

    // Create array from range start to range end (inclusive)
    return Array.from(
      { length: floorRangeEnd - floorRangeStart + 1 },
      (_, i) => floorRangeStart + i
    );
  }, [floorRangeStart, floorRangeEnd]);

  // Handle floor selection change
  const handleFloorChange = (value) => {
    if (buildingId && floorPlanId) {
      // Redirect to the selected floor
      router.replace(`/${route}/${buildingId}/${floorPlanId}/${value}`);
    }
  };

  if (availableFloors.length <= 1) {
    return null; // Don't show selector if there's only one floor
  }

  return (
    <div className="flex items-center">
      <span className="text-sm text-blue-700 font-medium mr-2">Floor:</span>
      <Select
        value={currentFloor.toString()}
        onValueChange={handleFloorChange}
        disabled={disabled}
      >
        <SelectTrigger className="w-20 h-8 bg-blue-50 border-blue-200 text-blue-900">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {availableFloors.map((floor) => (
            <SelectItem key={floor} value={floor.toString()}>
              {floor}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
