import { motion } from "framer-motion";
import { Star, Linkedin } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Heather Owen",
    role: "Chief Financial Officer",
    company: null,
    linkedin: "https://linkedin.com",
    testimonial: "The team members proved to be extremely flexible and responsive. They stayed in daily contact with us and delivered demos every other week so that we could be sure the invoicing system was aligned with our business needs. We have already engaged them in supporting the solution.",
    stars: 5,
    links: {
      original: "#",
      project: "#",
    },
  },
  {
    id: 2,
    name: "Maria Zannes",
    role: "President & CEO",
    company: null,
    linkedin: "https://linkedin.com",
    testimonial: "They have been a competent partner for application development. Their developers are reliable, thorough, smart, available, extremely good communicators and very friendly. We look forward to working with them over the long term and would recommend hiring them to anyone looking for a highly productive and solution-driven team.",
    stars: 5,
    links: {
      original: "#",
      project: "#",
    },
  },
  {
    id: 3,
    name: "Adam Dixon",
    role: "VP of Engineering",
    company: null,
    linkedin: "https://linkedin.com/",
    testimonial: "Working with them was a pleasure from A to Z. Their deep knowledge of the healthcare industry specifics and DICOM standards helped us create the back end of the software for our ultrasound scanner. We are grateful for their can-do attitude, responsiveness and straightforward communication. We already witnessed tangible benefits of our cooperation. We have more projects to come and are looking forward to working with them again.",
    stars: 5,
    links: {
      original: null,
      project: "#",
    },
  },
  {
    id: 4,
    name: "Bader Alhamdan",
    role: "Managing Director",
    company: null,
    linkedin: "https://linkedin.com/",
    testimonial: "Being in the process of an online marketplace launch, we looked for a consulting partner to help us shape a final product vision with strong competitive advantages. Their consulting assistance was action-driven and brought a bunch of practical action steps to implementation.",
    stars: 5,
    links: {
      original: null,
      project: "#",
    },
  },
];

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="bg-blue-50 p-6 mb-6 hover:shadow-md transition-shadow duration-300"
  >
    <div className="flex items-start justify-between mb-4">
      <div className="flex items-start gap-4">
        {/* Avatar placeholder */}
        <div className="w-12 h-12 bg-blue-200 flex items-center justify-center text-blue-600 font-semibold">
          {testimonial.name.split(' ').map(n => n[0]).join('')}
        </div>
        
        <div>
          <div className="flex items-center gap-2 mb-1">
            <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
            <Linkedin className="w-4 h-4 text-blue-600" />
          </div>
          <p className="text-sm text-gray-600">{testimonial.role}</p>
        </div>
      </div>
      
      {/* Star rating */}
      <div className="flex gap-1">
        {Array.from({ length: testimonial.stars }, (_, i) => (
          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
    </div>
    
    {/* Testimonial text */}
    <div className="mb-4">
      <p className="text-gray-800 leading-relaxed">
        {testimonial.testimonial.split(' ').map((word, index) => {
          const boldWords = ['flexible', 'responsive', 'reliable', 'thorough', 'smart', 'available', 'pleasure', 'action-driven', 'practical'];
          const isBold = boldWords.some(boldWord => word.toLowerCase().includes(boldWord.toLowerCase()));
          return (
            <span key={index} className={isBold ? 'font-semibold' : ''}>
              {word}{' '}
            </span>
          );
        })}
      </p>
    </div>
    
    {/* Footer links */}

    {/* <div className="flex gap-6">
      {testimonial.links.original && (
        <a href={testimonial.links.original} className="text-blue-600 text-sm hover:underline">
          📄 Check the original
        </a>
      )}
      <a href={testimonial.links.project} className="text-blue-600 text-sm hover:underline">
        Check the project
      </a>
    </div> */}



  </motion.div>
);

const ClientTestimonials = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold text-blue-900 mb-8">Our Clients Say</h2>
        </motion.div>

        {/* Testimonials */}
        <div className="space-y-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <TestimonialCard testimonial={testimonial} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;