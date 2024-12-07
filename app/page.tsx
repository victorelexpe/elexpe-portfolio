"use client";

import { Suspense } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import { Hero } from "@/components/Hero";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import dynamic from "next/dynamic";

// Dynamic imports
const Projects = dynamic(() => import("@/components/Projects").then(mod => ({ default: mod.Projects })));
const WorkExperience = dynamic(() => import("@/components/WorkExperience").then(mod => ({ default: mod.WorkExperience })));
const News = dynamic(() => import("@/components/News").then(mod => ({ default: mod.News })));
const Awards = dynamic(() => import("@/components/Awards").then(mod => ({ default: mod.Awards })));
const TechStack = dynamic(() => import("@/components/TechStack"));

export default function Page() {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={fadeIn}
      className="min-h-screen bg-gradient-to-b from-black to-gray-900"
    >
      <main className="container mx-auto px-4 py-8 space-y-16">
        <ErrorBoundary>
          <Hero />
          <Suspense fallback={<div>Loading...</div>}>
            <Projects />
            <WorkExperience />
            <News />
            <Awards />
            <TechStack />
          </Suspense>
        </ErrorBoundary>
      </main>
    </motion.div>
  );
}
