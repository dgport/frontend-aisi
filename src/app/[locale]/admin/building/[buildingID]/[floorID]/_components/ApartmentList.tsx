// "use client";

// import type React from "react";
// import { useState } from "react";
// import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
// } from "@/components/ui/dialog";
// import { Camera, Plus } from "lucide-react";
// import Pagination from "@/components/shared/pagination/Pagination";
// import type { Apartment } from "@/types/apartmentList";
// import { apartmentsAPI } from "@/routes/apartments";
// import GenerateApartments from "./GenerateApartments";

// interface ApartmentsListProps {
//   buildingId: string;
//   floorId: string;
// }

// const ApartmentsList = ({ buildingId, floorId }: ApartmentsListProps) => {
//   const [page, setPage] = useState(1);
//   const [limit, _] = useState(15);
//   const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
//   const [isGenerateDialogOpen, setIsGenerateDialogOpen] =
//     useState<boolean>(false);
//   const [selectedApartment, setSelectedApartment] = useState<Apartment | null>(
//     null
//   );
//   const [squareMeters, setSquareMeters] = useState<string>("");
//   const [mobilePaths, setMobilePaths] = useState<string>("");
//   const [desktopPaths, setDesktopPaths] = useState<string>("");
//   const [imageFiles, setImageFiles] = useState<FileList | null>(null);
//   const [updateError, setUpdateError] = useState<string | null>(null);
//   const [successMessage, setSuccessMessage] = useState<string | null>(null);
//   const queryClient = useQueryClient();

//   const { data, isLoading, error } = useQuery({
//     queryKey: ["apartments", buildingId, floorId, page, limit],
//     queryFn: async () => {
//       if (!buildingId || !floorId)
//         return {
//           apartments: [],
//           pagination: {
//             total: 0,
//             page: 1,
//             limit,
//             totalPages: 1,
//             hasNextPage: false,
//             hasPreviousPage: false,
//           },
//         };
//       try {
//         return await apartmentsAPI.getList(buildingId, floorId, page, limit);
//       } catch (error: any) {
//         if (error.response?.data?.error === "NO_APARTMENTS_FOUND") {
//           return {
//             apartments: [],
//             pagination: {
//               total: 0,
//               page: 1,
//               limit,
//               totalPages: 1,
//               hasNextPage: false,
//               hasPreviousPage: false,
//             },
//           };
//         }
//         throw error;
//       }
//     },
//     staleTime: 5 * 60 * 1000,
//     gcTime: 30 * 60 * 1000,
//     retry: 2,
//     enabled: !!buildingId && !!floorId,
//   });

//   const apartments = data?.apartments || [];
//   const pagination = data?.pagination || {
//     total: 0,
//     page: 1,
//     limit,
//     totalPages: 1,
//     hasNextPage: false,
//     hasPreviousPage: false,
//   };

//   const isNoApartmentsError =
//     error &&
//     typeof error === "object" &&
//     error !== null &&
//     "response" in error &&
//     error.response?.data?.error === "NO_APARTMENTS_FOUND";

//   const hasNoApartments =
//     !isLoading && (apartments.length === 0 || isNoApartmentsError);

//   const updateMutation = useMutation({
//     mutationFn: (formData: FormData) =>
//       apartmentsAPI.updateSharedProperties(formData),
//     onSuccess: () => {
//       setSuccessMessage("Apartment updated successfully!");
//       queryClient.invalidateQueries({
//         queryKey: ["apartments", buildingId, floorId],
//       });
//       setTimeout(() => {
//         setIsDialogOpen(false);
//       }, 1500);
//     },
//     onError: (error: any) => {
//       console.error("Error response:", error.response?.data);
//       setUpdateError(
//         error.response?.data?.message ||
//           error.response?.data?.error ||
//           "An error occurred while updating the apartment."
//       );
//     },
//   });

//   const handlePageChange = (newPage: number) => {
//     setPage(newPage);
//   };

//   const openUpdateDialog = (apartment: Apartment) => {
//     setSelectedApartment(apartment);
//     setSquareMeters(apartment.square_meters.toString());
//     setMobilePaths(apartment.mobile_paths || "");
//     setDesktopPaths(apartment.desktop_paths || "");
//     setImageFiles(null);
//     setUpdateError(null);
//     setSuccessMessage(null);
//     setIsDialogOpen(true);
//   };

//   const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files && e.target.files.length > 0) {
//       setImageFiles(e.target.files);
//     }
//   };

//   const handleUpdate = async () => {
//     if (!selectedApartment) {
//       setUpdateError("No apartment selected.");
//       return;
//     }

//     if (!floorId || selectedApartment.flat_id === undefined) {
//       console.error("Missing critical apartment data:", selectedApartment);
//       setUpdateError("Missing apartment data. Please try again.");
//       return;
//     }

//     if (!squareMeters) {
//       setUpdateError("Square meters is required.");
//       return;
//     }

//     setUpdateError(null);

//     const formData = new FormData();
//     formData.append("floor_plan_id", floorId.toString());
//     formData.append("flat_id", selectedApartment.flat_id.toString());
//     formData.append("square_meters", squareMeters);
//     formData.append("mobile_paths", mobilePaths);
//     formData.append("desktop_paths", desktopPaths);

//     if (imageFiles) {
//       for (let i = 0; i < imageFiles.length; i++) {
//         formData.append("images", imageFiles[i]);
//       }
//     }

//     updateMutation.mutate(formData);
//   };

//   const closeDialog = () => {
//     setIsDialogOpen(false);
//     setSelectedApartment(null);
//     setSquareMeters("");
//     setMobilePaths("");
//     setDesktopPaths("");
//     setImageFiles(null);
//     setUpdateError(null);
//     setSuccessMessage(null);
//   };

//   const openGenerateDialog = () => {
//     setIsGenerateDialogOpen(true);
//   };

//   return (
//     <div className="w-full">
//       {error && !isNoApartmentsError ? (
//         <div className="text-red-500 my-4">
//           {typeof error === "object" && error !== null && "message" in error
//             ? String(error.message)
//             : "Error fetching apartments."}
//         </div>
//       ) : null}

//       {isLoading ? (
//         <div className="flex justify-center my-8">Loading apartments...</div>
//       ) : (
//         <>
//           {hasNoApartments ? (
//             <div className="text-center py-12">
//               <Button
//                 onClick={openGenerateDialog}
//                 className="flex items-center gap-2"
//               >
//                 <Plus className="w-4 h-4" />
//                 Generate Apartments
//               </Button>
//             </div>
//           ) : (
//             <>
//               {apartments.map((floorPlan) => (
//                 <div key={floorPlan.floor_plan_id} className="mb-8">
//                   <h2 className="text-2xl font-bold mb-4">{floorPlan.name}</h2>

//                   {floorPlan.apartments.map((floor) => (
//                     <div key={floor.floor} className="mb-6">
//                       <h3 className="text-xl mb-2">Floor {floor.floor}</h3>
//                       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                         {floor.apartments.map((apartment) => (
//                           <div
//                             key={apartment.flat_id}
//                             className="p-4 border rounded shadow relative"
//                           >
//                             {apartment.images &&
//                               Array.isArray(apartment.images) &&
//                               apartment.images.length > 0 && (
//                                 <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-3">
//                                   {apartment.images.map((imagePath, index) => (
//                                     <img
//                                       key={index}
//                                       src={`${
//                                         process.env.NEXT_PUBLIC_API_URL ||
//                                         "http://localhost:3001"
//                                       }${imagePath}`}
//                                       alt={`Apartment ${
//                                         apartment.flat_number
//                                       } - Image ${index + 1}`}
//                                       className="w-full h-40 object-cover rounded"
//                                     />
//                                   ))}
//                                 </div>
//                               )}
//                             <h4 className="font-semibold">
//                               Apartment {apartment.flat_number}
//                             </h4>
//                             <p>Status: {apartment.status}</p>
//                             <p>Square Meters: {apartment.square_meters}</p>
//                             {apartment.mobile_paths && (
//                               <p>Mobile Paths: {apartment.mobile_paths}</p>
//                             )}
//                             {apartment.desktop_paths && (
//                               <p>Desktop Paths: {apartment.desktop_paths}</p>
//                             )}

//                             <Button
//                               variant="outline"
//                               size="sm"
//                               className="absolute top-2 right-2"
//                               onClick={() => openUpdateDialog(apartment)}
//                             >
//                               <Camera className="w-4 h-4" />
//                             </Button>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               ))}

//               {pagination.totalPages > 1 && (
//                 <Pagination
//                   currentPage={pagination.page}
//                   totalPages={pagination.totalPages}
//                   onPageChange={handlePageChange}
//                 />
//               )}
//             </>
//           )}
//         </>
//       )}

      

//       {/* Update Dialog */}
//       <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
//         <DialogContent className="sm:max-w-md">
//           <DialogHeader>
//             <DialogTitle>Update Apartment</DialogTitle>
//           </DialogHeader>
//           <div className="space-y-4 py-4">
//             {updateError && <div className="text-red-500">{updateError}</div>}
//             {successMessage && (
//               <div className="text-green-500">{successMessage}</div>
//             )}

//             <div className="space-y-2">
//               <label htmlFor="squareMeters">Square Meters</label>
//               <Input
//                 id="squareMeters"
//                 type="number"
//                 value={squareMeters}
//                 onChange={(e) => setSquareMeters(e.target.value)}
//                 disabled={updateMutation.isPending}
//               />
//             </div>

//             <div className="space-y-2">
//               <label htmlFor="mobilePaths">Mobile Paths</label>
//               <Input
//                 id="mobilePaths"
//                 type="text"
//                 value={mobilePaths}
//                 onChange={(e) => setMobilePaths(e.target.value)}
//                 disabled={updateMutation.isPending}
//                 placeholder="Enter mobile paths"
//               />
//             </div>

//             <div className="space-y-2">
//               <label htmlFor="desktopPaths">Desktop Paths</label>
//               <Input
//                 id="desktopPaths"
//                 type="text"
//                 value={desktopPaths}
//                 onChange={(e) => setDesktopPaths(e.target.value)}
//                 disabled={updateMutation.isPending}
//                 placeholder="Enter desktop paths"
//               />
//             </div>

//             <div className="space-y-2">
//               <label htmlFor="images">Images</label>
//               <div className="flex items-center gap-2">
//                 <Input
//                   id="images"
//                   type="file"
//                   multiple
//                   onChange={handleImageChange}
//                   disabled={updateMutation.isPending}
//                   className="hidden"
//                 />
//                 <Button
//                   type="button"
//                   variant="outline"
//                   onClick={() => document.getElementById("images")?.click()}
//                   disabled={updateMutation.isPending}
//                 >
//                   <Camera className="mr-2 h-4 w-4" />
//                   Select Images
//                 </Button>
//                 {imageFiles && <span>{imageFiles.length} files selected</span>}
//               </div>
//             </div>

//             <div className="flex justify-end gap-2">
//               <Button
//                 variant="outline"
//                 onClick={closeDialog}
//                 disabled={updateMutation.isPending}
//               >
//                 Cancel
//               </Button>
//               <Button
//                 onClick={handleUpdate}
//                 disabled={updateMutation.isPending}
//               >
//                 {updateMutation.isPending ? "Updating..." : "Update"}
//               </Button>
//             </div>
//           </div>
//         </DialogContent>
//       </Dialog>

//       {/* Generate Apartments Dialog */}
//       <Dialog
//         open={isGenerateDialogOpen}
//         onOpenChange={setIsGenerateDialogOpen}
//       >
//         <DialogContent className="sm:max-w-md">
//           <DialogHeader>
//             <DialogTitle>Generate Apartments</DialogTitle>
//           </DialogHeader>
//           <div className="py-4">
//             <GenerateApartments
//               buildingId={buildingId}
//               floorPlanId={floorId}
//               floorPlanName={`Floor Plan ${floorId}`}
//               onSuccess={() => {
//                 setIsGenerateDialogOpen(false);
//                 queryClient.invalidateQueries({
//                   queryKey: ["apartments", buildingId, floorId],
//                 });
//               }}
//             />
//           </div>
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// };

// export default ApartmentsList;
