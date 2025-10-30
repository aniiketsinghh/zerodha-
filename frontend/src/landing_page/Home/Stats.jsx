import React from "react";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "../../components/utils/ScrollReveal";

const Stats = () => {
  return (
    <ScrollReveal>
    <section className="flex flex-col md:flex-row items-center justify-center gap-16 mt-45 px-10">
      {/* Left Content */}
      <div className="md:w-1/2 mx-20">
        <h1 className="font-bold text-3xl text-zinc-700 mb-6">
          Trust with confidence
        </h1>

        <div className="space-y-8 text-zinc-700">
          <div>
            <h2 className="font-semibold text-xl mb-2">Customer-first always</h2>
            <p className="text-base leading-relaxed">
              That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores
              of equity investments, making us India’s largest broker — contributing
              to 15% of daily retail exchange volumes in India.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-xl mb-2">No spam or gimmicks</h2>
            <p className="text-base leading-relaxed">
              No gimmicks, spam, "gamification", or annoying push notifications.
              High quality apps that you use at your pace, the way you like.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-xl mb-2">The Zerodha universe</h2>
            <p className="text-base leading-relaxed">
              Not just an app, but a whole ecosystem. Our investments in 30+ fintech
              startups offer you tailored services specific to your needs.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-xl mb-2">Do better with money</h2>
            <p className="text-base leading-relaxed">
              With initiatives like Nudge and Kill Switch, we don't just facilitate
              transactions, but actively help you do better with your money.
            </p>
          </div>
        </div>
      </div>

      {/* Right Image + Links */}
      <div className="flex flex-col items-center md:w-1/2">
        <img
          className="w-3/4 max-w-md mb-6"
          src="/ecosystem.png"
          alt="Ecosystem Illustration"
        />

        <div className="flex flex-row items-center gap-5">
          <Link
            to="/products"
            className="flex items-center gap-1 text-blue-600 hover:text-blue-800 font-medium transition-colors"
          >
            Explore our products
            <ArrowRight size={16} className="ml-1" /> 
          </Link>

          <Link
            to="/products"
            className="flex items-center gap-1 text-blue-600 hover:text-blue-800 font-medium transition-colors"
          >
            Try Kite demo
            <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>
      </div>
    </section>
    </ScrollReveal>
  );
};

export default Stats;
