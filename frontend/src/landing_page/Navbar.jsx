import React, { useState } from "react";
import { Link, useLocation } from "react-router";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";


export default function Navbar() {
  const [active, setActive] = useState("home");
  const location = useLocation();

  // agar signup ya login page pe hai toh navbar mat dikhana
  if (location.pathname === "/signup" || location.pathname === "/login") {
    return null;
  }

  const linkClass = "text-sm transition-colors duration-200 cursor-pointer";

  return (
    <header className="flex items-center justify-between px-40 py-2 fixed top-0 left-0 w-full z-50 bg-white text-gray-800 shadow-sm">
      {/* Left side - Logo */}
      <div className="flex items-center gap-2">
        <Link to="/">
          <img
            src="/mainlogo.svg"
            alt="logo"
            className="text-xl font-bold tracking-tight h-7 cursor-pointer"
          />
        </Link>
      </div>

      {/* ✅ Desktop Menu (manual links) */}
      <nav className="hidden md:flex items-center gap-10 h-10">
        <Link
          to="/"
          onClick={() => setActive("home")}
          className={`${linkClass} ${
            active === "home"
              ? "text-blue-700 font-semibold"
              : "text-gray-700 hover:text-blue-600"
          }`}
        >
          Home
        </Link>

        <Link
          to="/about"
          onClick={() => setActive("about")}
          className={`${linkClass} ${
            active === "about"
              ? "text-blue-700 font-semibold"
              : "text-gray-700 hover:text-blue-600"
          }`}
        >
          About
        </Link>

        <Link
          to="/products"
          onClick={() => setActive("products")}
          className={`${linkClass} ${
            active === "products"
              ? "text-blue-700 font-semibold"
              : "text-gray-700 hover:text-blue-600"
          }`}
        >
          Products
        </Link>

        <Link
          to="/pricing"
          onClick={() => setActive("pricing")}
          className={`${linkClass} ${
            active === "pricing"
              ? "text-blue-700 font-semibold"
              : "text-gray-700 hover:text-blue-600"
          }`}
        >
          Pricing
        </Link>

        <Link
          to="/support"
          onClick={() => setActive("support")}
          className={`${linkClass} ${
            active === "support"
              ? "text-blue-700 font-semibold"
              : "text-gray-700 hover:text-blue-600"
          }`}
        >
          Support
        </Link>

        <Link
          to="/signup"
          onClick={() => setActive("signup")}
          className={`${linkClass} ${
            active === "signup"
              ? "text-blue-700 font-semibold"
              : "text-gray-700 hover:text-blue-600"
          }`}
        >
          Signup
        </Link>
      </nav>

      {/* ✅ Mobile Menu */}
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="md:hidden border-gray-300"
          >
            <Menu className="h-5 w-5 text-gray-700" />
          </Button>
        </SheetTrigger>

        <SheetContent side="right" className="p-5 space-y-3 bg-white">
          {/* Same links manually likhe hain */}
          <Link
            to="/"
            onClick={() => setActive("home")}
            className={`block text-base cursor-pointer ${
              active === "home"
                ? "text-blue-700 font-semibold"
                : "text-gray-700 hover:text-blue-600"
            }`}
          >
            Home
          </Link>

          <Link
            to="/about"
            onClick={() => setActive("about")}
            className={`block text-base cursor-pointer ${
              active === "about"
                ? "text-blue-700 font-semibold"
                : "text-gray-700 hover:text-blue-600"
            }`}
          >
            About
          </Link>

          <Link
            to="/products"
            onClick={() => setActive("products")}
            className={`block text-base cursor-pointer ${
              active === "products"
                ? "text-blue-700 font-semibold"
                : "text-gray-700 hover:text-blue-600"
            }`}
          >
            Products
          </Link>

          <Link
            to="/pricing"
            onClick={() => setActive("pricing")}
            className={`block text-base cursor-pointer ${
              active === "pricing"
                ? "text-blue-700 font-semibold"
                : "text-gray-700 hover:text-blue-600"
            }`}
          >
            Pricing
          </Link>

          <Link
            to="/support"
            onClick={() => setActive("support")}
            className={`block text-base cursor-pointer ${
              active === "support"
                ? "text-blue-700 font-semibold"
                : "text-gray-700 hover:text-blue-600"
            }`}
          >
            Support
          </Link>

          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
            <Link to="/signup" className="w-full block text-white">
              Signup
            </Link>
          </Button>
        </SheetContent>
      </Sheet>
    </header>
  );
}
