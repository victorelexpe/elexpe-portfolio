import { motion } from "framer-motion";
import { fadeIn } from "../lib/animations";
import { Text } from "./Text";
import { cn } from "@/lib/utils";

// Import GSAP hooks and utils
import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
// ScrollTrigger is registered globally in page.tsx

const NEWS_ITEMS = [
  {
    title: "Talent and technology at the service of the network",
    url: "https://web.archive.org/web/20230204033106/https://empresas.blogthinkbig.com/revolucion-red-analisis-datos-talento-tecnologia/",
  },
  {
    title: "AI Lab: The Global Talent Community for a Data Company",
    url: "https://empresas.blogthinkbig.com/ai-lab/",
  },
  {
    title: "Young talents to exploit data from Telefónica networks",
    url: "https://www.linkedin.com/pulse/j%C3%B3venes-talentos-para-explotar-los-datos-de-las-redes-parmegiani/",
  },
  {
    title: "ESIT collaborates in a Telefónica program for young talents in Big Data",
    url: "https://www.unir.net/actualidad/vida-academica/esit-colabora-en-un-programa-de-telefonica-para-jovenes-talentos-en-big-data/",
  },
];

export function News() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (titleRef.current && listRef.current) {
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

        // Animate List Items
        const items = listRef.current.children;
        gsap.fromTo(items, 
          { opacity: 0, y: 30 }, // Slightly less y offset
          {
            opacity: 1, y: 0, duration: 0.5, ease: 'power2.out',
            stagger: 0.1, // Faster stagger
            scrollTrigger: { 
              trigger: listRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
            }
          }
        );
      }
    }, sectionRef); // Scope context

    return () => ctx.revert(); // Cleanup
  }, []);

  if (!NEWS_ITEMS || NEWS_ITEMS.length === 0) {
    return null;
  }

  return (
    <section ref={sectionRef} id="news" aria-labelledby="news-heading">
      <h2 
        ref={titleRef}
        id="news-heading" 
        className="font-heading text-4xl md:text-5xl font-bold mb-10 md:mb-14 text-gray-100 opacity-0" // Start hidden
      >
        In the News
      </h2>

      <div ref={listRef} className="border-t border-gray-700/50">
        {NEWS_ITEMS.map((news, index) => (
          <div 
            key={news.title || index}
            className="opacity-0"
          >
            <a 
              href={news.url} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label={news.title}
              className={cn(
                "block group p-4 sm:p-5 border-b border-gray-700/50",
                "transition-colors duration-200 ease-in-out",
                "hover:bg-gray-900",
                "focus:outline-none focus-visible:bg-gray-900 focus-visible:ring-1 focus-visible:ring-accent rounded-sm"
              )}
            >
              <Text 
                as="h3"
                className="text-lg md:text-xl font-heading font-medium text-gray-200 transition-colors duration-200 ease-in-out group-hover:text-white"
              >
                {news.title}
              </Text>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
