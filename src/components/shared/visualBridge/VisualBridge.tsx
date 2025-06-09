"use client"

import { motion } from "framer-motion"
import { useTranslations } from "next-intl";

interface EnhancedVisualBridgeProps {
  className?: string;
}

export default function VisualBridge({
  className = "",
}: EnhancedVisualBridgeProps) {
  const t = useTranslations("main");
  const tickerWords = [
    t("safetyFirst"),
    t("fastConstruction"),
    t("premiumQuality"),
    t("innovativeDesign"),
    t("sustainableBuilding"),
    t("expertCraftsmanship"),
    t("modernArchitecture"),
    t("luxuryLiving"),
    t("reliableConstruction"),
    t("advancedTechnology"),
    t("ecoFriendly"),
    t("professionalTeam"),
    t("timelyDelivery"),
    t("superiorMaterials"),
    t("cuttingEdgeSolutions"),
  ];

  const infinityPath =
    "M12,20 C12,20 4,16 4,12 C4,8 8,4 12,4 C16,4 20,8 20,12 C20,16 16,20 12,20 C12,20 20,16 20,12 C20,8 16,4 12,4 C8,4 4,8 4,12 C4,16 12,20 12,20 Z";

  return (
    <div className={`relative z-30 -mt-20 mb-0 ${className}`}>
      <div className="h-40 bg-gradient-to-b from-transparent via-slate-900/90 to-slate-950/95 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.02)_25%,rgba(255,255,255,0.02)_50%,transparent_50%,transparent_75%,rgba(255,255,255,0.02)_75%)] bg-[length:20px_20px]"></div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <svg
            width="200"
            height="100"
            viewBox="0 0 24 24"
            className="opacity-20"
          >
            <defs>
              <linearGradient
                id="infinityGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="rgba(255,255,255,0.1)" />
                <stop offset="50%" stopColor="rgba(255,255,255,0.6)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0.1)" />
              </linearGradient>
            </defs>
            <motion.path
              d={infinityPath}
              stroke="url(#infinityGradient)"
              strokeWidth="0.5"
              fill="none"
              strokeLinecap="round"
              strokeDasharray="2 4"
              initial={{ strokeDashoffset: 0 }}
              animate={{ strokeDashoffset: -24 }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                filter: "drop-shadow(0 0 8px rgba(255,255,255,0.3))",
              }}
            />
          </svg>
        </div>

        <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2">
          <div className="max-w-7xl mx-auto px-6 lg:px-16">
            <div className="flex justify-center items-center">
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: "30%", opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="h-[2px] bg-gradient-to-r from-transparent via-white/60 to-white/30 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.3)]"
              ></motion.div>

              <motion.div
                initial={{ scale: 0, rotate: 0 }}
                whileInView={{ scale: 1, rotate: 45 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mx-8 relative"
              >
                <div className="w-6 h-6 bg-gradient-to-br from-white/80 via-white/60 to-white/40 rounded-sm shadow-[0_0_20px_rgba(255,255,255,0.4)] border border-white/30">
                  <div className="absolute inset-1 bg-gradient-to-br from-slate-800/50 to-slate-900/70 rounded-sm"></div>
                </div>
              </motion.div>

              <motion.div
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: "30%", opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="h-[2px] bg-gradient-to-l from-transparent via-white/60 to-white/30 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.3)]"
              ></motion.div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-4 right-8">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1.1 }}
            className="w-3 h-3 border-b-2 border-r-2 border-white/40 rounded-br-lg"
          ></motion.div>
        </div>

        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: [0, 1, 0], y: -20 }}
              viewport={{ once: true }}
              transition={{
                duration: 3,
                delay: i * 0.3,
                repeat: Number.POSITIVE_INFINITY,
                repeatDelay: 2,
              }}
              className="absolute w-1 h-1 bg-white/30 rounded-full"
              style={{
                left: `${20 + i * 12}%`,
                top: `${60 + (i % 2) * 20}%`,
              }}
            ></motion.div>
          ))}
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-r from-slate-950/80 via-slate-900/60 to-slate-950/80 overflow-hidden border-t border-white/10">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.02)_50%,transparent_100%)] bg-[length:40px_100%]"></div>

          <div className="relative h-full flex items-center">
            <motion.div
              animate={{ x: ["100vw", "-200%"] }}
              transition={{
                duration: 150,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
                delay: 2,
              }}
              className="flex items-center whitespace-nowrap"
            >
              {[...tickerWords, ...tickerWords].map((word, index) => (
                <div key={index} className="flex items-center">
                  <span className="text-white/70 text-geo2 text-sm font-medium tracking-wider px-8 ">
                    {word}
                  </span>
                  <div className="w-2 h-2 bg-white/30 rounded-full mx-4  "></div>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-950/90 to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-950/90 to-transparent pointer-events-none"></div>
        </div>

        <div className="absolute bottom-8 left-0 right-0 h-8 bg-gradient-to-b from-slate-950/50 to-slate-950"></div>
      </div>

      <div className="h-8 bg-gradient-to-b from-slate-950 to-slate-950/95 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-900/60 to-slate-950/80"></div>
      </div>
    </div>
  );
}