import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { SCHOOL } from "../content";

export function PrivacyPage() {
  return (
    <>
      <a className="skip-link" href="#main">
        本文へスキップ
      </a>
      <SiteHeader />

      <main id="main">
        <div className="page-head">
          <div className="wrap wrap--narrow">
            <h1>プライバシーポリシー</h1>
          </div>
        </div>

        <div className="wrap wrap--narrow legal">
          <p>
            {SCHOOL.name}（以下「当塾」といいます）は、お問い合わせや無料体験のお申し込みを通じて
            お預かりする個人情報を、以下の方針に基づいて取り扱います。
          </p>

          <h2>1. 取得する情報</h2>
          <p>
            お問い合わせフォームやお電話・メールでのご連絡を通じて、保護者の方のお名前、生徒の学年、
            電話番号、メールアドレス、希望するコース、お問い合わせ内容などをお預かりします。
          </p>

          <h2>2. 利用目的</h2>
          <ol>
            <li>お問い合わせへの回答、および無料体験や個別相談のご案内</li>
            <li>学習計画のご提案、授業に関するご連絡</li>
            <li>当塾のサービスに関するご案内</li>
          </ol>

          <h2>3. 第三者への提供</h2>
          <p>
            法令に基づく場合を除き、ご本人の同意なく個人情報を第三者へ提供することはありません。
          </p>

          <h2>4. 安全管理</h2>
          <p>
            お預かりした個人情報は、漏えい・滅失・毀損の防止のため、適切な安全管理措置を講じて保管します。
          </p>

          <h2>5. 開示・訂正・削除</h2>
          <p>
            ご本人からの求めにより、個人情報の開示・訂正・削除に応じます。ご希望の際は、
            下記の窓口までご連絡ください。
          </p>

          <h2>6. お問い合わせ窓口</h2>
          <p>
            {SCHOOL.name}
            <br />
            所在地：{SCHOOL.address}
            <br />
            電話番号：{SCHOOL.phone}
            <br />
            メールアドレス：{SCHOOL.email}
          </p>

          <h2>7. 本方針の見直し</h2>
          <p>
            法令の改正や運用の変更に応じて、本方針を改定することがあります。改定後の内容は、
            本ページに掲載した時点から適用されます。
          </p>

          <p className="legal-note">
            このプライバシーポリシーは、ホームページ制作の練習用に作成した架空のサイトのものです。
            所在地・電話番号・メールアドレスはプレースホルダーであり、実在する事業者の情報ではありません。
            実際に公開する際は、運用に合わせて内容と連絡先を確認・修正してください。
          </p>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
