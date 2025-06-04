import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import background from "@/root/public/images/bg-body.jpg";
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
    <div className="relative w-full">
      {/* Top wave decoration */}
      <div className="md:block hidden absolute top-0 w-full   z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 90"
          className="w-full h-auto"
          preserveAspectRatio="none"
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

      <section className="w-full   md:px-8 lg:px-16 py-16 md:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl md:text-4xl text-center font-bold text-white mb-12">
            Property Gallery
          </h3>

          <Carousel className="w-full">
            <CarouselContent className="pl-4">
              {propertyImages.map((image, index) => (
                <CarouselItem
                  key={index}
                  className="basis-full pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <div
                    className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-white/30 transition-all duration-500     transform-gpu h-80"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
                    }}
                  >
                    {/* Hover glow effect */}
                    <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Image container - full height */}
                    <div className="relative h-full overflow-hidden rounded-3xl">
                      <Image
                        src={image.src || "/placeholder.svg"}
                        alt={image.alt}
                        className="object-cover transition-all duration-700"
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1280px) 33vw, 33vw"
                      />
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                      {/* Shimmer effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Custom styled carousel navigation */}
            <CarouselPrevious className="md:-left-5 left-1 w-12 h-12 bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 hover:border-white/40 text-white transition-all duration-300" />
            <CarouselNext className="md:-right-5 right-1 w-12 h-12 bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 hover:border-white/40 text-white transition-all duration-300" />
          </Carousel>
        </div>

        {/* Background decoration elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl animate-pulse" />
        <div
          className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </section>

      {/* Bottom wave decoration */}
      <div className="md:block hidden absolute bottom-0 w-full -mb-2 z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 100"
          className="w-full h-auto"
          preserveAspectRatio="none"
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