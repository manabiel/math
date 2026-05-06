// sections-1.jsx — マナビエル LP セクション (前半)
// Hero, 共感, 原因, 解決策, 学年別

const ManabielLogo = ({ size = 28, color = 'currentColor' }) => (
  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontWeight: 800, fontSize: size * 0.6, letterSpacing: '0.04em', color }}>
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true">
      <path d="M4 26 L4 8 L10 16 L16 8 L16 26" stroke={color} strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="22" cy="11" r="3" fill={color} />
      <path d="M22 17 L22 26" stroke={color} strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
    マナビエル
  </span>
);

// ── Header / Nav ─────────────────────────────────────
function Header({ onCTA }) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onS = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onS);
    return () => window.removeEventListener('scroll', onS);
  }, []);
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 40,
      background: scrolled ? 'rgba(250,250,247,0.85)' : 'transparent',
      backdropFilter: scrolled ? 'blur(14px) saturate(140%)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(14px) saturate(140%)' : 'none',
      borderBottom: scrolled ? '1px solid var(--line)' : '1px solid transparent',
      transition: 'all .25s ease',
    }}>
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '14px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <ManabielLogo size={28} />
        <nav style={{ display: 'flex', alignItems: 'center', gap: 24, fontSize: 14, fontWeight: 500 }}>
          <a href="#about" className="nav-l" style={{ textDecoration: 'none', color: 'var(--ink-soft)' }}>マナビエルとは</a>
          <a href="#grade" className="nav-l" style={{ textDecoration: 'none', color: 'var(--ink-soft)' }}>学年別</a>
          <a href="#price" className="nav-l" style={{ textDecoration: 'none', color: 'var(--ink-soft)' }}>料金</a>
          <a href="#faq" className="nav-l" style={{ textDecoration: 'none', color: 'var(--ink-soft)' }}>FAQ</a>
          <button onClick={onCTA} style={{
            background: 'var(--ink)', color: '#fff', border: 'none',
            padding: '11px 20px', borderRadius: 999, fontWeight: 700, fontSize: 13.5,
            cursor: 'pointer', letterSpacing: '0.02em',
          }}>
            無料体験を申し込む
          </button>
        </nav>
      </div>
    </header>
  );
}

// ── Hero ─────────────────────────────────────────────
function Hero({ onCTA, copyStrength }) {
  // copyStrength: 'soft' | 'medium' | 'strong'
  return (
    <section data-screen-label="01 Hero" className="hero-section" style={{
      position: 'relative',
      padding: '88px 24px 64px',
      display: 'flex', flexDirection: 'column', justifyContent: 'flex-start',
      overflow: 'hidden',
    }}>
      {/* 背景の薄い数式 */}
      <div className="deco" style={{
        position: 'absolute', inset: 0, fontFamily: 'var(--font-serif)',
        color: 'rgba(0,0,0,0.035)', overflow: 'hidden', userSelect: 'none',
      }}>
        <span style={{ position: 'absolute', top: '8%', left: '6%', fontSize: 64, transform: 'rotate(-6deg)' }}>x² + 2x − 3 = 0</span>
        <span style={{ position: 'absolute', top: '22%', right: '8%', fontSize: 48 }}>√(a² + b²)</span>
        <span style={{ position: 'absolute', bottom: '18%', left: '12%', fontSize: 56, transform: 'rotate(3deg)' }}>∫ f(x) dx</span>
        <span style={{ position: 'absolute', bottom: '8%', right: '14%', fontSize: 42, transform: 'rotate(-2deg)' }}>f(x) = ax + b</span>
        <span style={{ position: 'absolute', top: '50%', left: '46%', fontSize: 38, transform: 'rotate(-4deg)' }}>π · r²</span>
      </div>

      <div style={{ maxWidth: 1100, margin: '0 auto', width: '100%', position: 'relative' }}>
        <Reveal delay={1}>
          <h1 style={{
            margin: 0, fontFamily: 'var(--font-head)',
            fontSize: 'clamp(28px, 5vw, 64px)',
            fontWeight: 900, lineHeight: 1.22, letterSpacing: '-0.02em',
            color: 'var(--ink)', maxWidth: 980,
          }}>
            <span style={{ display: 'block' }}>
              数学が、<span style={{ color: 'var(--ink-mute)' }}>苦手なんじゃない。</span>
            </span>
            <span style={{ display: 'block', marginTop: 8, position: 'relative' }}>
              <span style={{ position: 'relative', display: 'inline-block' }}>
                “わからない”
                <HandUnderlineDouble color="var(--orange)" style={{ position: 'absolute', left: -4, right: -4, bottom: -10, width: 'calc(100% + 8px)' }} />
              </span>
              を
            </span>
            <span style={{ display: 'block', marginTop: 8, wordBreak: 'keep-all', overflowWrap: 'normal' }}>
              置き去りにされてきただけだ。
            </span>
          </h1>
        </Reveal>

        <Reveal delay={3}>
          <p style={{
            marginTop: 32, maxWidth: 640,
            fontSize: 'clamp(15px, 1.6vw, 18px)', lineHeight: 2,
            color: 'var(--ink-soft)', fontWeight: 400,
          }}>
            学校でも、集団塾でも、わからないまま授業が進んでいく。<br/>
            気づけば「どこがわからないのか」さえ言えなくなっていた。<br/>
            <span style={{ color: 'var(--ink)', fontWeight: 600 }}>
              マナビエルは、そんな子のための数学特化個別指導塾です。
            </span>
          </p>
        </Reveal>

        <Reveal delay={4}>
          <div style={{ marginTop: 32, display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 20 }}>
            <button onClick={onCTA} style={{
              background: 'var(--ink)', color: '#fff', border: 'none',
              padding: '20px 32px', borderRadius: 999,
              fontSize: 16, fontWeight: 700, cursor: 'pointer',
              display: 'inline-flex', alignItems: 'center', gap: 12,
              boxShadow: '0 10px 30px rgba(0,0,0,0.16)',
              transition: 'transform .15s, box-shadow .15s',
            }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(0,0,0,0.22)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.16)'; }}
            >
              無料体験で
              <span style={{ position: 'relative' }}>
                つまずき診断
                <HandUnderline color="var(--orange)" style={{ position: 'absolute', left: 0, right: 0, bottom: -6, width: '100%' }} />
              </span>
              を受ける
              <span style={{
                width: 30, height: 30, borderRadius: 999, background: 'var(--orange)',
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginLeft: 4,
              }}>→</span>
            </button>
            <span style={{ fontSize: 13, color: 'var(--ink-mute)' }}>
              所要 約30分・オンライン or 教室・無理な勧誘なし
            </span>
          </div>
        </Reveal>

        {/* スクロールヒント */}
        <div style={{ position: 'absolute', right: 24, bottom: -40, fontSize: 11, color: 'var(--ink-mute)', writingMode: 'vertical-rl', letterSpacing: '0.2em' }}>
          SCROLL ↓
        </div>
      </div>
    </section>
  );
}

// ── 共感セクション ──────────────────────────────────
function EmpathySection() {
  const items = [
    '解説を聞いた直後はわかるのに、ひとりだと解けない',
    '途中式を見ても、なぜそうなるのかわからない',
    '質問したいけど、何を聞けばいいかわからない',
    '数学の時間だけ表情が暗くなる',
    '親が教えると親子ゲンカになる',
    '集団塾に行っているのに数学だけ伸びない',
  ];
  return (
    <section data-screen-label="02 共感" className="sec-vpad" style={{
      padding: '72px 24px 96px', background: '#fff',
      borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)',
    }}>
      <div style={{ maxWidth: 980, margin: '0 auto' }}>
        <Reveal>
          <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--blue)', letterSpacing: '0.12em', marginBottom: 16 }}>
            EMPATHY ─ こんな子、いませんか？
          </div>
        </Reveal>
        <Reveal delay={1}>
          <h2 style={{
            margin: 0, fontFamily: 'var(--font-head)',
            fontSize: 'clamp(28px, 4.4vw, 52px)', fontWeight: 900, lineHeight: 1.35, letterSpacing: '-0.01em',
          }}>
            こんな状態に<br/>なっていませんか？
          </h2>
        </Reveal>

        <ul style={{
          listStyle: 'none', padding: 0, margin: '40px 0 0',
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 0,
          borderTop: '1px solid var(--line)',
        }}>
          {items.map((t, i) => (
            <Reveal key={i} delay={Math.min(i + 1, 6)} as="li" style={{
              padding: '28px 8px', display: 'flex', alignItems: 'flex-start', gap: 16,
              borderBottom: '1px solid var(--line)',
              borderRight: i % 2 === 0 ? '1px solid var(--line)' : 'none',
            }}>
              <span style={{
                fontFamily: 'var(--font-serif)', fontSize: 13, color: 'var(--ink-mute)',
                fontWeight: 700, marginTop: 4, fontVariantNumeric: 'tabular-nums',
                minWidth: 24,
              }}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <span style={{ fontSize: 17, lineHeight: 1.7, fontWeight: 500 }}>
                {t}
              </span>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={3}>
          <div style={{
            marginTop: 80, padding: '40px 36px',
            background: 'var(--orange-soft)', borderRadius: 4,
            position: 'relative', overflow: 'hidden',
          }}>
            <div className="deco" style={{ position: 'absolute', top: -20, right: -20, opacity: 0.4 }}>
              <HandLoop color="var(--orange)" width={180} height={50} />
            </div>
            <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--orange)', letterSpacing: '0.1em', marginBottom: 12 }}>
              ── それは
            </div>
            <p style={{
              margin: 0, fontSize: 'clamp(20px, 2.6vw, 30px)', fontWeight: 800,
              lineHeight: 1.6, fontFamily: 'var(--font-head)',
            }}>
              やる気の問題ではありません。<br/>
              <span style={{ position: 'relative', display: 'inline-block' }}>
                “つまずきの場所”
                <HandUnderline color="var(--orange)" style={{ position: 'absolute', left: 0, right: 0, bottom: -8, width: '100%' }} />
              </span>
              が見つかっていないだけです。
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ── 数学が苦手になる本当の原因 ────────────────────
function CauseSection() {
  // ビジュアル: 積み上げの図
  const layers = [
    { label: '高校 / 関数・微積', g: '高', color: 'var(--orange)' },
    { label: '中学 / 方程式・関数・証明', g: '中', color: 'var(--blue)' },
    { label: '小学 / 分数・割合・図形', g: '小', color: 'var(--green)' },
  ];
  return (
    <section data-screen-label="03 原因" className="sec-vpad" style={{ padding: '120px 24px' }}>
      <div className="two-col-stack" style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)', gap: 80, alignItems: 'center' }}>
        <div>
          <Reveal>
            <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--orange)', letterSpacing: '0.12em', marginBottom: 16 }}>
              CAUSE ─ 本当の原因
            </div>
          </Reveal>
          <Reveal delay={1}>
            <h2 style={{
              margin: 0, fontFamily: 'var(--font-head)',
              fontSize: 'clamp(28px, 3.8vw, 46px)', fontWeight: 900, lineHeight: 1.4, letterSpacing: '-0.01em',
            }}>
              数学が苦手になる<br/>本当の原因は、<br/>
              <span style={{ color: 'var(--orange)', position: 'relative', display: 'inline-block' }}>
                “わからない”が<br/>積み重なること。
              </span>
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <div style={{ marginTop: 36, fontSize: 16, lineHeight: 2, color: 'var(--ink-soft)' }}>
              数学は積み上げ科目です。<br/>
              小学生の分数、中学生の方程式、高校生の関数。<br/>
              どこか一つが曖昧なままだと、次の単元で急に苦しくなります。
            </div>
          </Reveal>
          <Reveal delay={3}>
            <div style={{ marginTop: 28, fontSize: 17, lineHeight: 1.9, fontWeight: 700, paddingLeft: 16, borderLeft: '3px solid var(--ink)' }}>
              だからマナビエルでは、今の単元だけを教えるのではなく、<br/>
              <span style={{ background: 'linear-gradient(transparent 60%, var(--orange-soft) 60%)' }}>
                「どこまで戻れば解けるようになるか」
              </span>
              を一緒に見つけます。
            </div>
          </Reveal>
        </div>

        {/* 積み上げ図 */}
        <Reveal delay={2}>
          <div style={{ position: 'relative', padding: '20px 0' }}>
            <div className="deco" style={{ position: 'absolute', top: 0, right: 20 }}>
              <HandArrow color="var(--orange)" width={70} height={60} style={{ transform: 'rotate(120deg)' }} />
            </div>
            {/* 積み上げ */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {layers.map((l, i) => (
                <Reveal key={l.g} delay={i + 2}>
                  <div style={{
                    height: 90 + i * 6,
                    background: '#fff',
                    border: `2px solid ${l.color}`,
                    borderRadius: 6,
                    padding: '0 24px',
                    display: 'flex', alignItems: 'center', gap: 20,
                    position: 'relative',
                    transform: `translateX(${i * 12}px)`,
                  }}>
                    <div style={{
                      width: 56, height: 56, borderRadius: 999,
                      background: l.color, color: '#fff',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 24, fontWeight: 900, fontFamily: 'var(--font-serif)',
                    }}>
                      {l.g}
                    </div>
                    <div>
                      <div style={{ fontSize: 11, color: 'var(--ink-mute)', fontWeight: 600, letterSpacing: '0.08em' }}>
                        LAYER {3 - i}
                      </div>
                      <div style={{ fontSize: 16, fontWeight: 700, marginTop: 2 }}>{l.label}</div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

Object.assign(window, {
  ManabielLogo, Header, Hero, EmpathySection, CauseSection,
});
