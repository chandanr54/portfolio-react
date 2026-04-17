import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const About = ({skills}) => {
  return (
    <section
      id="about"
      className="min-h-screen py-24 px-6 flex items-center bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT IMAGE */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative group">
            <motion.img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="profile"
              className="w-72 md:w-80 rounded-2xl shadow-xl"
              whileHover={{ scale: 1.05 }}
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
            />

            {/* Glow effect */}
            <div className="absolute inset-0 rounded-2xl bg-blue-500 opacity-20 blur-2xl group-hover:opacity-40 transition"></div>
          </div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white">
            About Me 👨‍💻
          </h2>

          {/* ✍️ TYPING TEXT */}
          <div className="mt-6 text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
            <TypeAnimation
              sequence={[
                "I'm a passionate Java Spring Boot Developer.",
                2000,
                "I build scalable backend systems.",
                2000,
                "I create modern web apps using React + Spring Boot.",
                2000,
                "I love solving real-world problems with clean code.",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </div>

          {/* STATIC TEXT */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6 text-gray-600 dark:text-gray-300 leading-relaxed"
          >
            I specialize in building REST APIs, implementing JWT authentication,
            and developing full-stack applications using{" "}
            <span className="text-green-500 font-semibold">
              React + Spring Boot
            </span>.
          </motion.p>

          {/* SKILLS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-6 flex flex-wrap gap-3"
          >
            {skills.map(
              (skill, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-blue-100 text-blue-600 dark:bg-gray-700 dark:text-white rounded-full text-sm font-medium hover:scale-105 transition"
                >
                  {skill.skillName}
                </span>
              )
            )}
          </motion.div>

          {/* BUTTON */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="mt-8"
          >
            <a
              href="/resume.pdf"
              className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-xl shadow-md transition hover:scale-105"
            >
              Download Resume 📄
            </a>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;