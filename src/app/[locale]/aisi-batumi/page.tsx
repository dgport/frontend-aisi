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
        <section className="mx-4 md:mx-8 lg:mx-16 my-10 flex flex-col gap-5">
          <SelectFloor />
          <BatumiGallery />
          <BatumiFAQ />
        </section>
      </ClientWrapper>
    </>
  );
}
