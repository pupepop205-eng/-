import { SCHOOL, isPlaceholder } from "./content";

/**
 * 構造化データ（Organization / LocalBusiness / BreadcrumbList / WebSite）。
 *
 * 所在地・電話番号・メールアドレスがプレースホルダー（「●」）のままの間は、
 * 実在しない店舗情報を Google に登録させてしまわないよう、構造化データを
 * 一切出力しません。公開時に下の SITE_URL と content.ts の該当項目を
 * 実際の情報へ置き換えると、自動的に出力が始まります。
 */
export const SITE_URL = "";

export const STRUCTURED_DATA_REQUIREMENTS = [
  "SITE_URL に公開ドメイン（https://example.jp 形式）を設定する",
  "content.ts の SCHOOL.address を実際の所在地に置き換える",
  "content.ts の SCHOOL.phone を実際の電話番号に置き換える",
  "content.ts の SCHOOL.email を実際のメールアドレスに置き換える",
  "SCHOOL.hours を実際の受付時間に置き換える",
  "公開ドメイン確定後、index.html に canonical を追加する",
  "公開ドメイン確定後、public/robots.txt に Sitemap 行を追加する",
] as const;

type JsonLdNode = Record<string, unknown>;

/** プレースホルダーがすべて実値に置き換わっているか。 */
export function isStructuredDataPublishable(): boolean {
  return (
    SITE_URL.length > 0 &&
    !isPlaceholder(SCHOOL.address) &&
    !isPlaceholder(SCHOOL.phone) &&
    !isPlaceholder(SCHOOL.email) &&
    !isPlaceholder(SCHOOL.hours)
  );
}

function organizationNode(): JsonLdNode {
  return {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SCHOOL.name,
    description:
      "熊本市の小学生・中学生・高校生を対象に、一人ひとりに合わせた個別指導を行う学習塾です。",
    address: {
      "@type": "PostalAddress",
      addressRegion: SCHOOL.addressRegion,
      addressLocality: SCHOOL.addressLocality,
      streetAddress: SCHOOL.address,
      addressCountry: "JP",
    },
    telephone: SCHOOL.phone,
    email: SCHOOL.email,
  };
}

function localBusinessNode(): JsonLdNode {
  return {
    "@type": ["LocalBusiness", "EducationalOrganization"],
    "@id": `${SITE_URL}/#localbusiness`,
    name: SCHOOL.name,
    parentOrganization: { "@id": `${SITE_URL}/#organization` },
    description:
      "熊本市の個別指導塾。小学生・中学生・高校生を対象に、学習の習慣づくりから定期テスト対策、高校受験・大学受験までをサポートします。",
    address: {
      "@type": "PostalAddress",
      addressRegion: SCHOOL.addressRegion,
      addressLocality: SCHOOL.addressLocality,
      streetAddress: SCHOOL.address,
      addressCountry: "JP",
    },
    telephone: SCHOOL.phone,
    email: SCHOOL.email,
    openingHours: SCHOOL.hours,
    areaServed: { "@type": "City", name: "熊本市" },
    knowsAbout: [
      "個別指導",
      "定期テスト対策",
      "高校受験",
      "大学受験",
      "小学生の学習",
      "中学生の学習",
      "高校生の学習",
    ],
  };
}

function websiteNode(): JsonLdNode {
  return {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SCHOOL.name,
    inLanguage: "ja",
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

function breadcrumbNode(): JsonLdNode {
  return {
    "@type": "BreadcrumbList",
    "@id": `${SITE_URL}/#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "お問い合わせ", item: `${SITE_URL}/#contact` },
    ],
  };
}

/** 置き換えが済んでいない場合は null を返し、何も出力しない。 */
export function buildStructuredData(): JsonLdNode | null {
  if (!isStructuredDataPublishable()) return null;
  return {
    "@context": "https://schema.org",
    "@graph": [organizationNode(), localBusinessNode(), websiteNode(), breadcrumbNode()],
  };
}
