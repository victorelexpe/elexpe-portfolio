import { motion } from "framer-motion";
import { fadeIn } from "../lib/animations";
import { Section } from "./ui/Section";
import { Link } from "./ui/Link";

const AWARDS = [
  {
    title: "actúaUPM Entrepreneurship Program",
    status: "Finalist",
    year: "2023",
    description: "Developed an innovative platform focused on enhancing museum visitor experiences by creating meaningful connections between cultural institutions and their audiences.",
    url: "https://actuaupm.blogspot.com/"
  },
  {
    title: "Global TadHack",
    status: "Winner (Madrid)",
    year: "2017",
    description: "Developed an iOS application leveraging Natural Language Processing (NLP) and WebRTC technology to streamline doctor-patient communication. The app compiles patient symptoms and enables secure video consultations between healthcare providers and patients.",
    url: "https://tadhack.com"
  }
];

export function Awards() {
  return (
    <Section title="Awards">
      <div className="space-y-12 md:space-y-16">
        {AWARDS.map((award, index) => (
          <motion.div
            key={index}
            variants={fadeIn}
            className="flat-item"
          >
            <Link href={award.url}>
              <div className="space-y-4">
                <h3 className="text-2xl font-light group-hover:text-primary transition-colors duration-300">
                  {award.title}
                </h3>
                <p className="text-white/70">
                  <span className="text-white">{award.status}</span> • {award.year}
                </p>
                <p className="text-white/70 leading-relaxed">{award.description}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
