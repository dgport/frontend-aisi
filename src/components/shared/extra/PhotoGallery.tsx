"use client"

import React from "react"
import { PhotoProvider, PhotoView } from "react-photo-view"
import "react-photo-view/dist/react-photo-view.css"

interface ApartmentImage {
  src: string
  apartmentNumber: number
  apartmentId: number
  area?: number
  status?: string
}

interface PhotoGalleryProps {
  images: ApartmentImage[]
  isOpen: boolean
  onClose: () => void
}

export const PhotoGallery: React.FC<PhotoGalleryProps> = ({ images, isOpen, onClose }) => {
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        onClose()
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, onClose])

  if (!isOpen || images.length === 0) return null

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "available":
        return "bg-emerald-500 text-white shadow-emerald-500/30"
      case "reserved":
        return "bg-amber-500 text-white shadow-amber-500/30"
      case "sold":
        return "bg-red-500 text-white shadow-red-500/30"
      default:
        return "bg-slate-500 text-white shadow-slate-500/30"
    }
  }

  return (
   <PhotoProvider
  maskOpacity={0.8}
  maskClosable={true}
  pullClosable={true}
  photoClosable={true}
  bannerVisible={false}
  loop={true}
  speed={() => 300}
  easing={(type) => (type === 2 ? 'cubic-bezier(0.36, 0, 0.66, -0.56)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)')}
  loadingElement={<div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>}
  brokenElement={<div className="text-white text-sm">Failed to load image</div>}
  overlayRender={({ index }) => {
    const currentImage = images[index]
    if (!currentImage) return null
 
    const hasArea = currentImage.area && currentImage.area > 0
    const hasStatus = currentImage.status && currentImage.status.trim() !== ""
    
 
    if (!hasArea && !hasStatus) return null

    return (
      <div className="absolute top-6 right-6 z-50">
        <div className="bg-white/95 backdrop-blur-md rounded-xl p-4 shadow-2xl border border-white/20 min-w-[200px]">
 
          <div className="flex items-center gap-2 mb-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <h3 className="text-lg font-bold text-gray-800">
              Apartment #{currentImage.apartmentNumber}
            </h3>
          </div>
          
      
          {hasArea && (
            <div className="flex items-center gap-3 mb-2">
              <div className="flex items-center justify-center w-8 h-8 bg-blue-50 rounded-lg">
                <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V6a2 2 0 012-2h2M4 16v2a2 2 0 002 2h2M16 4h2a2 2 0 012 2v2M16 20h2a2 2 0 002-2v-2" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-500">Area</p>
                <p className="font-semibold text-gray-800">{currentImage.area} m²</p>
              </div>
            </div>
          )}
          
 
          {hasStatus && (
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-8 h-8 bg-gray-50 rounded-lg">
                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-500 mb-1">Status</p>
                <span
                  className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium shadow-lg ${getStatusColor(currentImage.status!)}`}
                >
                  {currentImage.status!.charAt(0).toUpperCase() + currentImage.status!.slice(1)}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }}
  toolbarRender={({ onScale, scale, rotate, onRotate, index, onIndexChange }) => (
    <div className="flex flex-col items-end gap-2">
      {images.length > 1 && (
        <div className="flex gap-2 bg-black/50 rounded-lg p-2 max-w-md overflow-x-auto">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => onIndexChange?.(idx)}
              className={`flex-shrink-0 w-12 h-12 rounded overflow-hidden border-2 transition-all ${
                index === idx ? "border-white" : "border-transparent opacity-60 hover:opacity-80"
              }`}
            >
              <img
                src={img.src || "/placeholder.svg"}
                alt={`Thumbnail ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}

      <div className="flex items-center gap-2 bg-black/50 rounded-lg p-2">
   
        {images.length > 1 && (
          <>
            <button
              className="text-white hover:text-gray-300 px-3 py-1 rounded transition-colors md:hidden"
              onClick={() => onIndexChange?.(index > 0 ? index - 1 : images.length - 1)}
            >
              ←
            </button>
            <button
              className="text-white hover:text-gray-300 px-3 py-1 rounded transition-colors md:hidden"
              onClick={() => onIndexChange?.(index < images.length - 1 ? index + 1 : 0)}
            >
              →
            </button>
          </>
        )}
        
        <button
          className="text-white hover:text-gray-300 px-3 py-1 rounded transition-colors"
          onClick={() => onScale(scale + 0.5)}
        >
          +
        </button>
        <button
          className="text-white hover:text-gray-300 px-3 py-1 rounded transition-colors"
          onClick={() => onScale(scale - 0.5)}
        >
          -
        </button>
        <button
          className="text-white hover:text-gray-300 px-3 py-1 rounded transition-colors"
          onClick={() => onRotate(rotate + 90)}
        >
          ↻
        </button>
        <div className="text-white text-sm px-2">
          {index + 1} / {images.length}
        </div>
      </div>
    </div>
  )}
>
  <div style={{ display: "none" }}>
    {images.map((image, index) => (
      <PhotoView
        key={`${image.apartmentId}-${index}`}
        src={image.src}
      >
        <div data-apartment-trigger={index === 0 ? image.apartmentId : undefined} data-photo-index={index} />
      </PhotoView>
    ))}
  </div>
</PhotoProvider>
  )
}