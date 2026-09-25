import { Link } from "react-router-dom";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { StructuredData } from "../components/StructuredData";
import { ContactForm } from "../components/ContactForm";
import { SectionHead } from "../components/SectionHead";
import { AboutSection } from "../sections/AboutSection";
import { ReasonsSection } from "../sections/ReasonsSection";
import { CoursesSection } from "../sections/CoursesSection";
import { LessonsSection } from "../sections/LessonsSection";
import { ExamsSection } from "../sections/ExamsSection";
import { PricingSection } from "../sections/PricingSection";
import { FaqSection } from "../sections/FaqSection";
import { AccessSection } from "../sections/AccessSection";
import { CONTACT, HERO, HERO_FACTS, MEDIA_DISCLOSURE, SCHOOL } from "../content";
import { media } from "../media";

export function HomePage() {
  return (
    <>
      <StructuredData />
      <a className="skip-link" href="#main">
        本文へスキップ
      </a>
      <SiteHeader />

      <main id="main">
        <section className="hero">
          <div className="wrap">
            <div className="hero-inner">
              <div className="hero-copy">
                <h1>
                  <span className="hero-seo">{HERO.seoTitle}</span>
                </h1>
                <p className="hero-catch">{HERO.catchCopy}</p>
                <p className="hero-sub">{HERO.subCopy}</p>
                <div className="hero-actions">
                  <Link className="btn btn--primary btn--lg" to="/#contact">
                    {HERO.primaryCta}
                  </Link>
                  <Link className="btn btn--ghost" to="/#lessons">
                    {HERO.secondaryCta}
                  </Link>
                </div>
              </div>

              <div className="hero-media">
                <img
                  src={media.heroClassroom}
                  alt="個別指導教室の内観のイメージ（ブース席が並ぶ明るい学習スペース）"
                  width={1024}
                  height={683}
                  fetchPriority="high"
                  decoding="async"
                />
                <p className="media-disclosure">{MEDIA_DISCLOSURE}</p>
              </div>
            </div>

            <dl className="hero-facts">
              {HERO_FACTS.map((fact) => (
                <div key={fact.label}>
                  <dt>{fact.label}</dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <AboutSection />
        <ReasonsSection />
        <CoursesSection />
        <LessonsSection />
        <ExamsSection />
        <PricingSection />
        <FaqSection />
        <AccessSection />

        <section className="section section--navy" id="contact">
          <div className="wrap">
            <SectionHead kicker="Contact" title={CONTACT.heading} lead={CONTACT.lead} />

            <div className="contact-grid">
              <div className="contact-direct">
                <h3>{CONTACT.directHeading}</h3>
                <dl>
                  <div>
                    <dt>電話番号</dt>
                    <dd>
                      {SCHOOL.phone}
                      <span className="note">{SCHOOL.phoneNote}</span>
                    </dd>
                  </div>
                  <div>
                    <dt>メールアドレス</dt>
                    <dd>
                      {SCHOOL.email}
                      <span className="note">{SCHOOL.emailNote}</span>
                    </dd>
                  </div>
                  <div>
                    <dt>所在地</dt>
                    <dd>
                      {SCHOOL.address}
                      <span className="note">{SCHOOL.addressNote}</span>
                    </dd>
                  </div>
                </dl>
                <p className="contact-note">{CONTACT.directNote}</p>
              </div>

              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />

      <div className="mobile-cta">
        <Link className="btn btn--primary" to="/#contact">
          無料体験のご相談
        </Link>
      </div>
    </>
  );
}
