import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface LinkProps {
  href: string;
  children: React.ReactNode;
  showIcon?: boolean;
  className?: string;
  iconClassName?: string;
}

export function Link({ 
  href, 
  children, 
  showIcon = true,
  className,
  iconClassName
}: LinkProps) {
  return (
    <div className="flex flex-col md:flex-row md:items-start gap-6">
      <div className="flex-grow">
        <motion.a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "group inline-flex items-center gap-2",
            className
          )}
          whileHover={{ x: 4 }}
        >
          {children}
        </motion.a>
      </div>
      {showIcon && (
        <div className="flex-shrink-0 w-16 flex justify-end">
          <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "text-white/50 hover:text-white transition-colors duration-300",
              iconClassName
            )}
            whileHover={{ scale: 1.1 }}
          >
            <ExternalLink className="h-6 w-6" />
          </motion.a>
        </div>
      )}
    </div>
  );
} 