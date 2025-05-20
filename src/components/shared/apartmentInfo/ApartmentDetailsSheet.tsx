"use client";

import type React from "react";
import { Button } from "@/components/ui/button";
import {
  CheckCircle2,
  Ruler,
  Tag,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

interface ApartmentDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  apartment: {
    id: number;
    number: number;
    area?: number;
    rooms?: number;
    status: string;
    price?: number;
    floor?: number;
    images?: string[];
  } | null;
}

export const ApartmentDetailsModal = ({
  isOpen,
  onClose,
  apartment,
}: ApartmentDetailsModalProps) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
  });

  const [selectedImage, setSelectedImage] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && !isZoomed) {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleEscKey);
    }

    return () => {
      window.removeEventListener("keydown", handleEscKey);
    };
  }, [isOpen, isZoomed, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen || !apartment) return null;

  const getStatusStyles = () => {
    switch (apartment.status?.toLowerCase()) {
      case "available":
        return "bg-green-50 text-green-700 border-green-200";
      case "reserved":
        return "bg-amber-50 text-amber-700 border-amber-200";
      case "sold":
        return "bg-red-50 text-red-700 border-red-200";
      default:
        return "bg-gray-50 text-gray-700 border-gray-200";
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget && !isZoomed) {
      onClose();
    }
  };

  const nextImage = () => {
    if (apartment.images && apartment.images.length > 0) {
      setSelectedImage((prev) => (prev + 1) % apartment.images!.length);
    }
  };

  const prevImage = () => {
    if (apartment.images && apartment.images.length > 0) {
      setSelectedImage(
        (prev) =>
          (prev - 1 + apartment.images!.length) % apartment.images!.length
      );
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center"
      onClick={handleBackdropClick}
    >
      <div
        className="bg-white rounded-none md:rounded-lg shadow-xl w-full h-full md:h-auto md:max-w-screen-xl flex flex-col md:flex-row relative md:overflow-hidden md:m-6 overflow-y-scroll"
        onClick={(e) => e.stopPropagation()}
      >
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 rounded-full h-8 w-8 z-10 cursor-pointer"
          aria-label="Close"
          onClick={() => !isZoomed && onClose()}
        >
          <X className="h-4 w-4" />
        </Button>

        <div className="md:w-1/2 p-4 flex flex-col overflow-hidden">
          <div className="flex-1 flex flex-col">
            {apartment.images && apartment.images.length > 0 ? (
              <>
                <div className="relative rounded-lg overflow-hidden flex-1 bg-gray-100 h-[300px] md:h-96">
                  <Zoom zoomMargin={10}>
                    <div className="h-full w-full flex items-center justify-center">
                      <Image
                        src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${apartment.images[selectedImage]}`}
                        alt={`Apartment ${apartment.number}`}
                        className="object-cover w-full h-full cursor-zoom-in"
                        width={800}
                        height={600}
                      />
                    </div>
                  </Zoom>

                  {/* Image navigation arrows */}
                  {apartment.images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-1.5 shadow-md cursor-pointer"
                        aria-label="Previous image"
                      >
                        <ChevronLeft className="h-5 w-5" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-1.5 shadow-md cursor-pointer"
                        aria-label="Next image"
                      >
                        <ChevronRight className="h-5 w-5" />
                      </button>
                    </>
                  )}
                </div>
                {apartment.images.length > 1 && (
                  <div className="mt-3 mb-2 md:hidden">
                    <p className="text-sm font-medium mb-2">Gallery Images:</p>
                    <div className="flex gap-3 overflow-x-auto pb-4 pt-1 px-1 bg-gray-50 rounded-lg">
                      {apartment.images.map((img, idx) => (
                        <button
                          key={idx}
                          onClick={() => setSelectedImage(idx)}
                          className={`relative rounded-md overflow-hidden h-20 w-20 flex-shrink-0 transition cursor-pointer ${
                            selectedImage === idx
                              ? "ring-2 ring-blue-500 shadow-md transform scale-105"
                              : "border border-gray-200"
                          }`}
                        >
                          <Image
                            src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${img}`}
                            alt={`Thumbnail ${idx + 1}`}
                            className="w-full h-full object-cover"
                            width={100}
                            height={100}
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </>
            ) : (
              <div className="flex-1 flex items-center justify-center bg-gray-100 rounded-lg h-64 md:h-96">
                <p className="text-gray-500">No images available</p>
              </div>
            )}
          </div>
        </div>
        <div className="md:w-1/2 flex flex-col">
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center">
              <h2 className="text-lg md:text-xl font-bold flex items-center gap-2 md:gap-3">
                Apartment #{apartment.number}
                <div
                  className={`px-2 py-0.5 md:px-3 md:py-1 rounded-full border flex items-center gap-1 md:gap-1.5 text-sm md:text-base font-medium ${getStatusStyles()}`}
                >
                  {apartment.status === "available" && (
                    <CheckCircle2 className="h-3 w-3 md:h-4 md:w-4" />
                  )}
                  {apartment.status || "Unknown"}
                </div>
              </h2>
            </div>
          </div>
          {apartment.images && apartment.images.length > 1 && (
            <div className="hidden md:block p-4 border-b border-gray-200">
              <p className="text-sm font-medium mb-2">Gallery Images:</p>
              <div className="flex flex-wrap gap-2">
                {apartment.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`relative rounded-md overflow-hidden h-16 w-16 flex-shrink-0 transition cursor-pointer ${
                      selectedImage === idx
                        ? "ring-2 ring-blue-500 shadow-md transform scale-105"
                        : "border border-gray-200"
                    }`}
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${img}`}
                      alt={`Thumbnail ${idx + 1}`}
                      className="w-full h-full object-cover"
                      width={100}
                      height={100}
                    />
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="flex-1 p-4 space-y-4 md:space-y-6">
            <div className="bg-gray-50 p-3 md:p-4 rounded-lg grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2 md:gap-3">
                <Ruler className="h-4 w-4 md:h-5 md:w-5 text-gray-500 flex-shrink-0" />
                <div>
                  <p className="text-xs md:text-sm text-gray-500">Area</p>
                  <p className="font-semibold text-sm md:text-base">
                    {apartment.area ? `${apartment.area} m²` : "N/A"}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 md:gap-3">
                <Tag className="h-4 w-4 md:h-5 md:w-5 text-gray-500 flex-shrink-0" />
                <div>
                  <p className="text-xs md:text-sm text-gray-500">Floor</p>
                  <p className="font-semibold text-sm md:text-base">
                    {apartment.floor || "N/A"}
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-3 md:p-4 rounded-lg">
              <h3 className="font-medium mb-2 md:mb-3 text-sm md:text-base">
                Contact Sales
              </h3>
              <form onSubmit={handleSubmit} className="space-y-2 md:space-y-3">
                <div className="grid grid-cols-2 gap-2 md:gap-3">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-xs md:text-sm text-gray-600 mb-1"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-2 py-1 md:px-3 md:py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-xs md:text-sm text-gray-600 mb-1"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-2 py-1 md:px-3 md:py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="phoneNumber"
                    className="block text-xs md:text-sm text-gray-600 mb-1"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    className="w-full px-2 py-1 md:px-3 md:py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full mt-2 cursor-pointer"
                  size="sm"
                  variant="default"
                >
                  Submit Inquiry
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
