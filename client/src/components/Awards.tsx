import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../lib/animations";
import { Trophy } from "lucide-react";

const AWARDS = [
  {
    title: "actúaUPM Entrepreneurship Program",
    status: "Finalist",
    year: "2023"
  },
  {
    title: "Global TadHack",
    status: "Winner",
    year: "2017"
  }
];

export function Awards() {
  return (
    <motion.section
      variants={staggerContainer}
      className="section"
    >
      <motion.h2
        variants={fadeIn}
        className="section-title"
      >
        Awards
      </motion.h2>
      <motion.div
        variants={staggerContainer}
        className="space-y-4 max-w-4xl"
      >
        {AWARDS.map((award, index) => (
          <motion.div
            key={index}
            variants={fadeIn}
            className="list-item"
          >
            <div className="flex items-start gap-6">
              <Trophy className="h-6 w-6 text-white/50 mt-1" />
              <div className="space-y-2">
                <h3 className="text-2xl font-light">{award.title}</h3>
                <p className="text-white/70">
                  <span className="text-white">{award.status}</span> • {award.year}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
