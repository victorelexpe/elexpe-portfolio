import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";
import { siteMetadata } from "@/lib/metadata";

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

type OgCardOptions = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  footer?: string;
  photo?: "large" | "small";
};

const loadPhoto = async () => {
  const photo = await readFile(path.join(process.cwd(), "public", "profile.jpeg"));
  return `data:image/jpeg;base64,${photo.toString("base64")}`;
};

// One visual language for every share card: palette, teal bar, name and photo.
export const renderOgCard = async ({
  eyebrow,
  title,
  subtitle,
  footer = "elexpe.dev",
  photo = "small",
}: OgCardOptions) => {
  const photoSrc = await loadPhoto();
  const isLarge = photo === "large";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          gap: 64,
          backgroundColor: "#eef4f5",
          padding: 80,
          backgroundImage:
            "radial-gradient(circle at 92% 8%, rgba(108,211,216,0.45), transparent 45%)",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", flex: 1, height: "100%" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{ width: 48, height: 6, backgroundColor: "#0e7c86" }} />
            <div style={{ fontSize: 26, color: "#0e7c86", letterSpacing: 2, textTransform: "uppercase" }}>
              {eyebrow}
            </div>
          </div>

          <div
            style={{
              marginTop: 36,
              fontSize: title.length > 48 ? 56 : 66,
              lineHeight: 1.1,
              color: "#24414a",
              letterSpacing: -1,
            }}
          >
            {title}
          </div>

          {subtitle ? (
            <div style={{ marginTop: 24, fontSize: 28, lineHeight: 1.4, color: "#4f6a72" }}>
              {subtitle}
            </div>
          ) : null}

          <div style={{ marginTop: "auto", display: "flex", alignItems: "center", gap: 16 }}>
            {isLarge ? null : (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={photoSrc} alt="" width={56} height={56} style={{ borderRadius: 28, objectFit: "cover" }} />
            )}
            <div style={{ fontSize: 26, color: "#24414a" }}>{siteMetadata.author}</div>
            <div style={{ fontSize: 26, color: "#6b8288" }}>{`· ${footer}`}</div>
          </div>
        </div>

        {isLarge ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={photoSrc} alt="" width={340} height={340} style={{ borderRadius: 32, objectFit: "cover" }} />
        ) : null}
      </div>
    ),
    OG_SIZE,
  );
};
