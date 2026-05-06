// form.jsx — マナビエル 無料体験申し込みフォーム

const NETLIFY_FORM_NAME = 'free-trial';
const NETLIFY_FORM_ACTION = '/contact.html';

const GRADE_OPTIONS = [
  { value: '', label: '選択してください' },
  { value: '小1', label: '小学1年生' },
  { value: '小2', label: '小学2年生' },
  { value: '小3', label: '小学3年生' },
  { value: '小4', label: '小学4年生' },
  { value: '小5', label: '小学5年生' },
  { value: '小6', label: '小学6年生' },
  { value: '中1', label: '中学1年生' },
  { value: '中2', label: '中学2年生' },
  { value: '中3', label: '中学3年生' },
  { value: '高1', label: '高校1年生' },
  { value: '高2', label: '高校2年生' },
  { value: '高3', label: '高校3年生' },
  { value: '既卒', label: '既卒・浪人生' },
  { value: 'その他', label: 'その他' },
];

const SOURCE_OPTIONS = [
  '', 'Web検索（Google等）', 'SNS（Instagram / X）', 'ご紹介・口コミ',
  'チラシ・看板', 'ブログ・記事', 'その他',
];

// ── 共通スタイル ───────────────────────────────────
const labelStyle = {
  display: 'flex', alignItems: 'center', gap: 10,
  fontSize: 14, fontWeight: 700, color: 'var(--ink)',
  marginBottom: 10,
};
const inputBase = {
  width: '100%', boxSizing: 'border-box',
  padding: '14px 16px',
  fontSize: 15, fontFamily: 'inherit',
  background: '#fff',
  border: '1.5px solid var(--line)',
  borderRadius: 8,
  color: 'var(--ink)',
  outline: 'none',
  transition: 'border-color .15s ease, box-shadow .15s ease',
};
const inputErr = {
  borderColor: '#e8825a',
  boxShadow: '0 0 0 3px rgba(232,130,90,0.15)',
};
const inputFocus = {
  borderColor: 'var(--ink)',
  boxShadow: '0 0 0 3px rgba(0,0,0,0.08)',
};

// ── ラベルバッジ（必須/任意）────────────────────
const RequiredBadge = () => (
  <span style={{
    display: 'inline-flex', alignItems: 'center',
    padding: '3px 8px', borderRadius: 4,
    background: 'var(--orange)', color: '#fff',
    fontSize: 11, fontWeight: 700, letterSpacing: '0.04em',
  }}>必須</span>
);
const OptionalBadge = () => (
  <span style={{
    display: 'inline-flex', alignItems: 'center',
    padding: '3px 8px', borderRadius: 4,
    background: '#f0eee9', color: 'var(--ink-mute)',
    fontSize: 11, fontWeight: 600, letterSpacing: '0.04em',
  }}>任意</span>
);

// ── フィールドラッパー ─────────────────────────
function Field({ label, required, error, hint, children }) {
  return (
    <div style={{ marginBottom: 28 }}>
      <label style={labelStyle}>
        {label}
        {required ? <RequiredBadge/> : <OptionalBadge/>}
      </label>
      {children}
      {hint && !error && (
        <div style={{ marginTop: 8, fontSize: 12.5, color: 'var(--ink-mute)' }}>{hint}</div>
      )}
      {error && (
        <div style={{ marginTop: 8, fontSize: 13, color: '#c25a2e', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 6 }}>
          <span aria-hidden="true">⚠</span>{error}
        </div>
      )}
    </div>
  );
}

// ── 入力 (controlled, focus styling) ───────────────
function TextInput({ name, value, onChange, error, type = 'text', placeholder, autoComplete }) {
  const [focus, setFocus] = React.useState(false);
  return (
    <input
      name={name}
      type={type}
      value={value}
      placeholder={placeholder}
      autoComplete={autoComplete}
      onChange={(e) => onChange(e.target.value)}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      style={{
        ...inputBase,
        ...(focus ? inputFocus : null),
        ...(error ? inputErr : null),
      }}
    />
  );
}

function TextArea({ name, value, onChange, error, placeholder, rows = 5 }) {
  const [focus, setFocus] = React.useState(false);
  return (
    <textarea
      name={name}
      value={value}
      placeholder={placeholder}
      rows={rows}
      onChange={(e) => onChange(e.target.value)}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      style={{
        ...inputBase,
        resize: 'vertical',
        lineHeight: 1.7,
        ...(focus ? inputFocus : null),
        ...(error ? inputErr : null),
      }}
    />
  );
}

function SelectInput({ name, value, onChange, options, error }) {
  const [focus, setFocus] = React.useState(false);
  return (
    <div style={{ position: 'relative' }}>
      <select
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        style={{
          ...inputBase,
          appearance: 'none',
          paddingRight: 44,
          cursor: 'pointer',
          ...(focus ? inputFocus : null),
          ...(error ? inputErr : null),
        }}
      >
        {options.map((o) => {
          if (typeof o === 'string') {
            return <option key={o} value={o}>{o || '選択してください'}</option>;
          }
          return <option key={o.value} value={o.value}>{o.label}</option>;
        })}
      </select>
      <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true"
           style={{ position: 'absolute', right: 18, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: 'var(--ink-mute)' }}>
        <path d="M3 5 L7 9 L11 5" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  );
}

// ── メインフォーム ─────────────────────────────
function ContactForm() {
  const [data, setData] = React.useState({
    parentName: '', email: '', phone: '',
    childGrade: '', childName: '', school: '',
    message: '', source: '',
    privacy: false,
  });
  const [errors, setErrors] = React.useState({});
  const [submitting, setSubmitting] = React.useState(false);
  const [submitError, setSubmitError] = React.useState(null);

  const set = (k) => (v) => setData((d) => ({ ...d, [k]: v }));

  const validate = () => {
    const e = {};
    if (!data.parentName.trim()) e.parentName = 'お名前をご入力ください';
    if (!data.email.trim()) e.email = 'メールアドレスをご入力ください';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) e.email = 'メールアドレスの形式が正しくありません';
    if (!data.childGrade) e.childGrade = 'お子さまの学年をご選択ください';
    if (data.phone && !/^[0-9\-+\s()]{8,}$/.test(data.phone.trim())) e.phone = '電話番号の形式が正しくありません';
    if (!data.privacy) e.privacy = 'プライバシーポリシーへの同意が必要です';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError(null);
    if (!validate()) {
      // 最初のエラー要素にスクロール
      setTimeout(() => {
        const firstErr = document.querySelector('[data-err="1"]');
        if (firstErr) firstErr.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 50);
      return;
    }
    setSubmitting(true);
    try {
      const formData = new FormData(e.currentTarget);
      const res = await fetch(NETLIFY_FORM_ACTION, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString(),
      });
      if (res.ok) {
        window.location.href = 'thanks.html';
      } else {
        throw new Error('送信に失敗しました');
      }
    } catch (err) {
      setSubmitError(err.message || '送信に失敗しました。少し時間をおいて再度お試しください。');
      setSubmitting(false);
    }
  };

  return (
    <form name={NETLIFY_FORM_NAME} method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={handleSubmit} noValidate>
      <input type="hidden" name="form-name" value={NETLIFY_FORM_NAME} />
      <p style={{ display: 'none' }}>
        <label>入力しないでください：<input name="bot-field" tabIndex="-1" autoComplete="off" /></label>
      </p>

      {/* 保護者氏名 */}
      <div data-err={errors.parentName ? '1' : '0'}>
        <Field label="保護者さまのお名前" required error={errors.parentName}>
          <TextInput name="parentName" value={data.parentName} onChange={set('parentName')}
                     placeholder="例：山田 花子" autoComplete="name" error={errors.parentName} />
        </Field>
      </div>

      {/* メール */}
      <div data-err={errors.email ? '1' : '0'}>
        <Field label="メールアドレス" required error={errors.email}
               hint="ご返信先となるメールアドレスをご入力ください">
          <TextInput name="email" value={data.email} onChange={set('email')} type="email"
                     placeholder="example@email.com" autoComplete="email" error={errors.email} />
        </Field>
      </div>

      {/* 電話 */}
      <div data-err={errors.phone ? '1' : '0'}>
        <Field label="電話番号" error={errors.phone} hint="日中ご連絡のつく番号">
          <TextInput name="phone" value={data.phone} onChange={set('phone')} type="tel"
                     placeholder="090-1234-5678" autoComplete="tel" error={errors.phone} />
        </Field>
      </div>

      {/* 学年 */}
      <div data-err={errors.childGrade ? '1' : '0'}>
        <Field label="お子さまの学年" required error={errors.childGrade}>
          <SelectInput name="childGrade" value={data.childGrade} onChange={set('childGrade')}
                       options={GRADE_OPTIONS} error={errors.childGrade} />
        </Field>
      </div>

      {/* 子の氏名 */}
      <Field label="お子さまのお名前">
        <TextInput name="childName" value={data.childName} onChange={set('childName')}
                   placeholder="例：山田 太郎" />
      </Field>

      {/* 通学先 */}
      <Field label="通学先・学校名">
        <TextInput name="school" value={data.school} onChange={set('school')}
                   placeholder="例：◯◯市立◯◯中学校" />
      </Field>

      {/* 相談 */}
      <Field label="ご相談・ご質問"
             hint="現在の数学の状況や気になる点など、自由にお書きください（任意）">
        <TextArea name="message" value={data.message} onChange={set('message')} rows={6}
                  placeholder="例：因数分解でつまずいている。中3だけど中2範囲から不安があります。" />
      </Field>

      {/* どこで知ったか */}
      <Field label="どこで知りましたか？">
        <SelectInput name="source" value={data.source} onChange={set('source')} options={SOURCE_OPTIONS} />
      </Field>

      {/* プライバシー同意 */}
      <div data-err={errors.privacy ? '1' : '0'} style={{ marginTop: 8, marginBottom: 32 }}>
        <label style={{
          display: 'flex', alignItems: 'flex-start', gap: 12, cursor: 'pointer',
          padding: 16, borderRadius: 8,
          border: '1.5px solid ' + (errors.privacy ? '#e8825a' : 'var(--line)'),
          background: errors.privacy ? 'rgba(232,130,90,0.05)' : '#fff',
          transition: 'all .15s ease',
        }}>
          <input
            name="privacy"
            type="checkbox"
            checked={data.privacy}
            onChange={(e) => { set('privacy')(e.target.checked); if (e.target.checked) setErrors((er) => ({ ...er, privacy: undefined })); }}
            style={{
              marginTop: 3, width: 18, height: 18,
              accentColor: 'var(--orange)', cursor: 'pointer', flexShrink: 0,
            }}
          />
          <span style={{ fontSize: 14.5, lineHeight: 1.7, color: 'var(--ink)' }}>
            <a href="privacy.html" target="_blank" rel="noopener" style={{ color: 'var(--blue)', textDecoration: 'underline', textUnderlineOffset: 3, fontWeight: 600 }}>プライバシーポリシー</a>
            に同意します
            <span style={{ marginLeft: 8 }}><RequiredBadge/></span>
          </span>
        </label>
        {errors.privacy && (
          <div style={{ marginTop: 8, fontSize: 13, color: '#c25a2e', fontWeight: 600 }}>⚠ {errors.privacy}</div>
        )}
      </div>

      {/* 送信エラー */}
      {submitError && (
        <div role="alert" style={{
          padding: '14px 18px', marginBottom: 20,
          background: '#fdeee5', border: '1px solid #e8825a', borderRadius: 8,
          color: '#9b3a14', fontSize: 14, fontWeight: 600,
        }}>
          {submitError}
        </div>
      )}

      {/* 送信ボタン */}
      <button type="submit" disabled={submitting} style={{
        width: '100%',
        padding: '20px 24px',
        background: submitting ? 'var(--ink-soft)' : 'var(--ink)',
        color: '#fff', border: 'none', borderRadius: 999,
        fontSize: 16, fontWeight: 800, fontFamily: 'inherit',
        cursor: submitting ? 'wait' : 'pointer',
        letterSpacing: '0.02em',
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12,
        boxShadow: submitting ? 'none' : '0 10px 30px rgba(0,0,0,0.16)',
        transition: 'all .2s ease',
      }}>
        {submitting ? (
          <>
            <span className="spinner" style={{
              display: 'inline-block', width: 18, height: 18,
              border: '2.5px solid rgba(255,255,255,0.3)', borderTopColor: '#fff',
              borderRadius: '50%', animation: 'spin 0.7s linear infinite',
            }}/>
            送信中…
          </>
        ) : (
          <>
            無料体験を申し込む
            <span style={{
              width: 32, height: 32, borderRadius: 999, background: 'var(--orange)',
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 16,
            }}>→</span>
          </>
        )}
      </button>

      <div style={{
        marginTop: 20, fontSize: 13, lineHeight: 1.8,
        color: 'var(--ink-mute)', textAlign: 'center',
      }}>
        通常 <strong style={{ color: 'var(--ink)' }}>24時間以内</strong> に担当者よりご返信いたします。<br/>
        無理な勧誘は一切行いません。
      </div>
    </form>
  );
}

Object.assign(window, { ContactForm });
