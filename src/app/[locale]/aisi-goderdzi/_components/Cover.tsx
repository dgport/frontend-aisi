import CoverSection from "@/components/shared/cover/MainCoverSection";
import Cover1 from "@/root/public/images/goderdzi/MainCover1.jpg";
import Cover2 from "@/root/public/images/goderdzi/MainCover2.jpg";

export default function Cover() {
  return (
    <CoverSection
      images={[Cover1, Cover2]}
      title="Goderdzi Residence"
      subtitle="Premium Real Estate Developer"
      description="Transforming spaces into exceptional living experiences since 2010"
      secondaryTitle="Goderdzi Residence in Mountain Adjara"
      secondaryDescription="Goderdzi Residence in Mountain Adjara Goderdzi Residence in Mountain Adjara Goderdzi Residence in Mountain Adjara"
      tags={[]}
      slideInterval={7000}
      height="lg:min-h-[30vh]"
    />
  );
}
