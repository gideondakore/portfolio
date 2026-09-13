import { Link } from "react-router-dom";
import type { NavItem } from "../data/nav";
import { site } from "../data/site";

interface TopBarProps {
  isOpen: boolean;
  onToggle: () => void;
  navItems: NavItem[];
  activePath: string;
  onLinkClick: () => void;
}

/**
 * Fixed top bar: wordmark on the left, then the section links inline from
 * `lg` up so a first-time visitor (a recruiter skimming, say) sees the whole
 * site at a glance without discovering the hamburger first. Below `lg` there
 * isn't room for six labels, so the links collapse back into the overlay and
 * only the toggle shows.
 */
export function TopBar({
  isOpen,
  onToggle,
  navItems,
  activePath,
  onLinkClick,
}: Readonly<TopBarProps>) {
  // Home is already reachable from the wordmark; repeating it in the inline
  // list spends width without adding a destination.
  const inlineItems = navItems.filter((item) => item.path !== navItems[0].path);

  return (
    <header className="fixed inset-x-0 top-0 z-[60] flex items-center justify-between bg-cream px-6 py-5 sm:px-14 sm:py-6">
      <Link
        to="/home"
        className="font-serif text-xl leading-none tracking-[0.04em]"
        style={{ fontWeight: 500 }}
      >
        {site.wordmark}
      </Link>

      <nav aria-label="Sections" className="hidden lg:block">
        <ul className="flex items-center gap-9">
          {inlineItems.map((item) => {
            const isActive = activePath === item.path;
            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  onClick={onLinkClick}
                  aria-current={isActive ? "page" : undefined}
                  className={[
                    "group relative block py-1 font-sans text-[11px] font-semibold tracking-[0.18em] uppercase transition-colors duration-300 ease-editorial",
                    isActive ? "text-ink" : "text-muted hover:text-ink",
                  ].join(" ")}
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className={[
                      "absolute -bottom-0.5 left-0 h-px w-full origin-left bg-ink transition-transform duration-[450ms] ease-editorial",
                      isActive
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100",
                    ].join(" ")}
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <button
        type="button"
        className="flex items-center gap-3 px-2 py-2.5 lg:hidden"
        onClick={onToggle}
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        aria-controls="overlay-nav"
      >
        <span className="sr-only">
          {isOpen ? "Close navigation menu" : "Open navigation menu"}
        </span>
        <span
          className={[
            "relative flex h-10 w-10 items-center justify-center rounded-full border transition-colors duration-[350ms] ease-editorial",
            isOpen ? "border-ink bg-ink" : "border-ink bg-transparent",
          ].join(" ")}
        >
          <span
            className={[
              "absolute h-[1.5px] w-3.5 transition-all duration-[400ms] ease-editorial",
              isOpen
                ? "translate-y-0 rotate-45 bg-cream"
                : "-translate-y-[3px] rotate-0 bg-ink",
            ].join(" ")}
          />
          <span
            className={[
              "absolute h-[1.5px] w-3.5 transition-all duration-[400ms] ease-editorial",
              isOpen
                ? "translate-y-0 -rotate-45 bg-cream"
                : "translate-y-[3px] rotate-0 bg-ink",
            ].join(" ")}
          />
        </span>
      </button>
    </header>
  );
}
