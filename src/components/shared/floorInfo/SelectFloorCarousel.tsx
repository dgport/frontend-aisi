import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export function FloorCarousel({
  currentFloor,
  floorRangeStart,
  floorRangeEnd,
  buildingId,
  floorPlanId,
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
    ).sort((a, b) => b - a); // Sort in descending order (higher floors first)
  }, [floorRangeStart, floorRangeEnd]);

  // Calculate visible floors (for mobile we show fewer)
  const [visibleCount, setVisibleCount] = React.useState(5);

  React.useEffect(() => {
    const handleResize = () => {
      setVisibleCount(window.innerWidth < 640 ? 3 : 5);
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // For visual centering, calculate how many floors to show before and after current
  // This ensures the current floor is always in the middle when possible
  const halfVisible = Math.floor(visibleCount / 2);

  // Find index of current floor
  const currentIndex = availableFloors.findIndex((f) => f === currentFloor);

  // Calculate start index for our visible window
  let startIdx = Math.max(0, currentIndex - halfVisible);
  // Adjust start index if we're near the end of the array
  if (currentIndex + halfVisible >= availableFloors.length) {
    startIdx = Math.max(0, availableFloors.length - visibleCount);
  }

  // Get the visible floors based on our calculations
  const visibleFloors = availableFloors.slice(
    startIdx,
    startIdx + visibleCount
  );

  // Handle floor selection
  const handleFloorChange = (floor) => {
    if (buildingId && floorPlanId && !disabled) {
      router.push(`/floorplan/${buildingId}/${floorPlanId}/${floor}`);
    }
  };

  // Handle navigation to next/previous floors
  const handlePrevious = () => {
    const index = availableFloors.indexOf(currentFloor);
    if (index < availableFloors.length - 1 && !disabled) {
      handleFloorChange(availableFloors[index + 1]);
    }
  };

  const handleNext = () => {
    const index = availableFloors.indexOf(currentFloor);
    if (index > 0 && !disabled) {
      handleFloorChange(availableFloors[index - 1]);
    }
  };

  if (availableFloors.length <= 1) {
    return (
      <div className="flex items-center bg-blue-50 border border-blue-200 rounded-lg px-4 py-1.5">
        <span className="text-sm text-blue-700 font-medium">
          Floor: {currentFloor}
        </span>
      </div>
    );
  }

  return (
    <div className="flex items-center bg-blue-50 border border-blue-200 rounded-lg py-1 px-1">
      <Button
        variant="ghost"
        size="icon"
        className="h-7 w-7 text-blue-700 hover:text-blue-900 hover:bg-blue-100 rounded-md"
        onClick={handlePrevious}
        disabled={currentIndex === availableFloors.length - 1 || disabled}
      >
        <ChevronLeft size={18} />
      </Button>

      <div className="flex items-center mx-1">
        {visibleFloors.map((floor) => (
          <button
            key={floor}
            onClick={() => handleFloorChange(floor)}
            disabled={disabled}
            className={`h-7 w-7 mx-0.5 flex items-center justify-center rounded-md text-sm font-medium transition-colors ${
              floor === currentFloor
                ? "bg-blue-600 text-white"
                : "text-blue-700 hover:bg-blue-100"
            }`}
          >
            {floor}
          </button>
        ))}
      </div>

      <Button
        variant="ghost"
        size="icon"
        className="h-7 w-7 text-blue-700 hover:text-blue-900 hover:bg-blue-100 rounded-md"
        onClick={handleNext}
        disabled={currentIndex === 0 || disabled}
      >
        <ChevronRight size={18} />
      </Button>
    </div>
  );
}
