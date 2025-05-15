import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { CheckCircle2, Ruler, Tag, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface ApartmentDetailsSheetProps {
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

export const ApartmentDetailsSheet = ({
  isOpen,
  onClose,
  apartment,
}: ApartmentDetailsSheetProps) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
  });

  if (!apartment) return null;

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

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent
        side="right"
        className="w-full sm:max-w-md md:max-w-lg overflow-y-auto"
      >
        <SheetHeader className="space-y-2 mb-4">
          <div className="flex items-center justify-between">
            <SheetTitle className="flex items-center gap-5">
              <span className="text-xl font-bold">
                Apartment #{apartment.number}
              </span>
              <div className="flex items-center gap-2">
                <div
                  className={`px-3 py-1 rounded-full border flex items-center gap-1.5 font-medium ${getStatusStyles()}`}
                >
                  {apartment.status === "available" && (
                    <CheckCircle2 className="h-4 w-4" />
                  )}
                  {apartment.status || "Unknown"}
                </div>
              </div>
            </SheetTitle>
            <SheetClose asChild>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full h-8 w-8"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </Button>
            </SheetClose>
          </div>
        </SheetHeader>

        <div className="space-y-6">
          {apartment.images && apartment.images.length > 0 && (
            <div
              className={
                apartment.images.length === 1
                  ? "w-full"
                  : "grid grid-cols-2 gap-2"
              }
            >
              {apartment.images.length === 1 ? (
                <div className="relative rounded-lg overflow-hidden h-72 bg-gray-100">
                  <Image
                    src={`http://localhost:3001${apartment.images[0]}`}
                    alt={`Apartment ${apartment.number}`}
                    className="w-full h-full object-cover"
                    width={800}
                    height={600}
                  />
                </div>
              ) : (
                apartment.images.slice(0, 2).map((img, idx) => (
                  <div
                    key={idx}
                    className="relative rounded-lg overflow-hidden h-48 bg-gray-100"
                  >
                    <Image
                      src={`http://localhost:3001${img}`}
                      alt={`Apartment ${apartment.number} - Image ${idx + 1}`}
                      className="w-full h-full object-cover"
                      width={400}
                      height={300}
                    />
                  </div>
                ))
              )}
            </div>
          )}

          <div className="bg-gray-50 p-4 rounded-lg grid grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <Ruler className="h-5 w-5 text-gray-500 flex-shrink-0" />
              <div>
                <p className="text-sm text-gray-500">Area</p>
                <p className="font-semibold">
                  {apartment.area ? `${apartment.area} m²` : "N/A"}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Tag className="h-5 w-5 text-gray-500 flex-shrink-0" />
              <div>
                <p className="text-sm text-gray-500">Floor</p>
                <p className="font-semibold">{apartment.floor || "N/A"}</p>
              </div>
            </div>
          </div>

          {apartment.status === "available" && (
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium mb-3">Contact Sales</h3>
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm text-gray-600 mb-1"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm text-gray-600 mb-1"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="phoneNumber"
                    className="block text-sm text-gray-600 mb-1"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <Button type="submit" className="w-full mt-2" size="lg">
                  Submit Inquiry
                </Button>
              </form>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};
