"use client";

import type React from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  CheckCircle2,
  Ruler,
  Tag,
  ChevronLeft,
  ChevronRight,
  Loader2,
} from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { Input } from "@/components/ui/input";
import { useTranslations } from "next-intl";

interface ApartmentDetailsSheetProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
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

export const ApartmentDetailsSheet = ({
  isOpen,
  onOpenChange,
  apartment,
}: ApartmentDetailsSheetProps) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
  });

  const t = useTranslations("main");

  const [selectedImage, setSelectedImage] = useState(0);
  const [imageLoading, setImageLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setSelectedImage(0);
      setImageLoading(true);
      setFormData({ firstName: "", lastName: "", phoneNumber: "" });
    }
  }, [isOpen]);

  if (!apartment) return null;

  const getStatusStyles = () => {
    switch (apartment.status?.toLowerCase()) {
      case "available":
        return "bg-green-50 text-green-600 border-green-200";
      case "reserved":
        return "bg-amber-50 text-amber-600 border-amber-200";
      case "sold":
        return "bg-red-50 text-red-600 border-red-200";
      default:
        return "bg-gray-50 text-gray-600 border-gray-200";
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
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setFormData({ firstName: "", lastName: "", phoneNumber: "" });
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
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
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetContent
        side="right"
        className="w-full sm:max-w-2xl p-0 overflow-hidden"
      >
        <div className="flex flex-col h-full">
          {/* Image Gallery - 65% height */}
          <div className="h-1/2 relative">
            {apartment.images && apartment.images.length > 0 ? (
              <div className="h-full flex flex-col">
                {/* Main Image */}
                <div className="flex-1 relative bg-gray-100">
                  {imageLoading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-10">
                      <Loader2 className="h-8 w-8 animate-spin text-gray-400" />
                    </div>
                  )}

                  <Zoom zoomMargin={10}>
                    <div className="w-full h-full">
                      <Image
                        src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${apartment.images[selectedImage]}`}
                        alt={`Apartment ${apartment.number}`}
                        className="object-cover w-full h-full cursor-zoom-in"
                        fill
                        onLoad={handleImageLoad}
                        priority={selectedImage === 0}
                      />
                    </div>
                  </Zoom>

                  {apartment.images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-md transition-all z-20"
                        aria-label="Previous image"
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-md transition-all z-20"
                        aria-label="Next image"
                      >
                        <ChevronRight className="h-4 w-4" />
                      </button>
                      <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs z-20">
                        {selectedImage + 1} / {apartment.images.length}
                      </div>
                    </>
                  )}
                </div>

                {/* Thumbnails */}
                {apartment.images.length > 1 && (
                  <div className="p-2 bg-gray-50 border-t">
                    <div className="flex gap-1.5 overflow-x-auto">
                      {apartment.images.map((img, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleThumbnailClick(idx)}
                          className={`relative rounded overflow-hidden flex-shrink-0 transition-all ${
                            selectedImage === idx
                              ? "ring-2 ring-blue-500"
                              : "ring-1 ring-gray-200 hover:ring-gray-300"
                          }`}
                        >
                          <Image
                            src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${img}`}
                            alt={`Thumbnail ${idx + 1}`}
                            className="w-10 h-10 object-cover"
                            width={40}
                            height={40}
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="h-full flex items-center justify-center bg-gray-100">
                <p className="text-gray-500">No images available</p>
              </div>
            )}
          </div>

          {/* Content Area - 35% height, no scrolling */}
          <div className="h-[35%] flex flex-col">
            {/* Compact Header */}
            <div className="px-4 py-3 border-b border-gray-200 flex items-center justify-between">
              <h1 className="text-lg font-bold">
                {t("apartment")} #{apartment.number}
              </h1>
              <div
                className={`px-2 py-1 rounded-full border text-xs font-medium ${getStatusStyles()}`}
              >
                <span className="capitalize">{apartment.status}</span>
              </div>
            </div>

            {/* Compact Content */}
            <div className="flex-1 p-4 space-y-3">
              {/* Apartment Details - Compact */}
              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center gap-2 bg-gray-50 p-2 rounded">
                  <Ruler className="h-3 w-3 text-gray-500" />
                  <div>
                    <p className="text-xs text-gray-500">{t("area")}</p>
                    <p className="text-sm font-semibold">
                      {apartment.area ? `${apartment.area} m²` : "N/A"}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-gray-50 p-2 rounded">
                  <Tag className="h-3 w-3 text-gray-500" />
                  <div>
                    <p className="text-xs text-gray-500">{t("floor")}</p>
                    <p className="text-sm font-semibold">
                      {apartment.floor || "N/A"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Compact Contact Form */}
              <div className="bg-gray-50 p-3 rounded">
                <h3 className="text-sm font-semibold mb-2">Contact Sales</h3>
                <form onSubmit={handleSubmit} className="space-y-2">
                  <div className="grid grid-cols-2 gap-2">
                    <Input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                      className="text-sm h-8"
                    />
                    <Input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                      className="text-sm h-8"
                    />
                  </div>
                  <Input
                    type="tel"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    className="text-sm h-8"
                  />
                  <Button
                    type="submit"
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white h-8 text-sm"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-1 h-3 w-3 animate-spin" />
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
      </SheetContent>
    </Sheet>
  );
};