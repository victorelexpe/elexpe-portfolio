import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../lib/animations";

const AWARDS = [
  {
    title: "actúaUPM Entrepreneurship Program",
    status: "Finalist",
    year: "2023",
    description: "Developed an innovative platform focused on enhancing museum visitor experiences by creating meaningful connections between cultural institutions and their audiences."
  },
  {
    title: "Global TadHack",
    status: "Winner (Madrid)",
    year: "2017",
    description: "Developed an iOS application leveraging Natural Language Processing (NLP) and WebRTC technology to streamline doctor-patient communication. The app compiles patient symptoms and enables secure video consultations between healthcare providers and patients."
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
