import { ACCESS, MEDIA_DISCLOSURE } from "../content";
import { media } from "../media";
import { SectionHead } from "../components/SectionHead";

export function AccessSection() {
  return (
    <section className="section section--paper" id="access">
      <div className="wrap">
        <SectionHead kicker="Access" title={ACCESS.heading} lead={ACCESS.lead} />

        <div className="access-grid">
          <div>
            <dl className="access-table">
              {ACCESS.rows.map((row) => (
                <div key={row.label}>
                  <dt>{row.label}</dt>
                  <dd>
                    {row.value}
                    {row.note ? <span className="note">{row.note}</span> : null}
                  </dd>
                </div>
              ))}
            </dl>

            <ul className="access-directions">
              {ACCESS.directions.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>

          <div>
            <figure className="access-figure">
              <img
                src={media.classroomEntrance}
                alt="学習塾の入口のイメージ（ガラス扉と鉢植えのある清潔な外観）"
                width={1024}
                height={640}
                loading="lazy"
                decoding="async"
              />
              <figcaption className="media-disclosure">{MEDIA_DISCLOSURE}</figcaption>
            </figure>

            <div className="map-frame">
              <p>{ACCESS.mapNote}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
