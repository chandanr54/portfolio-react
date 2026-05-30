import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { motion } from "framer-motion";

const Navbar = () => {
  const { dark, setDark } = useContext(ThemeContext);

  const menuItems = [
    "hero",
    "about",
    "skills",
    "projects",
    "contact",
  ];

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 w-full flex justify-between items-center px-8 py-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow z-50"
    >
      {/* Logo */}
      <motion.h1
        whileHover={{ scale: 1.1 }}
        className="text-xl font-bold dark:text-white cursor-pointer"
        onClick={() => scrollToSection("hero")}
      >
        Portfolio 🍃
      </motion.h1>

      {/* Menu */}
      <ul className="hidden md:flex gap-8 text-gray-700 dark:text-gray-300 font-medium">
        {menuItems.map((item, i) => (
          <li key={i} className="relative group">
            <button
              onClick={() => scrollToSection(item)}
              className="hover:text-blue-500 transition"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>

            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all group-hover:w-full"></span>
          </li>
        ))}
      </ul>

      {/* Right Side */}
      <div className="flex items-center gap-4">
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setDark(!dark)}
          className="px-3 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg text-lg"
        >
          {dark ? "☀️" : "🌙"}
        </motion.button>
      </div>
    </motion.nav>
  );
};

export default Navbar;