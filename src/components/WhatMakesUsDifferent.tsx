import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const WhatMakesUsDifferent = () => {
  return (
    <section className="relative py-16 overflow-hidden">
      {/* Light yellow gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 via-yellow-100 to-amber-50"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-sm text-gray-600 font-medium"
              >
                What makes BrainLabs different
              </motion.p>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                viewport={{ once: true }}
                className="text-4xl lg:text-5xl font-bold leading-tight text-gray-900"
              >
                We achieve project success{" "}
                <span className="text-blue-600 font-bold">no matter what</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-lg text-gray-700 leading-relaxed"
              >
                Project success is our standard, not a slogan. We drive projects to their goals by overcoming 
                constraints, designing architectures that prioritize business value, and bringing in experts trained for 
                clients' specific industries, workflows, and technologies.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Button 
                className="rounded bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-medium transition-colors duration-300"
              >
                See how we deliver results →
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column - Mountain Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative h-80 lg:h-96"
          >
            <div className="absolute inset-0 overflow-hidden">
              {/* Sun */}
              <div className="absolute top-8 right-16 w-20 h-20 bg-yellow-200 rounded-full opacity-80"></div>
              
              {/* Clouds */}
              <div className="absolute top-12 right-8 w-16 h-8 bg-white rounded-full opacity-60"></div>
              <div className="absolute top-16 right-24 w-12 h-6 bg-white rounded-full opacity-40"></div>
              
              {/* Mountain layers - back to front */}
              {/* Background mountains */}
              <div className="absolute bottom-0 right-0 w-full h-48">
                <svg viewBox="0 0 400 200" className="w-full h-full">
                  {/* Back mountain layer - light pink */}
                  <path
                    d="M0 200 L100 120 L200 80 L300 100 L400 60 L400 200 Z"
                    fill="#f3e8ff"
                    opacity="0.6"
                  />
                  {/* Middle mountain layer - light blue */}
                  <path
                    d="M0 200 L80 140 L180 90 L280 110 L400 80 L400 200 Z"
                    fill="#dbeafe"
                    opacity="0.7"
                  />
                  {/* Front mountain layer - blue */}
                  <path
                    d="M0 200 L120 100 L220 60 L320 90 L400 50 L400 200 Z"
                    fill="#3b82f6"
                    opacity="0.8"
                  />
                  {/* Main peak - dark blue */}
                  <path
                    d="M100 200 L200 40 L300 120 L300 200 Z"
                    fill="#1e40af"
                  />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhatMakesUsDifferent;