import React from "react";
import { Metadata } from "next";
import SelectFloor from "./_components/SelectFloor";
import Cover from "./_components/Cover";
import StatusGallery from "./_components/StatusGallery";
import StatusFAQ from "./_components/StatusFAQ";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("status");

  return {
    title: t("aisiStatus"),
    description: t("statusDesc"),
    keywords: t("keyWords"),
    authors: [{ name: t("aisiGroup") }],
    creator: t("aisiGroup"),
    publisher: t("aisiGroup"),
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
    openGraph: {
      type: "website",
      locale: "ka_GE",
      alternateLocale: ["en_US"],
      url: "https://aisigroup.ge/en/aisi-status",
      title: t("aisiStatus"),
      description: t("statusDesc"),
      siteName: t("aisiGroup"),
      images: [
        {
          url: "https://aisigroup.ge/images/status/StatusCover.png",
          width: 1200,
          height: 630,
          alt: t("statusImageAlt"),
        },
      ],
    },
    other: {
      "apple-mobile-web-app-title": t("aisiGroup"),
      "application-name": t("aisiGroup"),
    },
  };
}

export default function Page() {
  return (
    <>
      <Cover />
      <SelectFloor />
      <StatusFAQ />
      <StatusGallery />
    </>
  );
}
