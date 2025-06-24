import CoverSection from "@/components/shared/cover/MainCoverSection";
import Cover1 from "@/root/public/images/goderdzi/MainCover1.jpg";
import Cover2 from "@/root/public/images/goderdzi/MainCover2.jpg";
import { useTranslations } from "next-intl";

export default function Cover() {
  const t = useTranslations("goderdzi");
  return (
    <CoverSection
      images={[Cover1, Cover2]}
      title={t("aisiGoderdzie")}
      subtitle=""
      description={t("transferSpaces")}
      secondaryTitle="Goderdzi Residence in Mountain Adjara"
      secondaryDescription="Goderdzi Residence in Mountain Adjara Goderdzi Residence in Mountain Adjara Goderdzi Residence in Mountain Adjara"
      tags={[]}
      slideInterval={7000}
      height="lg:h-[700px]"
    />
  );
}
