import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const successStories = [
  {
    id: 1,
    title: "E-commerce Platform for Motors, Accessories & Tools",
    description: "A modern online store for selling motors, electronic accessories, tools, and air tools with a smooth shopping experience.",
    image: "/src/assets/project-1.jpg",
    category: "E-commerce",
    solution: "Online Store",
    service: "Web Development",
    link: "https://wealthwisemarketingonline.com/"
  },
  {
    id: 2,
    title: "TutorCamp – Online Teacher Booking & Virtual Classes",
    description: "A platform where students can book teachers online and take live classes directly on the website.",
    image: "/src/assets/project-2.png",
    category: "Education",
    solution: "E-learning",
    service: "Web App Development",
    link: "https://tutorcamp.vercel.app/"
  },
  {
    id: 3,
    title: "Journey With Quran – Reflections & Community",
    description: "A live platform where users can share Quranic reflections, insights, and interact with others with access to Quran, tafsir, and hadith.",
    image: "/src/assets/project-3.jpg",
    category: "Religion",
    solution: "Community Platform",
    service: "Full-stack Development",
    link: "https://journeywithquran.com/"
  },
  {
    id: 4,
    title: "Live Coding Teaching Platform for Kids",
    description: "An interactive platform designed to teach kids coding live with engaging tutorials and real-time collaboration.",
    image: "/src/assets/project-4.jpg",
    category: "EdTech",
    solution: "Learning Platform",
    service: "Web App Development",
    link: "https://codecampjr.vercel.app/"
  }
];


const filterOptions = {
  industries: ["All Industries", "Healthcare", "Finance", "Retail", "Technology", "Manufacturing"],
  solutions: ["All Solutions", "Enterprise Software", "Financial Management", "Supply Chain", "Mobile Apps", "IoT Platform", "Data Analytics"],
  services: ["All Services", "Custom Development", "System Integration", "Blockchain Development", "App Development", "IoT Development", "Analytics Implementation"]
};

const FilterDropdown = ({ label, options }: { label: string; options: string[] }) => (
  <div className="relative">
    <button className="flex items-center justify-between bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 min-w-[120px] border border-gray-200">
      {label}
      <ChevronDown className="ml-2 h-4 w-4" />
    </button>
  </div>
);

const ProjectCard = ({ story }: { story: typeof successStories[0] }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="group"
  >
    <div className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
      <div className="aspect-[16/10] overflow-hidden">
        <img
          src={story.image}
          alt={story.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 leading-tight">
          {story.title}
        </h3>
        <a href={story.link} target="_blank" className="inline-flex items-center text-blue-600 font-medium text-sm hover:text-blue-700 transition-colors duration-300 border border-blue-600 px-4 py-2 hover:bg-blue-50">
          Project view
          <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      </div>
    </div>
  </motion.div>
);

const SuccessStories = () => {
  return (
    <section className="py-20 bg-blue-100">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
            Success Stories
          </h2>
          
          {/* Filters */}

          {/* <div className="flex flex-wrap gap-4 mb-8">
            <span className="text-sm font-medium text-gray-700 flex items-center">Filter by:</span>
            <FilterDropdown label="Industries" options={filterOptions.industries} />
            <FilterDropdown label="Solutions" options={filterOptions.solutions} />
            <FilterDropdown label="Services" options={filterOptions.services} />
          </div> */}


        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          {successStories.map((story, index) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProjectCard story={story} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SuccessStories;