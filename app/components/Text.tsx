import { cn } from "@/lib/utils";
import { ElementType, forwardRef, ReactNode } from "react";

// Base props now only include children and className
type BaseTextProps = {
  children: ReactNode;
  className?: string;
  // Removed variant, color, weight
};

// Define the props for the Text component itself
type TextOwnProps<T extends ElementType = ElementType> = BaseTextProps & {
  as?: T;
};

// Combine own props with the props of the underlying element (minus conflicts)
// Use ComponentPropsWithRef for ref support
type TextProps<T extends ElementType> = TextOwnProps<T> & 
  Omit<React.ComponentPropsWithRef<T>, keyof TextOwnProps<T>>;

const defaultElement = "p";

// Use forwardRef to wrap the component implementation
export const Text = forwardRef(
  <T extends ElementType = typeof defaultElement>(
    { children, className, as, ...props }: TextOwnProps<T>, 
    ref: React.ComponentPropsWithRef<T>['ref'] // Correctly type the forwarded ref
  ) => {
    const Component = as || defaultElement;

    // Removed style mappings (variants, colors, weights, gradients)

    return (
      <Component
        ref={ref} // Pass the forwarded ref to the underlying element
        className={cn(
          // Example: "text-gray-200", // Default text color from body should apply
          className // Pass through user-provided classes
        )}
        {...props as React.ComponentPropsWithoutRef<T>} // Spread remaining props
      >
        {children}
      </Component>
    );
  }
);

// Optional: Add display name for better debugging
Text.displayName = 'Text';

// Removed compound components (Title, Subtitle, Gradient, Caption)
// Removed attachment of compound components 