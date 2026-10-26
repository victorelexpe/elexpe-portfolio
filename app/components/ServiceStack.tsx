"use client";

import Link from "next/link";
import { Fragment, useId, useState } from "react";
import { SERVICES } from "@/lib/constants";

// Isometric projection of a point in slab space (x, y on the floor, z up).
const COS = Math.cos(Math.PI / 6);
const project = (x: number, y: number, z: number): [number, number] => [
  (x - y) * COS,
  (x + y) * 0.5 - z,
];
const pt = (x: number, y: number, z: number) =>
  project(x, y, z).map((v) => v.toFixed(1)).join(",");
const poly = (...points: [number, number, number][]) =>
  points.map(([x, y, z]) => pt(x, y, z)).join(" ");

const SIDE = 100;
const THICKNESS = 16;
const LAYER_GAP = 72;
const LAYER_COUNT = SERVICES.length;
const LABELS = ["DATA", "CLOUD", "AI"];

const offsetOf = (index: number) => (LAYER_COUNT - 1 - index) * LAYER_GAP;

const PALETTES = {
  idle: {
    top: ["#ffffff", "#e6eff1"],
    left: ["#dce8eb", "#c4d6da"],
    right: ["#c3d5da", "#a6bec4"],
    detail: "#7f969c",
    soft: "#b9cbd0",
    led: "#a9bcc1",
  },
  active: {
    top: ["#e6f8f9", "#c3ebed"],
    left: ["#13a0ab", "#0e7c86"],
    right: ["#0e7c86", "#08575e"],
    detail: "#0e7c86",
    soft: "#7fcfd4",
    led: "#6cd3d8",
  },
};

type Palette = (typeof PALETTES)["idle"];
type Fills = { top: string; left: string; right: string };

// A box sitting on the slab: footprint (x, y, size) and height above the top face.
const Box = ({ x, y, size, height, fills, palette }: { x: number; y: number; size: number; height: number; fills: Fills; palette: Palette }) => {
  const z0 = THICKNESS;
  const z1 = THICKNESS + height;
  return (
    <g>
      <polygon points={poly([x, y + size, z0], [x + size, y + size, z0], [x + size, y + size, z1], [x, y + size, z1])} fill={`url(#${fills.left})`} />
      <polygon points={poly([x + size, y, z0], [x + size, y + size, z0], [x + size, y + size, z1], [x + size, y, z1])} fill={`url(#${fills.right})`} />
      <polygon points={poly([x, y, z1], [x + size, y, z1], [x + size, y + size, z1], [x, y + size, z1])} fill={`url(#${fills.top})`} stroke={palette.soft} strokeWidth={0.5} />
    </g>
  );
};

// Data: a faint table grid and three database cylinders.
const DataDetail = ({ palette, fills }: { palette: Palette; fills: Fills }) => {
  const cylinders: [number, number][] = [
    [78, 42],
    [42, 76],
    [66, 70],
  ];
  const r = 9;
  const h = 16;
  const rx = r * Math.SQRT2 * COS;
  const ry = r * Math.SQRT2 * 0.5;

  return (
    <g>
      <g stroke={palette.soft} strokeWidth={0.6}>
        {[25, 50, 75].map((v) => (
          <Fragment key={v}>
            <polyline points={poly([v, 8, THICKNESS], [v, 92, THICKNESS])} fill="none" />
            <polyline points={poly([8, v, THICKNESS], [92, v, THICKNESS])} fill="none" />
          </Fragment>
        ))}
      </g>
      {cylinders.map(([x, y]) => {
        const [cx, cy] = project(x, y, THICKNESS);
        const top = cy - h;
        const mid = cy - h / 2;
        return (
          <g key={`${x}-${y}`}>
            <path d={`M${cx - rx},${top} L${cx - rx},${cy} A${rx},${ry} 0 0 0 ${cx + rx},${cy} L${cx + rx},${top} Z`} fill={`url(#${fills.right})`} />
            <path d={`M${cx - rx},${mid} A${rx},${ry} 0 0 0 ${cx + rx},${mid}`} fill="none" stroke={palette.soft} strokeWidth={0.7} />
            <ellipse cx={cx} cy={top} rx={rx} ry={ry} fill={`url(#${fills.top})`} stroke={palette.detail} strokeWidth={0.6} />
          </g>
        );
      })}
    </g>
  );
};

// Cloud: a row of server racks with status LEDs.
const CloudDetail = ({ palette, fills }: { palette: Palette; fills: Fills }) => {
  const size = 15;
  const height = 26;
  const racks: [number, number][] = [
    [70, 30],
    [24, 70],
    [46, 70],
    [70, 62],
  ].sort((a, b) => a[0] + a[1] - (b[0] + b[1])) as [number, number][];

  return (
    <g>
      {racks.map(([x, y]) => (
        <g key={`${x}-${y}`}>
          <Box x={x} y={y} size={size} height={height} fills={fills} palette={palette} />
          {[7, 14, 21].map((dz) => (
            <Fragment key={dz}>
              <polyline
                points={poly([x + 2, y + size, THICKNESS + dz], [x + size - 2, y + size, THICKNESS + dz])}
                stroke={palette.soft}
                strokeWidth={0.6}
              />
              <circle
                cx={project(x + size, y + size / 2, THICKNESS + dz)[0]}
                cy={project(x + size, y + size / 2, THICKNESS + dz)[1] - 2}
                r={1.2}
                fill={palette.led}
              />
            </Fragment>
          ))}
        </g>
      ))}
    </g>
  );
};

// AI: a chip in the middle of a node network.
const AI_NODES: [number, number][] = [
  [18, 30],
  [50, 14],
  [84, 26],
  [86, 70],
  [56, 88],
  [20, 76],
];

const AIDetail = ({ palette, fills, active }: { palette: Palette; fills: Fills; active: boolean }) => {
  const chip = { x: 40, y: 40, size: 22 };
  const center: [number, number, number] = [chip.x + chip.size / 2, chip.y + chip.size / 2, THICKNESS];

  return (
    <g>
      {AI_NODES.map(([x, y], i) => {
        const next = AI_NODES[(i + 1) % AI_NODES.length];
        return (
          <Fragment key={`${x}-${y}`}>
            <polyline points={poly(center, [x, y, THICKNESS])} fill="none" stroke={palette.detail} strokeWidth={0.7} opacity={0.6} />
            <polyline points={poly([x, y, THICKNESS], [next[0], next[1], THICKNESS])} fill="none" stroke={palette.soft} strokeWidth={0.6} />
          </Fragment>
        );
      })}
      {[0.25, 0.5, 0.75].map((t) => {
        const a = chip.x + chip.size * t;
        const b = chip.y + chip.size * t;
        return (
          <g key={t} stroke={palette.detail} strokeWidth={0.8}>
            <polyline points={poly([a, chip.y - 4, THICKNESS], [a, chip.y, THICKNESS])} />
            <polyline points={poly([a, chip.y + chip.size, THICKNESS], [a, chip.y + chip.size + 4, THICKNESS])} />
            <polyline points={poly([chip.x - 4, b, THICKNESS], [chip.x, b, THICKNESS])} />
            <polyline points={poly([chip.x + chip.size, b, THICKNESS], [chip.x + chip.size + 4, b, THICKNESS])} />
          </g>
        );
      })}
      <Box x={chip.x} y={chip.y} size={chip.size} height={5} fills={fills} palette={palette} />
      {AI_NODES.map(([x, y]) => {
        const [cx, cy] = project(x, y, THICKNESS);
        return (
          <g key={`${x}-${y}`}>
            {active ? <circle cx={cx} cy={cy} r={5.5} fill={palette.led} opacity={0.35} /> : null}
            <circle cx={cx} cy={cy} r={2.6} fill={palette.detail} />
          </g>
        );
      })}
    </g>
  );
};

const Slab = ({ index, active, ids }: { index: number; active: boolean; ids: (name: string) => string }) => {
  const palette = active ? PALETTES.active : PALETTES.idle;
  const state = active ? "active" : "idle";
  const fills = { top: ids(`${state}-top`), left: ids(`${state}-left`), right: ids(`${state}-right`) };
  const T = THICKNESS;
  const S = SIDE;

  return (
    <g>
      <polygon points={poly([4, 4, -8], [S + 4, 4, -8], [S + 4, S + 4, -8], [4, S + 4, -8])} fill="#24414a" opacity={0.12} filter={`url(#${ids("blur")})`} />
      <g className={`transition-transform duration-300 ease-out motion-reduce:transform-none ${active ? "-translate-y-3" : ""}`}>
        <polygon points={poly([0, S, T], [S, S, T], [S, S, 0], [0, S, 0])} fill={`url(#${fills.left})`} />
        <polygon points={poly([S, 0, T], [S, S, T], [S, S, 0], [S, 0, 0])} fill={`url(#${fills.right})`} />
        <polygon points={poly([0, 0, T], [S, 0, T], [S, S, T], [0, S, T])} fill={`url(#${fills.top})`} stroke={palette.soft} strokeWidth={0.6} />
        <polyline points={poly([0, S, T], [S, S, T], [S, 0, T])} fill="none" stroke="#ffffff" strokeWidth={1} opacity={0.9} />
        {index === 0 ? <DataDetail palette={palette} fills={fills} /> : null}
        {index === 1 ? <CloudDetail palette={palette} fills={fills} /> : null}
        {index === 2 ? <AIDetail palette={palette} fills={fills} active={active} /> : null}
      </g>
    </g>
  );
};

// Dashed links between two layers, with particles flowing upward.
const CONNECTOR_POINTS: [number, number][] = [
  [8, 92],
  [92, 8],
];

const Connectors = ({ lower }: { lower: number }) => {
  const lowerOffset = offsetOf(lower);
  const upperOffset = offsetOf(lower + 1);

  return (
    <g>
      {CONNECTOR_POINTS.map(([x, y], i) => {
        const [sx, sy] = project(x, y, THICKNESS);
        const from = sy + lowerOffset;
        const to = project(x, y, 0)[1] + upperOffset;
        const path = `M${sx.toFixed(1)},${from.toFixed(1)} L${sx.toFixed(1)},${to.toFixed(1)}`;
        return (
          <g key={`${x}-${y}`}>
            <path d={path} stroke="#7fcfd4" strokeWidth={1} strokeDasharray="2 3" />
            <circle r={1.8} fill="#0e7c86" className="motion-particle">
              <animateMotion dur="2.4s" begin={`${-(i * 1.2 + lower * 0.6)}s`} repeatCount="indefinite" path={path} />
            </circle>
          </g>
        );
      })}
    </g>
  );
};

const GRADIENTS = Object.entries(PALETTES).flatMap(([state, palette]) =>
  (["top", "left", "right"] as const).map((face) => ({
    id: `${state}-${face}`,
    from: palette[face][0],
    to: palette[face][1],
  })),
);

type ServiceStackProps = {
  variant: "preview" | "full";
};

export const ServiceStack = ({ variant }: ServiceStackProps) => {
  const [active, setActive] = useState(LAYER_COUNT - 1);
  const uid = useId().replace(/:/g, "");
  const ids = (name: string) => `stack-${uid}-${name}`;
  const isFull = variant === "full";

  // Top layer first in the list, matching the stack from top to bottom.
  const ordered = SERVICES.map((service, index) => ({ service, index })).reverse();

  return (
    <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
      <ol className="divide-y divide-rule border-t border-rule lg:col-span-6">
        {ordered.map(({ service, index }) => (
          <li
            key={service.title}
            onMouseEnter={() => setActive(index)}
            onClick={() => setActive(index)}
            className="group py-5"
          >
            <div className="flex items-baseline gap-4">
              <span className={`font-mono text-xs transition-colors ${active === index ? "text-accent" : "text-ink-faint"}`}>
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className={`font-serif text-note-title transition-colors ${active === index ? "text-accent" : "text-ink"}`}>
                  {service.title}
                </h3>
                <p className={`mt-1 font-serif text-ink-muted ${isFull ? "text-editorial" : ""}`}>
                  {service.description}
                </p>
              </div>
            </div>
          </li>
        ))}
        {isFull ? null : (
          <li className="pt-5">
            <Link href="/what-i-do" className="font-sans text-meta text-accent hover:underline">
              More about what I do →
            </Link>
          </li>
        )}
      </ol>

      <div className={`mx-auto w-full lg:col-span-6 ${isFull ? "max-w-lg" : "max-w-md"}`}>
        <svg
          viewBox="-100 -45 262 305"
          role="img"
          aria-label="Three stacked layers: data platforms at the base, cloud architecture in the middle, and AI in production on top"
          className="w-full overflow-visible"
        >
          <defs>
            {GRADIENTS.map((g) => (
              <linearGradient key={g.id} id={ids(g.id)} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor={g.from} />
                <stop offset="1" stopColor={g.to} />
              </linearGradient>
            ))}
            <filter id={ids("blur")} x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="5" />
            </filter>
          </defs>

          {SERVICES.map((service, index) => (
            <Fragment key={service.title}>
              {index > 0 ? <Connectors lower={index - 1} /> : null}
              <g
                transform={`translate(0 ${offsetOf(index)})`}
                onMouseEnter={() => setActive(index)}
                onClick={() => setActive(index)}
              >
                <Slab index={index} active={active === index} ids={ids} />
              </g>
            </Fragment>
          ))}

          {SERVICES.map((service, index) => {
            const [sx, sy] = project(SIDE, 0, THICKNESS / 2);
            const y = sy + offsetOf(index);
            const isActive = active === index;
            return (
              <g key={service.title} className="transition-colors">
                <polyline
                  points={`${(sx + 4).toFixed(1)},${y.toFixed(1)} ${(sx + 24).toFixed(1)},${y.toFixed(1)}`}
                  stroke={isActive ? "#0e7c86" : "#b9cbd0"}
                  strokeWidth={0.8}
                />
                <circle cx={sx + 24} cy={y} r={1.6} fill={isActive ? "#0e7c86" : "#b9cbd0"} />
                <text
                  x={sx + 30}
                  y={y + 2.6}
                  className="font-mono"
                  fontSize={8}
                  letterSpacing={1}
                  fill={isActive ? "#0e7c86" : "#6b8288"}
                >
                  {LABELS[index]}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
};
