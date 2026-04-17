import React, { use, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import * as api from "../service/api";
import toast from "react-hot-toast";

// const projectsData = [
//   {
//     title: "Patient Management System",
//     desc: "Spring Boot app to manage patients and appointments.",
//     tech: ["Spring Boot", "MySQL", "JWT"],
//   },
//   {
//     title: "Portfolio Website",
//     desc: "React + Tailwind portfolio with dark mode.",
//     tech: ["React", "Tailwind"],
//   },
//   {
//     title: "School Management",
//     desc: "Microservices-based system for students.",
//     tech: ["Spring Boot", "Docker"],
//   },
//   {
//     title: "Chat App",
//     desc: "Realtime chat using WebSocket.",
//     tech: ["Spring Boot", "WebSocket"],
//   },
//   {
//     title: "E-Commerce",
//     desc: "Full-stack shopping platform.",
//     tech: ["React", "Spring Boot"],
//   },
// ];

const Projects = ({ userId }) => {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);
  const visibleCount = 3;

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, [index]);

  const startAutoSlide = () => {
    stopAutoSlide();
    intervalRef.current = setInterval(() => {
      setIndex((prev) =>
        prev + visibleCount >= projectsData.length ? 0 : prev + 1
      );
    }, 3000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const nextSlide = () => {
    setIndex((prev) =>
      prev + visibleCount >= projectsData.length ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setIndex((prev) =>
      prev === 0 ? projectsData.length - visibleCount : prev - 1
    );
  };



  const[projectsData, setProjectsData] = useState([]);
  useEffect(()=>{
    api.getProjects(userId).then((response)=>{

      console.log("Projects data:", response.data);
      setProjectsData(response.data);
    }).catch((error)=>{
      toast.error("Failed to fetch projects");
      console.error("Error fetching projects:", error);
    });

  },[userId]);

  return (
    <section
      id="projects"
      className="py-24 px-6 min-h-screen flex items-center bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-6xl mx-auto w-full">
        {userId && (
          <p className="text-gray-600 dark:text-gray-300 text-center">
            Projects for User ID: {userId}
          </p>
        )}
        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-gray-800 dark:text-white"
        >
          My Projects 💼
        </motion.h2>

        {/* SLIDER */}
        <div
          className="relative mt-12 overflow-hidden"
          onMouseEnter={stopAutoSlide}
          onMouseLeave={startAutoSlide}
        >

          {/* LEFT BUTTON */}
          <motion.button
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-800 p-3 rounded-full shadow"
          >
            ◀
          </motion.button>

          {/* TRACK (FIXED) */}
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${index * 33.333}%)`,
              width: `${projectsData.length * 33.333}%`,
            }}
          >
            {projectsData.map((project, i) => (
              <motion.div
                key={i}
                className="w-1/3 flex-shrink-0 px-2"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="rounded-2xl bg-white dark:bg-gray-900 shadow-lg hover:shadow-2xl transition overflow-hidden"
                >

                  {/* IMAGE */}
                  <div className="overflow-hidden">
                    <motion.img
                      src="https://images.unsplash.com/photo-1518770660439-4636190af475"
                      alt="project"
                      className="w-full h-48 object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="p-5">
                    <h3 className="text-xl font-semibold dark:text-white">
                      {project.projectName}
                    </h3>

                    <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm">
                      {project.projectDescription}
                    </p>

                    {/* TECH */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.projectsTechnology.map((t, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 text-xs bg-blue-100 text-blue-600 dark:bg-gray-700 dark:text-white rounded"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* BUTTONS */}
                    <div className="mt-5 flex gap-3">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        className="px-4 py-2 text-sm bg-gray-800 text-white rounded"
                        onClick={()=>window.open(projectsData.gitUrl,"_blank")}
                      >
                        GitHub
                      </motion.button>

                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        className="px-4 py-2 text-sm bg-blue-500 text-white rounded"
                        onClick={() => window.open(projectsData.projectUrl, "_blank")}
                      >
                        Live
                      </motion.button>
                    </div>
                  </div>

                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* RIGHT BUTTON */}
          <motion.button
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-800 p-3 rounded-full shadow"
          >
            ▶
          </motion.button>

        </div>

      </div>
    </section>
  );
};

export default Projects;