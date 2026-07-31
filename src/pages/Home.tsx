import { Link } from 'react-router-dom';
import { APP_URL } from '../lib/urls';

// The pitch. This is the root domain's landing page — first impression for
// anyone who hasn't used the product yet, so it sells the idea before
// sending people to app.otherimpact.com for the actual research.
export default function Home() {
  return (
    <div>
      <div className="hero">
        <h1>News moves markets.<br />We map what moves next.</h1>
        <p>
          An AI research desk that reads everything and publishes theses as{' '}
          <strong>effect chains</strong> — the first-order move everyone sees, and the
          second- and third-order effects they don't. Every thesis states what would
          kill it. Every published idea remains visible in a public, unedited{' '}
          <a href={`${APP_URL}/scoreboard`}>idea history</a>.
        </p>
        <div className="hero-ctas">
          <a href={APP_URL} className="cta">Browse the research</a>
          <Link to="/how-it-works" className="cta secondary">How it works</Link>
        </div>
      </div>

      <div className="tier-strip">
        <div className="tier-item">
          <span className="tier-chip tier-1">Direct</span>
          <p>The obvious first-order move — usually partly priced in within hours.</p>
        </div>
        <div className="tier-item">
          <span className="tier-chip tier-2">Indirect</span>
          <p>Businesses one step removed via costs, logistics, suppliers, or substitutes.</p>
        </div>
        <div className="tier-item">
          <span className="tier-chip tier-3">Ripple</span>
          <p>Macro transmission — rates, FX, regional indices — where the market is slowest.</p>
        </div>
      </div>

      <section className="home-section">
        <h2>A public, unedited idea history</h2>
        <p className="lede">
          Every idea remains visible from publication through closure, invalidation,
          or supersession. Closed ideas are never hidden or removed, free or paid.
          Numerical scoring will return only with a licensed market-data source.
        </p>
        <p><Link to="/pricing">See plans →</Link></p>
      </section>
    </div>
  );
}
