import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Text } from "./Text";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
  className?: string;
}

export const Modal = ({
  isOpen,
  onClose,
  children,
  title,
  className
}: ModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50"
          />

          {/* Modal Container - for centering */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className={cn(
                // Base styles
                "relative w-full max-w-3xl max-h-[85vh]",
                "bg-white/90 backdrop-blur-xl",
                "rounded-3xl border border-black/[0.08]",
                "shadow-[0_8px_40px_rgb(0,0,0,0.08)]",
                "overflow-hidden",
                className
              )}
            >
              {/* Header */}
              <div className="sticky top-0 flex items-center justify-between p-6 border-b border-black/[0.08] bg-white/50 backdrop-blur-sm">
                {title && (
                  <Text as="h2" className="font-heading text-lg md:text-xl font-medium text-gray-900">
                    {title}
                  </Text>
                )}
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-black/[0.04] rounded-xl transition-colors ml-auto"
                >
                  <X className="w-5 h-5 text-gray-600" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 overflow-auto max-h-[calc(85vh-80px)] scrollbar-thin scrollbar-track-black/[0.02] scrollbar-thumb-black/[0.04] hover:scrollbar-thumb-black/[0.08]">
                {children}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}; 