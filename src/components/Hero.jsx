import { useEffect, useState } from "react";
import * as api from "../service/api";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = ({users}) => {
 
  const navigate = useNavigate();
  

  // 🔄 Loading state
  if (!users) {
    return (
      <div className="h-screen flex items-center justify-center dark:text-white">
        Loading...
      </div>
    );
  }

  return (
    <section
      id="hero"
      className="h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 px-6"
    >
      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
              {users.name}{users.lastName}
            </span>
          </h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl mt-4 text-gray-700 dark:text-gray-300"
          >
            Java Spring Boot Developer 🚀
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6 text-gray-600 dark:text-gray-400 leading-relaxed"
          >
            I build scalable backend systems using Spring Boot and modern web
            applications using React. Passionate about clean code, security, and
            performance.
          </motion.p>

          {/* BUTTONS 
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-8 flex gap-4"
          >
            <a
              href="/resume.pdf"
              className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-xl transition hover:scale-105 shadow"
            >
              Download Resume
            </a>

            <a
              href="/contact"
              className="px-6 py-3 border border-gray-500 hover:border-blue-500 dark:border-gray-600 dark:hover:border-blue-400 rounded-xl transition hover:scale-105"
            >
              Contact Me
            </a>
          </motion.div>*/}
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <motion.img
            src="https://cdn-icons-png.flaticon.com/512/1055/1055687.png"
            alt="developer"
            className="w-72 md:w-96 drop-shadow-lg"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          />
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;