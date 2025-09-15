import React, { useState } from "react";
import logo from "/assets/logofixa.jpg";
import { Home, User, FileText, Mail, Menu, X } from "lucide-react";

const menuItems = [
  { name: "Home", icon: <Home size={20} />, href: "#home" },
  { name: "Sobre", icon: <User size={20} />, href: "#about" },
  { name: "Projetos", icon: <FileText size={20} />, href: "#projects" },
  { name: "Contato", icon: <Mail size={20} />, href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md shadow-md z-50 py-4 px-6 md:px-12 flex items-center justify-between">
      
      {/* Logo */}
      <div className="flex items-center">
        <img src={logo} alt="Brenda Evelyn" className="h-16 md:h-20 object-cover" />
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex flex-1 justify-center gap-10 font-medium">
        {menuItems.map((item) => (
          <li
            key={item.name}
            className="group relative flex items-center gap-2 cursor-pointer text-gray-700 text-lg transition-all duration-300 hover:text-blue-600"
          >
            {item.icon}
            <a href={item.href} className="flex items-center gap-2">
              {item.name}
            </a>
            <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center gap-6 py-6 md:hidden">
          {menuItems.map((item) => (
            <li
              key={item.name}
              className="flex items-center gap-2 cursor-pointer text-gray-700 text-lg transition-all duration-300 hover:text-blue-600"
            >
              {item.icon}
              <a href={item.href} onClick={() => setOpen(false)}>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
