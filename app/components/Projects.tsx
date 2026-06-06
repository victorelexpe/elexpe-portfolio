"use client";

import { motion } from "framer-motion";
import { fadeIn } from "../lib/animations";
import { PROJECTS } from "../lib/constants";
import { Text } from "./Text";
import { cn } from "@/lib/utils";

// Import GSAP hooks and utils
import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
// ScrollTrigger is registered globally in page.tsx

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Ensure refs exist
      if (titleRef.current && gridRef.current) {
        // Animate Title
        gsap.fromTo(titleRef.current, 
          { opacity: 0, y: 50 }, 
          {
            opacity: 1, y: 0, duration: 0.6, ease: 'power2.out',
            scrollTrigger: { 
              trigger: titleRef.current, 
              start: 'top 85%', // Trigger when 85% from top enters viewport
              toggleActions: 'play none none none', // Play animation once on enter
            }
          }
        );

        // Animate Grid Items (Project Cards)
        const cards = gridRef.current.children;
        gsap.fromTo(cards, 
          { opacity: 0, y: 40 }, 
          {
            opacity: 1, y: 0, duration: 0.5, ease: 'power2.out',
            stagger: 0.15, // Stagger animation for each card
            scrollTrigger: { 
              trigger: gridRef.current,
              start: 'top 80%', // Trigger when grid top enters viewport
              toggleActions: 'play none none none',
            }
          }
        );
      }
    }, sectionRef); // Scope context to the section

    return () => ctx.revert(); // Cleanup
  }, []);

  if (!PROJECTS || PROJECTS.length === 0) {
    return null;
  }

  return (
    <section ref={sectionRef} id="projects" aria-labelledby="projects-heading">
      <h2 
        ref={titleRef}
        id="projects-heading" 
        className="font-heading text-4xl md:text-5xl font-bold mb-10 md:mb-14 text-gray-100 opacity-0" // Start hidden
      >
        Featured Projects
      </h2>

      <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
        {PROJECTS.map((project, index) => (
          // Removed Framer Motion from items, GSAP handles entrance now
          <div
            key={project.title || index}
            // Start hidden: GSAP needs direct children of gridRef for stagger
            className="flex flex-col space-y-2 md:space-y-3 opacity-0" 
          >
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className={cn(
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-sm group"
              )}
            >
              <Text 
                as="h3" 
                className="text-2xl md:text-3xl font-heading font-semibold text-gray-100 group-hover:text-accent transition-colors duration-200"
              >
                {project.title}
              </Text>
            </a>

            <Text className="text-lg md:text-xl text-gray-300 leading-relaxed flex-grow">
              {project.description}
            </Text>
          </div>
        ))}
      </div>
    </section>
  );
}