"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQItem {
  questionKey: string;
  answerKey: string;
}

const accordionItems: FAQItem[] = [
  {
    questionKey: "faqQuestion1",
    answerKey: "faqAnswer1",
  },
  {
    questionKey: "faqQuestion2",
    answerKey: "faqAnswer2",
  },
  {
    questionKey: "faqQuestion3",
    answerKey: "faqAnswer3",
  },
];

export default function MainFAQ() {
  const t = useTranslations("main");
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <div className="bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: "20px 20px",
          }}
        ></div>
      </div>
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-slate-400/30 rounded-full animate-pulse"
            style={{
              left: `${10 + i * 10}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: "4s",
            }}
          />
        ))}
      </div>

      <section className="relative z-10 py-12 md:py-16 px-4 md:px-16">
        <div className=" ">
          <div className="relative w-full p-3 px-4 sm:px-8 md:px-12 pb-8 sm:pb-16 pt-0 mx-auto overflow-hidden   rounded-2xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8),0_0_0_1px_rgba(255,255,255,0.05)] border border-white/10">
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-slate-900/95 backdrop-blur-sm"></div>
            </div>
            <div className="relative z-10 p-3 sm:p-6 pt-8 sm:pt-12">
              <div className="flex flex-col items-center mb-6 sm:mb-10">
                <div className="flex items-center mb-2 sm:mb-4">
                  <HelpCircle className="h-5 w-5 sm:h-6 sm:w-6 text-white mr-2 sm:mr-3" />
                  <h3 className="text-lg sm:text-xl md:text-2xl font-normal text-white tracking-wide">
                    {t("faqTitle")}
                  </h3>
                </div>
                <div className="h-[2px] bg-gradient-to-r from-transparent via-white/60 to-transparent rounded-full w-24 sm:w-32"></div>
              </div>
              <div className="space-y-4 sm:space-y-6">
                {accordionItems.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-lg sm:rounded-xl bg-gradient-to-br from-slate-700/50 via-slate-600/40 to-slate-800/60 backdrop-blur-xl border border-white/20 shadow-lg overflow-hidden"
                  >
                    <button
                      className="flex justify-between cursor-pointer items-center w-full p-4 sm:p-5 text-left hover:bg-white/5 transition-all duration-300 group"
                      onClick={() => toggleAccordion(index)}
                    >
                      <span className="font-medium text-white/90 text-sm sm:text-base pr-4">
                        {t(item.questionKey)}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 sm:w-5 sm:h-5 text-white/70 transition-transform duration-300 flex-shrink-0 ${
                          openAccordion === index ? "transform rotate-180" : ""
                        } group-hover:text-white/90`}
                      />
                    </button>

                    <div
                      className={`transition-all duration-300 ease-in-out overflow-hidden ${
                        openAccordion === index
                          ? "max-h-96 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="px-4 sm:px-5 pb-4 sm:pb-5">
                        <div className="h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full w-full mb-3 sm:mb-4"></div>
                        <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-white/10">
                          <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                            {t(item.answerKey)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}