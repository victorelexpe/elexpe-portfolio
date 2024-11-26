import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
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
        className="space-y-12"
      >
        {TECH_STACK.map((category) => (
          <motion.div
            key={category.category}
            variants={fadeIn}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gradient">{category.category}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.techs.map((tech) => (
                <motion.div
                  key={tech}
                  variants={fadeIn}
                  whileHover={{ y: -4, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="h-full"
                >
                  <Card className="glass-card gradient-bg h-full border border-white/20 transition-all duration-300 hover:border-primary/50">
                    <CardContent className="p-6 flex items-center justify-center">
                      <span className="text-lg font-medium">{tech}</span>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
