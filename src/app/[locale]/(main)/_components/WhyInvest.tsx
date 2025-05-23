"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft } from "lucide-react";

interface InvestmentReason {
  id: number;
  title: string;
  description: string;
  stats: string[];
  image: string;
}

const investmentReasons: InvestmentReason[] = [
  {
    id: 1,
    title: "Growing Tourism",
    description:
      "Rapidly expanding tourism market with year-round visitors and increasing international attention.",
    stats: [
      "15% annual growth",
      "4.5M tourists in 2024",
      "Top 5 emerging destination",
    ],
    image: "/images/main/Batumi1.jpeg",
  },
  {
    id: 2,
    title: "Property Appreciation",
    description:
      "Strong annual property value growth with projected increases of 8-12% over the next five years.",
    stats: ["10% average ROI", "3-5 year breakeven", "Strong rental yields"],
    image: "/images/main/Batumi2.jpeg",
  },
  {
    id: 3,
    title: "Government Incentives",
    description:
      "Tax advantages and development grants available for foreign investors in tourism infrastructure.",
    stats: [
      "0% property tax",
      "Foreign ownership allowed",
      "Business visa programs",
    ],
    image: "/images/main/Batumi3.jpg",
  },
  {
    id: 4,
    title: "Strategic Location",
    description:
      "Positioned at a crossroads between major markets with excellent transportation connections.",
    stats: ["3-hour flights to EU", "Direct sea routes", "New Silk Road hub"],
    image: "/images/main/Batumi4.webp",
  },
];

export default function WhyInvest() {
  const [activeReason, setActiveReason] = useState(1);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  const handleNext = () => {
    setActiveReason((current) =>
      current === investmentReasons.length ? 1 : current + 1
    );
    resetAutoplayTimer();
  };

  const handlePrev = () => {
    setActiveReason((current) =>
      current === 1 ? investmentReasons.length : current - 1
    );
    resetAutoplayTimer();
  };

  const jumpToReason = (id: number) => {
    setActiveReason(id);
    resetAutoplayTimer();
  };

  const resetAutoplayTimer = () => {
    if (autoplayRef.current) {
      clearTimeout(autoplayRef.current);
    }

    autoplayRef.current = setTimeout(() => {
      handleNext();
    }, 8000);
  };

  useEffect(() => {
    resetAutoplayTimer();

    return () => {
      if (autoplayRef.current) {
        clearTimeout(autoplayRef.current);
      }
    };
  }, [activeReason, resetAutoplayTimer]);

  const getCurrentReason = () =>
    investmentReasons.find((reason) => reason.id === activeReason) ||
    investmentReasons[0];

  return (
    <section className="relative w-full min-h-[600px] bg-gradient-to-b from-black/80 to-black/40 overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <AnimatePresence>
          {investmentReasons.map(
            (reason) =>
              activeReason === reason.id && (
                <motion.div
                  key={reason.id}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 1.2 }}
                  className="absolute inset-0"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 z-10" />
                  <Image
                    src={reason.image || "/placeholder.svg"}
                    alt={reason.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </motion.div>
              )
          )}
        </AnimatePresence>
      </div>

      <div className="relative z-20 container mx-auto px-4 py-12 md:py-16 min-h-[650px] md:min-h-[700px] flex flex-col">
        <div className="flex-1 flex flex-col">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8 md:mb-12"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 text-center">
              Why Invest in <span className="text-gray-300">Batumi</span>?
            </h2>
            <p className="text-white/80 text-center max-w-2xl mx-auto">
              Discover the compelling reasons that make Batumi an exceptional
              investment opportunity
            </p>
          </motion.div>

          <div className="flex-1 flex flex-col md:flex-row gap-8 lg:gap-12 max-w-7xl mx-auto w-full">
            <div className="md:w-1/3 lg:w-1/4 flex md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-4 md:pb-0">
              {investmentReasons.map((reason) => (
                <motion.button
                  key={reason.id}
                  onClick={() => jumpToReason(reason.id)}
                  className={`group flex items-center gap-3 p-3 md:p-4 text-left transition-all duration-300 border-l-4 md:min-w-56 flex-shrink-0 md:flex-shrink cursor-pointer ${
                    activeReason === reason.id
                      ? "bg-white/20 backdrop-blur-xs border-l-white"
                      : "bg-white/5 border-l-transparent hover:bg-white/10"
                  }`}
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div
                    className={`w-8 h-8 flex items-center justify-center rounded-full transition-all ${
                      activeReason === reason.id
                        ? "bg-white text-black"
                        : "bg-white/20 text-white group-hover:bg-white/30"
                    }`}
                  >
                    {reason.id}
                  </div>
                  <span
                    className={`font-medium md:text-lg transition-colors ${
                      activeReason === reason.id
                        ? "text-white"
                        : "text-white/70"
                    }`}
                  >
                    {reason.title}
                  </span>
                  {activeReason === reason.id && (
                    <motion.div
                      className="ml-auto hidden md:block"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      <ChevronRight className="w-5 h-5 text-white" />
                    </motion.div>
                  )}
                </motion.button>
              ))}
            </div>
            <div className="md:w-2/3 lg:w-3/4 relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeReason}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white/10 backdrop-blur-md rounded-lg p-5 md:p-6 border border-white/20 h-auto"
                >
                  <div className="flex flex-col h-full">
                    <div className="mb-6">
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 flex items-center gap-3">
                        <span className="w-10 h-10 flex items-center justify-center bg-white text-black font-bold rounded-full">
                          {getCurrentReason().id}
                        </span>
                        {getCurrentReason().title}
                      </h3>
                      <p className="text-white/80 text-lg">
                        {getCurrentReason().description}
                      </p>
                    </div>
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                      {getCurrentReason().stats.map((stat, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 + 0.3 }}
                          className="bg-white/15 p-4 rounded-lg border border-white/15 flex items-center"
                        >
                          <div className="w-2 h-8 bg-white rounded-full mr-3"></div>
                          <span className="text-white font-medium">{stat}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
              <div className="flex justify-between mt-5">
                <div className="flex gap-3">
                  <button
                    onClick={handlePrev}
                    className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer"
                    aria-label="Previous reason"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer"
                    aria-label="Next reason"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
                <div className="flex items-center gap-2">
                  {investmentReasons.map((reason) => (
                    <button
                      key={reason.id}
                      onClick={() => jumpToReason(reason.id)}
                      className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                        activeReason === reason.id
                          ? "bg-white w-8"
                          : "bg-white/30 w-4 hover:bg-white/50"
                      }`}
                      aria-label={`Jump to ${reason.title}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}