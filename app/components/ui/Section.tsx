import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  title: string;
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
}

export function Section({ id, title, children, className, fullWidth = false }: SectionProps) {
  return (
    <motion.section
      id={id}
      variants={staggerContainer}
      className="section"
    >
      <motion.h2
        variants={fadeIn}
        className="font-playfair text-4xl md:text-5xl font-medium text-center mb-16 md:mb-20"
      >
        {title}
      </motion.h2>
      <motion.div
        variants={staggerContainer}
        className={cn(
          fullWidth ? "max-w-7xl" : "max-w-3xl",
          "mx-auto",
          className
        )}
      >
        {children}
      </motion.div>
    </motion.section>
  );
} 