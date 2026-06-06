"use client";

import { Text } from "./Text";
import { cn } from "@/lib/utils";
import { SOCIAL_LINKS } from "@/lib/constants";
import Image from "next/image";

// Import GSAP hooks and utils
import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
// ScrollTrigger registered globally

// Define specific contact links (can reuse SOCIAL_LINKS_CONFIG logic if preferred)
const CONTACT_LINKS = [
  { href: SOCIAL_LINKS.EMAIL, label: "Email" },
  { href: SOCIAL_LINKS.LINKEDIN, label: "LinkedIn" },
  { href: SOCIAL_LINKS.TWITTER, label: "Twitter / X" },
  // Add other relevant contact links if needed (e.g., GitHub)
];

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (titleRef.current && descRef.current && listRef.current) {
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
        // Animate Description
        gsap.fromTo(descRef.current, 
          { opacity: 0, y: 40 }, 
          {
            opacity: 1, y: 0, duration: 0.5, ease: 'power2.out',
            scrollTrigger: { 
              trigger: descRef.current, 
              start: 'top 90%', 
              toggleActions: 'play none none none',
            },
            delay: 0.1
          }
        );
        // Animate Contact Links
        const items = listRef.current.children;
        gsap.fromTo(items, 
          { opacity: 0, y: 30 }, 
          {
            opacity: 1, y: 0, duration: 0.5, ease: 'power2.out',
            stagger: 0.15,
            scrollTrigger: { 
              trigger: listRef.current,
              start: 'top 90%', 
              toggleActions: 'play none none none',
            },
            delay: 0.2
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      id="contact" 
      aria-labelledby="contact-heading" 
      className="relative py-32 sm:py-40 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <Image 
          src="/contact.webp"
          alt="Abstract contact background"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 
          ref={titleRef}
          id="contact-heading" 
          className="font-heading text-4xl md:text-5xl font-bold mb-8 md:mb-10 text-center text-gray-100 opacity-0"
        >
          Get in Touch
        </h2>

        <Text 
          ref={descRef}
          className="mt-4 text-lg md:text-xl text-center text-gray-300 max-w-xl mx-auto opacity-0"
        >
          Open to collaborations, opportunities, or just a chat about data, tech, and music. Feel free to reach out!
        </Text>

        <div 
          ref={listRef} 
          className="flex flex-wrap justify-center items-center gap-x-3 gap-y-3 mt-10 md:mt-12"
        >
          {CONTACT_LINKS.map((link) => (
            <a 
              key={link.href} 
              href={link.href} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label={link.label}
              title={link.label}
              className={cn(
                "inline-block",
                "px-2.5 py-1",
                "rounded-full",
                "border border-gray-600",
                "bg-transparent",
                "text-sm font-medium text-gray-400",
                "transition-all duration-200 ease-in-out",
                "hover:border-accent hover:text-accent hover:bg-accent/10",
                "focus:outline-none focus:border-accent focus:text-accent focus:bg-accent/10 focus-visible:ring-1 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-black",
                "opacity-0"
              )}
            >
              <span>{link.label}</span> 
            </a>
          ))}
        </div>
      </div>
    </section>
  );
} 