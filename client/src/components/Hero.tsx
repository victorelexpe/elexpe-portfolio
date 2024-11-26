import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../lib/animations";
import { Button } from "./ui/button";
import { Github, Linkedin, Twitter } from "lucide-react";
import { SOCIAL_LINKS } from "../lib/constants";

export function Hero() {
  return (
    <motion.section
      variants={staggerContainer}
      className="min-h-[calc(100vh-4rem)] -mx-4 px-4 flex items-center justify-center hero-background relative overflow-hidden"
    >
      <div className="space-y-8 max-w-4xl mx-auto">
        <motion.h1
          variants={fadeIn}
          className="text-hero text-center"
        >
          Hi, I'm Victor Elexpe
        </motion.h1>
        <motion.p
          variants={fadeIn}
          className="text-subtitle text-center"
        >
          Computer Engineer specializing in Data Engineering. I also do sim racing and produce music with synthesizers.
        </motion.p>
        <motion.div
          variants={fadeIn}
          className="flex justify-center gap-8"
        >
          {Object.entries(SOCIAL_LINKS).map(([platform, link]) => (
            <motion.div
              key={platform}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                variant="outline"
                size="icon"
                className="w-12 h-12 border-white/20 hover:border-white transition-colors duration-300"
                asChild
              >
                <a href={link} target="_blank" rel="noopener noreferrer">
                  {platform === 'GITHUB' && <Github className="h-6 w-6" />}
                  {platform === 'LINKEDIN' && <Linkedin className="h-6 w-6" />}
                  {platform === 'TWITTER' && <Twitter className="h-6 w-6" />}
                </a>
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
