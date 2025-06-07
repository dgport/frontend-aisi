"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import img from "@/root/public/images/494312578_1192631112877893_6739643093763846871_n.jpg"

// Sample images - replace with your actual images
const images = [
  {
    id: 1,
    src: img,
    alt: "Modern building exterior",
    title: "Architectural Design",
    description: "Award-winning architectural excellence",
  },
  {
    id: 2,
    src: img,
    alt: "Luxury apartment interior",
    title: "Interior Spaces",
    description: "Elegant and functional living areas",
  },
  {
    id: 3,
    src: img,
    alt: "Panoramic view",
    title: "Scenic Views",
    description: "Breathtaking surroundings from every angle",
  },
  {
    id: 4,
    src: img,
    alt: "Amenities area",
    title: "Premium Amenities",
    description: "World-class facilities for residents",
  },
  {
    id: 5,
    src: img,
    alt: "Luxury features",
    title: "Exclusive Living",
    description: "Premium lifestyle at its finest",
  },
]

export default function Gallery() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
      <section className="w-full relative py-10 overflow-hidden border-y border-blue-800/30">
        <div className="flex flex-col w-full items-center relative z-20">
          
          {/* Mobile Carousel */}
          <div className="block md:hidden w-full px-4">
            <div className="relative">
              <div className="overflow-hidden rounded-3xl">
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {images.map((image) => (
                    <div key={image.id} className="w-full flex-shrink-0">
                      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-900/50 via-slate-800/40 to-blue-950/60 backdrop-blur-2xl border-2 border-blue-700/30 shadow-2xl shadow-blue-900/50 mx-2">
                        <div className="relative h-[400px] rounded-2xl overflow-hidden w-full m-2 border border-blue-700/20">
                          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-blue-950/90 z-10"></div>
                          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 via-transparent to-transparent z-10"></div>
                          <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
                          <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                            <div className="relative">
                              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/85 via-blue-900/35 to-transparent rounded-2xl -m-4 p-4"></div>
                              <div className="relative z-10">
                                <h3 className="text-2xl font-bold text-white mb-2">
                                  {image.title}
                                </h3>
                                <p className="text-blue-100/70 text-sm">{image.description}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Carousel Controls */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-blue-900/70 hover:bg-blue-800/80 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-30"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-blue-900/70 hover:bg-blue-800/80 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-30"
              >
                <ChevronRight size={24} />
              </button>
              
              {/* Carousel Indicators */}
              <div className="flex justify-center mt-6 space-x-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? 'bg-blue-500 scale-125' 
                        : 'bg-blue-700/40 hover:bg-blue-600/60'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Desktop Overlapping Layout */}
          <div className="hidden md:block container mx-auto px-4 md:px-8 xl:px-16">
            <div className="relative min-h-[900px] ">
              
              {/* Image 1 - Top Left */}
              <motion.div
                initial={{ opacity: 0, x: -50, y: 50 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="absolute top-0 left-0 w-[280px] md:w-[380px] lg:w-[450px] z-10 group"
              >
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-900/50 via-slate-800/40 to-blue-950/60 backdrop-blur-2xl border-2 border-blue-700/30 shadow-2xl shadow-blue-900/50 hover:border-blue-600/40 hover:shadow-blue-800/60 transition-all duration-700 ease-out hover:scale-[1.05] hover:-translate-y-4 transform-gpu">
                  <div className="relative h-[300px] md:h-[380px] lg:h-[420px] rounded-2xl overflow-hidden w-full m-2 border border-blue-700/20">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-blue-950/90 z-10"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 via-transparent to-transparent z-10"></div>
                    <Image src={images[0].src || "/placeholder.svg"} alt={images[0].alt} fill className="object-cover transition-all duration-1000 group-hover:scale-110" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-950/85 via-blue-900/35 to-transparent rounded-2xl -m-4 p-4"></div>
                        <div className="relative z-10">
                          <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:translate-x-2 transition-all duration-500">
                            {images[0].title}
                          </h3>
                          <p className="text-blue-100/70 text-sm md:text-base">{images[0].description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Image 2 - Top Right */}
              <motion.div
                initial={{ opacity: 0, x: 50, y: 50 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute top-0 right-0 w-[280px] md:w-[380px] lg:w-[450px] z-10 group"
              >
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-800/50 via-slate-700/40 to-slate-900/60 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4),0_4px_16px_rgba(255,255,255,0.05)] hover:border-white/25 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4),0_6px_20px_rgba(255,255,255,0.1)] transition-all duration-700 ease-out hover:scale-[1.05] hover:-translate-y-4 transform-gpu">
                  <div className="relative h-[300px] md:h-[380px] lg:h-[420px] rounded-2xl overflow-hidden w-full m-2 border border-white/10">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950/95 z-10"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent z-10"></div>
                    <Image src={images[1].src || "/placeholder.svg"} alt={images[1].alt} fill className="object-cover transition-all duration-1000 group-hover:scale-110" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent rounded-2xl -m-4 p-4"></div>
                        <div className="relative z-10">
                          <h3 className="text-xl md:text-2xl font-bold text-white mb-2 drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] group-hover:translate-x-2 transition-all duration-500">
                            {images[1].title}
                          </h3>
                          <p className="text-white/80 text-sm md:text-base drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">{images[1].description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Image 3 - Center Left (Large, Overlapping) */}
              <motion.div
                initial={{ opacity: 0, x: -30, y: 30 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute top-[350px] md:top-[400px] left-4 md:left-12 w-[280px] md:w-[360px] lg:w-[420px] z-30 group"
              >
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-800/60 via-slate-700/50 to-slate-900/70 backdrop-blur-xl border border-white/15 shadow-[0_12px_40px_rgba(0,0,0,0.5),0_6px_20px_rgba(255,255,255,0.08)] hover:border-white/30 hover:shadow-[0_16px_48px_rgba(0,0,0,0.5),0_8px_24px_rgba(255,255,255,0.12)] transition-all duration-700 ease-out hover:scale-[1.05] hover:-translate-y-6 transform-gpu">
                  <div className="relative h-[300px] md:h-[380px] lg:h-[420px] rounded-2xl overflow-hidden w-full m-2 border border-white/15">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950/95 z-10"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent z-10"></div>
                    <Image src={images[2].src || "/placeholder.svg"} alt={images[2].alt} fill className="object-cover transition-all duration-1000 group-hover:scale-110" />
                    <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-900/50 to-transparent rounded-2xl -m-4 p-4"></div>
                        <div className="relative z-10">
                          <h3 className="text-xl md:text-2xl font-bold text-white mb-2 drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] group-hover:translate-x-2 transition-all duration-500">
                            {images[2].title}
                          </h3>
                          <p className="text-white/90 text-sm md:text-base drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">{images[2].description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Image 4 - Bottom Right */}
              <motion.div
                initial={{ opacity: 0, x: 30, y: 30 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="absolute top-[350px] md:top-[400px] right-4 md:right-12 w-[280px] md:w-[360px] lg:w-[420px] z-30 group"
              >
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-800/60 via-slate-700/50 to-slate-900/70 backdrop-blur-xl border border-white/15 shadow-[0_12px_40px_rgba(0,0,0,0.5),0_6px_20px_rgba(255,255,255,0.08)] hover:border-white/30 hover:shadow-[0_16px_48px_rgba(0,0,0,0.5),0_8px_24px_rgba(255,255,255,0.12)] transition-all duration-700 ease-out hover:scale-[1.05] hover:-translate-y-6 transform-gpu">
                  <div className="relative h-[300px] md:h-[380px] lg:h-[420px] rounded-2xl overflow-hidden w-full m-2 border border-white/15">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950/95 z-10"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent z-10"></div>
                    <Image src={images[3].src || "/placeholder.svg"} alt={images[3].alt} fill className="object-cover transition-all duration-1000 group-hover:scale-110" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent rounded-2xl -m-4 p-4"></div>
                        <div className="relative z-10">
                          <h3 className="text-xl md:text-2xl font-bold text-white mb-2 drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] group-hover:translate-x-2 transition-all duration-500">
                            {images[3].title}
                          </h3>
                          <p className="text-white/90 text-sm md:text-base drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">{images[3].description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Image 5 - Center */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute top-[180px] md:top-[200px] left-1/2 transform -translate-x-1/2 w-[240px] md:w-[320px] lg:w-[380px] z-15 group"
              >
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-700/60 via-slate-600/50 to-slate-800/70 backdrop-blur-xl border border-white/15 shadow-[0_10px_36px_rgba(0,0,0,0.45),0_5px_18px_rgba(255,255,255,0.06)] hover:border-white/25 hover:shadow-[0_14px_44px_rgba(0,0,0,0.45),0_7px_22px_rgba(255,255,255,0.1)] transition-all duration-700 ease-out hover:scale-[1.05] hover:-translate-y-4 transform-gpu">
                  <div className="relative h-[260px] md:h-[320px] lg:h-[360px] rounded-2xl overflow-hidden w-full m-2 border border-white/12">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950/95 z-10"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-800/60 via-transparent to-transparent z-10"></div>
                    <Image src={images[4].src || "/placeholder.svg"} alt={images[4].alt} fill className="object-cover transition-all duration-1000 group-hover:scale-110" />
                    <div className="absolute bottom-0 left-0 right-0 p-5 z-20">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-800/40 to-transparent rounded-2xl -m-4 p-4"></div>
                        <div className="relative z-10">
                          <h3 className="text-lg md:text-xl font-bold text-white mb-2 drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] group-hover:translate-x-2 transition-all duration-500">
                            {images[4].title}
                          </h3>
                          <p className="text-white/80 text-xs md:text-sm drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">{images[4].description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
              <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-white/20 rounded-full blur-sm animate-pulse shadow-[0_0_10px_rgba(255,255,255,0.3)]"></div>
              <div className="absolute top-3/4 right-1/4 w-6 h-6 bg-slate-600/20 rounded-full blur-md animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 left-1/4 w-3 h-3 bg-white/30 rounded-full blur-sm animate-pulse delay-500 shadow-[0_0_8px_rgba(255,255,255,0.2)]"></div>
            </div>
          </div>
        </div>
      </section>

     
    </div>
  )
}