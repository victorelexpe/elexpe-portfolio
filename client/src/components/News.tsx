import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../lib/animations";
import { Newspaper } from "lucide-react";

const NEWS_ITEMS = [
  {
    title: "Talent and technology at the service of the network",
    date: "2024"
  },
  {
    title: "AI Lab: The Global Talent Community for a Data Company",
    date: "2024"
  },
  {
    title: "Young talents to exploit data from Telefónica networks",
    date: "2023"
  },
  {
    title: "ESIT collaborates in a Telefónica program for young talents in Big Data",
    date: "2023"
  }
];

export function News() {
  return (
    <motion.section
      variants={staggerContainer}
      className="section"
    >
      <motion.h2
        variants={fadeIn}
        className="section-title"
      >
        News
      </motion.h2>
      <motion.div
        variants={staggerContainer}
        className="space-y-4 max-w-4xl"
      >
        {NEWS_ITEMS.map((news, index) => (
          <motion.div
            key={index}
            variants={fadeIn}
            className="list-item"
          >
            <div className="flex items-start gap-6">
              <Newspaper className="h-6 w-6 text-white/50 mt-1" />
              <div className="space-y-2 flex-1">
                <h3 className="text-2xl font-light">{news.title}</h3>
                <p className="text-white/50">{news.date}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
