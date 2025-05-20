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
    <section className="w-ful md:px-10  my-10">
      <h3 className="text-2xl text-center font-semibold mb-6">
        Property Gallery
      </h3>

      <Carousel className="w-full pl-3">
        <CarouselContent className=" ">
          {propertyImages.map((image, index) => (
            <CarouselItem
              key={index}
              className="basis-full  pl-5  md:basis-1/2 lg:basis-1/3"
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
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="md:-left-5 left-1 w-9 h-9 md:w-10 md:h-10" />
        <CarouselNext className="md:-right-5 right-1 w-9 h-9 md:w-10 md:h-10" />
      </Carousel>
    </section>
  );
}
