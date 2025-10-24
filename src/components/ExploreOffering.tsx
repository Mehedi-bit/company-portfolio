import { motion } from "framer-motion";
import { Ambulance, BriefcaseBusiness, Building, Building2, CreditCard, Dna, DollarSign, ExternalLink, Factory, Fuel, HandCoins, HeartPulse, Hospital, Landmark, Microscope, SatelliteDish, ShoppingCart, Truck } from "lucide-react";

const industryData = {
  healthcare: [
    { title: "Healthcare providers", icon: <HeartPulse />, bgColor: "bg-green-100" },
    { title: "Medical diagnostics", icon: <Ambulance />, bgColor: "bg-green-100" },
    { title: "Medical laboratories", icon: <Microscope />, bgColor: "bg-green-100" },
    { title: "Biotech & pharma", icon: <Dna />, bgColor: "bg-green-100" },
    { title: "Healthcare payers", icon: <Hospital />, bgColor: "bg-green-100" },
  ],
  finance: [
    { title: "Payments", icon: <CreditCard />, bgColor: "bg-blue-100" },
    { title: "Lending", icon: <HandCoins />, bgColor: "bg-blue-100" },
    { title: "Investment", icon: <DollarSign />, bgColor: "bg-blue-100" },
  ],
  moreIndustries: [
    { title: "Retail", icon: <ShoppingCart />, bgColor: "bg-pink-100" },
    { title: "Manufacturing", icon: <Factory />, bgColor: "bg-green-100" },
    { title: "Logistics and Transportation", icon: <Truck />, bgColor: "bg-blue-100" },
    { title: "Oil and Gas", icon: <Fuel />, bgColor: "bg-yellow-100" },
    { title: "Real estate", icon: <Building2 />, bgColor: "bg-green-100" },
    { title: "Professional services", icon: <BriefcaseBusiness />, bgColor: "bg-yellow-100" },
    { title: "Telecoms", icon: <SatelliteDish />, bgColor: "bg-pink-100" },
    { title: "Engineering and Construction", icon: <Landmark />, bgColor: "bg-blue-100" },
  ],
};

const IndustryCard = ({ title, icon, bgColor }: { title: string; icon: JSX.Element; bgColor: string }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="bg-white rounded-lg border border-border/100 p-6 shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer"
  >
    <div className="flex items-start justify-between mb-4">
      <div className={`w-16 h-16 ${bgColor} rounded-lg flex items-center justify-center text-2xl`}>
        {icon}
      </div>
      <ExternalLink className="w-5 h-5 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
    <h3 className="text-foreground font-medium text-base leading-tight">{title}</h3>
  </motion.div>
);

const ExploreOffering = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50/50 to-white">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center mb-6">
            {/* <div className="w-16 h-16 bg-blue-100 rounded-lg mr-6"></div> */}
            
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
              Our Industry Expertise
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-4xl">
            We've excelled our experience in a wide range of industries to bring valuable insights and provide our clients with the truly beneficial solutions.
          </p>
        </motion.div>

        {/* Healthcare Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-foreground mb-8">Healthcare</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {industryData.healthcare.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <IndustryCard {...item} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Finance Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-foreground mb-8">Finance</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {industryData.finance.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <IndustryCard {...item} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* More Industries Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-foreground mb-8">More industries</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industryData.moreIndustries.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <IndustryCard {...item} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExploreOffering;