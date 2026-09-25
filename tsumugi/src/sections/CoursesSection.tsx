import { Link } from "react-router-dom";
import { GRADE_COURSES } from "../content";
import { SectionHead } from "../components/SectionHead";

/** 学年ごとに、次に読むと役立つページ内リンク（内部リンク）。 */
const RELATED: Record<string, { to: string; label: string }[]> = {
  "course-elementary": [
    { to: "/#price", label: "小学生の料金の目安" },
    { to: "/#contact", label: "無料体験について問い合わせる" },
  ],
  "course-junior-high": [
    { to: "/#test-prep", label: "熊本市の中学生向け定期テスト対策" },
    { to: "/#price", label: "中学生の料金の目安" },
  ],
  "course-high-school": [
    { to: "/#exam-university", label: "大学受験対策" },
    { to: "/#price", label: "高校生の料金の目安" },
  ],
};

export function CoursesSection() {
  return (
    <section className="section" id="courses">
      <div className="wrap">
        <SectionHead
          kicker="Course"
          title="小学生・中学生・高校生の個別指導"
          lead="学年ごとに、学習内容と指導の考え方をご案内します。どの学年も、現在の学力と目標を確認したうえで学習計画を組み立てます。"
        />

        <div className="course-list">
          {GRADE_COURSES.map((course) => (
            <article className="course-card" id={course.id} key={course.id}>
              <div className="course-media">
                <img
                  src={course.image}
                  alt={course.imageAlt}
                  width={1000}
                  height={750}
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="course-body">
                <span className="course-grade">{course.grade}</span>
                <h3>{course.title}</h3>
                <p className="course-summary">{course.summary}</p>

                <dl className="course-def">
                  <div>
                    <dt>対象</dt>
                    <dd>{course.target}</dd>
                  </div>
                  <div>
                    <dt>学習内容</dt>
                    <dd>{course.content}</dd>
                  </div>
                  <div>
                    <dt>指導方針</dt>
                    <dd>{course.policy}</dd>
                  </div>
                  <div>
                    <dt>おすすめの生徒</dt>
                    <dd>{course.recommended}</dd>
                  </div>
                </dl>

                <div className="course-links">
                  {RELATED[course.id]?.map((link) => (
                    <Link className="link-arrow" to={link.to} key={link.to}>
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
