import Image from "next/image";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { SOCIAL_LINKS } from "@/lib/constants";
import { Text } from "@/components/Text";
import { cn } from "@/lib/utils";
import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';

type SocialLink = {
  href: string;
  label: string;
  icon: React.ReactNode;
}

const SOCIAL_LINKS_CONFIG: SocialLink[] = [
  { href: "mailto:projects@elexpe.dev", label: "Email", icon: null },
  { href: SOCIAL_LINKS.TWITTER, label: "Twitter", icon: null },
  { href: SOCIAL_LINKS.LINKEDIN, label: "LinkedIn", icon: null },
  { href: SOCIAL_LINKS.SPOTIFY, label: "Spotify", icon: null },
];

const WORK_EXPERIENCE = [
  {
    company: "Havas Media Group",
    role: "Lead Data Engineer",
    period: "May 2022 - Today",
    description: "Designing and building cloud infrastructure, orchestrating data pipelines, and implementing comprehensive monitoring systems.",
    url: "https://havasmedia.com/"
  },
  {
    company: "Telefónica",
    role: "Data Engineer",
    period: "Jun 2021 - May 2022",
    description: "Implemented ETL processes and optimized distributed computing solutions for massive data processing.",
    url: "https://www.telefonica.com/"
  },
  {
    company: "Technical University of Madrid",
    role: "Full-Stack Developer",
    period: "Oct 2020 - Dec 2020",
    description: "Developed smart contracts and implemented full-stack blockchain solutions.",
    url: "https://www.upm.es/"
  }
];

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

export const Hero = () => {
  // Refs for animation targets
  const heroRef = useRef<HTMLElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const taglineRef = useRef<HTMLSpanElement>(null);
  const descRef = useRef<HTMLDivElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);

  // GSAP Animation
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Removed imageRef from check
      if (nameRef.current && taglineRef.current && descRef.current && socialRef.current) {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 0.8 } });

        // Start animating text elements directly
        tl.fromTo(nameRef.current, 
            { opacity: 0, y: 30 }, 
            { opacity: 1, y: 0 }, 0.2) // Start slightly delayed
          .fromTo(taglineRef.current, 
            { opacity: 0, y: 30 }, 
            { opacity: 1, y: 0 }, "-=0.7") // Stagger after name
          .fromTo(descRef.current.children, 
            { opacity: 0, y: 20 }, 
            { opacity: 1, y: 0, stagger: 0.15 }, "-=0.6") // Stagger paragraphs
          .fromTo(socialRef.current, 
            { opacity: 0, y: 20 }, 
            { opacity: 1, y: 0 }, "-=0.5"); // Animate social pills container
      }
    }, heroRef); 

    return () => ctx.revert();
  }, []);

  return (
    <motion.section
      ref={heroRef}
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      className="relative min-h-screen flex flex-col justify-center items-start overflow-hidden"
    >
      {/* Background Image and Overlay */}
      <div className="absolute inset-0 -z-10">
        <Image 
          src="/background.webp"
          alt="Abstract background image"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Reduced overlay opacity */}
        <div className="absolute inset-0 bg-black/30"></div> 
      </div>

      {/* Inner container - Single column, text-left */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 text-left">
      
        {/* Text Content - Removed flex/text-center from wrapper */}
        <div> 
          {/* Removed inner max-w/mx-auto wrapper, text now left aligned by default */} 
          <div className="w-full space-y-4 md:space-y-5">
            <Text 
              as="h1" 
              ref={nameRef} 
              className="font-heading font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl tracking-tighter leading-tight text-gray-50 opacity-0"
            >
              Victor Elexpe
              <Text 
                as="span" 
                ref={taglineRef} 
                className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-gray-400 mt-1 md:mt-2 opacity-0"
              >
                Data Engineer & AI Founder
              </Text>
            </Text>
            
            <div 
              ref={descRef} 
              className="mt-6 md:mt-8 space-y-3 text-lg md:text-xl text-gray-300 leading-relaxed md:leading-loose max-w-2xl"
            >
              <Text>Founder of Almanzor Cloud, building AI platforms for modern businesses. Based in Madrid, Spain.</Text>
              <Text>Passionate about data, cloud infrastructure, sim racing, and music production.</Text>
            </div>
          </div>

          {/* Social links - Outline Pills */}
          <motion.div 
            ref={socialRef} 
            variants={fadeIn} 
            className="flex flex-wrap justify-start items-center gap-2 md:gap-3 pt-6 md:pt-8 opacity-0"
          >
            {SOCIAL_LINKS_CONFIG.map((link) => (
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
                  "focus:outline-none focus:border-accent focus:text-accent focus:bg-accent/10 focus-visible:ring-1 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                )}
              >
                <span>{link.label}</span> 
              </a>
            ))}
          </motion.div>
        </div> 

      </div> {/* End Inner container */} 
    </motion.section>
  );
};
