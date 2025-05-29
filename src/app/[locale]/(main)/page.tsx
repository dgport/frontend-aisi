import type { Metadata } from "next";
import PaymentCalculator from "@/components/shared/calculator/Calculator";
import Cover from "./_components/Cover";
import MainFAQ from "./_components/MainFAQ";
import ProjectsSection from "./_components/ProjectsSection";
import WhyInvest from "./_components/WhyInvest";
import WhyChooseUs from "./_components/WhyUsSection";

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
  authors: [{ name: "Your Company Name" }],
  creator: "Your Company Name",
  publisher: "Your Company Name",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://yourwebsite.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Premium Real Estate Investment Opportunities",
    description:
      "Discover exceptional real estate investment opportunities with guaranteed returns. Explore our premium projects and start your investment journey today.",
    url: "https://yourwebsite.com",
    siteName: "Your Company Name",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Premium Real Estate Investment Opportunities",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Real Estate Investment Opportunities",
    description:
      "Discover exceptional real estate investment opportunities with guaranteed returns. Explore our premium projects and start your investment journey today.",
    images: ["/twitter-image.jpg"],
    creator: "@yourcompany",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
};

export default function page() {
  return (
    <>
      <Cover />
      <ProjectsSection />
      <WhyChooseUs />
      <PaymentCalculator />
      <WhyInvest />
      <MainFAQ />
    </>
  );
}
