import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import background from "@/root/public/images/bg-body.jpg";
import Image1 from "@/root/public/images/status/Status1.png";
import Image2 from "@/root/public/images/status/Status2.png";
import Image3 from "@/root/public/images/status/Status3.png";
import Image4 from "@/root/public/images/status/Status4.png";

const propertyImages = [
  { src: Image1, alt: "Goderdzi Green Views" },
  { src: Image4, alt: "Goderdzi Nature Surroundings" },
  { src: Image3, alt: "Goderdzi Pool Area" },
  { src: Image2, alt: "Goderdzi Exterior" },
];

export default function StatusGallery() {
  return (
    <div className="relative w-full">
      {/* Simplified top wave - only on desktop */}
      <div className="hidden md:block absolute top-0 w-full z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 90"
          className="w-full h-auto"
        >
          <defs>
            <pattern
              id="topWavePattern"
              patternUnits="userSpaceOnUse"
              width="100%"
              height="100%"
            >
              <image
                href={background.src}
                x="0"
                y="0"
                width="100%"
                height="100%"
                preserveAspectRatio="xMidYMid slice"
              />
            </pattern>
          </defs>
          <path
            fill="url(#topWavePattern)"
            d="M0,90L40,82C80,75,160,60,240,60C320,60,400,75,480,75C560,75,640,60,720,52C800,45,880,45,960,52C1040,60,1120,75,1200,75C1280,75,1360,60,1400,52L1440,45L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
          />
        </svg>
      </div>

      <section className="w-full px-4 md:px-8 lg:px-16 py-16 md:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative">
        <div className="container mx-auto">
          <h3 className="text-3xl md:text-4xl text-center font-bold text-white mb-12">
            Property Gallery
          </h3>

          {/* Simplified carousel without extra padding issues */}
          <Carousel 
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {propertyImages.map((image, index) => (
                <CarouselItem
                  key={index}
                  className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3"
                >
                  <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-white/30 transition-all duration-300 h-80">
                    {/* Simplified hover effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Image container */}
                    <div className="relative h-full overflow-hidden rounded-2xl">
                      <Image
                        src={image.src || "/placeholder.svg"}
                        alt={image.alt}
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                        priority={index < 2}
                      />
                      {/* Simplified overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Simplified navigation buttons */}
            <CarouselPrevious className="left-2 md:-left-4 w-10 h-10 md:w-12 md:h-12 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white transition-all duration-200" />
            <CarouselNext className="right-2 md:-right-4 w-10 h-10 md:w-12 md:h-12 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white transition-all duration-200" />
          </Carousel>
        </div>

        {/* Simplified background decorations */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/3 rounded-full blur-2xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/3 rounded-full blur-3xl" />
      </section>

      {/* Simplified bottom wave */}
      <div className="hidden md:block absolute bottom-0 w-full z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 100"
          className="w-full h-auto"
        >
          <defs>
            <pattern
              id="bottomWavePattern"
              patternUnits="userSpaceOnUse"
              width="100%"
              height="100%"
            >
              <image
                href={background.src}
                x="0"
                y="0"
                width="100%"
                height="100%"
                preserveAspectRatio="xMidYMid slice"
              />
            </pattern>
          </defs>
          <path
            fill="url(#bottomWavePattern)"
            d="M0,20L40,32C80,45,160,70,240,70C320,70,400,45,480,45C560,45,640,70,720,77C800,85,880,75,960,70C1040,65,1120,70,1200,70C1280,70,1360,65,1400,62L1440,60L1440,100L1400,100C1360,100,1280,100,1200,100C1120,100,1040,100,960,100C880,100,800,100,720,100C640,100,560,100,480,100C400,100,320,100,240,100C160,100,80,100,40,100L0,100Z"
          />
        </svg>
      </div>
    </div>
  );
}