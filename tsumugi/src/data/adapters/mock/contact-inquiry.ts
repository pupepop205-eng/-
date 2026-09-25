import type {
  ContactInquiry,
  ContactInquiryPort,
  ContactInquiryResult,
} from "../../ports/contact-inquiry";

/**
 * 送信先がまだ設定されていないため、この Mock アダプタは
 * 「送信された」という結果を絶対に返さない。
 *
 * 実装時は、このファイルを実際の送信アダプタ（メール送信サービス、API など）に
 * 置き換え、composition-root.ts の接続先を差し替えるだけでよい。
 * そのとき、送信の成否・入力値の検証・スパム対策は送信側でも必ず行うこと。
 */
export function createContactInquiryAdapter(): ContactInquiryPort {
  return {
    async submit(_inquiry: ContactInquiry): Promise<ContactInquiryResult> {
      return { status: "not-configured" };
    },
  };
}
