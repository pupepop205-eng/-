import { Link } from "react-router-dom";
import { FOOTER_LINKS, MEDIA_DISCLOSURE, SCHOOL } from "../content";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-top">
          <div>
            <div className="footer-brand">
              <span className="brand-mark" aria-hidden="true">
                つ
              </span>
              <span className="brand-text">
                <span className="brand-name">{SCHOOL.name}</span>
                <span className="brand-sub">熊本市の個別指導塾</span>
              </span>
            </div>
            <p className="footer-concept">{SCHOOL.concept}</p>
            <p className="footer-concept">{MEDIA_DISCLOSURE}</p>
          </div>

          <nav className="footer-nav" aria-label="フッターメニュー">
            <ul>
              {FOOTER_LINKS.map((item) => (
                <li key={item.id}>
                  <Link to={`/#${item.id}`}>{item.label}</Link>
                </li>
              ))}
              <li>
                <Link to="/privacy">プライバシーポリシー</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="footer-bottom">
          <p>
            {SCHOOL.address}／{SCHOOL.phone}
          </p>
          <div className="footer-legal">
            <Link to="/privacy">プライバシーポリシー</Link>
            <p>© {new Date().getFullYear()} 学習舎つむぎ（ホームページ制作の練習用に作成した架空のサイトです）</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
