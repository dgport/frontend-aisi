"use client";

import Cover from "./_components/Cover";
import GoderdziFAQ from "./_components/GoderdziFAQ";
import GoderdziGallery from "./_components/GoderdziGallery";
import SelectFloor from "./_components/SelectFloor";

export default function Page() {
  return (
    <>
      <Cover />
      <section className="mx-4 md:mx-8 lg:mx-16 my-10 flex flex-col gap-10">
        <SelectFloor />
        <GoderdziFAQ />
        <GoderdziGallery />
      </section>
    </>
  );
}
