import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./ui/card";
import { fadeIn, staggerContainer } from "../lib/animations";
import { Building2, Calendar } from "lucide-react";

const WORK_EXPERIENCE = [
  {
    company: "Havas Media Group",
    role: "Software Developer",
    period: "2020 - Present",
    description: "Leading development of innovative digital solutions and campaigns."
  },
  {
    company: "Telefonica",
    role: "Technical Lead",
    period: "2018 - 2020",
    description: "Managed technical projects and led development teams."
  },
  {
    company: "Technical University of Madrid",
    role: "Research Assistant",
    period: "2016 - 2018",
    description: "Conducted research in computer science and assisted in teaching."
  }
];

export function WorkExperience() {
  return (
    <motion.section
      variants={staggerContainer}
      className="py-20"
    >
      <motion.h2
        variants={fadeIn}
        className="text-4xl md:text-5xl font-bold mb-12 text-gradient"
      >
        Work Experience
      </motion.h2>
      <motion.div
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {WORK_EXPERIENCE.map((work, index) => (
          <motion.div
            key={index}
            variants={fadeIn}
            whileHover={{ y: -8, scale: 1.02 }}
            className="h-full"
          >
            <Card className="glass-card gradient-bg h-full border border-white/20 transition-all duration-300 hover:border-primary/50">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Building2 className="h-5 w-5 text-primary" />
                  <CardTitle className="text-2xl font-bold">{work.company}</CardTitle>
                </div>
                <CardDescription className="text-lg flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {work.period}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <h4 className="text-xl font-semibold mb-3 text-gradient">{work.role}</h4>
                <p className="text-muted-foreground">{work.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
