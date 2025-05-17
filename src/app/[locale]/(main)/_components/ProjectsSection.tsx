"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useMediaQuery } from "@/use-media-query";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import img from "@/root/public/images/goderdzi/MainCover1.jpg";
import img1 from "@/root/public/images/aisi-batumi.png";
import img3 from "@/root/public/images/Cover1.png";

import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import Link from "next/link";

const projectsData = [
  {
    id: 1,
    title: "AISI Batumi",
    location: "Adjara, Batumi",
    image: img1,
    address: "/aisi-batumi",
  },
  {
    id: 2,
    title: "AISI Goderdzie",
    location: "Adjara, Goderdzi ski resort",
    image: img,
    address: "/aisi-goderdzi",
  },
  {
    id: 3,
    title: "AISI Goderdzie",
    location: "Adjara, Goderdzi ski resort",
    image: img3,
    address: "/aisi-goderdzi",
    status: {
      soldOut: true,
      finished: true,
    },
  },
];

export default function ProjectsCarousel() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <section className="w-full py-16 relative">
      <div className="flex flex-col w-full items-center relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 w-full px-6"
        >
          <div className="flex md:px-16 w-full justify-between md:justify-start items-center">
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: "7rem", opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="h-[2px] bg-gradient-to-r from-indigo-400 via-indigo-200 to-indigo-400 rounded-full mr-4"
            ></motion.div>
            <h2 className="text-xl w-full md:text-4xl font-bold text-black uppercase mb-6 leading-tight drop-shadow-lg">
              Our Projects
            </h2>
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: "7rem", opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="h-[2px] bg-gradient-to-r from-indigo-400 via-indigo-200 to-indigo-400 rounded-full ml-4"
            ></motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full "
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
              dragFree: false,
              slidesToScroll: 1,
              watchDrag: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-1 md:-ml-2 md:px-12">
              {projectsData.map((project) => (
                <CarouselItem
                  key={project.id}
                  className={`px-6 md:px-5 ${
                    isMobile ? "basis-full" : "basis-1/3"
                  }`}
                >
                  <div className="relative group w-full overflow-hidden rounded-lg md:shadow-2xl bg-white/10 backdrop-blur-md">
                    <Link href={project.address} className="block w-full">
                      <div className="relative h-80 sm:h-96 overflow-hidden rounded-lg w-full">
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70 z-10"></div>
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          fill
                          priority
                          className={`object-cover transition-transform duration-700 group-hover:scale-105 ${
                            project.status?.soldOut || project.status?.finished
                              ? "blur-[1px]"
                              : ""
                          }`}
                        />
                        {(project.status?.soldOut ||
                          project.status?.finished) && (
                          <div className="absolute inset-0 flex flex-col items-center justify-center z-20 bg-black/40">
                            {project.status.soldOut && (
                              <div className="bg-red-600 text-white font-bold py-2 px-6 rounded-md text-2xl mb-4 transform rotate-12 shadow-xl">
                                SOLD OUT
                              </div>
                            )}
                            {project.status.finished && (
                              <div className="bg-green-600 text-white font-bold py-2 px-6 rounded-md text-2xl transform -rotate-6 shadow-xl">
                                FINISHED
                              </div>
                            )}
                          </div>
                        )}

                        <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)] group-hover:translate-x-2 transition-transform duration-300">
                            {project.title}
                          </h3>
                          <div className="flex items-center">
                            <p className="text-white/90 text-base drop-shadow-md">
                              {project.location}
                            </p>
                            <div className="ml-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <ArrowRight className="h-5 w-5 text-white" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="absolute lg:hidden left-2 md:left-4 top-1/2 bg-white/90 hover:bg-white border-none shadow-lg h-10 w-10 md:h-12 md:w-12 transition-all duration-300">
              <ChevronLeft className="h-5 w-5 md:h-6 md:w-6 text-blue-600" />
            </CarouselPrevious>
            <CarouselNext className="absolute right-2 lg:hidden  md:right-4 top-1/2 bg-white/90 hover:bg-white border-none shadow-lg h-10 w-10 md:h-12 md:w-12 transition-all duration-300">
              <ChevronRight className="h-5 w-5 md:h-6 md:w-6 text-blue-600" />
            </CarouselNext>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}
