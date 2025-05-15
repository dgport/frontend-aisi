import Cover from "./_components/Cover";
import SelectFloor from "./_components/SelectFloor";

export default function page() {
  return (
    <>
      <Cover />
      <section className="mx-4 md:mx-8 lg:mx-16 my-10 flex flex-col gap-10">
        <SelectFloor />
      </section>
    </>
  );
}
