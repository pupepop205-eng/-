/**
 * お問い合わせフォームのドメイン境界。
 * UI はこの Port だけを知り、送信先（メール送信サービス・API・CMS など）には依存しない。
 */

export type ContactInquiry = {
  guardianName: string;
  studentGrade: string;
  phone: string;
  email: string;
  course: string;
  message: string;
};

export type ContactInquiryResult =
  | { status: "accepted"; referenceId: string }
  | { status: "not-configured" }
  | { status: "failed" };

export interface ContactInquiryPort {
  submit(inquiry: ContactInquiry): Promise<ContactInquiryResult>;
}
