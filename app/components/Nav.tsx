import { motion } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";
import { slideIn } from "../lib/animations";

export function Nav() {
  return (
    <motion.nav
      variants={slideIn}
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="container flex h-16 items-center justify-between">
        <motion.a
          href="/"
          className="text-xl font-bold"
          whileHover={{ scale: 1.05 }}
        >
          elexpe.dev
        </motion.a>
        <div className="flex items-center gap-4">
          <a href="#projects" className="hover:text-primary">Projects</a>
          <a href="#tech" className="hover:text-primary">Tech Stack</a>
          <a href="#contact" className="hover:text-primary">Contact</a>
          <ThemeToggle />
        </div>
      </div>
    </motion.nav>
  );
}
