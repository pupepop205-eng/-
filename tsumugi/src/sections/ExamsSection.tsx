import { Link } from "react-router-dom";
import { EXAMS } from "../content";
import { SectionHead } from "../components/SectionHead";

export function ExamsSection() {
  return (
    <section className="section" id="exams">
      <div className="wrap">
        <SectionHead kicker="Exam" title={EXAMS.heading} lead={EXAMS.lead} />

        <div className="exam-block exam-block--prep">
          <h3 className="sub-heading">{EXAMS.testPrep.heading}</h3>
          <p className="section-lead">{EXAMS.testPrep.lead}</p>

          <div className="prep-list">
            {EXAMS.testPrep.items.map((item) => (
              <article className="prep-item" key={item.title}>
                <h4>{item.title}</h4>
                <p>{item.body}</p>
              </article>
            ))}
          </div>

          <div className="price-links">
            <Link className="link-arrow" to="/#course-junior-high">
              中学生の個別指導を見る
            </Link>
            <Link className="link-arrow" to="/#contact">
              定期テスト対策について相談する
            </Link>
          </div>
        </div>

        <div className="exam-block">
          <div className="exam-grid">
            {EXAMS.entrance.map((exam) => (
              <article className="exam-card" id={exam.id} key={exam.id}>
                <h3>{exam.heading}</h3>
                <p>{exam.body}</p>
              </article>
            ))}
          </div>

          <div className="price-links">
            <Link className="link-arrow" to="/#course-high-school">
              高校生の個別指導を見る
            </Link>
            <Link className="link-arrow" to="/#price">
              料金の目安を見る
            </Link>
          </div>
        </div>

        <p className="exam-note">{EXAMS.note}</p>
      </div>
    </section>
  );
}
