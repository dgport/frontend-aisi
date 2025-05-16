"use client"

import { useState } from "react";

const accordionItems = [
  {
    question: "What amenities are included with each floor?",
    answer:
      "Each floor comes with access to all building amenities including 24/7 security, dedicated parking spaces, the rooftop garden, fitness center, and community gathering spaces. Higher floors may have enhanced views and premium finishes.",
  },
  {
    question: "How do I schedule a viewing?",
    answer:
      "You can schedule a viewing by contacting our sales office at (123) 456-7890 or by filling out the contact form on our website. Our team will arrange a convenient time for you to visit the property and explore your preferred floor options.",
  },
  {
    question: "What is the purchasing process?",
    answer:
      "The purchasing process begins with selecting your preferred floor and unit. Once you've made your selection, our sales team will guide you through the reservation process, financing options, contract signing, and closing procedures. We're here to make your home-buying experience as seamless as possible.",
  },
];

export default function BatumiFAQ() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <section className="w-full border border-gray-300 rounded-lg">
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <h3 className="text-2xl font-semibold mb-6">
          Frequently Asked Questions
        </h3>

        <div className="space-y-4">
          {accordionItems.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                className="flex justify-between items-center w-full p-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors"
                onClick={() => toggleAccordion(index)}
              >
                <span className="font-medium">{item.question}</span>
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
                <p className="text-gray-700">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
