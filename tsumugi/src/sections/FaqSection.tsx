import { Link } from "react-router-dom";
import { FAQS } from "../content";
import { SectionHead } from "../components/SectionHead";

export function FaqSection() {
  return (
    <section className="section" id="faq">
      <div className="wrap wrap--narrow">
        <SectionHead
          kicker="FAQ"
          title="よくある質問"
          lead="熊本市で学習塾をお探しの保護者の方から、よくいただくご質問をまとめました。"
        />

        <div className="faq-list">
          {FAQS.map((faq) => (
            <details className="faq-item" key={faq.q}>
              <summary>{faq.q}</summary>
              <div className="faq-answer">
                <p>{faq.a}</p>
              </div>
            </details>
          ))}
        </div>

        <div className="faq-links">
          <Link className="link-arrow" to="/#contact">
            解決しない場合はお問い合わせください
          </Link>
        </div>
      </div>
    </section>
  );
}
