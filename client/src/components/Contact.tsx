import { motion } from "framer-motion";
import { fadeIn } from "../lib/animations";
import { SOCIAL_LINKS } from "../lib/constants";
import { XLogo } from "./icons/XLogo";

export function Contact() {
  return (
    <motion.section
      id="contact"
      variants={fadeIn}
      className="section"
    >
      <motion.h2
        variants={fadeIn}
        className="section-title"
      >
        Get in Touch
      </motion.h2>
      <motion.div
        variants={fadeIn}
        className="max-w-4xl mx-auto text-center space-y-12"
      >
        <p className="text-xl md:text-2xl text-white/70">
          I'm always interested in new opportunities and collaborations.
          Feel free to reach out!
        </p>
        <div className="flex justify-center gap-8">
          {[
            { text: "LinkedIn", href: SOCIAL_LINKS.LINKEDIN },
            { text: "X", icon: <XLogo />, href: SOCIAL_LINKS.TWITTER }
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/50 hover:text-white transition-colors duration-300 text-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.icon}
              <span>{item.text}</span>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}
