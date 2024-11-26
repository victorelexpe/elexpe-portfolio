import { motion } from "framer-motion";
import { fadeIn } from "../lib/animations";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { SOCIAL_LINKS } from "../lib/constants";

export function Contact() {
  return (
    <motion.section
      id="contact"
      variants={fadeIn}
      className="py-20"
    >
      <motion.h2
        variants={fadeIn}
        className="text-4xl md:text-5xl font-bold mb-12 text-gradient"
      >
        Get in Touch
      </motion.h2>
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="glass-card gradient-bg rounded-xl border border-white/20 transition-all duration-300 hover:border-primary/50"
      >
        <CardContent className="p-12">
          <motion.div
            variants={fadeIn}
            className="flex flex-col items-center gap-8"
          >
            <p className="text-center text-xl md:text-2xl text-muted-foreground max-w-2xl">
              I'm always interested in new opportunities and collaborations.
              Feel free to reach out!
            </p>
            <div className="flex gap-6">
              {[
                { icon: <Mail className="h-6 w-6" />, href: `mailto:contact@elexpe.dev` },
                { icon: <Github className="h-6 w-6" />, href: SOCIAL_LINKS.GITHUB },
                { icon: <Linkedin className="h-6 w-6" />, href: SOCIAL_LINKS.LINKEDIN },
                { icon: <Twitter className="h-6 w-6" />, href: SOCIAL_LINKS.TWITTER }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="outline"
                    size="icon"
                    className="w-12 h-12 glass-card hover:border-primary/50 transition-colors duration-300"
                    asChild
                  >
                    <a href={item.href} target="_blank" rel="noopener noreferrer">
                      {item.icon}
                    </a>
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </CardContent>
      </motion.div>
    </motion.section>
  );
}
