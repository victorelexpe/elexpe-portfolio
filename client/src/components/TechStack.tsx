import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { fadeIn, staggerContainer } from "../lib/animations";
import { TECH_STACK } from "../lib/constants";
import {
  Cloud, Database, Code, Binary,
  Monitor, GitBranch, Store,
  Server, Dock, Globe, GitMerge
} from "lucide-react";

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
                  <Card className="glass-card gradient-bg h-full border border-white/20 transition-all duration-300 hover:border-primary/50 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-[linear-gradient(40deg,var(--card-dots)_1.25px,transparent_1.25px)] bg-[length:16px_16px] opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
                    <CardContent className="p-8 flex flex-col items-center justify-center gap-4">
                      {tech === "Google Cloud Platform" && <Cloud className="w-8 h-8 text-primary/80 group-hover:text-primary transition-colors duration-300" />}
                      {tech === "BigQuery" && <Database className="w-8 h-8 text-primary/80 group-hover:text-primary transition-colors duration-300" />}
                      {tech === "Python" && <Code className="w-8 h-8 text-primary/80 group-hover:text-primary transition-colors duration-300" />}
                      {tech === "Cloud Functions" && <Binary className="w-8 h-8 text-primary/80 group-hover:text-primary transition-colors duration-300" />}
                      {tech === "Cloud Run" && <Server className="w-8 h-8 text-primary/80 group-hover:text-primary transition-colors duration-300" />}
                      {tech === "Storage" && <Store className="w-8 h-8 text-primary/80 group-hover:text-primary transition-colors duration-300" />}
                      {tech === "Monitoring" && <Monitor className="w-8 h-8 text-primary/80 group-hover:text-primary transition-colors duration-300" />}
                      {tech === "Workflows" && <GitMerge className="w-8 h-8 text-primary/80 group-hover:text-primary transition-colors duration-300" />}
                      {tech === "Git" && <GitBranch className="w-8 h-8 text-primary/80 group-hover:text-primary transition-colors duration-300" />}
                      {tech === "Docker" && <Dock className="w-8 h-8 text-primary/80 group-hover:text-primary transition-colors duration-300" />}
                      {tech === "APIs" && <Globe className="w-8 h-8 text-primary/80 group-hover:text-primary transition-colors duration-300" />}
                      {tech === "SQL" && <Database className="w-8 h-8 text-primary/80 group-hover:text-primary transition-colors duration-300" />}
                      <span className="text-lg font-medium text-center group-hover:text-primary transition-colors duration-300">{tech}</span>
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
