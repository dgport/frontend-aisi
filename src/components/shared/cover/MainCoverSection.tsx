"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { StaticImageData } from "next/image";

interface Tag {
  text: string;
}

interface CoverSectionProps {
  images?: (StaticImageData | string)[];
  title?: string;
  subtitle?: string;
  description?: string;
  secondaryTitle?: string;
  secondaryDescription?: string;
  tags?: Tag[];
  slideInterval?: number;
  overlayOpacity?: number;
  height: string;
}

export default function CoverSection({
  images = [],
  title = "AISI GROUP",
  subtitle,
  description = "Transforming spaces into exceptional living experiences since 2010",
  secondaryTitle,
  secondaryDescription,
  tags = [{ text: "LUXURY" }, { text: "MODERN" }, { text: "EXCLUSIVE" }],
  slideInterval = 7000,
  height = "lg:min-h-screen",
}: CoverSectionProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, slideInterval);

    return () => clearInterval(interval);
  }, [images.length, slideInterval]);

  return (
    <motion.div
      className={` ${height} relative h-[700px] lg:min-h-[30vh] w-full overflow-hidden px-6 lg:px-16`}
    >
      <div className={`absolute inset-0 bg-zinc-900/60 z-10`}></div>

      {images.length > 0 && (
        <div className="absolute inset-0">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="absolute inset-0 w-full h-full"
              initial={false}
              animate={{
                opacity: currentImageIndex === index ? 1 : 0,
                scale: currentImageIndex === index ? 1 : 1.05,
              }}
              transition={{
                opacity: { duration: 1.5, ease: "easeInOut" },
                scale: { duration: 2, ease: "easeOut" },
              }}
            >
              <Image
                src={image || "/placeholder.svg"}
                className="object-cover w-full h-full"
                alt={`Cover image ${index + 1}`}
                fill
                priority
              />
            </motion.div>
          ))}
        </div>
      )}

      <div className="relative z-20 h-full w-full max-w-7xl mx-auto">
        <div className="flex flex-col h-full justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-16 items-end md:items-center h-full   pb-2">
            {(title || description || (tags && tags.length > 0)) && (
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="max-w-lg  pt-10 lg:pt-0"
              >
                {title && (
                  <div className="mb-4 relative">
                    <div className="pr-28">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "5rem" }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="h-[3px] bg-gradient-to-r from-indigo-400 via-white to-indigo-400 mb-4"
                      />
                    </div>
                    <motion.h1
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                      className="text-transparent h-12 bg-gradient-to-r from-indigo-100 via-indigo-50 to-indigo-100 bg-clip-text text-3xl lg:text-4xl  font-normal tracking-wider"
                    >
                      {title.split(" ").map((word, i) => (
                        <motion.span
                          key={i}
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.3 }}
                          className={i > 0 ? "ml-2" : ""}
                        >
                          {word}
                        </motion.span>
                      ))}
                    </motion.h1>

                    <div className="pr-28">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "5rem" }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="h-[3px] bg-gradient-to-r from-indigo-400 via-white to-indigo-400 mt-4 ml-auto"
                      />
                    </div>
                  </div>
                )}

                {subtitle && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                    className="text-white text-sm lg:text-base xl:text-lg mt-2"
                  >
                    {subtitle}
                  </motion.p>
                )}

                {description && (
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="text-white text-base lg:text-lg xl:text-lg mt-4"
                  >
                    {description}
                  </motion.p>
                )}

                {tags && tags.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="lg:flex flex-wrap mt-6 gap-3 hidden"
                  >
                    {tags.map((tag, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                        whileHover={{
                          scale: 1.05,
                          backgroundColor: "rgba(255, 255, 255, 0.3)",
                        }}
                        className="bg-white/10 backdrop-blur-xs px-3 py-1 border border-indigo-100 rounded"
                      >
                        <span className="text-white text-sm lg:text-sm font-light tracking-wider">
                          {tag.text}
                        </span>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </motion.div>
            )}
            {(secondaryTitle || secondaryDescription) && (
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="max-w-lg lg:ml-auto mt-8 lg:mt-0"
              >
                {secondaryTitle && (
                  <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="text-xl lg:text-2xl text-center lg:text-start xl:text-4xl font-normal text-white mb-3 lg:mb-5"
                  >
                    {secondaryTitle}
                  </motion.h2>
                )}

                {secondaryDescription && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="text-white mb-3 lg:mb-4 text-center lg:text-start text-sm lg:text-base xl:text-xl"
                  >
                    {secondaryDescription}
                  </motion.p>
                )}

                {images.length > 1 && (
                  <div className="flex mt-6 mb-10 gap-2 justify-center lg:justify-start">
                    {images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-500 ${
                          currentImageIndex === index
                            ? "bg-white w-4"
                            : "bg-white/40"
                        }`}
                        aria-label={`Show image ${index + 1}`}
                      />
                    ))}
                  </div>
                )}
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
