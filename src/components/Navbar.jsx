import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { dark, setDark } = useContext(ThemeContext);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 w-full flex justify-between items-center px-8 py-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow z-50"
    >
      {/* LOGO */}
      <motion.h1
        whileHover={{ scale: 1.1 }}
        className="text-xl font-bold dark:text-white cursor-pointer"
      >
        Portfolio 🚀
      </motion.h1>

      {/* MENU */}
      <ul className="hidden md:flex gap-8 text-gray-700 dark:text-gray-300 font-medium">
        {["hero", "about", "skills", "projects", "contact"].map((item, i) => (
          <li key={i} className="relative group">
            <a href={`#${item}`} className="hover:text-blue-500 transition">
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>

            {/* Underline animation */}
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all group-hover:w-full"></span>
          </li>
        ))}
      </ul>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-4">

        {/* LOGIN */}
        <Link to="/login">
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="hidden md:block px-4 py-2 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition"
        >
          Login
        </motion.button>
        </Link>

        {/* SIGNUP */}
        <Link to="/register">
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="hidden md:block px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Register
        </motion.button>
        </Link>


        {/* THEME TOGGLE */}
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