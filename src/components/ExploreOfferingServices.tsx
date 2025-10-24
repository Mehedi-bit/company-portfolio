import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Offering {
  id: string;
  title: string;
  description: string;
  links: string[];
}

const offerings: Offering[] = [
  {
    id: "software-development",
    title: "Software development",
    description:
      "A software development company with 35 years of business excellence, we can engineer reliable, scalable and secure software solutions for any OS, browser and device. We bring together deep industry expertise and the latest IT advancements to deliver custom solutions and products that perfectly fit the needs and behavior of their users.",
    links: [
      "Software consulting",
      "Custom software development",
      "Software development outsourcing",
      "Team augmentation",
      "Cloud application development",
      "Legacy software modernization",
      "Post-launch support",
    ],
  },
  {
    id: "it-consulting",
    title: "IT consulting",
    description:
      "Our IT consulting services help businesses align technology with strategy, optimize operations, and implement scalable digital solutions that drive growth and innovation.",
    links: [
      "Digital transformation",
      "Technology roadmaps",
      "IT strategy consulting",
      "Enterprise architecture",
      "IT infrastructure consulting",
    ],
  },
  {
    id: "application-services",
    title: "Application services",
    description:
      "We provide full-cycle application services from development to support, ensuring scalability, performance, and security across all your business applications.",
    links: [
      "App modernization",
      "Mobile app development",
      "Web application development",
      "Application support",
      "Application integration",
    ],
  },
  {
    id: "testing-qa",
    title: "Testing & QA",
    description:
      "Comprehensive testing and quality assurance services to ensure your software meets the highest standards of reliability and performance.",
    links: [
      "Automated testing",
      "Manual testing",
      "Performance testing",
      "Security testing",
      "Mobile testing",
      "API testing",
    ],
  },
  {
    id: "data-analytics",
    title: "Data analytics",
    description:
      "Transform your data into actionable insights with our advanced analytics solutions and business intelligence services.",
    links: [
      "Business intelligence",
      "Data visualization",
      "Predictive analytics",
      "Data warehousing",
      "Big data solutions",
      "Machine learning",
    ],
  },
  {
    id: "help-desk",
    title: "Help desk services",
    description:
      "24/7 technical support and help desk services to keep your business running smoothly with minimal downtime.",
    links: [
      "Technical support",
      "Remote assistance",
      "Issue resolution",
      "User training",
      "System monitoring",
    ],
  },
  {
    id: "infrastructure",
    title: "Infrastructure services",
    description:
      "Build and maintain robust IT infrastructure that scales with your business needs and ensures optimal performance.",
    links: [
      "Cloud infrastructure",
      "Network setup",
      "Server management",
      "System administration",
      "Infrastructure monitoring",
    ],
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity services",
    description:
      "Protect your business with comprehensive cybersecurity solutions designed to prevent, detect, and respond to threats.",
    links: [
      "Security assessment",
      "Threat detection",
      "Incident response",
      "Security training",
      "Compliance consulting",
    ],
  },
];

const ExploreOfferingServices = () => {
  const [activeOffering, setActiveOffering] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-cycle through offerings
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveOffering((prev) => (prev + 1) % offerings.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handleOfferingClick = (index: number) => {
    setActiveOffering(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50/30">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center mb-2">
            <div className="bg-blue-100 px-6 py-3 mr-6">
              <h2 className="text-3xl font-bold text-blue-900">
                Explore Our Offering
              </h2>
            </div>
          </div>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white shadow-sm border border-gray-200 flex min-h-[600px]"
        >
          {/* Left Column - Category Menu */}
          <div className="w-80 bg-blue-50">
            <nav className="space-y-0">
              {offerings.map((offering, index) => (
                <motion.button
                  key={offering.id}
                  onClick={() => handleOfferingClick(index)}
                  className={`w-full text-left px-6 py-4 transition-all duration-300 border-b border-blue-100/50 ${
                    activeOffering === index
                      ? "bg-blue-600 text-white shadow-md"
                      : "bg-blue-50 text-blue-900 hover:bg-blue-100"
                  }`}
                  whileHover={{ x: activeOffering === index ? 0 : 2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="font-medium text-base">
                    {offering.title}
                  </span>
                </motion.button>
              ))}
            </nav>
          </div>

          {/* Right Column - Dynamic Content */}
          <div className="flex-1 p-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeOffering}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="space-y-8"
              >
                {/* Title */}
                <h3 className="text-3xl font-bold text-gray-900 capitalize">
                  {offerings[activeOffering].title}
                </h3>

                {/* Description */}
                <p className="text-gray-700 leading-relaxed text-lg">
                  {offerings[activeOffering].description}
                </p>

                {/* Links Grid */}
                <div className="grid md:grid-cols-2 gap-x-12 gap-y-3 mt-12">
                  {offerings[activeOffering].links.map((link, linkIndex) => (
                    <motion.div
                      key={linkIndex}
                      className="flex items-center"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: linkIndex * 0.08 }}
                    >
                      <div className="w-2 h-2 bg-blue-600 mr-3 flex-shrink-0"></div>
                      <a
                        href="#"
                        className="text-blue-600 hover:text-blue-700 hover:underline transition-colors duration-200 text-base"
                      >
                        {link}
                      </a>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExploreOfferingServices;