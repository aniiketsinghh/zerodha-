import React, { useState } from "react"
import { Link } from "react-router" 
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export default function Navbar() {
  const [active, setActive] = useState("home")

  const linkClass =
    "text-sm transition-colors duration-200 cursor-pointer"

  const menuItems = [
    { name: "signup", path: "/signup" },
    { name: "home", path: "/" },
    { name: "about", path: "/about" },
    { name: "products", path: "/products" },
    { name: "pricing", path: "/pricing" },
    { name: "support", path: "/support" },
  ]

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

      {/* Desktop Menu */}
      <nav className="hidden md:flex items-center gap-10 h-10">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            onClick={() => setActive(item.name)}
            className={`${linkClass} ${
              active === item.name
                ? "text-blue-700 font-semibold"
                : "text-gray-700 hover:text-blue-600"
            }`}
          >
            {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
          </Link>
        ))}
      </nav>

      {/* Mobile Menu */}
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
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setActive(item.name)}
              className={`block text-base cursor-pointer ${
                active === item.name
                  ? "text-blue-700 font-semibold"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
            </Link>
          ))}

          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
            <Link to="/signup" className="w-full block text-white">
              Signup
            </Link>
          </Button>
        </SheetContent>
      </Sheet>
    </header>
  )
}
