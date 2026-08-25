import type { CSSProperties } from "react";
import { usePointerTilt } from "../hooks/usePointerTilt";
import PortraitStack from "./Profile";

/** Paths go through BASE_URL, not a leading slash. The site is served from
 *  `/Portfolio/` (see vite.config.ts), so "/images/x.jpg" resolves against
 *  the domain root and 404s — it has to be "/Portfolio/images/x.jpg", which
 *  is what BASE_URL supplies. */
const PORTRAITS = [
  {
    src: `${import.meta.env.BASE_URL}images/my-pic.jpg`,
    alt: "Gideon Dakore outdoors",
    position: "58% 30%",
  },
  {
    src: `${import.meta.env.BASE_URL}images/my-pic-1.jpg`,
    alt: "Gideon Dakore at AmaliTech",
    position: "50% 26%",
  },
];

/**
 * The hero's portrait: two real photographs crossfading on a slow drift
 * (see PortraitStack), inside the same pointer-tilt scene the skill cards
 * use. Purely presentational — navigation lives in the persistent top bar,
 * not hidden behind a click on someone's face.
 *
 * A framed, shadowed card rather than the bare cutout that used to sit here:
 * these are photographs with their own backgrounds, so they need an edge to
 * sit against instead of floating on the cream.
 */
export function HeroBadge() {
  const sceneRef = usePointerTilt<HTMLDivElement>({ maxTilt: 9, lift: 22 });

  return (
    <div
      ref={sceneRef}
      className="scene-3d relative aspect-[4/5] w-[clamp(220px,36vw,380px)] shrink-0"
      style={{ "--scene-perspective": "900px" } as CSSProperties}
    >
      <div className="plane-3d absolute inset-0">
        {/* PortraitStack sets its own 4/5 aspect-ratio, which goes inert once
            both dimensions are definite — so h-full/w-full hand sizing back
            to the tilt scene above, which is already 4/5. */}
        <PortraitStack
          images={PORTRAITS}
          className="h-full w-full rounded-2xl shadow-[0_24px_48px_rgba(26,26,26,0.28)]"
        />
      </div>
    </div>
  );
}
