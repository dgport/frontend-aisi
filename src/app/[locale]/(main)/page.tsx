import type { Metadata } from "next";
import PaymentCalculator from "@/components/shared/calculator/Calculator";
import Cover from "./_components/Cover";
import MainFAQ from "./_components/MainFAQ";
import ProjectsSection from "./_components/ProjectsSection";
import WhyChooseUs from "./_components/WhyUsSection";
import VisualBridge from "@/components/shared/visualBridge/VisualBridge";
import Gallery from "./_components/Gallery";

export const metadata: Metadata = {
  title: "AISI Group",
  description:
    "Discover exceptional real estate investment opportunities with guaranteed returns. Explore our premium projects, calculate payments, and start your investment journey today.",
  keywords: [
    "real estate investment",
    "property investment",
    "investment opportunities",
    "real estate projects",
    "property calculator",
    "investment returns",
    "premium properties",
  ],
  creator: "Your Company Name",
  publisher: "Digital Port",
  metadataBase: new URL("https://aisigroup.ge/"),
  openGraph: {
    title: "Premium Real Estate Investment Opportunities",
    description:
      "Discover exceptional real estate investment opportunities with guaranteed returns. Explore our premium projects and start your investment journey today.",
    url: "https://yourwebsite.com",
    siteName: "Your Company Name",
    images: [
      {
        url: "/images/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Premium Real Estate Investment Opportunities",
      },
    ],
    type: "website",
  },
};

export default function page() {
  return (
    <>
      <Cover />
      <VisualBridge />
      <ProjectsSection />
      <Gallery />
      <PaymentCalculator />
      <WhyChooseUs />
      <MainFAQ />
    </>
  );
}