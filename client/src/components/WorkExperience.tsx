import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../lib/animations";
import { Building2, Calendar } from "lucide-react";

const WORK_EXPERIENCE = [
  {
    company: "Havas Media Group",
    role: "Lead Data Engineer",
    period: "May 2022 - Today",
    description: "Building cloud infrastructure, orchestrating data pipelines, and implementing comprehensive monitoring systems."
  },
  {
    company: "Telefónica",
    role: "Data Engineer",
    period: "Jun 2021 - May 2022",
    description: "Implementing ETL processes and optimizing distributed computing solutions for massive data processing."
  },
  {
    company: "Technical University of Madrid",
    role: "Full-Stack Developer",
    period: "Oct 2020 - Dec 2020",
    description: "Developing smart contracts and implementing full-stack blockchain solutions."
  }
];

export function WorkExperience() {
  return (
    <motion.section
      variants={staggerContainer}
      className="section"
    >
      <motion.h2
        variants={fadeIn}
        className="section-title"
      >
        Work Experience
      </motion.h2>
      <motion.div
        variants={staggerContainer}
        className="relative max-w-3xl"
      >
        {WORK_EXPERIENCE.map((work, index) => (
          <motion.div
            key={index}
            variants={fadeIn}
            className="timeline-item"
          >
            <div className="timeline-dot" />
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <Building2 className="h-5 w-5 text-white/70" />
                <h3 className="text-2xl font-light">{work.company}</h3>
              </div>
              <div className="flex items-center gap-2 text-white/50">
                <Calendar className="h-4 w-4" />
                <span>{work.period}</span>
              </div>
              <h4 className="text-xl font-light text-white/90">{work.role}</h4>
              <p className="text-white/70">{work.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
