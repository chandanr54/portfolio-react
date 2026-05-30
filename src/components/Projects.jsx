import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projectsDatas } from "../constants/Const";

const Projects = () => {
  const [projectsData, setProjectsData] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setProjectsData(projectsDatas);
  }, []);

  useEffect(() => {
    if (projectsData.length === 0) return;

    const interval = setInterval(() => {
      setIndex((prev) =>
        prev === projectsData.length - 1 ? 0 : prev + 1
      );
    }, 10000);

    return () => clearInterval(interval);
  }, [projectsData]);

  const nextSlide = () => {
    setIndex((prev) =>
      prev === projectsData.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setIndex((prev) =>
      prev === 0 ? projectsData.length - 1 : prev - 1
    );
  };

  if (projectsData.length === 0) return null;

  const project = projectsData[index];

  return (
    <section
      id="projects"
      className="py-24 px-6 min-h-screen bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12 dark:text-white"
        >
          My Projects 💼
        </motion.h2>

        <div className="relative">

          {/* Previous Button */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white dark:bg-gray-800 shadow-lg rounded-full px-4 py-2"
          >
            ◀
          </button>
<AnimatePresence mode="wait">
  <motion.div
    key={index}
    initial={{ opacity: 0, x: 150 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -150 }}
    transition={{
      duration: 1,
      ease: "easeInOut",
    }}
    className="bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row min-h-[550px]"
  >
    {/* LEFT SIDE IMAGE */}
    <div className="md:w-1/2 flex items-center justify-center p-6 bg-gray-50 dark:bg-gray-800">
      <img
        src={
          project.imageUrl ||
          "https://images.unsplash.com/photo-1518770660439-4636190af475"
        }
        alt={project.projectName}
        className="max-w-full max-h-[500px] object-contain rounded-xl shadow-lg"
      />
    </div>

    {/* RIGHT SIDE CONTENT */}
    <div className="md:w-1/2 p-8 flex flex-col justify-center">
      <h3 className="text-3xl font-bold dark:text-white">
        {project.projectName}
      </h3>

      <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
        {project.projectDescription}
      </p>

      {/* Technologies */}
      <div className="flex flex-wrap gap-3 mt-6">
        {project.projectsTechnology?.map((tech, idx) => (
          <span
            key={idx}
            className="px-4 py-2 bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-white rounded-full text-sm font-medium"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Buttons */}
      <div className="mt-8 flex gap-4">
        {project.gitUrl && (
          <button
            onClick={() => window.open(project.gitUrl, "_blank")}
            className="px-6 py-3 bg-gray-800 text-white rounded-xl hover:bg-gray-700 transition shadow-md"
          >
            GitHub
          </button>
        )}

        {project.projectUrl && (
          <button
            onClick={() => window.open(project.projectUrl, "_blank")}
            className="px-6 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition shadow-md"
          >
            Live Demo
          </button>
        )}
      </div>
    </div>
  </motion.div>
</AnimatePresence>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white dark:bg-gray-800 shadow-lg rounded-full px-4 py-2"
          >
            ▶
          </button>

        </div>

        {/* Dots */}
        <div className="flex justify-center mt-8 gap-2">
          {projectsData.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition ${
                index === i
                  ? "bg-blue-500"
                  : "bg-gray-400"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;