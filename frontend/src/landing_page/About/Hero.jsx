import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const About = () => {
  const [showTeam, setShowTeam] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState(null);

  const team = [
    {
      name: "Nikhil Kamath",
      role: "Co-founder",
      img: "/Nikhil.jpg",
      bio: "Nikhil oversees product strategy and business operations. His sharp market understanding and long-term vision drive Zerodha’s strategic growth.",
    },
    {
      name: "Kailash Nadh",
      role: "CTO",
      img: "/Kailash.jpg",
      bio: "Kailash heads technology and architecture at Zerodha. He’s the brain behind our scalable, modern, and fast trading systems.",
    },
    {
      name: "Venu Singh",
      role: "Director",
      img: "/Venu.jpg",
      bio: "Seema leads our operations and client relations, ensuring Zerodha users get seamless support and services.",
    },
  ];

  return (
    <section className="mt-24 px-6 md:px-10 text-zinc-800">
      {/* ------------------- INTRO SECTION ------------------- */}
      <motion.div
        className="max-w-4xl mx-auto text-center space-y-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className=" my-27 text-xl font-bold leading-snug">
          We pioneered the discount broking model in India.
          <br className="hidden md:block" />
          Now, we are breaking ground with our technology.
        </h1>

        <div className="  gap-20 flex flex-row space-y-5 text-zinc-500 text-base md:text-lg leading-relaxed">
          <p className=" wx-1/3 font-bold">
            We kick-started operations on the 15th of August, 2010 with the goal of
            breaking all barriers that traders and investors face in India in terms
            of cost, support, and technology.<br/> We named the company{" "}
            <span className="font-semibold text-zinc-800">Zerodha</span>, a
            combination of <span className="font-semibold text-zinc-800">Zero</span>{" "}
            and “Rodha”, the Sanskrit word for barrier.
          <br/>
            Today, our disruptive pricing models and in-house technology have made
            us the biggest stock broker in India.<br/> Over{" "}
            <span className="font-semibold text-zinc-800">1.6+ crore</span> clients
            place billions of orders every year through our powerful ecosystem of
            investment platforms,<br/> contributing over 15% of all Indian retail trading
            volumes.
          </p>

          <p className=" wx-2/3 font-bold">
            We run several open online educational and community initiatives to
            empower retail traders and investors.<br/>{" "}
            <span className="font-semibold text-zinc-800">Rainmatter</span>, our
            fintech fund and incubator, has invested in startups to grow the Indian
            capital markets.
            <br/>
            And yet, we’re always up to something new every day. Catch up on the
            latest updates on our blog, <br/>see what the media is saying about us, or
            learn more about our business and product philosophies.
          </p>
        </div>
      </motion.div>

      <p className=" flex justify-center text-zinc-600 mt-20 font-bold text-3xl">Person</p>

      {/* ------------------- FOUNDER SECTION ------------------- */}
      <motion.div

     
        className="max-w-5xl mx-auto mt-24 flex flex-col md:flex-row items-center justify-center gap-10"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Image */}
        <motion.div
          className="flex flex-col items-center"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <img
            src="/nithin-kamath.jpg"
            alt="Nithin Kamath"
            className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover shadow-md"
          />
          <h2 className="mt-4 text-xl font-bold">Nithin Kamath</h2>
          <p className="text-blue-600 font-medium">Founder & CEO</p>
        </motion.div>

        {/* Text */}
        <div className="max-w-md text-center md:text-left text-zinc-600 space-y-3">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles
            he faced during his decade-long stint as a trader. Today, Zerodha has
            completely transformed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of SEBI’s Secondary Market Advisory Committee (SMAC) and
            the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on{" "}
            <a
              href="#"
              className="text-blue-600 hover:underline hover:text-blue-800 transition-colors"
            >
              Homepage
            </a>{" "}
            /{" "}
            <a
              href="#"
              className="text-blue-600 hover:underline hover:text-blue-800 transition-colors"
            >
              TradingQnA
            </a>{" "}
            /{" "}
            <a
              href="#"
              className="text-blue-600 hover:underline hover:text-blue-800 transition-colors"
            >
              Twitter
            </a>
          </p>
        </div>
      </motion.div>

      {/* ------------------- KNOW MORE BUTTON ------------------- */}
      <motion.div
        className="flex justify-center my-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        viewport={{ once: true }}
      >
        <button
          onClick={() => setShowTeam(!showTeam)}
          className="px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-all"
        >
          {showTeam ? "Hide Team" : "Know More"}
        </button>
      </motion.div>

      {/* ------------------- TEAM SECTION ------------------- */}
      <AnimatePresence>
        {showTeam && (
          <motion.div
            className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-start gap-10 pb-20"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.8 }}
          >
            {team.map((member, i) => {
              const expanded = expandedIndex === i;
              return (
                <motion.div
                  key={i}
                  className={`bg-white shadow-lg rounded-2xl p-6 w-full md:w-1/3 flex flex-col items-center text-center transition-all duration-500 ${
                    expanded ? "pb-6" : "pb-4"
                  }`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.2 }}
                  whileHover={{ y: -10 }}
                >
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-36 h-36 rounded-full object-cover shadow-md mb-4"
                  />
                  <h3 className="text-lg font-semibold text-zinc-800">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>

                  {/* Detail Button */}
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() =>
                      setExpandedIndex(expanded ? null : i)
                    }
                    className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all"
                  >
                    {expanded ? "Hide" : "Detail"}
                  </motion.button>

                  {/* Bio Reveal Animation */}
                  <AnimatePresence>
                    {expanded && (
                      <motion.p
                        key="bio"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mt-4 text-sm text-zinc-600 leading-relaxed"
                      >
                        {member.bio}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default About;
