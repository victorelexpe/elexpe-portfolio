// Soft colour behind ribbed, frosted glass ("fluted glass") at the top of the home page.
const FLUTES =
  "repeating-linear-gradient(90deg, rgba(255,255,255,0.55) 0px, rgba(255,255,255,0.08) 5px, rgba(255,255,255,0) 14px, rgba(36,65,74,0.07) 24px, rgba(36,65,74,0.1) 27px, rgba(255,255,255,0.55) 28px)";

export const HeroBackground = () => (
  <div
    aria-hidden="true"
    className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[100vh] overflow-hidden"
  >
    <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,black_35%,transparent_72%)]">
      <div className="absolute -left-[12%] -top-[25%] h-[55vh] w-[40vw] rounded-full [background:radial-gradient(closest-side,rgba(14,124,134,0.3),transparent)]" />
      <div className="absolute right-[0%] -top-[5%] h-[70vh] w-[45vw] rounded-full [background:radial-gradient(closest-side,rgba(108,211,216,0.7),transparent)]" />
      <div className="absolute right-[18%] top-[25%] h-[40vh] w-[25vw] rounded-full [background:radial-gradient(closest-side,rgba(14,124,134,0.35),transparent)]" />
      <div className="absolute inset-0 bg-paper/50 backdrop-blur-2xl" />
      <div className="absolute inset-0" style={{ backgroundImage: FLUTES }} />
    </div>
  </div>
);
