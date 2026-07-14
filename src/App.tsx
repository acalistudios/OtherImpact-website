import { useEffect } from 'react';
import { BrowserRouter, Link, NavLink, Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import HowItWorks from './pages/HowItWorks';
import Pricing from './pages/Pricing';
import { Privacy, Terms } from './pages/Legal';
import { APP_URL } from './lib/urls';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function NotFound() {
  return (
    <div className="page-head">
      <h1>404 — nothing here</h1>
      <p className="lede">
        This page doesn't exist. Back to the <Link to="/">home page</Link>.
      </p>
    </div>
  );
}

function LogoMark() {
  return (
    <svg className="logo-mark" viewBox="0 0 64 64" aria-hidden="true">
      <circle cx="24" cy="32" r="7" fill="var(--accent)" />
      <circle cx="24" cy="32" r="16" fill="none" stroke="var(--accent)" strokeOpacity="0.5" strokeWidth="4" />
      <circle cx="24" cy="32" r="26" fill="none" stroke="var(--accent)" strokeOpacity="0.22" strokeWidth="4" />
    </svg>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="shell">
        <header>
          <Link to="/" className="logo">
            <LogoMark />
            OtherImpact
          </Link>
          <nav>
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="/how-it-works">How it works</NavLink>
            <NavLink to="/pricing">Pricing</NavLink>
            <NavLink to="/about">About</NavLink>
          </nav>
          <a href={APP_URL} className="cta header-cta">Open the app</a>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <footer>
          <span>
            Research &amp; education only — not investment advice. Ideas are AI-generated
            and tracked unedited on the <a href={`${APP_URL}/scoreboard`}>scoreboard</a>.
          </span>
          <span className="footer-links">
            <a href={APP_URL}>Open the app</a> ·{' '}
            <Link to="/terms">Terms</Link> · <Link to="/privacy">Privacy</Link>
          </span>
        </footer>
      </div>
    </BrowserRouter>
  );
}
