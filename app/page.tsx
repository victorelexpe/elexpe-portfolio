"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import { Hero } from "@/components/Hero";
import { ErrorBoundary } from "@/components/ErrorBoundary";

// Direct imports instead of dynamic
import { Projects } from "@/components/Projects"; 
import { WorkExperience } from "@/components/WorkExperience";
import { News } from "@/components/News";
import { Awards } from "@/components/Awards";
import TechStack from "@/components/TechStack"; // Default export
import { Contact } from "@/components/Contact"; // Import Contact component

// Import GSAP and ScrollTrigger
import { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function Page() {

  // Optional: Add a general fade-in for the whole main content area 
  // if desired, though individual section animations might be sufficient.
  useLayoutEffect(() => {
    // Fade in main content *after* Hero is potentially animated
    gsap.to('main', { opacity: 1, duration: 0.5, delay: 0.5 }); // Increased delay slightly
    return () => {
      ScrollTrigger.killAll(); // Kill triggers on unmount
    }
  }, []);

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={fadeIn}
      className=""
    >
      {/* Hero moved outside the main container to allow full width */}
      <ErrorBoundary>
        <Hero />
      </ErrorBoundary>

      {/* Main content container remains constrained */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 opacity-0 space-y-20 sm:space-y-24">
        <ErrorBoundary>
          {/* Removed Hero from here */}
          
          {/* Layout Grids and Sections */}
          <Projects />
          <WorkExperience />
          <News />
          <Awards />
          <TechStack />
          {/* Contact removed from here */}
        </ErrorBoundary>
      </main>

      {/* Contact Section (Full Width) - Moved outside main */}
      <ErrorBoundary>
        {/* No extra margin needed here as Contact has internal padding */}
        <Contact />
      </ErrorBoundary>

    </motion.div>
  );
}
