import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { SimRacing } from "@/components/SimRacing";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Sim racing",
  description:
    "Victor Elexpe's sim racing in Assetto Corsa Competizione and iRacing, usually in a McLaren 720S GT3 Evo: lap times by circuit.",
  path: "/sim-racing",
});

export default function SimRacingPage() {
  return (
    <main className="mx-auto max-w-measure px-6 py-16 sm:py-20 lg:max-w-6xl 2xl:max-w-7xl">
      <SimRacing />
      <Footer />
    </main>
  );
}
