'use client'

import { HTMLMotionProps, motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
  href?: string;
  variant?: 'default' | 'outline';
  size?: 'default' | 'lg';
  icon?: React.ReactNode;
  className?: string;
}

export function Button({
  children,
  href,
  variant = 'default',
  size = 'default',
  icon,
  className,
  ...props
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 rounded-full";
  
  const variants = {
    default: "bg-white text-black hover:bg-white/90",
    outline: "border-2 border-white/20 text-white hover:bg-white/10"
  };
  
  const sizes = {
    default: "px-6 py-2 text-sm",
    lg: "px-8 py-3 text-base md:text-lg"
  };

  const content = (
    <>
      <span>{children}</span>
      {icon && icon}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        target={href.startsWith('http') ? "_blank" : undefined}
        rel={href.startsWith('http') ? "noopener noreferrer" : undefined}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {content}
    </motion.button>
  );
}
