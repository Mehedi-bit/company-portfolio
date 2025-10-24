import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const solutions = [
  { id: 1, title: "Enterprise applications", link: "/solutions/enterprise-applications" },
  { id: 2, title: "ERP", link: "/solutions/erp" },
  { id: 3, title: "Financial management", link: "/solutions/financial-management" },
  { id: 4, title: "Supply chain management", link: "/solutions/supply-chain" },
  { id: 5, title: "Asset management", link: "/solutions/asset-management" },
  { id: 6, title: "Fleet management", link: "/solutions/fleet-management" },
  { id: 7, title: "HR software", link: "/solutions/hr-software" },
  { id: 8, title: "eLearning software", link: "/solutions/elearning" },
  { id: 9, title: "eCommerce", link: "/solutions/ecommerce" },
  { id: 10, title: "Mobile apps", link: "/solutions/mobile-apps" },
  { id: 11, title: "Content management", link: "/solutions/content-management" },
  { id: 12, title: "Document management", link: "/solutions/document-management" },
  { id: 13, title: "CRM", link: "/solutions/crm" },
  { id: 14, title: "Marketing & advertising", link: "/solutions/marketing" },
  { id: 15, title: "Web portals", link: "/solutions/web-portals" },
  { id: 16, title: "Data analytics", link: "/solutions/data-analytics" },
];

const SolutionCard = ({ title, link }: { title: string; link: string }) => (
  <motion.a
    href={link}
    whileHover={{ scale: 1.02, y: -2 }}
    className="block bg-gradient-to-b from-white to-gray-50 p-6 shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer relative"
  >
    <div className="flex items-start justify-between h-full">
      <h3 className="text-foreground font-medium text-lg leading-tight group-hover:text-blue-600 transition-colors duration-300 pr-4">
        {title}
      </h3>
      <motion.div
        className="flex-shrink-0 mt-1"
        whileHover={{ x: 2, y: -2 }}
      >
        <ArrowUpRight className="w-5 h-5 text-blue-500 group-hover:text-blue-600 transition-colors duration-300" />
      </motion.div>
    </div>
  </motion.a>
);

const SolutionsWeDeliver = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-100 to-white">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Solutions We Deliver
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We IT-enable all kinds of B2B, B2C interactions and internal operations.
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <SolutionCard title={solution.title} link={solution.link} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionsWeDeliver;