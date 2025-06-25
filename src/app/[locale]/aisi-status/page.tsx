import { Metadata } from "next";
import SelectFloor from "./_components/SelectFloor";
import Cover from "./_components/Cover";
import StatusGallery from "./_components/StatusGallery";
import StatusFAQ from "./_components/StatusFAQ";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
 const t = await getTranslations("main");

 return {
   title: t("aisiGroup"),
   description: t("transformingFrom"),
   keywords: t("metaKeywords").split(", "),
   creator: t("aisiGroup"),
   publisher: "Digital Port",
   metadataBase: new URL("https://aisigroup.ge/"),
   openGraph: {
     title: `${t("aisiGroup")} - ${t("premiumDev")}`,
     description: `${t("coverDesc")} ${t("transformingFrom")}`,
     url: "https://aisigroup.ge",
     siteName: t("aisiGroup"),
     images: [
       {
         url: "/images/opengraph-image.png",
         width: 1200,
         height: 630,
         alt: `${t("aisiGroup")} - ${t("coverTitle")}`,
       },
     ],
     type: "website",
   },
   twitter: {
     card: "summary_large_image",
     title: `${t("aisiGroup")} - ${t("premiumDev")}`,
     description: t("coverDesc"),
     images: ["/images/opengraph-image.png"],
   },
   alternates: {
     canonical: "https://aisigroup.ge",
     languages: {
       en: "https://aisigroup.ge/en",
       ka: "https://aisigroup.ge/ka",
     },
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
