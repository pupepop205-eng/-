import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

/**
 * ルート遷移とページ内アンカーのスクロールを一元管理する。
 * ヘッダーが固定表示のため、対象の上端が見出しに隠れないよう scroll-margin で調整している。
 */
function useHashScroll() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: "auto" });
      return;
    }

    const id = decodeURIComponent(hash.slice(1));
    const target = document.getElementById(id);
    if (!target) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
  }, [pathname, hash]);
}

export function RootLayout() {
  useHashScroll();
  return <Outlet />;
}
