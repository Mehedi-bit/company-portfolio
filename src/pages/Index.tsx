import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ExploreOffering from "@/components/ExploreOffering";
import ExploreOfferingServices from "@/components/ExploreOfferingServices";
import SolutionsWeDeliver from "@/components/SolutionsWeDeliver";
import TechnologiesPlatforms from "@/components/TechnologiesPlatforms";
import SuccessStories from "@/components/SuccessStories";
import ClientTestimonials from "@/components/ClientTestimonials";
import WhyChooseUs from "@/components/WhyChooseUs";
import WhatMakesUsDifferent from "@/components/WhatMakesUsDifferent";
import FAQSection from "@/components/FAQSection";
import ConsultationForm from "@/components/ConsultationForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ExploreOffering />
      <ExploreOfferingServices />
      <SolutionsWeDeliver />
      <TechnologiesPlatforms />
      <SuccessStories />
      <ClientTestimonials />
      <WhatMakesUsDifferent />
      <WhyChooseUs />
      <FAQSection />
      <ConsultationForm />
      <Footer />
    </div>
  );
};

export default Index;
