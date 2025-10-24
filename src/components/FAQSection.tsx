import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqData = [
  {
    id: 1,
    question: "Does your company cover all stages of the SDLC?",
    answer: "Yes, we cover all stages of the SDLC, from planning and requirements gathering to deployment and maintenance."
  },
  {
    id: 2,
    question: "Can your company speed up the delivery of projects?",
    answer: "Yes, depending on the project size, we might be able to get your MVP delivered in 2 weeks – 4 months. Subsequently, we can ensure releases of new functionality every 2-6 weeks. Get in touch, and we'll work out a way to meet your needs.",
    hasButton: true
  },
  {
    id: 3,
    question: "What's the cost for your software development services?",
    answer: "Our pricing depends on project scope, technology stack, and timeline. Contact us to get a detailed estimate."
  },
  {
    id: 4,
    question: "What's your post-launch policy?",
    answer: "We provide ongoing support, bug fixing, and optimization services to ensure long-term success."
  },
  {
    id: 5,
    question: "What is your preferred development methodology?",
    answer: "We follow Agile methodologies (Scrum, Kanban) for flexibility and efficiency, but adapt to client preferences."
  },
  {
    id: 6,
    question: "How do you control the quality of the software you deliver?",
    answer: "We use automated testing, code reviews, and continuous integration pipelines to ensure top-notch quality."
  }
];

const FAQSection = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="relative inline-block">
            <div className="absolute -left-1 -top-1 -bottom-1 w-14 h-10 bg-blue-100"></div>
            <h2 className="relative text-2xl font-bold text-blue-900">
              <span className="font-bold">FAQ</span>{" "}
              <span className="font-normal">on Software Engineering</span>
            </h2>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-0"
        >
          {faqData.map((faq, index) => (
            <div key={faq.id} className="border-b border-gray-200">
              <button
                onClick={() => toggleExpand(faq.id)}
                className="w-full py-4 px-0 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="text-gray-800 font-medium pr-4">
                  {faq.question}
                </span>
                {expandedId === faq.id ? (
                  <ChevronUp className="h-4 w-4 text-gray-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-4 w-4 text-gray-600 flex-shrink-0" />
                )}
              </button>
              
              {expandedId === faq.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="bg-blue-50 p-6 mb-4">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      {faq.answer}
                    </p>
                    {faq.hasButton && (
                      <button className="bg-blue-600 text-white px-6 py-2 font-medium hover:bg-blue-700 transition-colors duration-200">
                        Share my needs
                      </button>
                    )}
                  </div>
                </motion.div>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;