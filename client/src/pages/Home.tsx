import { motion } from "framer-motion";
import { Nav } from "../components/Nav";
import { Hero } from "../components/Hero";
import { Projects } from "../components/Projects";
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
      className="min-h-screen bg-background"
    >
      <Nav />
      <main className="container mx-auto px-4 py-8 space-y-20">
        <Hero />
        <Projects />
        <TechStack />
        <Contact />
      </main>
    </motion.div>
  );
}
