import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";

const RightSection = ({ img, title, description, one, two, google, app }) => {
  return (
    <section className="mx-40 flex flex-col md:flex-row-reverse items-center justify-center gap-16 mt-28 px-6 md:px-20 overflow-hidden">
      {/* Image Right */}
      <motion.div
        className="flex justify-center md:w-1/2"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
      >
        <motion.img
          src={img}
          alt={title}
          className="w-5/6 max-w-md drop-shadow-lg"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200 }}
        />
      </motion.div>

      {/* Text Left */}
      <motion.div
        className="md:w-1/2 text-center md:text-left"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
      >
        <h1 className="font-bold text-3xl md:text-4xl text-zinc-800 mb-4">
          {title}
        </h1>

        <p className="text-zinc-600 text-base md:text-lg leading-relaxed mb-6">
          {description}
        </p>

        <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
          <Link
            to="/"
            className="text-blue-600 font-medium hover:underline flex items-center gap-1"
          >
            {one}
          </Link>

          {two && (
            <Link
              to="/"
              className="text-blue-600 font-medium hover:underline flex items-center gap-1"
            >
              {two}
            </Link>
          )}
        </div>

        {(google || app) && (
          <div className="flex justify-center md:justify-start gap-4 mt-6">
            {google && (
              <a href="#" target="_blank" rel="noreferrer">
                <img
                  src={google}
                  alt="Google Play"
                  className="w-32 hover:scale-105 transition-transform"
                />
              </a>
            )}
            {app && (
              <a href="#" target="_blank" rel="noreferrer">
                <img
                  src={app}
                  alt="App Store"
                  className="w-32 hover:scale-105 transition-transform"
                />
              </a>
            )}
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default RightSection;
