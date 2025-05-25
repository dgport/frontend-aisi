"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

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
    <section className="p-4 md:px-16 py-10 lg:py-20">
      <div className="w-full border border-gray-300 rounded-lg">
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="text-2xl font-semibold mb-6">{t("faqTitle")}</h3>

          <div className="space-y-4">
            {accordionItems.map((item, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  className="flex justify-between cursor-pointer items-center w-full p-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors"
                  onClick={() => toggleAccordion(index)}
                >
                  <span className="font-medium">{t(item.questionKey)}</span>
                  <svg
                    className={`w-5 h-5 transition-transform ${
                      openAccordion === index ? "transform rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    openAccordion === index ? "max-h-64 p-4" : "max-h-0"
                  } overflow-hidden`}
                >
                  <p className="text-gray-700">{t(item.answerKey)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}