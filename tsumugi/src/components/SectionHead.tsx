type Props = {
  kicker: string;
  title: string;
  lead?: string;
};

/** 各セクションの見出し。H2 はページ全体でここだけが出力する。 */
export function SectionHead({ kicker, title, lead }: Props) {
  return (
    <div className="section-head">
      <p className="section-kicker">{kicker}</p>
      <h2 className="section-title">{title}</h2>
      {lead ? <p className="section-lead">{lead}</p> : null}
    </div>
  );
}
