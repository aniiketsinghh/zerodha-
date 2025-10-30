import React from "react";
import {
  Twitter,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Send,
  MessageCircle,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className=" mt-20 bg-gray-50 border-t border-gray-200 text-zinc-700 pt-16 pb-10 px-6 md:px-20">
      {/* Main footer grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-12 mb-12">
        {/* Logo & Social */}
        <div>
          <img src="/mainlogo.svg" alt="Logo" className="w-32 mb-4" />
          <p className="text-sm text-zinc-600 leading-relaxed">
            © 2010 - 2025, Zerodha Broking Ltd.
            <br />
            All rights reserved.
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-4 mt-5 text-zinc-600">
            <Twitter size={18} className="hover:text-blue-500 cursor-pointer" />
            <Facebook size={18} className="hover:text-blue-600 cursor-pointer" />
            <Instagram size={18} className="hover:text-pink-500 cursor-pointer" />
            <Linkedin size={18} className="hover:text-blue-700 cursor-pointer" />
            <Youtube size={18} className="hover:text-red-600 cursor-pointer" />
            <MessageCircle
              size={18}
              className="hover:text-green-500 cursor-pointer"
            />
            <Send size={18} className="hover:text-sky-500 cursor-pointer" />
          </div>
        </div>

        {/* Account */}
        <div>
          <h1 className="font-semibold text-lg mb-3">Account</h1>
          <ul className="space-y-2 text-sm">
            <li>Open demat account</li>
            <li>Minor demat account</li>
            <li>NRI demat account</li>
            <li>Commodity</li>
            <li>Dematerialisation</li>
            <li>Fund transfer</li>
            <li>MTF</li>
            <li>Referral program</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h1 className="font-semibold text-lg mb-3">Support</h1>
          <ul className="space-y-2 text-sm">
            <li>Contact us</li>
            <li>Support portal</li>
            <li>How to file a complaint?</li>
            <li>Status of your complaints</li>
            <li>Bulletin</li>
            <li>Circular</li>
            <li>Z-Connect blog</li>
            <li>Downloads</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h1 className="font-semibold text-lg mb-3">Company</h1>
          <ul className="space-y-2 text-sm">
            <li>About</li>
            <li>Philosophy</li>
            <li>Press & media</li>
            <li>Careers</li>
            <li>Zerodha Cares (CSR)</li>
            <li>Zerodha.tech</li>
            <li>Open source</li>
          </ul>
        </div>

        {/* Upcoming IPOs */}
        <div>
          <h1 className="font-semibold text-lg mb-3">More</h1>
          <ul className="space-y-2 text-sm">
            <li>Upcoming IPOs</li>
            <li>Brokerage charges</li>
            <li>Market holidays</li>
            <li>Economic calendar</li>
            <li>Calculators</li>
            <li>Markets</li>
            <li>Sectors</li>
          </ul>
        </div>
      </div>

      {/* Disclaimer text */}
      <div className="border-t border-gray-300 pt-8 text-xs text-zinc-500 leading-relaxed space-y-5">
        <p>
          Zerodha Broking Ltd.: Member of NSE, BSE, MCX – SEBI Registration no.:
          INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking
          Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through
          Zerodha Commodities Pvt. Ltd. MCX: 46025; SEBI Registration no.:
          INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th
          Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th
          Phase, Bengaluru - 560078, Karnataka, India. For any complaints
          pertaining to securities broking please write to{" "}
          <span className="text-blue-600">complaints@zerodha.com</span>, for DP
          related to{" "}
          <span className="text-blue-600">dp@zerodha.com</span>. Please ensure
          you carefully read the Risk Disclosure Document as prescribed by SEBI.
        </p>

        <p>
          Procedure to file a complaint on SEBI SCORES: Register on SCORES
          portal. Mandatory details: Name, PAN, Address, Mobile Number, E-mail
          ID. Benefits: Effective Communication, Speedy redressal of grievances.
        </p>

        <p>
          Investments in securities market are subject to market risks; read all
          related documents carefully before investing.
        </p>

        <p>
          Attention investors: Stock brokers can accept securities as margins
          from clients only by way of pledge in the depository system w.e.f
          September 01, 2020. Update your e-mail and phone number with your
          broker / DP and receive OTP directly from depository on your
          e-mail/mobile.
        </p>

        <p>
          "Prevent unauthorised transactions in your account. Update your mobile
          numbers/email IDs with your stock brokers. Receive information of your
          transactions directly from Exchange on your mobile/email at the end of
          the day."
        </p>
      </div>

      {/* Bottom Links */}
      <div className="border-t border-gray-300 mt-8 pt-6 flex flex-wrap justify-center gap-6 text-sm text-zinc-600">
        <p>NSE</p>
        <p>BSE</p>
        <p>MCX</p>
        <p>Terms & Conditions</p>
        <p>Policies & Procedures</p>
        <p>Privacy Policy</p>
        <p>Disclosures</p>
        <p>For investor's attention</p>
        <p>Investor charter</p>
      </div>
    </footer>
  );
};

export default Footer;
