import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../lib/animations";
import { Button } from "./ui/button";
import { Github, Linkedin, Twitter } from "lucide-react";
import { SOCIAL_LINKS } from "../lib/constants";

export function Hero() {
  return (
    <motion.section
      variants={staggerContainer}
      className="min-h-[calc(100vh-4rem)] -mx-4 px-4 flex flex-col md:flex-row items-center justify-center gap-12 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10"
    >
      <div className="flex-1 space-y-8">
        <motion.h1
          variants={fadeIn}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          Hi, I'm <span className="text-gradient">Elexpe</span> 👋
        </motion.h1>
        <motion.p
          variants={fadeIn}
          className="text-xl md:text-3xl text-muted-foreground mb-8 max-w-2xl"
        >
          A software developer passionate about creating modern web experiences, who enjoys sim racing and producing music with synthesizers in my free time
        </motion.p>
        <motion.div
          variants={fadeIn}
          className="flex gap-4"
        >
          {Object.entries(SOCIAL_LINKS).map(([platform, link]) => (
            <motion.div
              key={platform}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="outline"
                size="icon"
                className="glass-card hover:border-primary/50 transition-colors duration-300"
                asChild
              >
                <a href={link} target="_blank" rel="noopener noreferrer">
                  {platform === 'GITHUB' && <Github className="h-5 w-5" />}
                  {platform === 'LINKEDIN' && <Linkedin className="h-5 w-5" />}
                  {platform === 'TWITTER' && <Twitter className="h-5 w-5" />}
                </a>
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
