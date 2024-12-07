import { motion } from "framer-motion";
import { fadeIn } from "../lib/animations";
import { TECH_STACK } from "../lib/constants";
import { Section } from "./ui/Section";

export default function TechStack() {
  return (
    <Section 
      id="tech" 
      title="Tech Stack" 
      fullWidth 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16"
    >
      {TECH_STACK.map((category, index) => (
        <motion.div
          key={index}
          variants={fadeIn}
          className="space-y-6"
        >
          <h3 className="text-3xl font-light tracking-tight">{category.category}</h3>
          <div className="space-y-4">
            {category.techs.map((tech) => (
              <motion.div
                key={tech}
                className="group"
                whileHover={{ x: 8 }}
              >
                <span className="font-mono text-lg text-white/50 group-hover:text-white transition-colors duration-300">
                  {tech}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </Section>
  );
}
