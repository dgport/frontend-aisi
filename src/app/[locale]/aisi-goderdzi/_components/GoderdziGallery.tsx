import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

import Image1 from "@/root/public/images/goderdzi/GoderdziGreen.jpg";
import Image2 from "@/root/public/images/goderdzi/GoderdziNature.jpg";
import Image3 from "@/root/public/images/goderdzi/GoderdziPool.jpg";

const propertyImages = [
  { src: Image1, alt: "Goderdzi Green Views" },
  { src: Image2, alt: "Goderdzi Nature Surroundings" },
  { src: Image3, alt: "Goderdzi Pool Area" },
  { src: Image1, alt: "Goderdzi Exterior" },
  { src: Image2, alt: "Goderdzi Interior" },
];

export default function GoderdziGallery() {
  return (
    <div className="w-ful">
      <h3 className="text-2xl font-semibold mb-6">Property Gallery</h3>

      <Carousel className="w-full ">
        <CarouselContent className="-ml-4">
          {propertyImages.map((image, index) => (
            <CarouselItem
              key={index}
              className="md:basis-1/2 lg:basis-1/3 pl-4"
            >
              <div className="h-64 overflow-hidden rounded-lg">
                <div className="relative w-full h-full">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    fill={true}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </div>
              <p className="mt-2 text-center text-sm text-gray-600">
                {image.alt}
              </p>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2" />
        <CarouselNext className="right-2" />
      </Carousel>
    </div>
  );
}
