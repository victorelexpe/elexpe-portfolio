import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./ui/card";
import { fadeIn, staggerContainer } from "../lib/animations";
import { PROJECTS } from "../lib/constants";
import { Github, ExternalLink } from "lucide-react";

export function Projects() {
  return (
    <motion.section
      id="projects"
      variants={staggerContainer}
      className="py-20"
    >
      <motion.h2
        variants={fadeIn}
        className="text-4xl md:text-5xl font-bold mb-12 text-gradient"
      >
        Projects
      </motion.h2>
      <motion.div
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            variants={fadeIn}
            whileHover={{ y: -8, scale: 1.02 }}
            className="h-full"
          >
            <Card className="glass-card gradient-bg h-full border border-white/20 transition-all duration-300 hover:border-primary/50">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">{project.title}</CardTitle>
                <CardDescription className="text-lg">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <motion.span
                      key={tech}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1.5 text-sm glass-card rounded-full border border-white/10"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 glass-card rounded-full hover:text-primary transition-colors duration-300"
                  >
                    <Github className="h-5 w-5" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 glass-card rounded-full hover:text-primary transition-colors duration-300"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </motion.a>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
