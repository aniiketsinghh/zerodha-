import React from "react";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "../../components/utils/ScrollReveal";

const Education = () => {
  return (
    <ScrollReveal>
    <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-16 mt-28 md:mt-40 px-6 md:px-16">
      
      {/* Left Image */}
      <div className="flex justify-center md:w-1/2 w-full mb-5">
        <img
          src="/education.svg"
          alt="Market Education Illustration"
          className="w-[90%] max-w-lg md:max-w-xl"
        />
      </div>

      {/* Right Content */}
      <div className="md:w-1/2 w-full mt-25 space-y-6 text-center md:text-left">
        <h1 className="text-2xl md:text-3xl font-bold text-zinc-800">
          Free and open market education
        </h1>

        <div className="space-y-6">
          {/* Varsity Section */}
          <div>
            <p className="text-zinc-600 text-base md:text-lg leading-relaxed">
              <span className="font-semibold text-zinc-700">Varsity</span>, the
              largest online stock market education book in the world —
              covering everything from the basics to advanced trading concepts.
            </p>

            <Link
              to="/varsity"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors mt-2"
            >
              Learn on Varsity <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>

          {/* TradingQ&A Section */}
          <div>
            <p className="text-zinc-600 text-base md:text-lg leading-relaxed">
              <span className="font-semibold text-zinc-700">TradingQ&A</span>,
              the most active trading and investment community in India — for
              all your market-related queries and discussions.
            </p>

            <Link
              to="/tradingqna"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors mt-2"
            >
              Explore TradingQ&A <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
    </ScrollReveal>
  );
};

export default Education;
