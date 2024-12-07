import { motion } from "framer-motion";
import { fadeIn } from "../lib/animations";
import { Building2, Calendar } from "lucide-react";
import { Section } from "./ui/Section";
import { Link } from "./ui/Link";

const WORK_EXPERIENCE = [
  {
    company: "Havas Media Group",
    role: "Lead Data Engineer",
    period: "May 2022 - Today",
    description: "Designing and building cloud infrastructure, orchestrating data pipelines, and implementing comprehensive monitoring systems.",
    url: "https://havasmedia.com/"
  },
  {
    company: "Telefónica",
    role: "Data Engineer",
    period: "Jun 2021 - May 2022",
    description: "Implemented ETL processes and optimized distributed computing solutions for massive data processing.",
    url: "https://www.telefonica.com/"
  },
  {
    company: "Technical University of Madrid",
    role: "Full-Stack Developer",
    period: "Oct 2020 - Dec 2020",
    description: "Developed smart contracts and implemented full-stack blockchain solutions.",
    url: "https://www.upm.es/"
  }
];

export function WorkExperience() {
  return (
    <Section title="Work Experience">
      <div className="space-y-12 md:space-y-16">
        {WORK_EXPERIENCE.map((work, index) => (
          <motion.div
            key={index}
            variants={fadeIn}
            className="timeline-item"
          >
            <div className="timeline-dot" />
            <Link href={work.url}>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Building2 className="h-5 w-5 text-white/70" />
                  <h3 className="text-2xl font-light group-hover:text-primary transition-colors duration-300">
                    {work.company}
                  </h3>
                </div>
                <div className="flex items-center gap-2 text-white/50">
                  <Calendar className="h-4 w-4" />
                  <span>{work.period}</span>
                </div>
                <h4 className="text-xl font-light text-white/90">{work.role}</h4>
                <p className="text-white/70 leading-relaxed">{work.description}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
