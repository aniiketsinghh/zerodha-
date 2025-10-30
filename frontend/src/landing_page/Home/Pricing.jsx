import React from "react";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "../../components/utils/ScrollReveal";

const Pricing = () => {
  return (
    <ScrollReveal>
    <section className="flex flex-col md:flex-row items-center justify-center gap-16 mt-40 px-30">
      {/* Left Content */}
      <div className="md:w-1/2 space-y-6">
        <h1 className="text-3xl font-bold text-zinc-700">Unbeatable pricing</h1>
        <p className="text-base text-zinc-600 leading-relaxed">
          We pioneered the concept of discount broking and price transparency in
          India. Flat fees and no hidden charges.
        </p>
        <Link
          to="/pricing"
          className="flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
        >
          See pricing
          <ArrowRight size={16} className="ml-1" />
        </Link>
      </div>

      {/* Right Side */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:w-1/2">
        {/* Card 1 */}
        <div className="flex flex-col items-center text-center">
          <img src="/pricing.svg" alt="Free account opening" className="w-32 md:w-40 h-auto" />
          <p className="text-sm text-zinc-600 mt-2 leading-tight">Free account<br />opening</p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center text-center">
          <img src="/pricing-eq.svg" alt="Equity delivery" className="w-32 md:w-40 h-auto" />
          <p className="text-sm text-zinc-600 mt-2 leading-tight">Free equity<br />delivery</p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center text-center">
          <img src="/other-trades.svg" alt="Intraday F&O" className="w-32 md:w-40 h-auto" />
          <p className="text-sm text-zinc-600 mt-2 leading-tight">Intraday &<br />F&O</p>
        </div>
      </div>
    </section>
        </ScrollReveal>
  );
};

export default Pricing;
