"use client";

import { Text } from "./Text";
import { cn } from "@/lib/utils";

// Import GSAP hooks and utils
import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
// ScrollTrigger is registered globally in page.tsx

const WORK_EXPERIENCE = [
  {
    company: "Almanzor Cloud",
    role: "Founder",
    description: "Founder of the complete AI platform for modern businesses, combining intelligent agents with simplified infrastructure.",
    url: "https://almanzor.cloud/"
  },
  {
    company: "Seguros Ocaso",
    role: "Cloud & Data Architect",
    description: "Architecting cloud-native solutions and enterprise data platforms to drive digital transformation.",
    url: "https://www.ocaso.es/",
    current: true
  },
  {
    company: "Havas Media Group",
    role: "Lead Data Engineer",
    description: "Designing and building cloud infrastructure, orchestrating data pipelines, and implementing comprehensive monitoring systems.",
    url: "https://havasmedia.com/"
  },
  {
    company: "Telefónica",
    role: "Data Engineer",
        description: "Implemented ETL processes and optimized distributed computing solutions for massive data processing.",
    url: "https://www.telefonica.com/"
  },
  {
    company: "Technical University of Madrid",
    role: "Full-Stack Developer",
    description: "Developed smart contracts and implemented full-stack blockchain solutions.",
    url: "https://www.upm.es/"
  }
];

export function WorkExperience() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (titleRef.current && scrollContainerRef.current) {
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

        // Animate Cards - target direct children of the scroll container
        const items = gsap.utils.toArray(scrollContainerRef.current.children);
        items.forEach((item) => {
          gsap.fromTo(item as gsap.TweenTarget, 
            { opacity: 0, y: 40 }, 
            {
              opacity: 1, y: 0, duration: 0.5, ease: 'power2.out',
              scrollTrigger: { 
                trigger: item as gsap.DOMTarget, 
                start: 'top 90%', 
                toggleActions: 'play none none none' 
              }
            }
          );
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="work-experience" aria-labelledby="work-experience-heading">
      <h2 
        ref={titleRef}
        id="work-experience-heading" 
        className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-10 md:mb-14 text-gray-100 opacity-0"
      >
        Work Experience
      </h2>
      
      {/* Vertical Stack for Mobile, Grid for Desktop */}
      <div 
        ref={scrollContainerRef} 
        className="space-y-4 sm:space-y-5 md:space-y-6"
      >
        {WORK_EXPERIENCE.map((work, index) => (
          <div 
            key={index} 
            className="w-full p-5 sm:p-6 md:p-7 rounded-xl border border-gray-700/50 bg-gray-900/50 
                       hover:border-gray-600 active:border-gray-500 transition-all duration-200 opacity-0
                       touch-manipulation" 
          >
            <div className="space-y-3 sm:space-y-4 h-full flex flex-col">
              <div className="space-y-2 sm:space-y-2.5">
                <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                  <Text as="h3" className="text-lg sm:text-xl md:text-2xl font-heading font-semibold text-gray-100 leading-tight">
                    {work.role}
                  </Text>
                  {work.current && (
                    <span className={cn(
                      "inline-flex items-center",
                      "px-2.5 py-0.5 sm:px-3 sm:py-1",
                      "rounded-full",
                      "bg-accent/15",
                      "border border-accent/30",
                      "text-xs sm:text-sm font-semibold text-accent",
                      "shadow-sm"
                    )}>
                      Current
                    </span>
                  )}
                </div>
                <a 
                  href={work.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={cn(
                    "inline-flex items-center",
                    "px-3 py-1.5 sm:px-3.5 sm:py-2",
                    "rounded-full",
                    "border border-gray-600",
                    "bg-transparent",
                    "text-sm sm:text-base font-medium text-gray-400",
                    "transition-all duration-200 ease-in-out",
                    "hover:border-accent hover:text-accent hover:bg-accent/10",
                    "active:scale-95",
                    "focus:outline-none focus:border-accent focus:text-accent focus:bg-accent/10 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900",
                    "touch-manipulation"
                  )}
                >
                  {work.company}
                </a>
              </div>
              
              <Text className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed sm:leading-relaxed flex-grow pt-1 sm:pt-2">
                {work.description}
              </Text>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
