import { motion } from "framer-motion";

const technologiesData = {
  categories: [
    {
      title: "Web",
      subtitle: "BACK END",
      logos: [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/885px-Node.js_logo.svg.png",
        "https://1000logos.net/wp-content/uploads/2020/08/Python-Logo.png",
        "https://1000logos.net/wp-content/uploads/2020/08/MongoDB-Logo-768x480.png",
        "https://1000logos.net/wp-content/uploads/2020/08/PostgreSQL-Logo-768x480.png",
        "https://1000logos.net/wp-content/uploads/2020/08/MySQL-Logo-768x480.png",
      ]
    },
    {
      title: "",
      subtitle: "FRONT END",
      logos: [
        "https://1000logos.net/wp-content/uploads/2020/09/JavaScript-Logo-768x480.png",
        "https://1000logos.net/wp-content/uploads/2023/10/React-Logo-768x432.png",
        "https://www.smartsight.in/wp-content/uploads/2020/02/AngularJS.png",
        "https://cdn.shopify.com/s/files/1/0533/2089/files/vuejs-tutorial.png?v=1509471047"

      ]
    },
    {
      title: "Mobile",
      subtitle: "",
      logos: [
        "https://www.okoone.com/wp-content/uploads/2024/06/React-native-2-logo.png",
        "https://api.reliasoftware.com/uploads/what_is_flutter_fcb6c7a4b8.png",
        "https://1000logos.net/wp-content/uploads/2020/09/Java-Logo-768x480.png",
      ]
    },

    // {
    //   title: "Desktop",
    //   subtitle: "",
    //   logos: [
    //     "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/885px-Node.js_logo.svg.png",
    //     "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/885px-Node.js_logo.svg.png",
    //     "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/885px-Node.js_logo.svg.png",
    //     "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/885px-Node.js_logo.svg.png",
    //     "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/885px-Node.js_logo.svg.png",
    //     "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/885px-Node.js_logo.svg.png"
    //   ]
    // },

    // {
    //   title: "Low-code development",
    //   subtitle: "",
    //   logos: [
    //     "https://1000logos.net/wp-content/uploads/2021/06/Wix-Logo-768x432.png",
    //     "https://1000logos.net/wp-content/uploads/2020/08/Shopify-Logo-768x480.png",
    //   ]
    // },

    // {
    //   title: "Platforms",
    //   subtitle: "",
    //   logos: [
    //     "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/885px-Node.js_logo.svg.png",
    //     "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/885px-Node.js_logo.svg.png",
    //     "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/885px-Node.js_logo.svg.png",
    //     "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/885px-Node.js_logo.svg.png",
    //     "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/885px-Node.js_logo.svg.png",
    //     "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/885px-Node.js_logo.svg.png",
    //     "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/885px-Node.js_logo.svg.png",
    //     "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/885px-Node.js_logo.svg.png"
    //   ]
    // },


    {
      title: "Clouds",
      subtitle: "",
      logos: [
        "https://miro.medium.com/v2/resize:fit:1400/1*neG4D9C8UcJvNn6bverfIA.png",
        "https://images.icon-icons.com/2699/PNG/512/digitalocean_logo_icon_168277.png",
        ]
    },

    // {
    //   title: "Relational databases / data storages",
    //   subtitle: "",
    //   logos: [
    //     "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/885px-Node.js_logo.svg.png",
    //     "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/885px-Node.js_logo.svg.png",
    //     "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/885px-Node.js_logo.svg.png",
    //     "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/885px-Node.js_logo.svg.png",
    //     "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/885px-Node.js_logo.svg.png",
    //     "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/885px-Node.js_logo.svg.png",
    //     "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/885px-Node.js_logo.svg.png",
    //     "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/885px-Node.js_logo.svg.png"
    //   ]
    // },

    // {
    //   title: "Big data",
    //   subtitle: "",
    //   logos: [
    //     "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/885px-Node.js_logo.svg.png",
    //     "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/885px-Node.js_logo.svg.png",
    //     "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/885px-Node.js_logo.svg.png",
    //     "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/885px-Node.js_logo.svg.png",
    //     "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/885px-Node.js_logo.svg.png",
    //     "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/885px-Node.js_logo.svg.png",
    //     "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/885px-Node.js_logo.svg.png",
    //     "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/885px-Node.js_logo.svg.png",
    //     "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/885px-Node.js_logo.svg.png",
    //     "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/885px-Node.js_logo.svg.png"
    //   ]
    // },


    // {
    //   title: "Machine learning",
    //   subtitle: "PROGRAMMING LANGUAGES",
    //   logos: [
    //     "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/885px-Node.js_logo.svg.png",
    //     "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/885px-Node.js_logo.svg.png",
    //     "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/885px-Node.js_logo.svg.png",
    //     "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/885px-Node.js_logo.svg.png",
    //     "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/885px-Node.js_logo.svg.png",
    //     "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/885px-Node.js_logo.svg.png",
    //     "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/885px-Node.js_logo.svg.png",
    //     "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/885px-Node.js_logo.svg.png"
    //   ]
    // },


    // {
    //   title: "",
    //   subtitle: "FRAMEWORKS",
    //   logos: [
    //     "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/885px-Node.js_logo.svg.png",
    //     "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/885px-Node.js_logo.svg.png",
    //     "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/885px-Node.js_logo.svg.png",
    //     "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/885px-Node.js_logo.svg.png",
    //     "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/885px-Node.js_logo.svg.png",
    //     "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/885px-Node.js_logo.svg.png",
    //     "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/885px-Node.js_logo.svg.png",
    //     "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/885px-Node.js_logo.svg.png"
    //   ]
    // },


    // {
    //   title: "",
    //   subtitle: "LIBRARIES",
    //   logos: [
    //     "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/885px-Node.js_logo.svg.png",
    //     "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/885px-Node.js_logo.svg.png",
    //     "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/885px-Node.js_logo.svg.png",
    //     "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/885px-Node.js_logo.svg.png",
    //     "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/885px-Node.js_logo.svg.png"
    //   ]
    // },


    {
      title: "",
      subtitle: "CLOUD SERVICES",
      logos: [
        "https://www.docker.com/app/uploads/2023/08/logo-guide-logos-1.svg",
        "https://1000logos.net/wp-content/uploads/2022/07/Kubernetes-Logo-768x432.png",
      ]
    },
    // {
    //   title: "DevOps",
    //   subtitle: "CONTAINERIZATION",
    //   logos: [
    //     "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/885px-Node.js_logo.svg.png",
    //     "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/885px-Node.js_logo.svg.png",
    //     "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/885px-Node.js_logo.svg.png"
    //   ]
    // },
    {
      title: "",
      subtitle: "AUTOMATION",
      logos: [
        "https://fleekitsolutions.com/wp-content/uploads/2023/09/Google-Puppeteer-5.jpg",
        "https://images.seeklogo.com/logo-png/48/2/playwright-logo-png_seeklogo-489584.png",

      ]
    },



  //   {
  //     title: "",
  //     subtitle: "CI/CD TOOLS",
  //     logos: [
  //       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/885px-Node.js_logo.svg.png",
  //       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/885px-Node.js_logo.svg.png",
  //       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/885px-Node.js_logo.svg.png",
  //       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/885px-Node.js_logo.svg.png",
  //       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/885px-Node.js_logo.svg.png",
  //       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/885px-Node.js_logo.svg.png"
  //     ]
  //   },
  //   {
  //     title: "",
  //     subtitle: "MONITORING",
  //     logos: [
  //       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/885px-Node.js_logo.svg.png",
  //       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/885px-Node.js_logo.svg.png",
  //       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/885px-Node.js_logo.svg.png",
  //       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/885px-Node.js_logo.svg.png",
  //       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/885px-Node.js_logo.svg.png",
  //       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/885px-Node.js_logo.svg.png",
  //       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/885px-Node.js_logo.svg.png",
  //       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/885px-Node.js_logo.svg.png",
  //       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/885px-Node.js_logo.svg.png"
  //     ]
  //   },
  //   {
  //     title: "Test automation tools",
  //     subtitle: "",
  //     logos: [
  //       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/885px-Node.js_logo.svg.png",
  //       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/885px-Node.js_logo.svg.png",
  //       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/885px-Node.js_logo.svg.png",
  //       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/885px-Node.js_logo.svg.png",
  //       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/885px-Node.js_logo.svg.png",
  //       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/885px-Node.js_logo.svg.png",
  //       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/885px-Node.js_logo.svg.png",
  //       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/885px-Node.js_logo.svg.png"
  //     ]
  //   },
  //   {
  //     title: "Information security",
  //     subtitle: "",
  //     logos: [
  //       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/885px-Node.js_logo.svg.png",
  //       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/885px-Node.js_logo.svg.png",
  //       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/885px-Node.js_logo.svg.png",
  //       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/885px-Node.js_logo.svg.png",
  //       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/885px-Node.js_logo.svg.png",
  //       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/885px-Node.js_logo.svg.png",
  //       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/885px-Node.js_logo.svg.png",
  //       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/885px-Node.js_logo.svg.png"
  //     ]
  //   }





  ]



};

const TechnologiesPlatforms = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-sky-50 to-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Technologies and Platforms We Work With
          </h2>
        </motion.div>

        <div className="bg-sky-100 p-8">
          <div className="space-y-6">
            {technologiesData.categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="space-y-3"
              >
                {category.title && (
                  <h3 className="text-lg font-semibold text-blue-800">
                    {category.title}
                  </h3>
                )}
                
                {category.subtitle && (
                  <p className="text-sm font-medium text-gray-600 uppercase tracking-wide">
                    {category.subtitle}
                  </p>
                )}

                <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-10 lg:grid-cols-12 gap-2">
                  {category.logos.map((logo, logoIndex) => (
                    <motion.div
                      key={logoIndex}
                      whileHover={{ scale: 1.05 }}
                      className="bg-white p-2 shadow-sm hover:shadow-md transition-all duration-200 flex items-center justify-center h-12"
                    >
                      <img
                        src={logo}
                        alt={`Technology ${logoIndex + 1}`}
                        className="w-full h-full object-contain"
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologiesPlatforms;