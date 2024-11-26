import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./ui/card";
import { fadeIn, staggerContainer } from "../lib/animations";
import { Gauge, Timer } from "lucide-react";

const HOBBY = {
  title: "Sim Racing",
  description: "Passionate about virtual motorsports, I regularly participate in competitive sim racing events. This hobby combines my love for technology with the thrill of racing, helping me develop quick decision-making skills and precision under pressure.",
  highlights: [
    "iRacing & Assetto Corsa Competizione enthusiast",
    "Virtual endurance racing specialist",
    "Custom racing rig setup optimization"
  ]
};

export function Hobbies() {
  return (
    <motion.section
      variants={staggerContainer}
      className="py-20"
    >
      <motion.h2
        variants={fadeIn}
        className="text-4xl md:text-5xl font-bold mb-12 text-gradient"
      >
        Hobbies
      </motion.h2>
      <motion.div
        variants={fadeIn}
        whileHover={{ y: -8, scale: 1.02 }}
      >
        <Card className="glass-card gradient-bg border border-white/20 transition-all duration-300 hover:border-primary/50">
          <CardHeader className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="p-3 glass-card rounded-xl bg-primary/10">
                <Gauge className="h-8 w-8 text-primary" />
              </div>
              <div>
                <CardTitle className="text-2xl font-bold">{HOBBY.title}</CardTitle>
                <CardDescription className="text-lg mt-2">
                  {HOBBY.description}
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {HOBBY.highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Timer className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">{highlight}</span>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.section>
  );
}
