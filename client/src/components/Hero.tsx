import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../lib/animations";
import { Button } from "./ui/button";
import { SOCIAL_LINKS } from "../lib/constants";

const XLogo = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-5 w-5"
    aria-hidden="true"
    fill="currentColor"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

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
          className="flex justify-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              size="lg"
              className="bg-white text-black hover:bg-white/90 text-lg px-8 flex items-center gap-2"
              asChild
            >
              <a href={SOCIAL_LINKS.TWITTER} target="_blank" rel="noopener noreferrer">
                <XLogo />
                <span>Connect on X</span>
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
