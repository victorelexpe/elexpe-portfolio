import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { SOCIAL_LINKS } from "@/lib/constants";
import { XLogo } from "@/components/icons/XLogo";
import { SpotifyLogo } from "@/components/icons/SpotifyLogo";
import { LinkedInLogo } from "@/components/icons/LinkedInLogo";
import { EmailLogo } from "@/components/icons/EmailLogo";

type SocialLink = {
  href: string;
  label: string;
  icon: React.ReactNode;
  text: string;
}

const SOCIAL_LINKS_CONFIG: SocialLink[] = [
  {
    href: "mailto:projects@elexpe.dev",
    label: "Send me an email",
    icon: <EmailLogo />,
    text: "Email me"
  },
  {
    href: SOCIAL_LINKS.TWITTER,
    label: "Connect on Twitter",
    icon: <XLogo />,
    text: "Connect on"
  },
  {
    href: SOCIAL_LINKS.LINKEDIN,
    label: "Follow on LinkedIn",
    icon: <LinkedInLogo />,
    text: "Follow on"
  },
  {
    href: SOCIAL_LINKS.SPOTIFY,
    label: "Listen on Spotify",
    icon: <SpotifyLogo />,
    text: "Listen on Spotify"
  }
];

export const Hero = () => {
  return (
    <motion.section
      variants={staggerContainer}
      className="min-h-[calc(100vh-4rem)] -mx-4 px-4 flex items-center justify-center hero-background relative overflow-hidden"
    >
      <div className="space-y-4 md:space-y-8 max-w-4xl mx-auto w-full px-4">
        <motion.div 
          variants={fadeIn}
          className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-6"
        >
          <Image
            src="/profile.jpeg"
            alt="Victor Elexpe"
            fill
            priority
            className="rounded-full object-cover"
          />
        </motion.div>

        <motion.h1 
          variants={fadeIn} 
          className="text-4xl md:text-6xl lg:text-7xl text-center tracking-tight"
        >
          I'm <span className="font-playfair font-medium italic">Victor Elexpe</span>
        </motion.h1>
        
        <motion.div 
          variants={fadeIn} 
          className="text-base md:text-xl text-center space-y-2 md:space-y-4 text-white/70"
        >
          <p>Computer Engineer specialized in Data Engineering. Based in Madrid, Spain.</p>
          <p>I do sim racing.</p>
          <p>And I also produce music.</p>
        </motion.div>

        <motion.div 
          variants={fadeIn} 
          className="flex justify-center pt-4 md:pt-8"
        >
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            {SOCIAL_LINKS_CONFIG.map((link) => (
              <div key={link.href} className="w-full sm:w-auto">
                <Button
                  href={link.href}
                  size="lg"
                  icon={link.icon}
                  className="w-full sm:w-auto"
                  aria-label={link.label}
                  tabIndex={0}
                  role="link"
                >
                  {link.text}
                </Button>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
