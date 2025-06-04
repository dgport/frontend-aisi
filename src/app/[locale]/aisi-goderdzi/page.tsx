"use client";

import Cover from "./_components/Cover";
import GoderdziFAQ from "./_components/GoderdziFAQ";
import GoderdziGallery from "./_components/GoderdziGallery";
import SelectFloor from "./_components/SelectFloor";


export default function Page() {
  return (
    <>
      <Cover />
      <SelectFloor />
      <GoderdziGallery />
      <GoderdziFAQ />
    </>
  );
}
