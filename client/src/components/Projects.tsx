import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../lib/animations";
import { PROJECTS } from "../lib/constants";
import { Github, ExternalLink } from "lucide-react";

export function Projects() {
  return (
    <motion.section
      id="projects"
      variants={staggerContainer}
      className="section"
    >
      <motion.h2
        variants={fadeIn}
        className="section-title"
      >
        Projects
      </motion.h2>
      <motion.div
        variants={staggerContainer}
        className="space-y-4"
      >
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            variants={fadeIn}
            className="flat-item"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-light">{project.title}</h3>
                <p className="text-white/70 max-w-2xl">{project.description}</p>
                <div className="flex flex-wrap gap-4 font-mono text-sm text-white/50">
                  {project.tech.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </div>
              <div className="flex gap-6">
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-white transition-colors duration-300"
                >
                  <Github className="h-6 w-6" />
                </motion.a>
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-white transition-colors duration-300"
                >
                  <ExternalLink className="h-6 w-6" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
