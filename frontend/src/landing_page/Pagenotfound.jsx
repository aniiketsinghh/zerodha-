import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";

/**
 * PageNotFound.jsx
 * Drop this file into src/pages and route to it for 404.
 *
 * Uses Tailwind classes. Make sure Tailwind is configured.
 */

export default function PageNotFound() {
  // motion variants
  const floatVariant = {
    hover: { y: -8, rotate: -3, transition: { type: "spring", stiffness: 200 } },
    idle: {
      y: [0, -6, 0],
      rotate: [0, 3, 0],
      transition: { y: { duration: 4, repeat: Infinity }, rotate: { duration: 6, repeat: Infinity } },
    },
  };

  const shakeVariant = {
    hover: { rotate: [0, -6, 6, -4, 2, 0], transition: { duration: 0.6 } },
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-slate-50 px-6">
      <div className="max-w-5xl w-full flex flex-col md:flex-row items-center gap-8 md:gap-12 py-20">
        {/* Left: Artwork */}
        <div className="flex-1 flex items-center justify-center">
          <motion.div
            className="relative w-[320px] h-[320px] md:w-[380px] md:h-[380px] rounded-2xl bg-white shadow-2xl flex items-center justify-center"
            initial="idle"
            animate="idle"
            whileHover="hover"
            style={{ perspective: 1200 }}
          >
            {/* subtle 3D tilt container */}
            <motion.div
              className="absolute inset-0 rounded-2xl"
              variants={{
                idle: { rotateY: 0, rotateX: 0, transition: { duration: 6, repeat: Infinity, repeatType: "reverse" } },
                hover: { rotateY: -8, rotateX: 6 },
              }}
              style={{ transformStyle: "preserve-3d" }}
            />

            {/* Cartoon robot (SVG) */}
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 220 220"
              className="w-64 h-64 z-10"
              variants={floatVariant}
            >
              {/* shadow */}
              <ellipse cx="110" cy="185" rx="70" ry="18" fill="rgba(15,23,42,0.06)" />

              {/* body */}
              <rect x="55" y="70" rx="18" ry="18" width="110" height="90" fill="#f8fafc" stroke="#e6eef8" strokeWidth="2" />

              {/* chest panel */}
              <rect x="75" y="95" rx="6" ry="6" width="70" height="40" fill="#eef6ff" stroke="#d3e7ff" />

              {/* eyes group */}
              <g transform="translate(70,85)">
                <motion.circle cx="14" cy="-6" r="10" fill="#0f172a" variants={shakeVariant} />
                <motion.circle cx="56" cy="-6" r="10" fill="#0f172a" variants={shakeVariant} />
                {/* eye sparkle */}
                <circle cx="58" cy="-8" r="3" fill="#fff" opacity="0.9" />
                <circle cx="16" cy="-8" r="3" fill="#fff" opacity="0.9" />
              </g>

              {/* smile */}
              <path d="M85 115 q25 18 50 0" stroke="#94a3b8" strokeWidth="3" fill="none" strokeLinecap="round" />

              {/* left arm */}
              <motion.rect x="30" y="90" width="18" height="10" rx="4" fill="#f1f5f9" variants={{ hover: { x: 26 }, idle: { x: 30, transition: { duration: 2, repeat: Infinity, repeatType: "reverse" } } }} />

              {/* right arm (waving) */}
              <motion.g
                transform="translate(172,90)"
                variants={{
                  idle: { rotate: -6, originX: 0, originY: 0, transition: { duration: 3, repeat: Infinity, repeatType: "reverse" } },
                  hover: { rotate: 6 },
                }}
              >
                <rect x="-6" y="0" width="18" height="10" rx="4" fill="#f1f5f9" />
              </motion.g>

              {/* speech bubble / sign */}
              <motion.g
                transform="translate(40,20)"
                variants={{
                  idle: { y: 0, transition: { duration: 3, repeat: Infinity, repeatType: "reverse" } },
                  hover: { y: -6 },
                }}
              >
                <rect x="86" y="8" rx="8" ry="8" width="88" height="34" fill="#fff" stroke="#dbeafe" strokeWidth="2" />
                <text x="130" y="30" fontSize="12" textAnchor="middle" fill="#0f172a" fontWeight="700" fontFamily="Inter, sans-serif">
                  OOPS!
                </text>
              </motion.g>
            </motion.svg>
          </motion.div>
        </div>

        {/* Right: Text + actions */}
        <div className="flex-1 max-w-xl text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold text-zinc-900 mb-4">404 — Page not found</h2>
          <p className="text-zinc-600 mb-6 leading-relaxed">
            Looks like the page you're trying to reach took a coffee break ☕.  
            Maybe the link moved, or the page never existed.
          </p>

          <div className="flex flex-col sm:flex-row items-center sm:items-stretch gap-3 sm:gap-4">
            <Link to="/" className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-md font-medium shadow-sm transition">
              Go back home
            </Link>

            <button
              onClick={() => window.location.reload()}
              className="inline-flex items-center justify-center border border-zinc-200 text-zinc-800 px-4 py-3 rounded-md bg-white hover:bg-zinc-50 transition"
              aria-label="Reload page"
            >
              Reload
            </button>

            <Link to="/support" className="mt-0 sm:mt-0 inline-flex items-center justify-center text-sm text-blue-600 hover:underline">
              Contact support
            </Link>
          </div>

          <p className="text-xs text-zinc-400 mt-6">
            Tip: try checking the URL for typos or use the navigation above.
          </p>
        </div>
      </div>
    </main>
  );
}
