import { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(data);
   // alert("Login Successful 🚀");
   // 🔥 BEAUTIFUL TOAST
    toast.success("Login Successful 🚀");
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
          Welcome Back 👋
        </h2>

        <p className="text-center mt-2 text-gray-500 dark:text-gray-400">
          Login to continue
        </p>

        {/* FORM */}
        <form onSubmit={handleLogin} className="mt-6 space-y-5">

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

          {/* BUTTON */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium shadow-lg"
          >
            Login 🚀
          </motion.button>

        </form>

        {/* FOOTER */}
        <p className="mt-6 text-center text-gray-600 dark:text-gray-400 text-sm">
          Don’t have an account?{" "}
          

          <span   onClick={() => navigate("/register")} 
          className="text-blue-500 cursor-pointer hover:underline">
            Sign up
          </span>
        </p>

      </motion.div>
    </div>
  );
};

export default Login;