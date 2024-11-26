import { motion } from "framer-motion";
import { Hero } from "../components/Hero";
import { Projects } from "../components/Projects";
import { WorkExperience } from "../components/WorkExperience";
import { News } from "../components/News";
import { Awards } from "../components/Awards";
import { TechStack } from "../components/TechStack";
import { Contact } from "../components/Contact";
import { fadeIn } from "../lib/animations";

export default function Home() {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={fadeIn}
      className="min-h-screen bg-black"
    >
      <main className="container mx-auto px-4 py-8 space-y-32">
        <Hero />
        <Projects />
        <WorkExperience />
        <News />
        <Awards />
        <TechStack />
        <Contact />
      </main>
    </motion.div>
  );
}
