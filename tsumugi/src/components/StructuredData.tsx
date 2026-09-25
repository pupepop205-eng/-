import { buildStructuredData } from "../structured-data";

/**
 * 所在地・電話番号などが実際の情報に置き換わるまで、構造化データは何も出力しない。
 * 置き換え後は Organization / LocalBusiness / WebSite / BreadcrumbList が自動で出力される。
 */
export function StructuredData() {
  const data = buildStructuredData();
  if (!data) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
