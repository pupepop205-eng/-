import { Link } from "react-router-dom";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";

export function NotFoundPage() {
  return (
    <>
      <a className="skip-link" href="#main">
        本文へスキップ
      </a>
      <SiteHeader />

      <main id="main">
        <div className="notfound">
          <h1>ページが見つかりませんでした</h1>
          <p>
            お探しのページは、移動または削除された可能性があります。
            <br />
            お手数ですが、ホームページからご覧になりたい内容をお探しください。
          </p>
          <Link className="btn btn--primary btn--lg" to="/">
            ホームへ戻る
          </Link>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
