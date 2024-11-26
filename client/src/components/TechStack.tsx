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
        className="text-4xl md:text-5xl font-bold mb-12 text-gradient"
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
            whileHover={{ scale: 1.02 }}
            className="glass-card gradient-bg p-6 rounded-xl border border-white/20 transition-all duration-300 hover:border-primary/50"
          >
            <h3 className="text-2xl font-bold mb-6">{category.category}</h3>
            <div className="grid grid-cols-2 gap-3">
              {category.techs.map((tech) => (
                <motion.div
                  key={tech}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 glass-card rounded-lg text-center border border-white/10 hover:border-primary/30 transition-all duration-300"
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
