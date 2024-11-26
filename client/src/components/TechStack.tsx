import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../lib/animations";
import { TECH_STACK } from "../lib/constants";

export function TechStack() {
  return (
    <motion.section
      id="tech"
      variants={staggerContainer}
      className="py-16"
    >
      <motion.h2
        variants={fadeIn}
        className="text-3xl font-bold mb-8"
      >
        Tech Stack
      </motion.h2>
      <motion.div
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {TECH_STACK.map((category) => (
          <motion.div
            key={category.category}
            variants={fadeIn}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold">{category.category}</h3>
            <div className="grid grid-cols-2 gap-2">
              {category.techs.map((tech) => (
                <motion.div
                  key={tech}
                  whileHover={{ scale: 1.05 }}
                  className="p-2 bg-primary/5 rounded-md text-center"
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
