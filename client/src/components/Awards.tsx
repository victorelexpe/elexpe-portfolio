import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { fadeIn, staggerContainer } from "../lib/animations";
import { Trophy } from "lucide-react";

const AWARDS = [
  {
    title: "actúaUPM Entrepreneurship Program",
    status: "Finalist",
    year: "2023"
  },
  {
    title: "Global TadHack",
    status: "Winner",
    year: "2017"
  }
];

export function Awards() {
  return (
    <motion.section
      variants={staggerContainer}
      className="py-20"
    >
      <motion.h2
        variants={fadeIn}
        className="text-4xl md:text-5xl font-bold mb-12 text-gradient"
      >
        Awards
      </motion.h2>
      <motion.div
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {AWARDS.map((award, index) => (
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
                    <Trophy className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-bold">{award.title}</CardTitle>
                    <CardDescription className="text-lg">
                      <span className="text-primary font-semibold">{award.status}</span> • {award.year}
                    </CardDescription>
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
