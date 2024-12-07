import { motion } from "framer-motion";
import { fadeIn } from "../lib/animations";
import { Section } from "./ui/Section";
import { Link } from "./ui/Link";

const NEWS_ITEMS = [
  {
    title: "Talent and technology at the service of the network",
    url: "https://web.archive.org/web/20230204033106/https://empresas.blogthinkbig.com/revolucion-red-analisis-datos-talento-tecnologia/",
  },
  {
    title: "AI Lab: The Global Talent Community for a Data Company",
    url: "https://empresas.blogthinkbig.com/ai-lab/",
  },
  {
    title: "Young talents to exploit data from Telefónica networks",
    url: "https://www.linkedin.com/pulse/j%C3%B3venes-talentos-para-explotar-los-datos-de-las-redes-parmegiani/",
  },
  {
    title: "ESIT collaborates in a Telefónica program for young talents in Big Data",
    url: "https://www.unir.net/actualidad/vida-academica/esit-colabora-en-un-programa-de-telefonica-para-jovenes-talentos-en-big-data/",
  },
];

export function News() {
  return (
    <Section title="News">
      <div className="space-y-8 md:space-y-12">
        {NEWS_ITEMS.map((news, index) => (
          <motion.div key={index} variants={fadeIn} className="flat-item">
            <Link href={news.url}>
              <h3 className="text-2xl font-light group-hover:text-primary transition-colors duration-300">
                {news.title}
              </h3>
            </Link>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
