import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyBookButton } from "@/components/layout/StickyBookButton";
import { HeroSection } from "@/components/home/HeroSection";
import { OutcomesSection } from "@/components/home/OutcomesSection";
import { ProblemsSection } from "@/components/home/ProblemsSection";
import { ApproachSection } from "@/components/home/ApproachSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { PackagesPreview } from "@/components/home/PackagesPreview";
import { CaseStudiesPreview } from "@/components/home/CaseStudiesPreview";
import { FAQPreview } from "@/components/home/FAQPreview";
import { FinalCTA } from "@/components/home/FinalCTA";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <OutcomesSection />
        <ProblemsSection />
        <ApproachSection />
        <ProcessSection />
        <PackagesPreview />
        <CaseStudiesPreview />
        <FAQPreview />
        <FinalCTA />
      </main>
      <Footer />
      <StickyBookButton />
    </div>
  );
};

export default Index;
