import PaymentCalculator from "@/components/shared/calculator/Calculator";
import Cover from "./_components/Cover";
import MainFAQ from "./_components/MainFAQ";
import ProjectsSection from "./_components/ProjectsSection";
import WhyInvest from "./_components/WhyInvest";
import WhyChooseUs from "./_components/WhyUsSection";

export default function page() {
 
  return (
    <>
      <Cover />
      <ProjectsSection />
      <WhyChooseUs />
      <PaymentCalculator />
      <WhyInvest />
      <MainFAQ />
    </>
  );
}
