import { motion } from "framer-motion";

const whyChooseUs = [
  {
    id: 1,
    text: "Over 4,000 success stories."
  },
  {
    id: 2,
    text: "1,300+ satisfied clients."
  },
  {
    id: 3,
    text: "An inspired, close-knit team of 750+ IT specialists, including IT consultants, project managers, technical architects, software and QA engineers, security and DevOps engineers, AI and blockchain experts, AWS and Azure professionals."
  },
  {
    id: 4,
    text: "A quality-first approach based on a mature ISO 9001-certified ",
    link: {
      label: "quality management system",
      url: "#"
    },
    extra: "."
  },
  {
    id: 5,
    text: "ISO 27001-certified ",
    link: {
      label: "security management",
      url: "#"
    },
    extra: " based on field-tested security knowledge, ever-green policies, effective processes, advanced security technology, and skilled professionals."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="relative">
            <div className="absolute -left-2 top-0 w-8 h-8 bg-blue-100"></div>
            <h2 className="text-2xl font-bold text-blue-900 relative z-10">
              Why Businesses Choose Us
            </h2>
          </div>
        </motion.div>

        <motion.ul 
          className="space-y-4 list-none"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {whyChooseUs.map((item, index) => (
            <motion.li
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start text-gray-700 leading-relaxed"
            >
              <div className="w-2 h-2 bg-blue-600 rounded-sm mt-2 mr-4 flex-shrink-0"></div>
              <div>
                {item.text}
                {item.link && (
                  <a
                    href={item.link.url}
                    className="text-blue-600 underline hover:text-blue-800 transition-colors"
                  >
                    {item.link.label}
                  </a>
                )}
                {item.extra && item.extra}
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default WhyChooseUs;