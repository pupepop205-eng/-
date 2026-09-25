import { Link } from "react-router-dom";
import { PRICING } from "../content";
import { SectionHead } from "../components/SectionHead";

export function PricingSection() {
  return (
    <section className="section section--paper" id="price">
      <div className="wrap">
        <SectionHead kicker="Price" title={PRICING.heading} lead={PRICING.lead} />

        <div className="price-grid">
          {PRICING.plans.map((plan) => (
            <article className="price-card" key={plan.grade}>
              <p className="grade">{plan.grade}</p>
              <p className="price-amount">
                <span className="value">{plan.amount}</span>
                <span className="unit">{plan.unit}</span>
              </p>
              <p className="price-caption">{plan.caption}</p>
              <p className="price-flag">{PRICING.disclaimer}</p>
            </article>
          ))}
        </div>

        <p className="price-note">
          <strong>{PRICING.disclaimer}</strong>
          {PRICING.note}
        </p>

        <div className="price-links">
          <Link className="link-arrow" to="/#contact">
            授業料について問い合わせる
          </Link>
          <Link className="link-arrow" to="/#faq">
            よくある質問を見る
          </Link>
        </div>
      </div>
    </section>
  );
}
