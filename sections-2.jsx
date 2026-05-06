// sections-2.jsx — 解決策, 学年別タブ, 診断シミュレーター, 講師, 料金

// ── マナビエルの解決策 (3つの特徴) ─────────────────
function SolutionSection() {
  const features = [
    {
      n: '01',
      title: 'どこで止まっているかを見つける',
      body: '答えが合っているかだけではなく、考え方・途中式・手の止まり方を見ます。',
      icon: 'find', color: 'var(--blue)', soft: 'var(--blue-soft)',
    },
    {
      n: '02',
      title: 'わかるまで、別の言い方で伝える',
      body: '一つの説明で伝わらなければ、図・たとえ・具体例を変えて説明します。',
      icon: 'tell', color: 'var(--green)', soft: 'var(--green-soft)',
    },
    {
      n: '03',
      title: '最後は自力で解けるところまで伴走する',
      body: '「わかった」で終わらせず、「ひとりでできた」まで確認します。',
      icon: 'walk', color: 'var(--orange)', soft: 'var(--orange-soft)',
    },
  ];
  return (
    <section data-screen-label="04 解決策" id="about" className="sec-vpad" style={{
      padding: '120px 24px',
      background: 'var(--ink)', color: '#fff',
      position: 'relative', overflow: 'hidden',
    }}>
      <div className="deco" style={{
        position: 'absolute', top: 40, right: 40, fontSize: 200,
        fontFamily: 'var(--font-serif)', color: 'rgba(255,255,255,0.04)', lineHeight: 1,
      }}>
        “
      </div>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <Reveal>
          <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--orange)', letterSpacing: '0.12em', marginBottom: 16 }}>
            SOLUTION ─ マナビエルの解決策
          </div>
        </Reveal>
        <Reveal delay={1}>
          <h2 style={{
            margin: 0, fontSize: 'clamp(28px, 4.4vw, 52px)', fontWeight: 900,
            lineHeight: 1.35, letterSpacing: '-0.01em', maxWidth: 900,
          }}>
            マナビエルは、数学専門の<br/>
            <span style={{ position: 'relative', display: 'inline-block' }}>
              “つまずき発見型”
              <HandUnderlineDouble color="var(--orange)" style={{ position: 'absolute', left: 0, right: 0, bottom: -10, width: '100%' }} />
            </span>
            個別指導です。
          </h2>
        </Reveal>

        <div style={{
          marginTop: 80,
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24,
        }}>
          {features.map((f, i) => (
            <Reveal key={f.n} delay={i + 2}>
              <div style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 8, padding: 32, height: '100%',
                display: 'flex', flexDirection: 'column', gap: 20,
                position: 'relative',
              }}>
                <div style={{
                  fontFamily: 'var(--font-serif)', fontSize: 56, fontWeight: 900,
                  color: f.color, lineHeight: 1, letterSpacing: '-0.04em',
                }}>{f.n}</div>
                <h3 style={{ margin: 0, fontSize: 20, fontWeight: 800, lineHeight: 1.5 }}>
                  {f.title}
                </h3>
                <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.85, color: 'rgba(255,255,255,0.72)' }}>
                  {f.body}
                </p>
                <FeatureSketch kind={f.icon} color={f.color} />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureSketch({ kind, color }) {
  // 抽象的なスケッチ風アイコン
  if (kind === 'find') {
    return (
      <svg width="100%" height="80" viewBox="0 0 280 80" style={{ marginTop: 'auto' }}>
        <path d="M10 60 L40 40 L70 50 L100 25 L130 35 L160 55 L190 30 L220 45 L260 20" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" fill="none"/>
        <circle cx="100" cy="25" r="14" stroke={color} strokeWidth="2.5" fill="none"/>
        <path d="M110 35 L122 47" stroke={color} strokeWidth="2.5" strokeLinecap="round"/>
        <text x="100" y="29" textAnchor="middle" fontSize="11" fill={color} fontWeight="700">!</text>
      </svg>
    );
  }
  if (kind === 'tell') {
    return (
      <svg width="100%" height="80" viewBox="0 0 280 80" style={{ marginTop: 'auto' }}>
        <rect x="20" y="20" width="60" height="40" rx="4" stroke={color} strokeWidth="2" fill="none"/>
        <text x="50" y="46" textAnchor="middle" fontSize="14" fill={color} fontFamily="serif">2/3</text>
        <path d="M88 40 L120 40 M115 35 L120 40 L115 45" stroke="rgba(255,255,255,0.3)" strokeWidth="1.8" fill="none"/>
        <circle cx="150" cy="40" r="20" stroke={color} strokeWidth="2" fill="none"/>
        <path d="M138 40 L162 40 M150 28 L150 52" stroke={color} strokeWidth="1.5"/>
        <path d="M178 40 L210 40 M205 35 L210 40 L205 45" stroke="rgba(255,255,255,0.3)" strokeWidth="1.8" fill="none"/>
        <text x="240" y="46" textAnchor="middle" fontSize="14" fill={color} fontFamily="serif">🍕</text>
      </svg>
    );
  }
  // walk
  return (
    <svg width="100%" height="80" viewBox="0 0 280 80" style={{ marginTop: 'auto' }}>
      <path d="M10 60 Q70 60 90 40 Q110 20 150 30 Q190 40 220 25 Q250 10 270 15" stroke={color} strokeWidth="2.5" strokeDasharray="4 4" fill="none"/>
      <circle cx="10" cy="60" r="6" fill="rgba(255,255,255,0.3)"/>
      <circle cx="270" cy="15" r="9" fill={color}/>
      <text x="270" y="19" textAnchor="middle" fontSize="11" fill="#fff" fontWeight="700">✓</text>
    </svg>
  );
}

// ── 学年別タブ ───────────────────────────────────────
function GradeTabs() {
  const grades = [
    {
      id: 'es', label: '小学生', sub: '考える楽しさを取り戻す',
      head: '算数嫌いになる前に、考える楽しさを取り戻す。',
      body: '文章題、図形、分数、小数など、苦手の芽を早めに見つけます。',
      topics: ['文章題', '図形', '分数', '小数', '割合'],
      color: 'var(--green)', soft: 'var(--green-soft)',
    },
    {
      id: 'jh', label: '中学生', sub: '高校受験に向けて穴を埋める',
      head: '定期テストと高校受験に向けて、数学の穴を埋める。',
      body: '方程式、関数、証明など、苦手になりやすい単元を重点的にサポートします。',
      topics: ['方程式', '関数', '証明', '確率', '空間図形'],
      color: 'var(--blue)', soft: 'var(--blue-soft)',
    },
    {
      id: 'hs', label: '高校生', sub: '考え方から理解する',
      head: '公式暗記から抜け出し、考え方から理解する。',
      body: '数ⅠA・数ⅡB・数学ⅢCまで、志望校や学校進度に合わせて対応します。',
      topics: ['数ⅠA', '数ⅡB', '数学ⅢC', '共通テスト', '記述対策'],
      color: 'var(--orange)', soft: 'var(--orange-soft)',
    },
    {
      id: 'jk', label: '受験生', sub: '足を引っ張る → 戦える科目へ',
      head: '数学を“足を引っ張る科目”から“戦える科目”へ。',
      body: '満点狙いではなく、合格に必要な点数から逆算して対策します。',
      topics: ['過去問', '逆算カリキュラム', '時間配分', '頻出単元', 'メンタル'],
      color: 'var(--ink)', soft: '#f0eee8',
    },
  ];
  const [active, setActive] = React.useState('es');
  const cur = grades.find((g) => g.id === active);

  return (
    <section data-screen-label="05 学年別" id="grade" className="sec-vpad" style={{ padding: '120px 24px', background: '#fff', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <Reveal>
          <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--green)', letterSpacing: '0.12em', marginBottom: 16 }}>
            BY GRADE ─ 学年別サポート
          </div>
        </Reveal>
        <Reveal delay={1}>
          <h2 style={{ margin: 0, fontSize: 'clamp(28px, 4.4vw, 48px)', fontWeight: 900, lineHeight: 1.35, letterSpacing: '-0.01em' }}>
            それぞれの学年に、<br/>必要な伴走の仕方があります。
          </h2>
        </Reveal>

        {/* タブ */}
        <Reveal delay={2}>
          <div role="tablist" style={{
            marginTop: 56, display: 'flex', flexWrap: 'wrap', gap: 8,
            borderBottom: '1px solid var(--line)', paddingBottom: 0,
          }}>
            {grades.map((g) => {
              const on = g.id === active;
              return (
                <button key={g.id} role="tab" aria-selected={on} onClick={() => setActive(g.id)} style={{
                  border: 'none', background: 'none', cursor: 'pointer',
                  padding: '14px 20px 18px', fontFamily: 'inherit',
                  fontSize: 16, fontWeight: 700,
                  color: on ? g.color : 'var(--ink-mute)',
                  borderBottom: on ? `3px solid ${g.color}` : '3px solid transparent',
                  marginBottom: -1, position: 'relative',
                  transition: 'all .2s ease',
                }}>
                  {g.label}
                  <span style={{ display: 'block', fontSize: 11, fontWeight: 500, color: on ? g.color : 'var(--ink-mute)', marginTop: 4, opacity: on ? 0.8 : 0.6 }}>
                    {g.sub}
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* タブ内容 */}
        <div key={cur.id} className="two-col-stack" style={{
          marginTop: 48, display: 'grid', gridTemplateColumns: 'minmax(0, 1.3fr) minmax(0, 1fr)', gap: 64,
          animation: 'fadeUp .5s ease',
        }}>
          <div>
            <h3 style={{ margin: 0, fontSize: 'clamp(22px, 2.8vw, 32px)', fontWeight: 900, lineHeight: 1.5, color: cur.color }}>
              {cur.head}
            </h3>
            <p style={{ marginTop: 24, fontSize: 16, lineHeight: 2, color: 'var(--ink-soft)' }}>
              {cur.body}
            </p>
            <div style={{ marginTop: 28, display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {cur.topics.map((t) => (
                <span key={t} style={{
                  fontSize: 13, fontWeight: 600,
                  padding: '8px 14px', background: cur.soft, color: cur.color,
                  borderRadius: 999,
                }}>
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* 視覚的なミニ・カリキュラム */}
          <div style={{ background: cur.soft, padding: 28, borderRadius: 6, position: 'relative' }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: cur.color, letterSpacing: '0.1em', marginBottom: 14 }}>
              SUPPORT FLOW
            </div>
            {['つまずき診断', '原因の特定', '戻る単元の確認', '反復で定着', '応用問題へ'].map((step, i, arr) => (
              <div key={step} style={{ display: 'flex', gap: 14, alignItems: 'flex-start', paddingBottom: 14 }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{
                    width: 22, height: 22, borderRadius: 999, background: '#fff',
                    border: `2px solid ${cur.color}`, color: cur.color,
                    fontSize: 11, fontWeight: 800,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>{i + 1}</div>
                  {i < arr.length - 1 && (
                    <div style={{ width: 2, flex: 1, minHeight: 18, background: cur.color, opacity: 0.4 }} />
                  )}
                </div>
                <div style={{ fontSize: 14.5, fontWeight: 600, paddingTop: 1 }}>{step}</div>
              </div>
            ))}
          </div>
        </div>

        <style>{`@keyframes fadeUp { from { opacity:0; transform: translateY(12px); } to { opacity:1; transform: none; } }`}</style>
      </div>
    </section>
  );
}

// ── 診断シミュレーター ─────────────────────────────
function DiagnosisSim({ onCTA }) {
  const questions = [
    { q: '次のうち、お子さまの状態に近いのは？', opts: [
      { t: '解説直後はわかるが一人だと解けない', tag: '理解の定着' },
      { t: 'そもそも問題文の意味がわからない', tag: '読解' },
      { t: '計算ミスは多いが理解はしている', tag: '計算習慣' },
      { t: 'やる気が出ず机に向かわない', tag: '学習習慣' },
    ]},
    { q: 'いま一番つまずいている単元は？', opts: [
      { t: '分数・小数・割合', tag: '小学範囲' },
      { t: '方程式・関数', tag: '中学範囲' },
      { t: '二次関数・三角比', tag: '高校範囲' },
      { t: '微分・積分・数列', tag: '高校上位' },
    ]},
    { q: 'これまでの学習で、いちばん近い経験は？', opts: [
      { t: '集団塾でついていけなくなった', tag: '集団→個別' },
      { t: '親が教えるとケンカになる', tag: '家庭学習' },
      { t: '質問を恥ずかしくてできない', tag: '質問環境' },
      { t: '勉強はしているのに点数が伸びない', tag: '方法のズレ' },
    ]},
  ];
  const [step, setStep] = React.useState(0);
  const [answers, setAnswers] = React.useState([]);
  const [done, setDone] = React.useState(false);

  const progress = done ? 100 : (step / questions.length) * 100;

  const choose = (opt) => {
    const next = [...answers, opt];
    setAnswers(next);
    if (step + 1 >= questions.length) setDone(true);
    else setStep(step + 1);
  };

  const reset = () => { setAnswers([]); setStep(0); setDone(false); };

  return (
    <section data-screen-label="06 診断" className="sec-vpad" style={{ padding: '120px 24px', background: 'var(--blue-soft)' }}>
      <div style={{ maxWidth: 760, margin: '0 auto' }}>
        <Reveal>
          <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--blue)', letterSpacing: '0.12em', marginBottom: 16, textAlign: 'center' }}>
            INTERACTIVE ─ 30秒つまずき診断
          </div>
        </Reveal>
        <Reveal delay={1}>
          <h2 style={{ margin: 0, textAlign: 'center', fontSize: 'clamp(24px, 3.4vw, 38px)', fontWeight: 900, lineHeight: 1.45 }}>
            まずは3つの質問から、<br/>
            <span style={{ color: 'var(--blue)' }}>つまずきの傾向</span>を見つけてみる。
          </h2>
        </Reveal>

        <Reveal delay={2}>
          <div style={{
            marginTop: 48, background: '#fff', borderRadius: 12, padding: '36px 32px',
            boxShadow: '0 20px 50px rgba(45,108,223,0.12)', position: 'relative', overflow: 'hidden',
          }}>
            {/* progress */}
            <div style={{ height: 4, background: '#eee', borderRadius: 999, overflow: 'hidden', marginBottom: 28 }}>
              <div style={{ width: `${progress}%`, height: '100%', background: 'var(--blue)', transition: 'width .4s ease' }} />
            </div>

            {!done && (
              <div>
                <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--blue)', letterSpacing: '0.1em', marginBottom: 8 }}>
                  Q{step + 1} / {questions.length}
                </div>
                <h3 style={{ margin: 0, fontSize: 22, fontWeight: 800, lineHeight: 1.5 }}>
                  {questions[step].q}
                </h3>
                <div style={{ marginTop: 24, display: 'grid', gap: 10 }}>
                  {questions[step].opts.map((o) => (
                    <button key={o.t} onClick={() => choose(o)} style={{
                      textAlign: 'left', padding: '18px 20px', borderRadius: 8,
                      background: '#fafafa', border: '1.5px solid var(--line)',
                      cursor: 'pointer', fontSize: 15, fontWeight: 600, fontFamily: 'inherit',
                      display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12,
                      transition: 'all .15s',
                    }}
                      onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--blue)'; e.currentTarget.style.background = 'var(--blue-soft)'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--line)'; e.currentTarget.style.background = '#fafafa'; }}
                    >
                      <span>{o.t}</span>
                      <span style={{ fontSize: 11, color: 'var(--blue)', fontWeight: 700, background: 'var(--blue-soft)', padding: '4px 10px', borderRadius: 999 }}>
                        {o.tag}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {done && (
              <div style={{ animation: 'fadeUp .5s ease' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                  <HandCheck color="var(--green)" size={28} />
                  <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--green)', letterSpacing: '0.1em' }}>
                    DIAGNOSIS COMPLETE
                  </span>
                </div>
                <h3 style={{ margin: 0, fontSize: 24, fontWeight: 900, lineHeight: 1.5 }}>
                  傾向：
                  <span style={{ color: 'var(--blue)' }}>
                    {' '}{answers.map(a => a.tag).join(' × ')}
                  </span>
                </h3>
                <p style={{ marginTop: 18, fontSize: 15, lineHeight: 1.9, color: 'var(--ink-soft)' }}>
                  これは“つまずき”のごく一部のサインです。<br/>
                  本物の体験では、実際の問題を一緒に解きながら、もっと深いつまずきの位置を見つけます。
                </p>
                <div style={{ marginTop: 28, display: 'flex', flexWrap: 'wrap', gap: 12 }}>
                  <button onClick={onCTA} style={{
                    background: 'var(--ink)', color: '#fff', border: 'none', padding: '16px 24px',
                    borderRadius: 999, fontWeight: 700, fontSize: 14.5, cursor: 'pointer',
                  }}>無料体験で本格診断を受ける →</button>
                  <button onClick={reset} style={{
                    background: 'transparent', color: 'var(--ink-soft)', border: '1.5px solid var(--line)',
                    padding: '16px 24px', borderRadius: 999, fontWeight: 600, fontSize: 14, cursor: 'pointer', fontFamily: 'inherit',
                  }}>もう一度試す</button>
                </div>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

Object.assign(window, { SolutionSection, GradeTabs, DiagnosisSim });
