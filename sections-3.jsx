// sections-3.jsx — 講師, 料金, 実績, 保護者向け, FAQ, 最終CTA, Footer

// ── 講師紹介 ─────────────────────────────────────────
function InstructorSection() {
  return (
    <section data-screen-label="07 講師" className="sec-vpad" style={{ padding: '120px 24px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <Reveal>
          <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--blue)', letterSpacing: '0.12em', marginBottom: 16 }}>
            INSTRUCTOR ─ 講師紹介
          </div>
        </Reveal>
        <div className="two-col-stack" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.3fr)', gap: 64, alignItems: 'center', marginTop: 24 }}>
          {/* portrait placeholder */}
          <Reveal>
            <div className="stack-img" style={{ position: 'relative', maxWidth: 380, marginLeft: 8 }}>
              {/* dashed circle accent */}
              <svg className="deco" width="120" height="120" viewBox="0 0 120 120" style={{ position: 'absolute', top: -18, left: -28, zIndex: 0 }} aria-hidden="true">
                <circle cx="60" cy="60" r="56" fill="none" stroke="var(--orange)" strokeWidth="2" strokeDasharray="6 8" opacity="0.7"/>
              </svg>
              {/* orange dot accent */}
              <div className="deco" style={{
                position: 'absolute', left: -18, bottom: 70, zIndex: 3,
                width: 28, height: 28, borderRadius: 999, background: 'var(--orange)',
              }} />
              {/* circular portrait */}
              <div style={{
                position: 'relative', zIndex: 1,
                width: '100%', aspectRatio: '1 / 1',
                borderRadius: '50%', overflow: 'hidden',
                background: '#e8dcc4',
                boxShadow: '0 20px 50px rgba(0,0,0,0.10)',
              }}>
                <img src="assets/instructor.png" alt="柴田 真那 ポートレート"
                     style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
              {/* overlay sticky */}
              <div style={{
                position: 'absolute', bottom: 0, right: -10, zIndex: 4,
                background: '#fff', padding: '14px 18px', borderRadius: 8,
                boxShadow: '0 16px 40px rgba(0,0,0,0.12)', border: '1px solid var(--line)',
                fontSize: 12, fontWeight: 600,
              }}>
                <div style={{ color: 'var(--ink-mute)', fontSize: 10, letterSpacing: '0.1em' }}>EXPERIENCE</div>
                <div style={{ fontSize: 20, fontWeight: 900, color: 'var(--blue)' }}>15<span style={{ fontSize: 12 }}>年以上</span></div>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal delay={1}>
              <div style={{ fontSize: 13, color: 'var(--ink-mute)', fontWeight: 500, marginBottom: 8 }}>
                マナビエル代表講師
              </div>
              <h3 style={{ margin: 0, fontSize: 'clamp(28px, 3.6vw, 40px)', fontWeight: 900, letterSpacing: '-0.01em' }}>
                柴田 真那
                <span style={{ fontSize: 14, fontWeight: 500, color: 'var(--ink-mute)', marginLeft: 12 }}>Shibata Mana</span>
              </h3>
            </Reveal>
            <Reveal delay={2}>
              <p style={{ marginTop: 28, fontSize: 22, fontWeight: 800, lineHeight: 1.6 }}>
                <span style={{ position: 'relative', display: 'inline-block' }}>
                  「わからない」と言えない子ほど、
                  <HandUnderline color="var(--orange)" style={{ position: 'absolute', left: 0, right: 0, bottom: -8, width: '100%' }} />
                </span>
                <br/>
                丁寧に見ます。
              </p>
            </Reveal>
            <Reveal delay={3}>
              <p style={{ marginTop: 28, fontSize: 15, lineHeight: 2, color: 'var(--ink-soft)' }}>
                講師歴15年以上。<br/>
                大切にしているのは、すぐに答えを教えることではありません。<br/>
                生徒の考えを聞き、どこで迷ったのかを一緒にたどることです。
              </p>
            </Reveal>
            <Reveal delay={4}>
              <div style={{
                marginTop: 32, padding: '22px 24px', borderLeft: '3px solid var(--orange)',
                fontSize: 17, fontWeight: 700, lineHeight: 1.7, background: '#fff',
              }}>
                数学を教えるだけでなく、<br/>
                <span style={{ background: 'linear-gradient(transparent 60%, var(--orange-soft) 60%)' }}>
                  “できた”という表情
                </span>
                を取り戻す。
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── 料金 ──────────────────────────────────────────────
function PriceSection() {
  const rows = [
    { plan: '小・中学生', price: '3,600', unit: '円＋税', meta: '1コマ 60分', highlight: false },
    { plan: '高校生', price: '4,000', unit: '円＋税', meta: '1コマ 60分', highlight: true },
    { plan: '1対1希望', price: '+1,000', unit: '円＋税', meta: '1コマあたり追加', highlight: false },
  ];
  const extras = [
    ['入塾金', '15,000円＋税'],
    ['諸経費', '年間 2,000円＋税'],
  ];
  return (
    <section data-screen-label="08 料金" id="price" className="sec-vpad" style={{
      padding: '120px 24px', background: '#fff',
      borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)',
    }}>
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>
        <Reveal>
          <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--green)', letterSpacing: '0.12em', marginBottom: 16, textAlign: 'center' }}>
            PRICE ─ 料金
          </div>
        </Reveal>
        <Reveal delay={1}>
          <h2 style={{ margin: 0, textAlign: 'center', fontSize: 'clamp(26px, 4vw, 44px)', fontWeight: 900, lineHeight: 1.4 }}>
            続けやすい価格で、<br/>
            <span style={{ position: 'relative', display: 'inline-block' }}>
              数学だけ
              <HandCircle color="var(--green)" size={140} style={{ position: 'absolute', top: '-30%', left: '50%', transform: 'translateX(-50%)', width: 'auto' }} />
            </span>
            をしっかりサポート。
          </h2>
        </Reveal>

        <div style={{ marginTop: 64, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
          {rows.map((r, i) => (
            <Reveal key={r.plan} delay={i + 2}>
              <div style={{
                padding: 28, borderRadius: 8,
                background: r.highlight ? 'var(--ink)' : '#fafaf7',
                color: r.highlight ? '#fff' : 'var(--ink)',
                border: r.highlight ? 'none' : '1px solid var(--line)',
                position: 'relative', overflow: 'hidden',
                height: '100%',
              }}>
                {r.highlight && (
                  <div style={{
                    position: 'absolute', top: 14, right: 14,
                    fontSize: 10, fontWeight: 700, letterSpacing: '0.1em',
                    color: 'var(--orange)', background: 'rgba(255,255,255,0.06)',
                    padding: '4px 10px', borderRadius: 999,
                  }}>POPULAR</div>
                )}
                <div style={{ fontSize: 13, fontWeight: 700, opacity: r.highlight ? 0.7 : 0.6 }}>
                  {r.plan}
                </div>
                <div style={{ marginTop: 16, display: 'flex', alignItems: 'baseline', gap: 6 }}>
                  <span className="price-num" style={{ fontFamily: 'var(--font-serif)', fontSize: 48, fontWeight: 900, lineHeight: 1, letterSpacing: '-0.02em' }}>
                    {r.price}
                  </span>
                  <span style={{ fontSize: 13, opacity: 0.7 }}>{r.unit}</span>
                </div>
                <div style={{ marginTop: 8, fontSize: 13, opacity: r.highlight ? 0.7 : 0.6 }}>
                  {r.meta}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={4}>
          <div style={{
            marginTop: 24, padding: '18px 24px',
            background: 'var(--bg)', borderRadius: 6, border: '1px dashed var(--line)',
            display: 'flex', flexWrap: 'wrap', gap: 32, alignItems: 'center', justifyContent: 'center',
            fontSize: 14,
          }}>
            {extras.map(([k, v]) => (
              <div key={k} style={{ display: 'flex', gap: 10, alignItems: 'baseline' }}>
                <span style={{ fontSize: 12, color: 'var(--ink-mute)', fontWeight: 600 }}>{k}</span>
                <span style={{ fontWeight: 700 }}>{v}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={5}>
          <p style={{ marginTop: 32, textAlign: 'center', fontSize: 15, lineHeight: 2, color: 'var(--ink-soft)', maxWidth: 640, margin: '32px auto 0' }}>
            高額な総合塾ではなく、<span style={{ fontWeight: 700, color: 'var(--ink)' }}>必要な数学だけ</span>。<br/>
            だから、無理なく続けやすい。
          </p>
        </Reveal>
      </div>
    </section>
  );
}

// ── 合格実績タブ ─────────────────────────────────────
function ResultsSection() {
  const data = {
    univ: {
      label: '大学入試', sub: '大学入試 合格実績',
      list: [
        '浜松医科大学', '京都府立大学', '千葉大学', '三重大学',
        '関西大学', '関西学院大学', '同志社大学', '立命館大学',
        '京都先端科学大学', '佛教大学', '京都産業大学', '久留米大学',
      ],
    },
    high: {
      label: '高校入試', sub: '高校入試 合格実績',
      list: [
        '堀川高校 探求学科群', '嵯峨野高校 こすもす科', '紫野高校 アカデミア',
        '立命館高校', '立命館宇治高校', '北嵯峨高校',
        '京都成章高校', '京都先端科学大学附属高校', '鳥羽高校',
      ],
    },
    junior: {
      label: '中学入試', sub: '中学入試 合格実績',
      list: [
        '西京高校附属中学校', '京都産業大附属中学校', '京都女子中学校',
        '東山中学 ユリーカコース', '大谷中学 マスターコース',
      ],
    },
  };
  const [tab, setTab] = React.useState('univ');
  const cur = data[tab];

  return (
    <section data-screen-label="09 実績" className="sec-vpad" style={{ padding: '120px 24px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <Reveal>
          <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--orange)', letterSpacing: '0.12em', marginBottom: 16 }}>
            RESULTS ─ 合格実績
          </div>
        </Reveal>
        <Reveal delay={1}>
          <h2 style={{ margin: 0, fontSize: 'clamp(26px, 4vw, 46px)', fontWeight: 900, lineHeight: 1.4 }}>
            数学が苦手だった子たちも、<br/>
            <span style={{ position: 'relative', display: 'inline-block' }}>
              次のステージ
              <HandUnderlineDouble color="var(--orange)" style={{ position: 'absolute', left: 0, right: 0, bottom: -10, width: '100%' }} />
            </span>
            へ進んでいます。
          </h2>
        </Reveal>

        <Reveal delay={2}>
          <div style={{ marginTop: 48, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {Object.entries(data).map(([k, v]) => {
              const on = tab === k;
              return (
                <button key={k} onClick={() => setTab(k)} style={{
                  border: '1.5px solid', padding: '12px 22px', borderRadius: 999,
                  background: on ? 'var(--ink)' : 'transparent',
                  color: on ? '#fff' : 'var(--ink)',
                  borderColor: on ? 'var(--ink)' : 'var(--line)',
                  fontWeight: 700, fontSize: 14, cursor: 'pointer', fontFamily: 'inherit',
                  transition: 'all .2s',
                }}>
                  {v.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        <div key={tab} style={{ marginTop: 32, animation: 'fadeUp .5s ease' }}>
          <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--ink-mute)', letterSpacing: '0.08em', marginBottom: 24, display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ fontSize: 18 }}>🌸</span>
            <span>{cur.sub}</span>
          </div>
          <div style={{
            background: '#fff', padding: '32px 36px', borderRadius: 8,
            border: '1px solid var(--line)',
            display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '14px 32px',
          }}>
            {cur.list.map((s) => (
              <div key={s} style={{
                fontSize: 16, fontWeight: 700, lineHeight: 1.5,
                paddingLeft: 18, position: 'relative',
              }}>
                <span style={{
                  position: 'absolute', left: 0, top: 8,
                  width: 6, height: 6, borderRadius: 999, background: 'var(--orange)',
                }} />
                {s}
              </div>
            ))}
          </div>
          <div style={{ marginTop: 16, fontSize: 12, color: 'var(--ink-mute)' }}>
            ※ ほか多数
          </div>
        </div>

        <Reveal delay={3}>
          <p style={{ marginTop: 48, fontSize: 15, lineHeight: 2, color: 'var(--ink-soft)', maxWidth: 720 }}>
            最初から数学が得意だった子ばかりではありません。<br/>
            <span style={{ fontWeight: 700, color: 'var(--ink)' }}>“わからない”を一つずつほどいて</span>、合格まで進んできました。
          </p>
        </Reveal>
      </div>
    </section>
  );
}

// ── 保護者向け安心セクション ──────────────────────
function ParentsSection() {
  const concerns = [
    { q: 'うちの子でもついていける？', a: 'まず“どこで止まっているか”の特定から。学年や進度に関係なく合わせます。' },
    { q: '先生との相性は大丈夫？', a: '無料体験で必ず確認できます。合わなければ別講師の提案も可能です。' },
    { q: 'オンラインでも集中できる？', a: '画面を共有しながら進めるため、対面と同じ密度で会話できます。' },
    { q: '他塾と併用できる？', a: '可能です。むしろ“数学だけ補強”として使われる方も多いです。' },
    { q: '無理な勧誘はない？', a: '一切ありません。体験後に資料をお渡しして、ご家庭で判断いただきます。' },
  ];
  return (
    <section data-screen-label="10 保護者" className="sec-vpad" style={{
      padding: '120px 24px', background: 'var(--green-soft)',
    }}>
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>
        <Reveal>
          <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--green)', letterSpacing: '0.12em', marginBottom: 16 }}>
            FOR PARENTS ─ 保護者の方へ
          </div>
        </Reveal>
        <Reveal delay={1}>
          <h2 style={{ margin: 0, fontSize: 'clamp(26px, 4vw, 44px)', fontWeight: 900, lineHeight: 1.4 }}>
            保護者の方へ。<br/>
            お子さまの数学嫌いは、<br/>
            <span style={{ position: 'relative', display: 'inline-block' }}>
              まだ変えられます。
              <HandUnderline color="var(--green)" style={{ position: 'absolute', left: 0, right: 0, bottom: -8, width: '100%' }} />
            </span>
          </h2>
        </Reveal>

        <div style={{ marginTop: 56, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
          {concerns.map((c, i) => (
            <Reveal key={c.q} delay={Math.min(i + 2, 6)}>
              <div style={{ background: '#fff', borderRadius: 8, padding: 24, height: '100%', border: '1px solid rgba(63,167,118,0.2)' }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--green)', letterSpacing: '0.08em', marginBottom: 10 }}>
                  Q.0{i + 1}
                </div>
                <div style={{ fontSize: 16, fontWeight: 800, lineHeight: 1.5, marginBottom: 12 }}>
                  {c.q}
                </div>
                <div style={{ fontSize: 14, lineHeight: 1.85, color: 'var(--ink-soft)' }}>
                  {c.a}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={4}>
          <div style={{
            marginTop: 48, padding: '32px 36px',
            background: '#fff', borderRadius: 8, border: '2px solid var(--green)',
            display: 'flex', gap: 20, alignItems: 'flex-start',
          }}>
            <HandCheck color="var(--green)" size={36} style={{ flexShrink: 0 }}/>
            <div>
              <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--green)', letterSpacing: '0.1em', marginBottom: 6 }}>
                お約束
              </div>
              <p style={{ margin: 0, fontSize: 17, fontWeight: 700, lineHeight: 1.7 }}>
                無料体験では、無理な勧誘はしません。<br/>
                まずは、お子さまがどこでつまずいているかを一緒に確認します。
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ── FAQ ─────────────────────────────────────────────
function FAQSection() {
  const faqs = [
    { q: '体験授業は本当に無料ですか？', a: '完全無料です。体験後の継続も任意で、勧誘の連絡は一切いたしません。' },
    { q: 'オンラインと教室、どちらがおすすめ？', a: 'お子さまのご事情に合わせて選べます。中・高生はオンライン、小学生は教室を選ばれる方が多めです。' },
    { q: '振替はできますか？', a: '当日3時間前までのご連絡で振替可能です。月内での振替を基本としています。' },
    { q: '宿題は出ますか？', a: 'はい、理解を定着させるために必要な量をお出しします。\nただし、ただ多く出すのではなく、お子さまの理解度や目標に合わせて「今やるべき内容」に絞って設計します。\n\nご希望があれば、いつ・どのくらい取り組むかまで一緒にスケジュールを組み、無理なく継続できるようサポートします。' },
    { q: '学校の進度に合わせてもらえますか？', a: 'はい、可能です。\n学校の教科書や問題集をお持ちいただければ、それに沿って授業を進めることができます。\n\nまた、お子さまの理解度や目標に応じて、必要な場合は別のテキストや教材をご提案することもあります。\n学校の進度を大切にしながら、つまずきの解消や先取りにも柔軟に対応します。' },
    { q: '入塾テストはありますか？', a: 'ありません。「いまどこで止まっているか」を一緒に確認することから始めます。' },
  ];
  const [open, setOpen] = React.useState(0);
  return (
    <section data-screen-label="11 FAQ" id="faq" className="sec-vpad" style={{ padding: '120px 24px', background: '#fff', borderTop: '1px solid var(--line)' }}>
      <div style={{ maxWidth: 820, margin: '0 auto' }}>
        <Reveal>
          <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--ink-mute)', letterSpacing: '0.12em', marginBottom: 16, textAlign: 'center' }}>
            FAQ ─ よくあるご質問
          </div>
        </Reveal>
        <Reveal delay={1}>
          <h2 style={{ margin: 0, textAlign: 'center', fontSize: 'clamp(26px, 4vw, 40px)', fontWeight: 900, lineHeight: 1.4 }}>
            気になることは、<br/>先に解消しておきます。
          </h2>
        </Reveal>

        <div style={{ marginTop: 48, borderTop: '1px solid var(--line)' }}>
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} style={{ borderBottom: '1px solid var(--line)' }}>
                <button onClick={() => setOpen(isOpen ? -1 : i)} style={{
                  width: '100%', textAlign: 'left',
                  background: 'none', border: 'none', cursor: 'pointer',
                  padding: '24px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16,
                  fontFamily: 'inherit',
                }}>
                  <span style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                    <span style={{ fontFamily: 'var(--font-serif)', fontSize: 14, color: 'var(--orange)', fontWeight: 700, minWidth: 32 }}>Q.{String(i + 1).padStart(2, '0')}</span>
                    <span className="faq-q" style={{ fontSize: 17, fontWeight: 700, lineHeight: 1.55 }}>{f.q}</span>
                  </span>
                  <span style={{
                    width: 28, height: 28, flexShrink: 0,
                    border: '1.5px solid var(--ink)', borderRadius: 999,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    transition: 'transform .3s', transform: isOpen ? 'rotate(45deg)' : 'none',
                    fontSize: 16, fontWeight: 300,
                  }}>+</span>
                </button>
                <div style={{
                  overflow: 'hidden', maxHeight: isOpen ? 240 : 0,
                  transition: 'max-height .35s ease, opacity .25s',
                  opacity: isOpen ? 1 : 0,
                }}>
                  <div style={{ padding: '0 0 24px 48px', fontSize: 15, lineHeight: 1.95, color: 'var(--ink-soft)', whiteSpace: 'pre-line' }}>
                    {f.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ── 最終CTA ─────────────────────────────────────────
function FinalCTA({ onCTA }) {
  return (
    <section data-screen-label="12 最終CTA" className="sec-vpad" style={{
      padding: '140px 24px', background: 'var(--ink)', color: '#fff',
      position: 'relative', overflow: 'hidden',
    }}>
      <div className="deco" style={{
        position: 'absolute', inset: 0, fontFamily: 'var(--font-serif)',
        color: 'rgba(255,255,255,0.04)', overflow: 'hidden',
      }}>
        <span style={{ position: 'absolute', top: '20%', left: '8%', fontSize: 120, transform: 'rotate(-8deg)' }}>?</span>
        <span style={{ position: 'absolute', bottom: '15%', right: '10%', fontSize: 96, transform: 'rotate(6deg)' }}>!</span>
      </div>
      <div style={{ maxWidth: 900, margin: '0 auto', position: 'relative', textAlign: 'center' }}>
        <Reveal>
          <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--orange)', letterSpacing: '0.12em', marginBottom: 24 }}>
            ── 最後に
          </div>
        </Reveal>
        <Reveal delay={1}>
          <h2 style={{ margin: 0, fontSize: 'clamp(28px, 5vw, 60px)', fontWeight: 900, lineHeight: 1.45, letterSpacing: '-0.01em' }}>
            「数学、<br/>
            <span style={{ position: 'relative', display: 'inline-block' }}>
              ちょっとわかったかも」
              <HandUnderlineDouble color="var(--orange)" style={{ position: 'absolute', left: 0, right: 0, bottom: -12, width: '100%' }} />
            </span>
            <br/>
            その一言を、もう一度。
          </h2>
        </Reveal>
        <Reveal delay={2}>
          <button onClick={onCTA} style={{
            marginTop: 56,
            background: '#fff', color: 'var(--ink)', border: 'none',
            padding: '22px 36px', borderRadius: 999,
            fontSize: 16.5, fontWeight: 800, cursor: 'pointer',
            display: 'inline-flex', alignItems: 'center', gap: 14,
            boxShadow: '0 20px 50px rgba(255,255,255,0.18)',
            fontFamily: 'inherit',
          }}>
            無料体験でつまずき診断を受ける
            <span style={{
              width: 32, height: 32, borderRadius: 999, background: 'var(--orange)', color: '#fff',
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 16,
            }}>→</span>
          </button>
        </Reveal>
        <Reveal delay={3}>
          <p style={{ marginTop: 24, fontSize: 13, color: 'rgba(255,255,255,0.6)' }}>
            所要 約30分・オンライン or 教室・無理な勧誘なし
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ padding: '40px 24px', background: '#0d0d0d', color: 'rgba(255,255,255,0.5)', fontSize: 12 }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: 16, alignItems: 'center' }}>
        <ManabielLogo size={22} color="rgba(255,255,255,0.85)" />
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, alignItems: 'center' }}>
          <a href="privacy.html" style={{ color: 'rgba(255,255,255,0.72)', textDecoration: 'underline', textUnderlineOffset: 3 }}>プライバシーポリシー</a>
          <span>© Manabiel · 数学特化個別指導塾</span>
        </div>
      </div>
    </footer>
  );
}

// ── Sticky mobile CTA ──────────────────────────────
function StickyMobileCTA({ onCTA }) {
  return (
    <div className="sticky-mobile-cta" style={{
      position: 'fixed', bottom: 12, left: 12, right: 12, zIndex: 30,
    }}>
      <button onClick={onCTA} style={{
        width: '100%', padding: '15px 12px', borderRadius: 999,
        background: 'var(--ink)', color: '#fff', border: 'none',
        fontWeight: 800, fontSize: 'clamp(12.5px, 3.6vw, 15px)', cursor: 'pointer',
        boxShadow: '0 14px 40px rgba(0,0,0,0.25)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
        fontFamily: 'inherit',
        whiteSpace: 'nowrap',
      }}>
        無料体験で<span style={{ color: 'var(--orange)' }}>つまずき診断</span>を受ける →
      </button>
    </div>
  );
}

Object.assign(window, {
  InstructorSection, PriceSection, ResultsSection,
  ParentsSection, FAQSection, FinalCTA, Footer, StickyMobileCTA,
});
