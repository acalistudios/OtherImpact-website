import { Link } from 'react-router-dom';
import { usePageTitle } from '../lib/usePageTitle';
import { APP_URL } from '../lib/urls';

export default function Pricing() {
  usePageTitle('Pricing');
  return (
    <div>
      <div className="page-head">
        <h1>Pricing</h1>
        <p className="lede">
          OtherImpact is currently available as a free public beta. Browse the research,
          follow the complete idea history, and help us refine the desk before paid plans launch.
        </p>
      </div>

      <div className="pricing-grid">
        <div className="price-card">
          <h3>Reader</h3>
          <div className="price"><span className="price-num">$0</span></div>
          <ul>
            <li>The top 3 events each day, with full effect chains</li>
            <li>New ideas unlock 12 hours after the desk publishes them</li>
            <li>The complete, unedited idea history — always free, never delayed</li>
            <li>All closed ideas with full theses (the public record)</li>
            <li>Instrument pages with live charts</li>
          </ul>
          <a href={APP_URL} className="cta secondary">Browse the research</a>
        </div>

        <div className="price-card featured">
          <div className="founding">After the beta</div>
          <h3>Pro preview</h3>
          <div className="price">
            <span className="price-num">$9</span>
            <span className="price-per">/month</span>
          </div>
          <ul>
            <li><strong>Every event</strong> — not just the day's top 3</li>
            <li><strong>Immediate access</strong> — ideas the moment they publish, no 12-hour delay</li>
            <li>
              <strong>Analyst chat</strong> — bounce your own ideas off the desk;
              it argues from its published research and idea history
            </li>
            <li><strong>Strategy portfolios</strong> — organize ideas into your own tracked strategies</li>
            <li><strong>Email breaking-event alerts</strong> — optional and switchable off anytime</li>
            <li><strong>Watchlist-filtered alerts</strong> — only notify you about symbols you follow</li>
          </ul>
          <a className="cta secondary" href={APP_URL}>Use the free beta</a>
          <p className="muted small">
            Pro subscriptions are not open yet. No payment will be requested during the beta.
          </p>
        </div>
      </div>

      <p className="muted small pricing-note">
        OtherImpact is research and education, not investment advice. Future subscriptions
        will buy tools and earlier access, not recommendations. See <Link to="/terms">Terms</Link>.
      </p>
    </div>
  );
}
