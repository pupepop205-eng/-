import { useEffect, useRef, useState } from "react";
import type { FormEvent } from "react";
import { CONTACT } from "../content";
import { contactInquiry } from "../data/composition-root";
import type { ContactInquiry } from "../data/ports/contact-inquiry";

type FieldName = keyof ContactInquiry;

type FieldSpec = {
  name: FieldName;
  label: string;
  kind: "input" | "select" | "textarea";
  type?: "text" | "email" | "tel";
  required: boolean;
  autoComplete?: string;
  inputMode?: "text" | "email" | "tel";
  options?: readonly string[];
  placeholder?: string;
  hint?: string;
};

const GRADES = [
  "小学1年",
  "小学2年",
  "小学3年",
  "小学4年",
  "小学5年",
  "小学6年",
  "中学1年",
  "中学2年",
  "中学3年",
  "高校1年",
  "高校2年",
  "高校3年",
  "その他",
] as const;

const COURSES = [
  "小学生の個別指導",
  "中学生の個別指導",
  "高校生の個別指導",
  "定期テスト対策",
  "高校受験対策",
  "大学受験対策",
  "まだ決めていない",
] as const;

const FIELDS: readonly FieldSpec[] = [
  {
    name: "guardianName",
    label: "保護者のお名前",
    kind: "input",
    type: "text",
    required: true,
    autoComplete: "name",
    placeholder: "例：山田 花子",
  },
  {
    name: "studentGrade",
    label: "生徒の学年",
    kind: "select",
    required: true,
    options: GRADES,
  },
  {
    name: "phone",
    label: "電話番号",
    kind: "input",
    type: "tel",
    required: false,
    autoComplete: "tel",
    inputMode: "tel",
    placeholder: "例：000-0000-0000",
    hint: "お電話でのご連絡を希望される場合のみご入力ください。",
  },
  {
    name: "email",
    label: "メールアドレス",
    kind: "input",
    type: "email",
    required: true,
    autoComplete: "email",
    inputMode: "email",
    placeholder: "例：example@example.jp",
  },
  {
    name: "course",
    label: "希望コース",
    kind: "select",
    required: false,
    options: COURSES,
    hint: "まだ決まっていない場合も、そのままお送りいただけます。",
  },
  {
    name: "message",
    label: "お問い合わせ内容",
    kind: "textarea",
    required: true,
    placeholder: "例：中学2年の子どもが数学を苦手にしています。無料体験授業について相談したいです。",
  },
];

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const EMPTY: ContactInquiry = {
  guardianName: "",
  studentGrade: "",
  phone: "",
  email: "",
  course: "",
  message: "",
};

function validate(values: ContactInquiry): Partial<Record<FieldName, string>> {
  const errors: Partial<Record<FieldName, string>> = {};

  if (!values.guardianName.trim()) errors.guardianName = "保護者のお名前を入力してください。";
  if (!values.studentGrade.trim()) errors.studentGrade = "生徒の学年を選択してください。";
  if (!values.email.trim()) {
    errors.email = "メールアドレスを入力してください。";
  } else if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = "メールアドレスの形式をご確認ください。";
  }
  if (!values.message.trim()) errors.message = "お問い合わせ内容を入力してください。";

  return errors;
}

type Status =
  | { kind: "idle" }
  | { kind: "submitting" }
  | { kind: "accepted"; referenceId: string }
  | { kind: "not-configured" }
  | { kind: "failed" };

export function ContactForm() {
  const [values, setValues] = useState<ContactInquiry>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({});
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const [errorFocusToken, setErrorFocusToken] = useState(0);
  const alertRef = useRef<HTMLDivElement>(null);

  const errorList = Object.entries(errors) as [FieldName, string][];

  // エラー一覧は入力チェックの後に描画されるため、描画後にフォーカスを移す
  useEffect(() => {
    if (errorFocusToken === 0) return;
    alertRef.current?.focus();
  }, [errorFocusToken]);

  function update(name: FieldName, value: string) {
    setValues((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus({ kind: "idle" });
      setErrorFocusToken((token) => token + 1);
      return;
    }

    setStatus({ kind: "submitting" });
    const result = await contactInquiry.submit(values);

    if (result.status === "accepted") {
      setStatus({ kind: "accepted", referenceId: result.referenceId });
      setValues(EMPTY);
      return;
    }
    setStatus(result.status === "not-configured" ? { kind: "not-configured" } : { kind: "failed" });
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <p className="contact-form__note">{CONTACT.formNote}</p>

      {errorList.length > 0 && (
        <div className="form-alert" role="alert" tabIndex={-1} ref={alertRef}>
          <strong>入力内容をご確認ください。</strong>
          <ul>
            {errorList.map(([name, message]) => (
              <li key={name}>{message}</li>
            ))}
          </ul>
        </div>
      )}

      {FIELDS.map((field) => {
        const id = `contact-${field.name}`;
        const errorId = `${id}-error`;
        const hintId = `${id}-hint`;
        const invalid = Boolean(errors[field.name]);
        const describedBy = [invalid ? errorId : null, field.hint ? hintId : null]
          .filter(Boolean)
          .join(" ");

        return (
          <div className="field" key={field.name}>
            <label htmlFor={id}>
              {field.label}
              <span className={field.required ? "req" : "req req--optional"}>
                {field.required ? "必須" : "任意"}
              </span>
            </label>

            {field.kind === "textarea" ? (
              <textarea
                id={id}
                name={field.name}
                value={values[field.name]}
                placeholder={field.placeholder}
                required={field.required}
                aria-invalid={invalid}
                aria-describedby={describedBy || undefined}
                onChange={(event) => update(field.name, event.target.value)}
              />
            ) : field.kind === "select" ? (
              <select
                id={id}
                name={field.name}
                value={values[field.name]}
                required={field.required}
                aria-invalid={invalid}
                aria-describedby={describedBy || undefined}
                onChange={(event) => update(field.name, event.target.value)}
              >
                <option value="">選択してください</option>
                {field.options?.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : (
              <input
                id={id}
                name={field.name}
                type={field.type}
                value={values[field.name]}
                placeholder={field.placeholder}
                required={field.required}
                autoComplete={field.autoComplete}
                inputMode={field.inputMode}
                aria-invalid={invalid}
                aria-describedby={describedBy || undefined}
                onChange={(event) => update(field.name, event.target.value)}
              />
            )}

            {field.hint && (
              <p className="field-hint" id={hintId}>
                {field.hint}
              </p>
            )}

            {invalid && (
              <p className="field-error" id={errorId}>
                {errors[field.name]}
              </p>
            )}
          </div>
        );
      })}

      <div className="form-actions">
        <button className="btn btn--primary btn--lg btn--block" type="submit" disabled={status.kind === "submitting"}>
          {status.kind === "submitting" ? "送信中…" : CONTACT.cta}
        </button>
      </div>

      <div aria-live="polite">
        {status.kind === "not-configured" && (
          <div className="form-status form-status--not-configured" role="status">
            <strong>送信先が未設定のため、送信されませんでした。</strong>
            このフォームは送信先がまだ設定されていないため、入力内容は送信されず、保存もされていません。設定が完了し次第ご利用いただけます。
          </div>
        )}

        {status.kind === "accepted" && (
          <div className="form-status form-status--accepted" role="status">
            <strong>お問い合わせを承りました。</strong>
            受付番号は {status.referenceId} です。内容を確認のうえ、担当者よりご連絡します。
          </div>
        )}

        {status.kind === "failed" && (
          <div className="form-status form-status--failed" role="status">
            <strong>送信に失敗しました。</strong>
            時間をおいて、もう一度お試しください。
          </div>
        )}
      </div>
    </form>
  );
}
