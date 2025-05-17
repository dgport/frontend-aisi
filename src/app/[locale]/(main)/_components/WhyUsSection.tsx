"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Home, Building2, SmilePlus, Clock } from "lucide-react";
import test from "@/root/public/images/main/low-angle-shot-modern-glass-city-buildings.jpg";

interface WhyUsProps {
  value: string;
  label: string;
  icon: ReactNode;
}

export default function WhyChooseUs() {
  const Counter = ({ value, label, icon }: WhyUsProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (isInView) {
        let start = 0;
        const end = Number.parseInt(value);
        const duration = Math.min(1500, Math.max(800, end / 10));
        const stepSize = Math.max(1, Math.floor(end / 100));

        const timer = setInterval(() => {
          start += stepSize;
          if (start > end) {
            setCount(end);
            clearInterval(timer);
          } else {
            setCount(start);
          }
        }, duration / (end / stepSize));

        return () => clearInterval(timer);
      }
    }, [isInView, value]);

    return (
      <div ref={ref} className="flex flex-col items-center text-center">
        <div className="text-teal-500 mb-2">{icon}</div>
        <motion.h3
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-bold text-white mb-0.5"
        >
          {isInView ? count : 0}+
        </motion.h3>
        <p className="text-white/80 text-xs md:text-sm">{label}</p>
      </div>
    );
  };

  return (
    <section className="relative py-6 md:py-12 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={test || "/placeholder.svg"}
          alt="Luxury Building"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>
      <div className="relative z-10 container mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center text-center mb-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xl md:text-3xl font-bold text-white mb-1"
          >
            Why Choose Us?
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "40px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-1 bg-teal-500 mb-2"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-white/80 max-w-2xl mx-auto text-md"
          >
            Our expertise in luxury real estate development and unwavering
            commitment to quality has established us as industry leaders for
            over two decades.
          </motion.p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 relative">
            <div className="px-2 py-2">
              <Counter
                value="10000"
                label="Flats Delivered"
                icon={<Home size={24} className="mx-auto" />}
              />
            </div>
            <div
              className="hidden md:block absolute h-12 w-px bg-white/20"
              style={{ top: "50%", left: "25%", transform: "translateY(-50%)" }}
            ></div>
            <div className="px-2 py-2">
              <Counter
                value="45"
                label="Building Projects"
                icon={<Building2 size={24} className="mx-auto" />}
              />
            </div>
            <div
              className="hidden md:block absolute h-12 w-px bg-white/20"
              style={{ top: "50%", left: "50%", transform: "translateY(-50%)" }}
            ></div>
            <div className="px-2 py-2">
              <Counter
                value="987"
                label="Happy Clients"
                icon={<SmilePlus size={24} className="mx-auto" />}
              />
            </div>
            <div
              className="hidden md:block absolute h-12 w-px bg-white/20"
              style={{ top: "50%", left: "75%", transform: "translateY(-50%)" }}
            ></div>
            <div className="px-2 py-2">
              <Counter
                value="25"
                label="Years Experience"
                icon={<Clock size={24} className="mx-auto" />}
              />
            </div>
            <div
              className="block md:hidden absolute w-full h-px bg-white/20"
              style={{ top: "50%", left: 0 }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}
