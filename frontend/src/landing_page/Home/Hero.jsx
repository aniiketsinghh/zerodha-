import React from "react";
import { motion } from "framer-motion";
import ScrollReveal from "../../components/utils/ScrollReveal";
import { Link } from "react-router";

const Hero = () => {
  return (
    <ScrollReveal>
    <section className="flex flex-col items-center justify-center mt-24 px-6 text-center overflow-hidden">
      {/* Image with smooth fade-up animation */}
      <motion.img
        src="/homeHero.png"
        alt="Hero Illustration"
        className="w-3/6 max-w-xl mx-auto drop-shadow-md"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />

      {/* Text Content with staggered motion */}
      <motion.div
        className="flex flex-col items-center justify-center mt-16 space-y-5"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.25 },
          },
        }}
      >
        <motion.h1
          className="font-bold text-3xl md:text-4xl text-zinc-700"
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Invest in everything
        </motion.h1>

        <motion.p
          className="text-lg md:text-2xl text-zinc-600 max-w-2xl leading-relaxed"
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.
        </motion.p>
        <Link to="/signup">
        <motion.button
          className="mt-4 px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-md hover:bg-blue-700 transition-all"
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          Sign up for free
        </motion.button>
        </Link>
      </motion.div>
    </section>
    </ScrollReveal>
  );
};

export default Hero;
