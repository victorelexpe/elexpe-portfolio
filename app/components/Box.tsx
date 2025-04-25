import { motion, MotionProps } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import { cn } from "@/lib/utils";
import { Text } from "./Text";

// Type for props passed down to the underlying div, excluding MotionProps handled by motion.div
type HTMLDivProps = Omit<React.HTMLAttributes<HTMLDivElement>, keyof MotionProps>;

interface BoxProps extends HTMLDivProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  title?: string;
  className?: string;
}

export const Box = ({
  children,
  icon,
  title,
  className,
  ...props
}: BoxProps) => {
  return (
    <motion.div
      variants={fadeIn}
      className={cn(
        "rounded-lg p-6 md:p-8",
        "bg-gray-900",
        "border border-gray-700/50",
        "flex flex-col",
        className
      )}
      {...props}
    >
      {(icon || title) && (
        <div className="flex items-center gap-3 mb-4">
          {icon && (
            <div className="w-5 h-5 text-gray-400">
              {icon}
            </div>
          )}
          {title && (
            <Text as="h3" className="text-lg font-medium font-heading text-gray-100">
              {title}
            </Text>
          )}
        </div>
      )}
      <div className="flex-grow">
        {children}
      </div>
    </motion.div>
  );
}; 