import { usePageTitle } from '../lib/usePageTitle';
import { APP_URL } from '../lib/urls';

export default function HowItWorks() {
  usePageTitle('How it works');
  return (
    <div className="legal">
      <h1>How OtherImpact works</h1>
      <p className="lede">
        OtherImpact is an AI research desk. It reads the news continuously and turns
        market-moving events into <strong>effect chains</strong>: tiered investment
        theses ranked by how far the market has to think to price them.
      </p>

      <h3>1. Read everything</h3>
      <p>
        The pipeline ingests world, business, and market news from wire-grade sources
        every half hour. Duplicate coverage is collapsed so forty articles about the
        same strike count as one event, not forty.
      </p>

      <h3>2. Keep only what moves markets</h3>
      <p>
        Every article is scored 0–10 for market significance. Celebrity news dies here;
        wars, sanctions, central-bank shocks, and sector-moving regulation get through.
        Significant articles are clustered into <strong>events</strong> — the top-level
        unit you see on the front page.
      </p>

      <h3>3. Publish the effect chain</h3>
      <p>
        For each event, the desk publishes theses in tiers by causal distance:
      </p>
      <ul>
        <li>
          <strong>Tier 1 · Direct</strong> — the immediate repricing everyone sees.
          A Gulf conflict lifts oil, so domestic producers benefit. Honest caveat:
          much of this is priced within hours, and each thesis says so.
        </li>
        <li>
          <strong>Tier 2 · Indirect</strong> — one causal step removed: businesses tied
          to the direct effect through input costs, logistics, or substitutes. The oil
          spike squeezes under-hedged airlines; war-risk insurance lifts tanker rates.
        </li>
        <li>
          <strong>Tier 3 · Ripple</strong> — macro transmission: oil-driven inflation
          pressures rates, which hits high-beta tech; energy-importing regions and
          currencies lag. This is where the market is slowest — and where the desk
          hunts hardest.
        </li>
      </ul>
      <p>
        Every thesis names 1–3 liquid instruments, a time horizon (days to weeks — news
        theses decay fast), a confidence score, and — critically — its{' '}
        <strong>invalidation conditions</strong>: the checkable events that would kill it.
      </p>

      <h3>4. Watch for the thesis to break</h3>
      <p>
        The same pipeline that reads the news checks every active idea's invalidation
        conditions against each new development. When a ceasefire lands, the airline
        short doesn't quietly linger — it's closed at that moment's price, marked{' '}
        <em>invalidated</em>, and often reversed by a new idea (buy the oversold
        airlines), linked so you can follow the whole arc.
      </p>

      <h3>5. Score everything, hide nothing</h3>
      <p>
        Each idea is measured from publication to close — horizon reached or thesis
        invalidated, whichever comes first — as a direction-adjusted return on its
        instruments. The <a href={`${APP_URL}/scoreboard`}>scoreboard</a> shows every closed
        idea, unedited: the hit rate and average return are computed over all of them,
        including the misses. That record is the product's only claim to credibility.
      </p>

      <h3>What this is not</h3>
      <p>
        Not investment advice, not signals, not a robo-adviser. Markets price obvious
        news in seconds; no retail tool changes that. What retail investors actually
        lack is the connect-the-dots work — the second and third tier — and a research
        desk honest enough to publish its own scorecard. That's the product.
      </p>
    </div>
  );
}
