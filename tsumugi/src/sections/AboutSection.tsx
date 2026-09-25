import { ABOUT, MEDIA_DISCLOSURE } from "../content";
import { media } from "../media";
import { SectionHead } from "../components/SectionHead";

export function AboutSection() {
  return (
    <section className="section" id="about">
      <div className="wrap">
        <div className="about-grid">
          <div>
            <SectionHead kicker="About" title={ABOUT.heading} lead={ABOUT.lead} />
            <div className="prose">
              {ABOUT.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <figure className="about-figure">
            <img
              src={media.parentInterview}
              alt="教室の面談スペースのイメージ（向かい合う椅子と、資料を置いたテーブル）"
              width={1024}
              height={768}
              loading="lazy"
              decoding="async"
            />
            <figcaption>{MEDIA_DISCLOSURE}</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
