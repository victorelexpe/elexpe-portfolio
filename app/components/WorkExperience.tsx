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
        className="font-heading text-4xl md:text-5xl font-bold mb-10 md:mb-14 text-gray-100 opacity-0"
      >
        Work Experience
      </h2>
      
      {/* Horizontal Scroll Container */}
      <div 
        ref={scrollContainerRef} 
        className="flex overflow-x-auto space-x-6 lg:space-x-8 py-4 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-700 hover:scrollbar-thumb-gray-600"
      >
        {WORK_EXPERIENCE.map((work, index) => (
          <div 
            key={index} 
            className="flex-shrink-0 w-full sm:w-[400px] md:w-[450px] p-4 sm:p-6 rounded-lg border border-gray-700/50 bg-gray-900/50 
                       hover:border-gray-600 transition-colors duration-200 opacity-0" 
          >
            <div className="space-y-3 md:space-y-4 h-full flex flex-col">
              <div className="space-y-1.5">
                <Text as="h3" className="text-xl sm:text-2xl font-heading font-semibold text-gray-100">
                  {work.role}
                </Text>
                <a 
                  href={work.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={cn(
                    "inline-block",
                    "px-2.5 py-0.5",
                    "rounded-full",
                    "border border-gray-600",
                    "bg-transparent",
                    "text-xs sm:text-sm font-medium text-gray-400",
                    "transition-all duration-200 ease-in-out",
                    "hover:border-accent hover:text-accent hover:bg-accent/10",
                    "focus:outline-none focus:border-accent focus:text-accent focus:bg-accent/10 focus-visible:ring-1 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
                  )}
                >
                  {work.company}
                </a>
              </div>
              
              <Text className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-prose flex-grow pt-2">
                {work.description}
              </Text>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
