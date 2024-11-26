import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../lib/animations";
import { Button } from "./ui/button";
import { Github, Linkedin, Twitter } from "lucide-react";
import { SOCIAL_LINKS } from "../lib/constants";

export function Hero() {
  return (
    <motion.section
      variants={staggerContainer}
      className="min-h-[calc(100vh-4rem)] flex flex-col md:flex-row items-center justify-center gap-8"
    >
      <div className="flex-1 space-y-6">
        <motion.h1
          variants={fadeIn}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Hi, I'm Elexpe 👋
        </motion.h1>
        <motion.p
          variants={fadeIn}
          className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl"
        >
          A software developer passionate about creating modern web experiences
        </motion.p>
        <motion.div
          variants={fadeIn}
          className="flex gap-4"
        >
          {Object.entries(SOCIAL_LINKS).map(([platform, link]) => (
            <Button
              key={platform}
              variant="outline"
              size="icon"
              asChild
            >
              <a href={link} target="_blank" rel="noopener noreferrer">
                {platform === 'GITHUB' && <Github />}
                {platform === 'LINKEDIN' && <Linkedin />}
                {platform === 'TWITTER' && <Twitter />}
              </a>
            </Button>
          ))}
        </motion.div>
      </div>
      <motion.div
        variants={fadeIn}
        className="flex-1 flex justify-center"
      >
        <img
          src="/IMG_8072.jpeg"
          alt="Victor Hasim Elexpe Ahamri"
          className="w-64 h-64 rounded-full object-cover border-4 border-primary/20"
        />
      </motion.div>
    </motion.section>
  );
}
