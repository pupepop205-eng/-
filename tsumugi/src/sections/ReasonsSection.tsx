import { Link } from "react-router-dom";
import { REASONS, WORRIES } from "../content";
import { SectionHead } from "../components/SectionHead";

export function ReasonsSection() {
  return (
    <section className="section section--paper" id="reasons">
      <div className="wrap">
        <SectionHead
          kicker="Reason"
          title="学習舎つむぎが選ばれる理由"
          lead="勉強の進め方は、生徒によって違います。学習舎つむぎが指導で大切にしていることをご紹介します。"
        />

        <div className="worry-block">
          <h3 className="sub-heading">{WORRIES.heading}</h3>
          <p className="section-lead">{WORRIES.lead}</p>
          <ul className="worry-list">
            {WORRIES.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="worry-bridge">{WORRIES.bridge}</p>
        </div>

        <div className="reason-grid">
          {REASONS.map((reason) => (
            <article className="reason-card" key={reason.number}>
              <span className="reason-number">{reason.number}</span>
              <h3>{reason.title}</h3>
              <p>{reason.body}</p>
            </article>
          ))}
        </div>

        <div className="price-links">
          <Link className="link-arrow" to="/#courses">
            小学生・中学生・高校生の個別指導を見る
          </Link>
          <Link className="link-arrow" to="/#price">
            料金の目安を見る
          </Link>
        </div>
      </div>
    </section>
  );
}
