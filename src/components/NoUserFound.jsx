import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Footer from "./Footer";

const NoUserFound = () => {
  const navigate = useNavigate();

  return (
    <>
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 text-center px-6 overflow-hidden">

      {/* GLOW BACKGROUND */}
      <div className="absolute w-72 h-72 bg-blue-500 opacity-20 blur-3xl rounded-full top-20"></div>
      <div className="absolute w-72 h-72 bg-purple-500 opacity-20 blur-3xl rounded-full bottom-20"></div>

      {/* ICON */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-7xl mb-6"
      >
        🚫
      </motion.div>

      {/* TITLE */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="text-5xl font-bold text-gray-800 dark:text-white"
      >
        User Not Found
      </motion.h1>

      {/* MESSAGE */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-4 text-gray-600 dark:text-gray-300 max-w-md"
      >
        The user you are looking for does not exist or has been removed.
      </motion.p>

      {/* URL HELP */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-4 text-gray-600 dark:text-gray-300"
      >
        Try visiting:
        <br />
        <span className="text-yellow-400 font-semibold">
          http://localhost:3000/yourusername
        </span>
      </motion.p>

      {/* BUTTONS 
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="mt-8 flex gap-4"
      >
        <button
          onClick={() => navigate("/")}
          className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-xl shadow-lg transition hover:scale-105"
        >
          Go Home 🏠
        </button>

        <button
          onClick={() => window.location.reload()}
          className="px-6 py-3 border border-gray-400 dark:border-gray-600 text-gray-700 dark:text-white rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition"
        >
          Retry 🔄
        </button>
      </motion.div>
      */}

     

    </div>
     <Footer />
     </>
  );
};

export default NoUserFound;