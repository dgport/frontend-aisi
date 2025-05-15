"use client";

import CoverSection from "@/components/shared/cover/MainCoverSection";
import Cover2 from "@/root/public/images/main/MainCover2.png";
import Cover3 from "@/root/public/images/main/MainCover3.png";

export default function Cover() {
  return (
    <CoverSection
      images={[Cover2, Cover3]}
      title="AISI GROUP"
      subtitle="Premium Real Estate Developer"
      description="Transforming spaces into exceptional living experiences since 2010"
      secondaryTitle="Investment, residential and commercial real estate"
      secondaryDescription="AISI Group offers a diverse range of projects designed to meet various needs, including residential homes, investment apartments, and commercial properties."
      tags={[{ text: "LUXURY" }, { text: "MODERN" }, { text: "EXCLUSIVE" }]}
      slideInterval={7000}
      height="lg:min-h-screen"
    />
  );
}
