import { motion } from "framer-motion";
import { fadeIn } from "../lib/animations";
import { PROJECTS } from "../lib/constants";
import { Section } from "./ui/Section";
import { Link } from "./ui/Link";

export function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="space-y-12 md:space-y-16">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            variants={fadeIn}
            className="flat-item"
          >
            <Link href={project.link}>
              <div className="space-y-4">
                <h3 className="text-2xl font-light group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-white/70 leading-relaxed">{project.description}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}