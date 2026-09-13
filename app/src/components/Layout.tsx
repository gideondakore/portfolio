import { useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { navItems } from '../data/nav'
import { site } from '../data/site'
import { useOverlayNav } from '../hooks/useOverlayNav'
import { TopBar } from './TopBar'
import { OverlayNav } from './OverlayNav'
import { Footer } from './Footer'
import { PaperGrain } from './PaperGrain'

/**
 * Shared page chrome: the paper-grain overlay, fixed top bar, full-screen
 * nav overlay, and footer — everything that used to wrap all six sections
 * in one scrolling document. Now each route renders one page into
 * `<Outlet>` and this is the only thing that persists across navigations.
 */
export function Layout() {
  const { isOpen, toggle, close } = useOverlayNav()
  const location = useLocation()
  const navigate = useNavigate()

  // A route change is a new page, not a scroll position carried over from
  // the last one.
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'instant' })
  }, [location.pathname])

  useEffect(() => {
    const current = navItems.find((item) => item.path === location.pathname)
    // The hub route (Home) gets the site's "front door" title; every other
    // page gets its own name ahead of the wordmark.
    document.title =
      current && current.path !== navItems[0].path
        ? `${current.label} — ${site.wordmark}`
        : `${site.wordmark} — ${site.role}`
  }, [location.pathname])

  // The hamburger is hidden from `lg` up, where the links sit inline in the
  // top bar instead. If the overlay is open when the viewport crosses that
  // line, its close control disappears with it — and the body scroll lock
  // stays on. Close it on the way past.
  useEffect(() => {
    if (!isOpen) return
    const desktop = window.matchMedia('(min-width: 1024px)')
    if (desktop.matches) {
      close()
      return
    }
    const handleChange = (event: MediaQueryListEvent) => {
      if (event.matches) close()
    }
    desktop.addEventListener('change', handleChange)
    return () => desktop.removeEventListener('change', handleChange)
  }, [isOpen, close])

  function handleNavigate(path: string) {
    if (path === location.pathname) {
      close()
      return
    }
    close()
    // Same 300ms delay as before: let the overlay finish closing before the
    // route changes, so the two transitions don't fight each other.
    window.setTimeout(() => navigate(path), 300)
  }

  return (
    <>
      <PaperGrain />

      <TopBar
        isOpen={isOpen}
        onToggle={toggle}
        navItems={navItems}
        activePath={location.pathname}
        onLinkClick={close}
      />
      <OverlayNav
        isOpen={isOpen}
        navItems={navItems}
        activePath={location.pathname}
        onNavigate={handleNavigate}
      />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  )
}
