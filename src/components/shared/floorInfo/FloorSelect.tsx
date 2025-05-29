"use client";

import React, { type JSX, useRef, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

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
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [selectedFloor, setSelectedFloor] = useState(currentFloor);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

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

  const handleFloorSelect = (): void => {
    if (buildingId && floorPlanId && selectedFloor !== currentFloor) {
      router.replace(`/${route}/${buildingId}/${floorPlanId}/${selectedFloor}`);
    }
  };

  const scrollToFloor = (floor: number) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    setIsScrolling(true);
    const floorElement = container.querySelector(
      `[data-floor="${floor}"]`
    ) as HTMLElement;
    if (floorElement) {
      const containerWidth = container.offsetWidth;
      const elementWidth = floorElement.offsetWidth;
      const elementLeft = floorElement.offsetLeft;

      const scrollPosition =
        elementLeft - containerWidth / 2 + elementWidth / 2;
      container.scrollTo({ left: scrollPosition, behavior: "smooth" });

      setTimeout(() => setIsScrolling(false), 300);
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (scrollContainerRef.current?.offsetLeft || 0));
    setScrollLeft(scrollContainerRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (scrollContainerRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 1.2;
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(
      e.touches[0].pageX - (scrollContainerRef.current?.offsetLeft || 0)
    );
    setScrollLeft(scrollContainerRef.current?.scrollLeft || 0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const x =
      e.touches[0].pageX - (scrollContainerRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 1.2;
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const scrollCarousel = (direction: "left" | "right") => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollAmount = 80;
    const newScrollLeft =
      direction === "left"
        ? container.scrollLeft - scrollAmount
        : container.scrollLeft + scrollAmount;

    container.scrollTo({ left: newScrollLeft, behavior: "smooth" });
  };

  useEffect(() => {
    scrollToFloor(currentFloor);
  }, [currentFloor]);

  if (availableFloors.length <= 1) {
    return null;
  }

  return (
    <div className="flex items-center gap-4 w-full md:w-auto justify-center p-2 md:p-2 bg-white md:rounded-2xl my-1 border-t border-gray-200/50 shadow-lg shadow-gray-900/5">
      <div className="flex items-center gap-2 ">
        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
        <span className="text-sm font-semibold text-gray-700 tracking-wide">
          Floor
        </span>
      </div>

      <div className="flex items-center gap-5">
        <button
          onClick={() => scrollCarousel("left")}
          className="group relative p-2 rounded-xl bg-gradient-to-r from-gray-50 to-gray-100 hover:from-blue-50 hover:to-purple-50 border border-gray-200/50 transition-all duration-300 hover:shadow-md hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
          disabled={disabled}
        >
          <ChevronLeft className="w-4 h-4 text-gray-600 group-hover:text-blue-600 transition-colors duration-300" />
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>
        <div className="relative">
          <div
            ref={scrollContainerRef}
            className={`flex gap-2 overflow-x-auto w-40 py-2 px-1 transition-all duration-300 ${
              isDragging ? "cursor-grabbing" : "cursor-grab"
            } ${isScrolling ? "pointer-events-none" : ""}`}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {availableFloors.map((floor, index) => (
              <button
                key={floor}
                data-floor={floor}
                onClick={() => setSelectedFloor(floor)}
                disabled={disabled}
                className={`
                  group relative min-w-[36px] h-10 rounded-xl transition-all duration-300 flex-shrink-0
                  flex items-center justify-center font-semibold text-sm transform hover:scale-110 active:scale-95
                  ${
                    selectedFloor === floor
                      ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/25 scale-110"
                      : currentFloor === floor
                      ? "bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 border-2 border-blue-200 shadow-md"
                      : "bg-white/70 text-gray-600 border border-gray-200/50 hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 hover:border-gray-300 hover:shadow-md"
                  }
                  ${
                    disabled
                      ? "opacity-50 cursor-not-allowed"
                      : "cursor-pointer"
                  }
                `}
                style={{
                  animationDelay: `${index * 50}ms`,
                }}
              >
                <span className="relative z-10">{floor}</span>
                {selectedFloor === floor && (
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400 to-purple-400 opacity-20 animate-pulse"></div>
                )}
                {currentFloor === floor && selectedFloor !== floor && (
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full border-2 border-white shadow-sm"></div>
                )}
              </button>
            ))}
          </div>
          <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-white/80 to-transparent pointer-events-none rounded-l-xl"></div>
          <div className="absolute right-0 top-0 bottom-0 w-4 bg-gradient-to-l from-white/80 to-transparent pointer-events-none rounded-r-xl"></div>
        </div>
        <button
          onClick={() => scrollCarousel("right")}
          className="group relative p-2 rounded-xl bg-gradient-to-r from-gray-50 to-gray-100 hover:from-blue-50 hover:to-purple-50 border border-gray-200/50 transition-all duration-300 hover:shadow-md hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
          disabled={disabled}
        >
          <ChevronRight className="w-4 h-4 text-gray-600 group-hover:text-blue-600 transition-colors duration-300" />
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>
      </div>
      {selectedFloor !== currentFloor && (
        <div className="animate-in slide-in-from-right-2 duration-300">
          <button
            onClick={handleFloorSelect}
            disabled={disabled}
            className="group relative px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white rounded-xl text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25 hover:scale-105 active:scale-95 disabled:opacity-50 flex items-center gap-2 overflow-hidden cursor-pointer"
          >
            <span className="relative z-10">Go</span>
            <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-0.5 transition-transform duration-300" />
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
          </button>
        </div>
      )}
    </div>
  );
}
