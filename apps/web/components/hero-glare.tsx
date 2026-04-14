"use client";

/**
 * HeroGlare — full-width animated ambient light across the top of the hero.
 * Multiple layered blobs with breathing + blob-morph + drift animations.
 * Fully inert: pointer-events-none, aria-hidden, z-0.
 */
export function HeroGlare() {
  return (
    <>
      <style>{`
        /* ── Breathing (horizontal scaleX pulse) ───────────────── */
        @keyframes breathe-slow {
          0%,100% { opacity: var(--op-from); transform: scaleX(1)    scaleY(1); }
          50%      { opacity: var(--op-to);   transform: scaleX(1.35) scaleY(0.92); }
        }
        @keyframes breathe-med {
          0%,100% { opacity: var(--op-from); transform: scaleX(1)    scaleY(1); }
          50%      { opacity: var(--op-to);   transform: scaleX(1.28) scaleY(0.88); }
        }
        @keyframes breathe-fast {
          0%,100% { opacity: var(--op-from); transform: scaleX(1)    scaleY(1); }
          40%      { opacity: var(--op-to);   transform: scaleX(1.40) scaleY(0.85); }
          75%      { opacity: calc(var(--op-from) * 0.8); transform: scaleX(0.90) scaleY(1.05); }
        }

        /* ── Blob shape morphing ────────────────────────────────── */
        @keyframes morph-a {
          0%   { border-radius: 62% 38% 72% 28% / 44% 58% 42% 56%; }
          20%  { border-radius: 38% 62% 44% 56% / 72% 28% 68% 32%; }
          40%  { border-radius: 74% 26% 58% 42% / 32% 68% 36% 64%; }
          60%  { border-radius: 28% 72% 38% 62% / 62% 38% 72% 28%; }
          80%  { border-radius: 56% 44% 68% 32% / 48% 52% 58% 42%; }
          100% { border-radius: 62% 38% 72% 28% / 44% 58% 42% 56%; }
        }
        @keyframes morph-b {
          0%   { border-radius: 44% 56% 36% 64% / 68% 32% 62% 38%; }
          25%  { border-radius: 72% 28% 56% 44% / 38% 62% 42% 58%; }
          50%  { border-radius: 36% 64% 74% 26% / 56% 44% 28% 72%; }
          75%  { border-radius: 58% 42% 44% 56% / 28% 72% 62% 38%; }
          100% { border-radius: 44% 56% 36% 64% / 68% 32% 62% 38%; }
        }
        @keyframes morph-c {
          0%   { border-radius: 68% 32% 48% 52% / 54% 46% 66% 34%; }
          33%  { border-radius: 32% 68% 66% 34% / 44% 56% 36% 64%; }
          66%  { border-radius: 54% 46% 32% 68% / 72% 28% 56% 44%; }
          100% { border-radius: 68% 32% 48% 52% / 54% 46% 66% 34%; }
        }

        /* ── Horizontal drift ───────────────────────────────────── */
        @keyframes drift-x {
          0%,100% { translate: 0px   0px; }
          25%     { translate: 80px  -6px; }
          50%     { translate: 160px  4px; }
          75%     { translate: 60px  -3px; }
        }
        @keyframes drift-x-rev {
          0%,100% { translate: 0px   0px; }
          25%     { translate: -70px  5px; }
          50%     { translate: -150px -4px; }
          75%     { translate: -50px  3px; }
        }
        @keyframes drift-y {
          0%,100% { translate: 0px  0px; }
          33%     { translate: 50px -4px; }
          66%     { translate: -60px 3px; }
        }

        /* ── Combined classes ───────────────────────────────────── */
        .gb-1  {
          --op-from: 0.12; --op-to: 0.26;
          animation: morph-a 7s ease-in-out infinite, breathe-slow 5s ease-in-out infinite, drift-x 10s ease-in-out infinite;
        }
        .gb-2  {
          --op-from: 0.08; --op-to: 0.20;
          animation: morph-b 9s ease-in-out infinite, breathe-med 6s ease-in-out infinite, drift-x-rev 8s ease-in-out infinite;
          animation-delay: -3s, -1.5s, -4s;
        }
        .gb-3  {
          --op-from: 0.10; --op-to: 0.22;
          animation: morph-c 6s ease-in-out infinite, breathe-fast 4s ease-in-out infinite, drift-y 9s ease-in-out infinite;
          animation-delay: -2s, -3s, -1s;
        }
        .gb-4  {
          --op-from: 0.07; --op-to: 0.17;
          animation: morph-a 8s ease-in-out infinite, breathe-slow 6s ease-in-out infinite, drift-x 11s ease-in-out infinite;
          animation-delay: -5s, -2s, -6s;
        }
        .gb-5  {
          --op-from: 0.09; --op-to: 0.21;
          animation: morph-b 6s ease-in-out infinite, breathe-med 5s ease-in-out infinite, drift-x-rev 9s ease-in-out infinite;
          animation-delay: -4s, -0.5s, -3s;
        }
        .gb-6  {
          --op-from: 0.05; --op-to: 0.15;
          animation: morph-c 10s ease-in-out infinite, breathe-fast 7s ease-in-out infinite, drift-y 12s ease-in-out infinite;
          animation-delay: -1.5s, -4s, -5s;
        }
      `}</style>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 z-0 select-none overflow-hidden"
        style={{ height: "62%" }}
      >
        {/* ── brand1 (magenta/pink) blobs — left cluster ────────── */}
        <div
          className="gb-1 absolute blur-[110px]"
          style={{
            background: "var(--brand1)",
            width: "48%", height: "36%",
            top: "-14%", left: "-10%",
          }}
        />
        <div
          className="gb-3 absolute blur-[80px]"
          style={{
            background: "var(--brand1)",
            width: "26%", height: "20%",
            top: "2%", left: "8%",
          }}
        />

        {/* ── brand2 (yellow) blobs — right cluster ─────────────── */}
        <div
          className="gb-2 absolute blur-[110px]"
          style={{
            background: "var(--brand2)",
            width: "48%", height: "36%",
            top: "-14%", right: "-10%",
          }}
        />
        <div
          className="gb-5 absolute blur-[80px]"
          style={{
            background: "var(--brand2)",
            width: "26%", height: "20%",
            top: "2%", right: "8%",
          }}
        />

        {/* ── Center blend — very slick/flat at top-center ───────── */}
        <div
          className="gb-4 absolute blur-[130px]"
          style={{
            background: "var(--brand1)",
            width: "50%", height: "16%",
            top: "-4%", left: "25%",
          }}
        />
        <div
          className="gb-6 absolute blur-[100px]"
          style={{
            background: "var(--brand2)",
            width: "30%", height: "11%",
            top: "2%", left: "35%",
          }}
        />
      </div>
    </>
  );
}
