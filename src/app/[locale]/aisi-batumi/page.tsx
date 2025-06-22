import BatumiGallery from "./_components/BatumiGallery";
import Cover from "./_components/Cover";
import SelectFloor from "./_components/SelectFloor";

export default function page() {
  return (
    <>
      <Cover />
      <SelectFloor />
      <BatumiGallery />
    </>
  );
}
