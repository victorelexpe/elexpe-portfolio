import { motion } from "framer-motion";
import { Hero } from "../components/Hero";
import { Projects } from "../components/Projects";
import { WorkExperience } from "../components/WorkExperience";
import { Awards } from "../components/Awards";
import { TechStack } from "../components/TechStack";
import { Contact } from "../components/Contact";
import { fadeIn } from "../lib/animations";
import { ThemeToggle } from "../components/ThemeToggle";

export default function Home() {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={fadeIn}
      className="min-h-screen bg-background relative"
    >
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>
      <main className="container mx-auto px-4 py-8 space-y-20">
        <Hero />
        <Projects />
        <WorkExperience />
        <Awards />
        <TechStack />
        <Contact />
      </main>
    </motion.div>
  );
}
