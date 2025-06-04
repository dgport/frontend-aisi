import ClientWrapper from "@/components/shared/clientwrapper/ClientWrapper";
import BatumiFAQ from "./_components/BatumiFAQ";
import BatumiGallery from "./_components/BatumiGallery";
import Cover from "./_components/Cover";
import SelectFloor from "./_components/SelectFloor";

export default function page() {
  return (
    <>
      <ClientWrapper>
        <Cover />
        <SelectFloor />
        <BatumiGallery />
        <BatumiFAQ />
      </ClientWrapper>
    </>
  );
}