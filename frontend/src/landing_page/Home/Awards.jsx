import React from "react";
import { motion } from "framer-motion";
import ScrollReveal from "../../components/utils/ScrollReveal";

const Awards = () => {
  return (
    <ScrollReveal>
    <section className="flex flex-col md:flex-row items-center justify-center gap-16 mt-32 px-6 md:px-10 overflow-hidden">
      {/* Left Image */}
      <motion.div
        className="flex justify-center md:w-1/2"
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <motion.img
          src="/largestBroker.svg"
          alt="Largest Broker Illustration"
          className="w-3/4 max-w-md drop-shadow-md"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200 }}
        />
      </motion.div>

      {/* Right Content */}
      <motion.div
        className="md:w-1/2"
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <motion.h1
          className="font-bold text-3xl md:text-4xl text-zinc-700 mb-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          Largest stock broker in India
        </motion.h1>

        <motion.p
          className="text-zinc-600 text-base md:text-lg leading-relaxed mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.9 }}
          viewport={{ once: false }}
        >
          2+ million Zerodha clients contribute to over 15% of all retail order
          volumes in India daily <br />
          by trading and investing in:
        </motion.p>

        <motion.div
          className="flex flex-row gap-10 md:gap-16 text-zinc-700 text-sm md:text-base leading-7"
          initial="hidden"
          animate="visible"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          <motion.ul
            className="list-disc list-inside"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
          >
            <li>Futures and Options</li>
            <li>Commodity derivatives</li>
            <li>Currency derivatives</li>
          </motion.ul>

          <motion.ul
            className="list-disc list-inside"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <li>Stocks & IPOs</li>
            <li>Direct mutual funds</li>
            <li>Bonds and Govt. securities</li>
          </motion.ul>
        </motion.div>

        <motion.div
          className="mt-10 flex justify-center md:justify-start"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.9 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <motion.img
            src="/pressLogos.png"
            alt="Press Mentions"
            className="w-full max-w-md opacity-90"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 150 }}
          />
        </motion.div>
      </motion.div>
    </section>
    </ScrollReveal>
  );
};

export default Awards;
