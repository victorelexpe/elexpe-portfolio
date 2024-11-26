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
      className="py-16"
    >
      <motion.h2
        variants={fadeIn}
        className="text-3xl font-bold mb-8"
      >
        Projects
      </motion.h2>
      <motion.div
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            variants={fadeIn}
            whileHover={{ y: -5 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-sm bg-primary/10 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
