import { motion } from "framer-motion";
import { fadeIn } from "../lib/animations";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { SOCIAL_LINKS } from "../lib/constants";

export function Contact() {
  return (
    <motion.section
      id="contact"
      variants={fadeIn}
      className="py-16"
    >
      <motion.h2
        variants={fadeIn}
        className="text-3xl font-bold mb-8"
      >
        Get in Touch
      </motion.h2>
      <Card>
        <CardContent className="pt-6">
          <motion.div
            variants={fadeIn}
            className="flex flex-col items-center gap-6"
          >
            <p className="text-center text-lg text-muted-foreground max-w-2xl">
              I'm always interested in new opportunities and collaborations.
              Feel free to reach out!
            </p>
            <div className="flex gap-4">
              <Button variant="outline" size="icon" asChild>
                <a href={`mailto:contact@elexpe.dev`}>
                  <Mail />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href={SOCIAL_LINKS.GITHUB} target="_blank" rel="noopener noreferrer">
                  <Github />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href={SOCIAL_LINKS.LINKEDIN} target="_blank" rel="noopener noreferrer">
                  <Linkedin />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href={SOCIAL_LINKS.TWITTER} target="_blank" rel="noopener noreferrer">
                  <Twitter />
                </a>
              </Button>
            </div>
          </motion.div>
        </CardContent>
      </Card>
    </motion.section>
  );
}
