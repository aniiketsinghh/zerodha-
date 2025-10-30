import React from "react";
import { motion } from "framer-motion";

const platforms = [
  {
    logo: "/fundhouse.png",
    
    description:
      "Our asset management venture that is creating simple and transparent index funds to help you save for your goals.",
  },
  {
    logo: "/sensibull.svg",
    
    description:
      "Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.",
  },
  {
    logo: "/tijori.svg",
    
    description:
      "Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.",
  },
  {
    logo: "/streak.png",
    
    description:
      "Systematic trading platform that allows you to create and backtest strategies without coding.",
  },
  {
    logo: "/smallcase.png",
    
    description:
      "Thematic investing platform that helps you invest in diversified baskets of stocks or ETFs.",
  },
  {
    logo: "/ditto.png",
    
    description:
      "Personalized advice on life and health insurance. No spam and no mis-selling.",
  },
];

const PartnerPlatforms = () => {
  return (
    <section className="mt-28 px-6 md:px-20 text-center">
    

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 place-items-center">
        {platforms.map((p, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center text-center max-w-sm"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <img src={p.logo} alt={p.title} className="w-30 h-16 mb-4" />
            <h3 className="font-semibold text-lg text-zinc-800 mb-2">{p.title}</h3>
            <p className="text-zinc-600 text-sm leading-relaxed">{p.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Sign up Button */}
      <motion.div
        className="mt-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-md shadow-md transition-all duration-200">
          Sign up for free
        </button>
      </motion.div>
    </section>
  );
};

export default PartnerPlatforms;
