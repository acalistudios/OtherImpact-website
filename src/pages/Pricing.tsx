import { Link } from 'react-router-dom';
import { usePageTitle } from '../lib/usePageTitle';
import { APP_URL } from '../lib/urls';

// Free tier = all published research (the public track record IS the marketing).
// Premium = speed and breadth. Authentication lives on app.otherimpact.com;
// browser sessions do not cross from the marketing origin to that subdomain.
// Send the reader to the app account page, which signs them in before checkout.
function GoProButton() {
  return <a className="cta" href={`${APP_URL}/account?checkout=1`}>Go Pro — $9/mo</a>;
}

export default function Pricing() {
  usePageTitle('Pricing');
  return (
    <div>
      <div className="page-head">
        <h1>Pricing</h1>
        <p className="lede">
          The track record is free — judging us costs nothing, ever. Premium buys{' '}
          <em>speed and breadth</em>: every event, every idea, the moment it publishes.
        </p>
      </div>

      <div className="pricing-grid">
        <div className="price-card">
          <h3>Reader</h3>
          <div className="price"><span className="price-num">$0</span></div>
          <ul>
            <li>The top 3 events each day, with full effect chains</li>
            <li>New ideas unlock 12 hours after the desk publishes them</li>
            <li>The complete, unedited scoreboard — always free, never delayed</li>
            <li>All closed ideas with full theses (the public record)</li>
            <li>Instrument pages with live charts</li>
          </ul>
          <a href={APP_URL} className="cta secondary">Browse the research</a>
        </div>

        <div className="price-card featured">
          <div className="founding">Founding price</div>
          <h3>Pro</h3>
          <div className="price">
            <span className="price-num">$9</span>
            <span className="price-per">/month</span>
          </div>
          <ul>
            <li><strong>Every event</strong> — not just the day's top 3</li>
            <li><strong>Real time</strong> — ideas the moment they publish, no 12-hour delay</li>
            <li>
              <strong>Analyst chat</strong> — bounce your own ideas off the desk;
              it argues from its published research and track record
            </li>
            <li><strong>Breaking-event alerts</strong> — by email or text, your choice, off anytime</li>
            <li><strong>Watchlist</strong> — follow symbols and get desk coverage first</li>
          </ul>
          <GoProButton />
          <p className="muted small">
            Founding pricing locks in for early subscribers when payments open.
          </p>
        </div>
      </div>

      <p className="muted small pricing-note">
        OtherImpact is research and education, not investment advice — free or paid.
        Subscribing buys you tools, not recommendations. See <Link to="/terms">Terms</Link>.
      </p>
    </div>
  );
}
