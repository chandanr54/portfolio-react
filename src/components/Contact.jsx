import React, { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

const Contact = ({users}) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    //alert("Message Sent Successfully 🚀");
    toast.success("Message Sent Successfully 🚀");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 min-h-screen flex items-center bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden"
    >
      {/* 🔥 Background Glow */}
      <div className="absolute w-72 h-72 bg-blue-500 opacity-20 blur-3xl rounded-full top-10 left-10"></div>
      <div className="absolute w-72 h-72 bg-purple-500 opacity-20 blur-3xl rounded-full bottom-10 right-10"></div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center w-full">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white">
            Contact Me 📬
          </h2>

          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Have a project or want to collaborate? Feel free to reach out!
          </p>

          {/* CONTACT INFO */}
          <div className="mt-8 space-y-4 text-gray-700 dark:text-gray-300">
            <p>📧 Email: {users?.email}</p>
            <p>📱 Phone: {users?.phone}</p>
            <p>📍 Location: {users?.address}</p>
          </div>

          {/* SOCIAL */}
          <div className="mt-6 flex gap-4">
            <motion.a
              whileHover={{ scale: 1.2 }}
              href={users?.linkdinAddress}
              className="text-blue-500"
            >
              LinkedIn
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2 }}
              href={users?.gitHubLink}
              className="text-gray-800 dark:text-white"
            >
              GitHub
            </motion.a>
          </div>
        </motion.div>

        {/* RIGHT SIDE FORM */}
        <motion.form
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          onSubmit={handleSubmit}
          className="p-8 rounded-2xl bg-white dark:bg-gray-900 shadow-lg space-y-6 backdrop-blur-md"
        >
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
            Send Message ✉️
          </h3>

          {/* NAME */}
          <motion.input
            whileFocus={{ scale: 1.02 }}
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-lg border dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-white outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* EMAIL */}
          <motion.input
            whileFocus={{ scale: 1.02 }}
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-lg border dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-white outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* MESSAGE */}
          <motion.textarea
            whileFocus={{ scale: 1.02 }}
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="4"
            required
            className="w-full p-3 rounded-lg border dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-white outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* BUTTON */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition font-medium shadow-lg"
          >
            Send Message 🚀
          </motion.button>
        </motion.form>

      </div>
    </section>
  );
};

export default Contact;
