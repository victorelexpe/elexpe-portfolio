import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../lib/animations";
import { TECH_STACK } from "../lib/constants";

export function TechStack() {
  return (
    <motion.section
      id="tech"
      variants={staggerContainer}
      className="py-20"
    >
      <motion.h2
        variants={fadeIn}
        className="text-4xl md:text-5xl font-bold mb-16 text-gradient"
      >
        Tech Stack
      </motion.h2>
      <motion.div
        variants={staggerContainer}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-12 gap-y-8"
      >
        {TECH_STACK.flatMap(category => category.techs).map((tech, index) => (
          <motion.div
            key={tech}
            variants={fadeIn}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <motion.div
              whileHover={{
                scale: 1.05,
                color: "var(--color-primary)",
                transition: { duration: 0.2 }
              }}
              className="group cursor-default"
            >
              <motion.span
                className="text-2xl md:text-3xl font-medium block text-center transition-colors duration-300 group-hover:text-gradient"
              >
                {tech}
              </motion.span>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
