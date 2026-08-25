/**
 * PortraitStack — a slow-drift crossfade for a small set of portraits.
 *
 *   <PortraitStack
 *     images={[
 *       { src: "/img/IMG_2819.jpg", alt: "Gideon outdoors", position: "58% 30%" },
 *       { src: "/img/_KAY3563.jpg", alt: "Gideon at AmaliTech", position: "50% 26%" },
 *     ]}
 *   />
 *
 * `position` is CSS object-position and is per-image, since the two shots frame
 * differently. Everything else is a component-level setting.
 *
 * Motion is one continuous alternating drift per image, never reset, so there is
 * no snap-back at the loop point. prefers-reduced-motion holds the first image
 * still with no fades.
 */

import { useEffect, useState, type CSSProperties } from "react";

export type PortraitImage = {
  src: string;
  /** Empty string marks the image as decorative. */
  alt?: string;
  /** CSS object-position, e.g. "58% 30%". Bias toward the face. */
  position?: string;
};

export type PortraitStackProps = {
  /** Accepts full objects or bare URLs. */
  images?: (PortraitImage | string)[];
  /** ms each image sits before the crossfade begins. */
  hold?: number;
  /** ms of crossfade. */
  fade?: number;
  /** How far the zoom travels; 0.085 ≈ 8.5%. */
  drift?: number;
  /** Fallback crop for images that don't set their own `position`. */
  defaultPosition?: string;
  vignette?: boolean;
  className?: string;
};

/** CSS custom properties aren't in CSSProperties, so widen the style type. */
type StyleWithVars = CSSProperties & Record<`--${string}`, string | number>;

/* ---------- placeholders so the component renders before real files are wired ---------- */

const placeholder = (label: string, from: string, to: string): string =>
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1000">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="${from}"/><stop offset="1" stop-color="${to}"/>
        </linearGradient>
        <pattern id="p" width="44" height="44" patternUnits="userSpaceOnUse">
          <path d="M0 0H44V44" fill="none" stroke="rgba(255,255,255,.13)" stroke-width="1"/>
        </pattern>
      </defs>
      <rect width="800" height="1000" fill="url(#g)"/>
      <rect width="800" height="1000" fill="url(#p)"/>
      <circle cx="400" cy="360" r="146" fill="rgba(255,255,255,.12)"/>
      <circle cx="400" cy="360" r="72" fill="rgba(255,255,255,.10)"/>
      <text x="400" y="720" text-anchor="middle" font-family="ui-monospace, monospace"
            font-size="26" letter-spacing="3" fill="rgba(255,255,255,.62)">${label}</text>
    </svg>`,
  );

const DEFAULT_IMAGES: PortraitImage[] = [
  { src: placeholder("IMAGE 01", "#2f3b45", "#5c6b6f"), alt: "" },
  { src: placeholder("IMAGE 02", "#3d3540", "#6d5f63"), alt: "" },
];

const normalize = (img: PortraitImage | string): PortraitImage =>
  typeof img === "string" ? { src: img } : img;

/* ---------------------------------- component ---------------------------------- */

export default function PortraitStack({
  images = DEFAULT_IMAGES,
  hold = 5200,
  fade = 1800,
  drift = 0.085,
  defaultPosition = "50% 30%",
  vignette = true,
  className = "",
}: PortraitStackProps) {
  const slides: PortraitImage[] = (images.length ? images : DEFAULT_IMAGES).map(
    normalize,
  );

  const [active, setActive] = useState(0);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (reduced || slides.length < 2) return;
    const id = window.setInterval(
      () => setActive((i) => (i + 1) % slides.length),
      hold + fade,
    );
    return () => window.clearInterval(id);
  }, [reduced, slides.length, hold, fade]);

  // One there-and-back drift spans several cycles, so motion reads as
  // continuous rather than as a loop.
  const driftDuration = (hold + fade) * slides.length * 2;

  return (
    <div
      className={`ps-frame ${className}`}
      data-reduced={reduced || undefined}
    >
      <style>{`
        .ps-frame {
          position: relative;
          overflow: hidden;
          aspect-ratio: 4 / 5;
          background: #14161a;
          isolation: isolate;
        }
        .ps-slide {
          position: absolute;
          inset: 0;
          opacity: 0;
          transition: opacity var(--ps-fade) cubic-bezier(.4,0,.3,1);
          will-change: opacity;
        }
        .ps-slide[data-active="true"] { opacity: 1; }
        .ps-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transform-origin: var(--ps-origin);
          animation: ps-drift var(--ps-drift) ease-in-out infinite alternate;
          animation-delay: var(--ps-delay);
          will-change: transform;
        }
        @keyframes ps-drift {
          from { transform: scale(1); }
          to   { transform: scale(var(--ps-scale)); }
        }
        .ps-vignette {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background:
            radial-gradient(120% 90% at 50% 34%, transparent 42%, rgba(10,11,13,.42) 100%),
            linear-gradient(to top, rgba(10,11,13,.34), transparent 46%);
        }
        .ps-frame[data-reduced] .ps-img { animation: none; transform: none; }
        .ps-frame[data-reduced] .ps-slide { transition: none; }
      `}</style>

      {slides.map((img, i) => {
        const slideStyle: StyleWithVars = { "--ps-fade": `${fade}ms` };
        const imgStyle: StyleWithVars = {
          objectPosition: img.position ?? defaultPosition,
          "--ps-scale": 1 + drift,
          // Alternating origins keep the images from drifting in lockstep.
          "--ps-origin": i % 2 === 0 ? "58% 32%" : "42% 28%",
          "--ps-drift": `${driftDuration}ms`,
          "--ps-delay": `-${(driftDuration / slides.length) * i}ms`,
        };

        return (
          <div
            key={img.src}
            className="ps-slide"
            data-active={reduced ? i === 0 : i === active}
            aria-hidden={i !== active}
            style={slideStyle}
          >
            <img
              className="ps-img"
              src={img.src}
              alt={img.alt ?? ""}
              loading={i === 0 ? "eager" : "lazy"}
              decoding="async"
              draggable={false}
              style={imgStyle}
            />
          </div>
        );
      })}

      {vignette && <div className="ps-vignette" />}
    </div>
  );
}
