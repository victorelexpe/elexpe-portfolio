import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle } from "./ui/card";
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
      className="py-20"
    >
      <motion.h2
        variants={fadeIn}
        className="text-4xl md:text-5xl font-bold mb-12 text-gradient"
      >
        News
      </motion.h2>
      <motion.div
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {NEWS_ITEMS.map((news, index) => (
          <motion.div
            key={index}
            variants={fadeIn}
            whileHover={{ y: -8, scale: 1.02 }}
            className="h-full"
          >
            <Card className="glass-card gradient-bg h-full border border-white/20 transition-all duration-300 hover:border-primary/50">
              <CardHeader className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 glass-card rounded-xl bg-primary/10">
                    <Newspaper className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-bold">{news.title}</CardTitle>
                    <p className="text-muted-foreground mt-2">{news.date}</p>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
