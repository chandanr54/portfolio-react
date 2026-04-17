import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = ({users}) => {
  return (
    <footer className="relative bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-gray-800 pt-16 pb-8 px-6 overflow-hidden">

      {/* 🔥 Glow Background */}
      <div className="absolute w-72 h-72 bg-blue-500 opacity-20 blur-3xl rounded-full top-0 left-0"></div>
      <div className="absolute w-72 h-72 bg-purple-500 opacity-20 blur-3xl rounded-full bottom-0 right-0"></div>

      <div className="max-w-6xl mx-auto text-center">

        {/* NAME */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-2xl font-bold text-gray-800 dark:text-white"
        >
          {users?.name || "Chandan Kumar"} {users?.lastName} 🚀
        </motion.h2>

        {/* TAGLINE */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-3 text-gray-600 dark:text-gray-300"
        >
          Building scalable backend systems & modern web apps
        </motion.p>

        {/* SOCIAL ICONS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex justify-center gap-6 mt-6 text-2xl"
        >
          <motion.a
            whileHover={{ scale: 1.3 }}
            href={users?.gitHubLink}
            target="_blank"
            className="text-gray-700 dark:text-white hover:text-blue-500"
          >
            <FaGithub />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.3 }}
            href={users?.linkdinAddress}
            target="_blank"
            className="text-gray-700 dark:text-white hover:text-blue-500"
          >
            <FaLinkedin />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.3 }}
            href="https://twitter.com/"
            target="_blank"
            className="text-gray-700 dark:text-white hover:text-blue-500"
          >
            <FaTwitter />
          </motion.a>
        </motion.div>

        {/* DIVIDER */}
        <div className="w-full h-[1px] bg-gray-300 dark:bg-gray-700 mt-10"></div>

        {/* COPYRIGHT */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-6 text-sm text-gray-500 dark:text-gray-400"
        >
          © {new Date().getFullYear()} Chandan Kumar. All rights reserved.
        </motion.p>

      </div>
    </footer>
  );
};

export default Footer;