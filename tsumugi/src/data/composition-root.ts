import type { ContactInquiryPort } from "./ports/contact-inquiry";
import { createContactInquiryAdapter } from "./adapters/mock/contact-inquiry";

/**
 * Composition Root。
 * UI はここから Port を受け取り、どのアダプタが接続されているかを知らない。
 * 送信先が決まったら、この1行を実アダプタに差し替える。
 */
export const contactInquiry: ContactInquiryPort = createContactInquiryAdapter();
