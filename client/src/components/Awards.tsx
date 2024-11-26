import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../lib/animations";

const AWARDS = [
  {
    title: "actúaUPM Entrepreneurship Program",
    status: "Finalist",
    year: "2023",
    description: "A prestigious entrepreneurship competition at Technical University of Madrid. Recognized for developing an innovative platform to connect museums and visitors."
  },
  {
    title: "Global TadHack",
    status: "Winner",
    year: "2017",
    description: "World's largest hackathon dedicated to programmable telecommunications, bringing together developers from around the globe to create innovative communication solutions.",
    achievement: "Developed a real-time communication platform integrating voice, messaging, and location services"
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
            className="flat-item"
          >
            <div className="space-y-3">
              <h3 className="text-2xl font-light">{award.title}</h3>
              <p className="text-white/70">
                <span className="text-white">{award.status}</span> • {award.year}
              </p>
              <p className="text-white/70 leading-relaxed">{award.description}</p>
              <p className="text-white/90 font-light">{award.achievement}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
