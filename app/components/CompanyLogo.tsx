import Image from "next/image";

type CompanyLogoProps = {
  company: string;
  size?: "xs" | "sm" | "lg";
};

const LOGOS: Record<string, string> = {
  "Almanzor Cloud": "/logos/almanzor-cloud.jpg",
  "Seguros Ocaso": "/logos/ocaso.png",
  "Havas Media Group": "/logos/havas-media.png",
  Telefónica: "/logos/telefonica.png",
  "Technical University of Madrid": "/logos/upm.png",
  UNED: "/logos/uned.png",
  "Tallinn University of Technology": "/logos/taltech.png",
};

const DIMENSIONS: Record<NonNullable<CompanyLogoProps["size"]>, number> = {
  xs: 20,
  sm: 40,
  lg: 56,
};

export const CompanyLogo = ({ company, size = "sm" }: CompanyLogoProps) => {
  const src = LOGOS[company];
  const dimension = DIMENSIONS[size];

  if (!src) return null;

  return (
    <Image
      src={src}
      alt=""
      aria-hidden="true"
      width={dimension}
      height={dimension}
      className={`shrink-0 object-cover ${size === "xs" ? "rounded" : "rounded-lg"}`}
    />
  );
};
