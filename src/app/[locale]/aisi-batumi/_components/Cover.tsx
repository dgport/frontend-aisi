import CoverSection from "@/components/shared/cover/MainCoverSection";
import Cover1 from "@/root/public/images/batumi/Cover1.png";
import Cover2 from "@/root/public/images/batumi/Cover2.png";

export default function Cover() {
  return (
    <CoverSection
      images={[Cover1, Cover2]}
      title="AISI Batumi"
      subtitle="Premium Real Estate Developer"
      description="Transforming spaces into exceptional living experiences since 2010"
      secondaryTitle="AISI Batumi in adjara"
      secondaryDescription="AISI Batumi in Mountain Adjara AISI Batumi in Mountain Adjara AISI Batumi in Mountain Adjara"
      tags={[]}
      slideInterval={7000}
      height="lg:h-[700px]"
    />
  );
}
