import type { SimLap } from "@/lib/constants";
import { TRACK_PATHS } from "@/lib/trackPaths";

type TrackTileProps = {
  lap: SimLap;
  index: number;
};

// Roughly one second of animation per kilometre, so longer tracks lap slower.
const lapSeconds = (lengthKm: number) => Math.max(4, lengthKm * 0.9);

export const TrackTile = ({ lap, index }: TrackTileProps) => {
  const path = TRACK_PATHS[lap.outline];
  const duration = lapSeconds(lap.lengthKm);

  return (
    <article className="group flex flex-col rounded-2xl border border-paper/10 bg-paper/[0.03] p-5 transition-colors duration-300 hover:border-accent-bright/40 hover:bg-paper/[0.06]">
      <div className="flex items-center justify-between font-mono text-xs uppercase tracking-wider text-paper/50">
        <span>
          {lap.country} · {lap.lengthKm.toFixed(3)} km
        </span>
        {lap.game ? (
          <span className="rounded border border-paper/20 px-1.5 py-0.5 text-paper/70">
            {lap.game}
          </span>
        ) : null}
      </div>

      <svg
        viewBox="0 0 100 100"
        aria-hidden="true"
        className="my-4 h-40 w-full text-paper/35 transition-colors duration-300 group-hover:text-accent-bright"
      >
        <path
          d={path}
          pathLength={1}
          className="track-outline"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinejoin="round"
        />
        <g className="track-dot">
          <circle r={3.5} className="fill-accent-bright/25" />
          <circle r={1.8} className="fill-accent-bright" />
          <animateMotion
            dur={`${duration}s`}
            begin={`-${(index * 1.3) % duration}s`}
            repeatCount="indefinite"
            path={path}
          />
        </g>
      </svg>

      <h3 className="font-serif text-editorial text-paper">{lap.track}</h3>
      <div className="mt-1 flex items-baseline justify-between gap-4">
        <p
          className={`font-mono text-3xl font-light tabular-nums tracking-[-0.08em] ${
            !lap.time
              ? "text-paper/25"
              : lap.estimated
                ? "text-accent-bright/60"
                : "text-accent-bright"
          }`}
        >
          {lap.time ?? "--:--.---"}
        </p>
        <p className="font-sans text-xs text-paper/40">
          {!lap.time ? "No lap yet" : lap.estimated ? "Estimated" : "Best lap"}
        </p>
      </div>
    </article>
  );
};
