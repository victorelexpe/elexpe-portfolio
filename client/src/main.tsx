import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import Home from "./pages/Home";
import { AnimatePresence } from "framer-motion";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AnimatePresence mode="wait">
        <Home />
      </AnimatePresence>
      <Toaster />
    </QueryClientProvider>
  </StrictMode>,
);
