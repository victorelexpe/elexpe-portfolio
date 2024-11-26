import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../lib/animations";
import { ExternalLink } from "lucide-react";

const NEWS_ITEMS = [
  {
    title: "Talent and technology at the service of the network",
    date: "2024",
    url: "https://www.etsit.upm.es/comunicacion/noticias/ano-2024/talento-y-tecnologia-al-servicio-de-la-red.html"
  },
  {
    title: "AI Lab: The Global Talent Community for a Data Company",
    date: "2024",
    url: "https://careers.telefonica.com/programa/ai-lab-programa-de-talento-global-para-una-telco-tech"
  },
  {
    title: "Young talents to exploit data from Telefónica networks",
    date: "2023",
    url: "https://www.etsit.upm.es/comunicacion/noticias/jovenes-talentos-para-explotar-los-datos-de-las-redes-de-telefonica.html"
  },
  {
    title: "ESIT collaborates in a Telefónica program for young talents in Big Data",
    date: "2023",
    url: "https://www.etsit.upm.es/comunicacion/noticias/la-etsit-colabora-en-un-programa-de-telefonica-para-jovenes-talentos-en-big-data.html"
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
            className="flat-item"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
              <div className="space-y-2">
                <motion.a
                  href={news.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-block"
                  whileHover={{ x: 4 }}
                >
                  <h3 className="text-2xl font-light group-hover:text-primary transition-colors duration-300">
                    {news.title}
                  </h3>
                </motion.a>
                <p className="text-white/50">{news.date}</p>
              </div>
              <motion.a
                href={news.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
              >
                <ExternalLink className="h-6 w-6" />
              </motion.a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
