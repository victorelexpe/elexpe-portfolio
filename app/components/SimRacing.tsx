import { TrackTile } from "@/components/sim/TrackTile";
import { SIM_RACING } from "@/lib/constants";

export const SimRacing = () => (
  <section className="relative overflow-hidden rounded-3xl bg-ink px-6 py-10 text-paper sm:px-10 sm:py-12 lg:px-14">
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:repeating-linear-gradient(115deg,currentColor_0_2px,transparent_2px_28px)]"
    />

    <div className="relative">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="font-sans text-meta uppercase tracking-wide text-paper/60">
            Off the clock
          </p>
          <h1 className="mt-3 font-serif text-page-title">Sim racing</h1>
          <p className="mt-2 font-serif text-editorial text-paper/70">
            Usually in a {SIM_RACING.car}, on a {SIM_RACING.rig}.
          </p>
        </div>

        <ul className="flex flex-wrap gap-2">
          {SIM_RACING.platforms.map((platform) => (
            <li
              key={platform}
              className="inline-flex items-center gap-2 rounded-full border border-paper/20 px-4 py-1.5 font-sans text-meta text-paper"
            >
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rounded-full bg-accent-bright shadow-[0_0_8px_theme(colors.accent-bright)]"
              />
              {platform}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {SIM_RACING.laps.map((lap, index) => (
          <TrackTile key={lap.track} lap={lap} index={index} />
        ))}
      </div>

      <p className="mt-6 font-sans text-xs text-paper/35">
        Track outlines: f1-circuits (MIT) · © OpenStreetMap contributors
      </p>
    </div>
  </section>
);
