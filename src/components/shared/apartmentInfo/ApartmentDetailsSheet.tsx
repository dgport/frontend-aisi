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
  Loader2,
} from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { Input } from "@/components/ui/input";

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
  const [imageLoading, setImageLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Reset states when modal opens/closes
  useEffect(() => {
    if (isOpen) {
      setSelectedImage(0);
      setImageLoading(true);
      setFormData({ firstName: "", lastName: "", phoneNumber: "" });
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleEscKey);
    }

    return () => {
      window.removeEventListener("keydown", handleEscKey);
    };
  }, [isOpen, onClose]);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Add your submission logic here
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API call
      console.log("Form submitted:", formData);
      // Reset form after successful submission
      setFormData({ firstName: "", lastName: "", phoneNumber: "" });
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const nextImage = () => {
    if (apartment.images && apartment.images.length > 0) {
      setImageLoading(true);
      setSelectedImage((prev) => (prev + 1) % apartment.images!.length);
    }
  };

  const prevImage = () => {
    if (apartment.images && apartment.images.length > 0) {
      setImageLoading(true);
      setSelectedImage(
        (prev) =>
          (prev - 1 + apartment.images!.length) % apartment.images!.length
      );
    }
  };

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  const handleThumbnailClick = (index: number) => {
    setImageLoading(true);
    setSelectedImage(index);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div
        className="bg-white rounded-lg shadow-xl w-full max-w-6xl h-auto flex flex-col lg:flex-row relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 rounded-full h-8 w-8 z-20 bg-white/90 hover:bg-white"
          aria-label="Close"
          onClick={onClose}
        >
          <X className="h-4 w-4" />
        </Button>

        {/* Image Section */}
        <div className="lg:w-1/2 flex flex-col min-h-0">
          {apartment.images && apartment.images.length > 0 ? (
            <>
              {/* Main Image */}
              <div className="relative justify-center items-center flex flex-col  h-full">
                {imageLoading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-10">
                    <Loader2 className="h-8 w-8 animate-spin text-gray-400" />
                  </div>
                )}

                <Zoom zoomMargin={10}>
                  <div className="h-full w-full rounded-lg">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${apartment.images[selectedImage]}`}
                      alt={`Apartment ${apartment.number}`}
                      className="object-cover w-full h-full cursor-zoom-in rounded-lg"
                      width={800}
                      height={600}
                      onLoad={handleImageLoad}
                      priority={selectedImage === 0}
                    />
                  </div>
                </Zoom>

                {/* Navigation Arrows */}
                {apartment.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-md transition-all"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-md transition-all"
                      aria-label="Next image"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </>
                )}

                {/* Image Counter */}
                {apartment.images.length > 1 && (
                  <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                    {selectedImage + 1} / {apartment.images.length}
                  </div>
                )}
              </div>

              {/* Thumbnails */}
              {apartment.images.length > 1 && (
                <div className="p-4 border-t bg-gray-50">
                  <div className="flex gap-2 overflow-x-auto pb-2">
                    {apartment.images.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleThumbnailClick(idx)}
                        className={`relative rounded-lg overflow-hidden flex-shrink-0 transition-all ${
                          selectedImage === idx
                            ? "ring-2 ring-blue-500 shadow-md"
                            : "ring-1 ring-gray-200 hover:ring-gray-300"
                        }`}
                      >
                        <Image
                          src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${img}`}
                          alt={`Thumbnail ${idx + 1}`}
                          className="w-16 h-16 object-cover"
                          width={64}
                          height={64}
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center bg-gray-100 min-h-[300px]">
              <p className="text-gray-500">No images available</p>
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="lg:w-1/2 flex flex-col min-h-0">
          {/* Header */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <h2 className="text-xl lg:text-2xl font-bold">
                Apartment #{apartment.number}
              </h2>
              <div
                className={`px-3 py-1 rounded-full border flex items-center gap-1.5 text-sm font-medium ${getStatusStyles()}`}
              >
                {apartment.status === "available" && (
                  <CheckCircle2 className="h-4 w-4" />
                )}
                <span className="capitalize">{apartment.status}</span>
              </div>
            </div>
          </div>

          {/* Details and Form */}
          <div className="flex-1 p-6 space-y-6 overflow-y-auto">
            {/* Property Details */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                <Ruler className="h-5 w-5 text-gray-500 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-500">Area</p>
                  <p className="font-semibold">
                    {apartment.area ? `${apartment.area} m²` : "N/A"}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                <Tag className="h-5 w-5 text-gray-500 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-500">Floor</p>
                  <p className="font-semibold">{apartment.floor || "N/A"}</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-4 text-lg">Contact Sales</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      First Name
                    </label>
                    <Input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Last Name
                    </label>
                    <Input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="phoneNumber"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone Number
                  </label>
                  <Input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Submit Inquiry"
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};