import React from "react";

const charges = [
  {
    img: "/pricing.svg",
   
    title: "Free equity delivery",
    description:
      "All equity delivery investments (NSE, BSE) are absolutely free — ₹0 brokerage.",
  },
  {
    img: "/other-trades.svg",
 
    title: "Intraday and F&O trades",
    description:
      "Flat ₹20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.",
  },
  {
    img: "/pricing-eq.svg",
  
    title: "Free direct MF",
    description:
      "All direct mutual fund investments are absolutely free — ₹0 commissions & DP charges.",
  },
];

const Hero = () => {
  return (
    <section className="py-40 bg-white text-center">
      {/* Heading */}
      <div className="mb-16">
        <h1 className="text-4xl font-bold text-gray-600 mb-3">Charges</h1>
        <p className="text-gray-500 text-lg">List of all charges and taxes</p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 px-6 mb-20 py-10">
        {charges.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center transition-transform hover:scale-105 duration-300"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-40 h-30 mb-4 object-contain"
            />
            
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm max-w-xs">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      {/* ------------------ TABLES SECTION ------------------ */}

      {/* Table 1: Account Opening */}
      <div className="max-w-5xl mx-auto text-left px-6 mb-16 py-20">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Charges for account opening
        </h2>
        <div className="border rounded-lg overflow-hidden">
          <table className="w-full text-sm text-gray-700">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="py-3 px-5 text-left font-medium">Type of account</th>
                <th className="py-3 px-5 text-left font-medium">Charges</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-3 px-5">Online account</td>
                <td className="py-3 px-5 text-green-600 font-semibold">FREE</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-5">Offline account</td>
                <td className="py-3 px-5 text-green-600 font-semibold">FREE</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-5">NRI account (offline only)</td>
                <td className="py-3 px-5">₹500</td>
              </tr>
              <tr>
                <td className="py-3 px-5">
                  Partnership, LLP, HUF, or Corporate accounts (offline only)
                </td>
                <td className="py-3 px-5">₹500</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Table 2: Demat AMC */}
      <div className="max-w-5xl mx-auto text-left px-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Demat AMC (Annual Maintenance Charge)
        </h2>
        <div className="border rounded-lg overflow-hidden">
          <table className="w-full text-sm text-gray-700">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="py-3 px-5 text-left font-medium">Value of holdings</th>
                <th className="py-3 px-5 text-left font-medium">AMC</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-3 px-5">Up to ₹4 lakh</td>
                <td className="py-3 px-5 text-green-600 font-semibold">FREE*</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-5">₹4 lakh - ₹10 lakh</td>
                <td className="py-3 px-5">₹100 per year, charged quarterly*</td>
              </tr>
              <tr>
                <td className="py-3 px-5">Above ₹10 lakh</td>
                <td className="py-3 px-5">₹300 per year, charged quarterly</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500 mt-2">
          * Lower AMC is applicable only if the account qualifies as a Basic Services Demat Account (BSDA).
        </p>
      </div>
    </section>
  );
};

export default Hero;
