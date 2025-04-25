import { Text } from "./Text";
import { cn } from "@/lib/utils";

// Import GSAP hooks and utils
import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
// ScrollTrigger is registered globally in page.tsx

const AWARDS = [
  {
    title: "actúaUPM Entrepreneurship Program",
    status: "Finalist",
    year: "2023",
    description: "Developed an innovative platform focused on enhancing museum visitor experiences by creating meaningful connections between cultural institutions and their audiences.",
    url: "https://actuaupm.blogspot.com/"
  },
  {
    title: "Global TadHack",
    status: "Winner (Madrid)",
    year: "2017",
    description: "Developed an iOS application leveraging Natural Language Processing (NLP) and WebRTC technology to streamline doctor-patient communication. The app compiles patient symptoms and enables secure video consultations between healthcare providers and patients.",
    url: "https://tadhack.com"
  }
];

export function Awards() {
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
          { opacity: 0, y: 40 }, 
          {
            opacity: 1, y: 0, duration: 0.5, ease: 'power2.out',
            stagger: 0.15,
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

  if (!AWARDS || AWARDS.length === 0) {
    return null;
  }

  return (
    <section ref={sectionRef} id="awards" aria-labelledby="awards-heading">
      <h2 
        ref={titleRef}
        id="awards-heading" 
        className="font-heading text-4xl md:text-5xl font-bold mb-10 md:mb-14 text-gray-100 opacity-0" // Start hidden
      >
        Awards & Recognition
      </h2>

      <div ref={listRef} className="space-y-10 md:space-y-12">
        {AWARDS.map((award, index) => (
          // Use simple div, GSAP handles animation
          <div
            key={award.title || index}
            className="space-y-2 md:space-y-3 opacity-0" // Start hidden
          >
            <a 
              href={award.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className={cn(
                "inline-block group",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-sm"
              )}
            >
              <Text 
                as="h3" 
                className="text-2xl md:text-3xl font-heading font-semibold text-gray-100 group-hover:text-accent transition-colors duration-200"
              >
                {award.title}
              </Text>
            </a>

            {/* Removed color prop, use className */}
            <Text className="text-sm md:text-base font-mono uppercase tracking-wider text-gray-500">
              {award.status} • {award.year}
            </Text>

            {/* Removed color prop, use className */}
            <Text className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-prose">
              {award.description}
            </Text>
          </div>
        ))}
      </div>
    </section>
  );
}
