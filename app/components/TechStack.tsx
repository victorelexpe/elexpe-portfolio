"use client";

import { motion } from "framer-motion";
import { fadeIn } from "../lib/animations";
import { TECH_STACK } from "../lib/constants";
import { Text } from "./Text";
import { cn } from "../lib/utils";

// Import GSAP hooks and utils
import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
// ScrollTrigger is registered globally in page.tsx

export default function TechStack() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (titleRef.current && gridRef.current) {
        // Animate Title
        gsap.fromTo(titleRef.current, 
          { opacity: 0, y: 50 }, 
          {
            opacity: 1, y: 0, duration: 0.6, ease: 'power2.out',
            scrollTrigger: { 
              trigger: titleRef.current, 
              start: 'top 85%', 
              toggleActions: 'play none none none',
            }
          }
        );

        // Animate Grid Items (Category Blocks)
        const items = gridRef.current.children;
        gsap.fromTo(items, 
          { opacity: 0, y: 40 }, 
          {
            opacity: 1, y: 0, duration: 0.5, ease: 'power2.out',
            stagger: 0.1, // Stagger animation for each category block
            scrollTrigger: { 
              trigger: gridRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
            }
          }
        );
      }
    }, sectionRef); // Scope context

    return () => ctx.revert(); // Cleanup
  }, []);

  if (!TECH_STACK || TECH_STACK.length === 0) {
    return null;
  }

  return (
    <section ref={sectionRef} id="tech-stack" aria-labelledby="tech-stack-heading">
      <h2 
        ref={titleRef}
        id="tech-stack-heading" 
        className="font-heading text-4xl md:text-5xl font-bold mb-10 md:mb-14 text-gray-100 opacity-0" // Start hidden
      >
        Tech Stack
      </h2>

      <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-12">
        {TECH_STACK.map((category, index) => (
          <div
            key={category.category || index}
            className="space-y-3 md:space-y-4 opacity-0" // GSAP targets this div
          >
            <Text 
              as="h3" 
              className="text-xl md:text-2xl font-heading font-semibold text-gray-200"
            >
              {category.category}
            </Text>
            
            <div className="flex flex-wrap gap-2">
              {category.techs.map((tech) => (
                <span 
                  key={tech}
                  className={cn(
                    "inline-block",
                    "px-2.5 py-1",
                    "rounded-full",
                    "border border-gray-700",
                    "bg-transparent",
                    "text-sm font-medium text-gray-400",
                    "whitespace-nowrap",
                    "transition-all duration-200 ease-in-out",
                    "hover:border-accent hover:text-accent hover:bg-accent/10",
                    "focus:outline-none focus:border-accent focus:text-accent focus:bg-accent/10"
                  )}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
