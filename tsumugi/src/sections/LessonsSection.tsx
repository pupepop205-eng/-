import { LESSON, MEDIA_DISCLOSURE, TUTORS } from "../content";
import { media } from "../media";
import { SectionHead } from "../components/SectionHead";

export function LessonsSection() {
  return (
    <section className="section section--paper" id="lessons">
      <div className="wrap">
        <SectionHead kicker="Lesson" title={LESSON.heading} lead={LESSON.lead} />

        <h3 className="sub-heading">{LESSON.flowHeading}</h3>
        <ol className="flow-list" style={{ marginTop: "1.5rem" }}>
          {LESSON.flow.map((item) => (
            <li className="flow-step" key={item.step}>
              <span className="step">{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </li>
          ))}
        </ol>

        <h3 className="sub-heading lesson-subhead">{LESSON.policyHeading}</h3>
        <div className="policy-grid">
          {LESSON.policies.map((policy) => (
            <article className="policy-card" key={policy.title}>
              <h3>{policy.title}</h3>
              <p>{policy.body}</p>
            </article>
          ))}
        </div>

        <figure className="lesson-media">
          <img
            src={media.studyDesk}
            alt="学習机の上のノートと筆記用具のイメージ"
            width={1024}
            height={768}
            loading="lazy"
            decoding="async"
          />
          <figcaption className="media-disclosure">{MEDIA_DISCLOSURE}</figcaption>
        </figure>

        <h3 className="sub-heading lesson-subhead">{TUTORS.heading}</h3>
        <p className="tutor-note">{TUTORS.note}</p>
        <div className="tutor-grid">
          {TUTORS.slots.map((slot) => (
            <div className="tutor-slot" key={slot.id}>
              <p>{slot.role}</p>
              <ul>
                {slot.fields.map((field) => (
                  <li key={field}>{field}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
