import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import healthcareImg from "@/assets/healthcare-dashboard.jpg";
import financeImg from "@/assets/finance-dashboard.jpg";
import investmentImg from "@/assets/investment-dashboard.jpg";
import retailImg from "@/assets/retail-dashboard.jpg";
import manufacturingImg from "@/assets/manufacturing-dashboard.jpg";
import dashboardImg from "@/assets/dashboard.gif";

interface Industry {
  id: string;
  label: string;
  image: string;
  description: string;
}

const industries: Industry[] = [
  {
    id: "healthcare",
    label: "Healthcare",
    image: healthcareImg,
    description: "Advanced patient management and medical record systems"
  },
  {
    id: "lending",
    label: "Lending",
    image: financeImg,
    description: "Streamlined loan management and financial services"
  },
  {
    id: "investment",
    label: "Investment",
    image: investmentImg,
    description: "Portfolio management and investment tracking solutions"
  },
  {
    id: "retail",
    label: "Retail",
    image: retailImg,
    description: "E-commerce and retail management platforms"
  },
  {
    id: "manufacturing",
    label: "Manufacturing",
    image: manufacturingImg,
    description: "Supply chain and production management systems"
  },
  {
    id: "more",
    label: "Dashboard",
    image: dashboardImg,
    description: "Dashboards and analytics for all industries"
  },


];

const HeroSection = () => {
  const [activeIndustry, setActiveIndustry] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-cycle through industries
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveIndustry((prev) => (prev + 1) % industries.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handleIndustryClick = (index: number) => {
    setActiveIndustry(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="min-h-screen bg-gradient-hero pt-24 pb-12 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-accent/5 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-5xl lg:text-6xl font-bold leading-tight"
              >
                <span className="bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                  Software Consulting
                </span>
                <br />
                <span className="bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                  and Development
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-xl text-muted-foreground max-w-xl"
              >
                Delivering project success no matter what.
              </motion.p>
            </div>

            {/* Industry Selector Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="space-y-6"
            >
              <h3 className="text-lg font-semibold text-foreground">Industries we serve:</h3>
              <div className="flex flex-wrap gap-3">
                {industries.slice(0, 5).map((industry, index) => (
                  <Button
                    key={industry.id}
                    variant={activeIndustry === index ? "industry-active" : "industry"}
                    onClick={() => handleIndustryClick(index)}
                    className="transition-all duration-300 hover:scale-105"
                  >
                    {industry.label}
                  </Button>
                ))}
                <Button
                  variant={activeIndustry >= 5 ? "industry-active" : "industry"}
                  onClick={() => handleIndustryClick(5)}
                  className="transition-all duration-300 hover:scale-105"
                >
                  More
                </Button>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Dynamic Industry Showcase */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative w-full max-w-2xl mx-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndustry}
                  initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  exit={{ opacity: 0, scale: 0.9, rotateY: -10 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="relative"
                >
                  <div className="bg-card shadow-card overflow-hidden border border-border/50 backdrop-blur-sm rounded-lg">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={industries[activeIndustry].image}
                        alt={industries[activeIndustry].label}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;