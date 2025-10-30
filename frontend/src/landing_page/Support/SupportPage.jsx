import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const sections = [
  { title: "Account Opening", items: ["How to open an account", "Charges", "Documents required"] },
  { title: "Your Zerodha Account", items: ["Login issues", "Password reset", "Account modification"] },
  { title: "Kite", items: ["Kite app guide", "Charting tools", "Order types"] },
  { title: "Funds", items: ["Add funds", "Withdraw funds", "UPI deposits"] },
  { title: "Console", items: ["Reports", "Tax P&L", "Profile settings"] },
  { title: "Coin", items: ["Mutual fund investment", "SIP setup", "Redeem process"] },
];

const alerts = [
  { text: "Electricity Futures contracts expiry - October 2025", link: "#" },
  { text: "Delay in commodity (MCX) market open [Resolved]", link: "#" },
];

const quickLinks = [
  "Track account opening",
  "Track segment activation",
  "Intraday margins",
  "Kite user manual",
  "Learn how to create a ticket",
];

const SupportPage = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 sm:px-6 lg:px-12 py-10">
      {/* Header */}
      <div className="text-center py-10">
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-6 pt-15">
          Support Portal
        </h2>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-5">
          <input
            type="text"
            placeholder="Eg: How do I open my account, How do I activate F&O..."
            className="border border-gray-300 rounded-md w-full sm:w-1/2 px-4 py-2 focus:outline-blue-500"
          />
          <button className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition">
            My Tickets
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Section - Accordion */}
        <div className="md:col-span-2">
          {sections.map((section, index) => {
            const isOpen = openSection === index;
            return (
              <div
                key={index}
                className="mb-3 bg-white border rounded-lg shadow-sm transition-all"
              >
                {/* Header */}
                <button
                  onClick={() => toggleSection(index)}
                  className="flex justify-between items-center w-full px-4 py-3 text-left text-gray-800 font-medium hover:bg-gray-50 transition"
                >
                  {section.title}
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <ChevronDown className="w-5 h-5 text-gray-600" />
                  </motion.div>
                </button>

                {/* Dropdown Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0, y: -10 }}
                      animate={{ height: "auto", opacity: 1, y: 0 }}
                      exit={{ height: 0, opacity: 0, y: -10 }}
                      transition={{
                        duration: 0.4,
                        ease: [0.25, 0.8, 0.25, 1],
                      }}
                      className="overflow-hidden border-t bg-gray-50"
                    >
                      <ul className="px-6 py-3 space-y-2">
                        {section.items.map((item, i) => (
                          <motion.li
                            key={i}
                            whileHover={{ scale: 1.05, x: 5 }}
                            transition={{ type: "spring", stiffness: 200 }}
                            className="list-disc list-inside text-sm text-gray-700 cursor-pointer hover:text-blue-700"
                          >
                            {item}
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Right Section */}
        <div className="space-y-6">
          {/* Alerts */}
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
            {alerts.map((alert, i) => (
              <a
                key={i}
                href={alert.link}
                className="block text-blue-700 text-sm underline mb-1 hover:text-blue-900 transition"
              >
                {alert.text}
              </a>
            ))}
          </div>

          {/* Quick Links */}
          <div className="bg-white border rounded-lg p-4 shadow-sm">
            <h3 className="font-semibold mb-2 text-gray-800">Quick links</h3>
            <ul className="text-sm text-blue-700 space-y-1">
              {quickLinks.map((link, i) => (
                <li
                  key={i}
                  className="hover:underline cursor-pointer transition hover:translate-x-1"
                >
                  {i + 1}. {link}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;
