import { Link } from "react-router-dom";
import { NAV_ITEMS, SCHOOL } from "../content";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <Link className="brand" to="/">
          <span className="brand-mark" aria-hidden="true">
            つ
          </span>
          <span className="brand-text">
            <span className="brand-name">{SCHOOL.name}</span>
            <span className="brand-sub">小学生・中学生・高校生</span>
          </span>
        </Link>

        <nav className="header-nav" aria-label="ページ内メニュー">
          <ul>
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <Link to={`/#${item.id}`}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-cta">
          <Link className="btn btn--primary" to="/#contact">
            無料体験のご相談
          </Link>
        </div>

        <details className="nav-disclosure">
          <summary>メニュー</summary>
          <nav aria-label="ページ内メニュー（スマートフォン）">
            <ul>
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <Link to={`/#${item.id}`}>{item.label}</Link>
                </li>
              ))}
              <li>
                <Link to="/#contact">無料体験のご相談</Link>
              </li>
            </ul>
          </nav>
        </details>
      </div>
    </header>
  );
}
