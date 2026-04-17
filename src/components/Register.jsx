import { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (data.password !== data.confirmPassword) {
      toast.error("Passwords do not match ❌");
      return;
    }

    console.log(data);

    toast.success("Account Created Successfully 🎉");

    // redirect to login
    setTimeout(() => {
      navigate("/login");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">

      {/* 🔥 Glow Background */}
      <div className="absolute w-72 h-72 bg-blue-500 opacity-20 blur-3xl rounded-full top-10 left-10"></div>
      <div className="absolute w-72 h-72 bg-purple-500 opacity-20 blur-3xl rounded-full bottom-10 right-10"></div>

      {/* CARD */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md p-8 rounded-2xl bg-white dark:bg-gray-900 shadow-xl backdrop-blur-md"
      >
        {/* TITLE */}
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white">
          Create Account ✨
        </h2>

        <p className="text-center mt-2 text-gray-500 dark:text-gray-400">
          Join and start your journey 🚀
        </p>

        {/* FORM */}
       <form onSubmit={handleRegister} className="mt-6 space-y-5">

  {/* GRID START */}
  <div className="grid md:grid-cols-2 gap-4">

    {/* NAME */}
    <motion.input
      whileFocus={{ scale: 1.02 }}
      type="text"
      name="name"
      value={data.name}
      onChange={handleChange}
      placeholder="Full Name"
      required
      className="w-full p-3 rounded-lg border dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-white outline-none focus:ring-2 focus:ring-blue-500"
    />

    {/* EMAIL */}
    <motion.input
      whileFocus={{ scale: 1.02 }}
      type="email"
      name="email"
      value={data.email}
      onChange={handleChange}
      placeholder="Email Address"
      required
      className="w-full p-3 rounded-lg border dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-white outline-none focus:ring-2 focus:ring-blue-500"
    />

    {/* PASSWORD */}
    <motion.input
      whileFocus={{ scale: 1.02 }}
      type="password"
      name="password"
      value={data.password}
      onChange={handleChange}
      placeholder="Password"
      required
      className="w-full p-3 rounded-lg border dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-white outline-none focus:ring-2 focus:ring-blue-500"
    />

    {/* CONFIRM PASSWORD */}
    <motion.input
      whileFocus={{ scale: 1.02 }}
      type="password"
      name="confirmPassword"
      value={data.confirmPassword}
      onChange={handleChange}
      placeholder="Confirm Password"
      required
      className="w-full p-3 rounded-lg border dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-white outline-none focus:ring-2 focus:ring-blue-500"
    />

  </div>
  {/* GRID END */}

  {/* BUTTON */}
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    type="submit"
    className="w-full py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium shadow-lg"
  >
    Sign Up 🚀
  </motion.button>

</form>

        {/* FOOTER */}
        <p className="mt-6 text-center text-gray-600 dark:text-gray-400 text-sm">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-blue-500 cursor-pointer hover:underline"
          >
            Login
          </span>
        </p>

      </motion.div>
    </div>
  );
};

export default Register;