import { motion } from "framer-motion";
import { fadeIn } from "../lib/animations";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { SOCIAL_LINKS } from "../lib/constants";

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
            { icon: <Mail className="h-8 w-8" />, href: `mailto:contact@elexpe.dev` },
            { icon: <Github className="h-8 w-8" />, href: SOCIAL_LINKS.GITHUB },
            { icon: <Linkedin className="h-8 w-8" />, href: SOCIAL_LINKS.LINKEDIN },
            { icon: <Twitter className="h-8 w-8" />, href: SOCIAL_LINKS.TWITTER }
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-white transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.icon}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}
