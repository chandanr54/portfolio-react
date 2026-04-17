
import { motion } from "framer-motion";

// const skillsData = [
//   { name: "Java", level: 90 },
//   { name: "Spring Boot", level: 85 },
//   { name: "React", level: 80 },
//   { name: "MySQL", level: 75 },
//   { name: "Docker", level: 70 },
// ];

const Skills = ({ skills }) => {
  

  return (
    <section
      id="skills"
      className="py-24 px-6 min-h-screen flex items-center bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-6xl mx-auto w-full">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-gray-800 dark:text-white"
        >
          My Skills 🚀
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center mt-4 text-gray-600 dark:text-gray-300"
        >
          Technologies I work with to build scalable applications
        </motion.p>

        {/* SKILLS GRID */}
        <div className="grid md:grid-cols-2 gap-8 mt-12">

          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="p-6 rounded-2xl bg-white dark:bg-gray-900 shadow-lg hover:shadow-2xl transition duration-300 group"
            >
              {/* Skill Name */}
              <div className="flex justify-between mb-2">
                <span className="text-lg font-semibold text-gray-700 dark:text-white">
                  {skill.skillName}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-300">
                  {skill.level}%
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1 }}
                  className="h-3 rounded-full bg-gradient-to-r from-blue-500 to-green-400"
                />
              </div>
            </motion.div>
          ))}

        </div>

        {/* TECH STACK CARDS */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-5 gap-6 text-center">

          {skills.map((tech, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.1 }}
              className="p-4 rounded-xl bg-white dark:bg-gray-900 shadow-md transition"
            >
              <p className="text-gray-700 dark:text-white font-medium">
                {tech.skillName}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section> 


  );
};

export default Skills;