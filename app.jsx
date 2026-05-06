// app.jsx — Main app
// マナビエル LP

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "blue",
  "headFont": "gothic",
  "heroIntensity": "medium",
  "spacing": "regular",
  "showStickyCTA": true,
  "showTweaksPanel": false
}/*EDITMODE-END*/;

const ACCENT_PRESETS = {
  blue:   { primary: '#2D6CDF', soft: '#e8efff' },
  green:  { primary: '#3FA776', soft: '#e6f4ec' },
  orange: { primary: '#E8825A', soft: '#fdeee5' },
};

function applyTweaks(t) {
  const r = document.documentElement.style;
  // accent overrides --orange (the strongest accent in the design)
  const a = ACCENT_PRESETS[t.accent] || ACCENT_PRESETS.blue;
  r.setProperty('--hand', a.primary);

  // heading font
  if (t.headFont === 'mincho') {
    r.setProperty('--font-head', "'Noto Serif JP', 'YuMincho', serif");
  } else {
    r.setProperty('--font-head', "'Zen Kaku Gothic New', 'Noto Sans JP', system-ui, sans-serif");
  }

  // section spacing
  const space = t.spacing === 'tight' ? '88px' : t.spacing === 'roomy' ? '160px' : '120px';
  r.setProperty('--section-pad', space);
}

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  React.useEffect(() => { applyTweaks(t); }, [t]);

  const ctaRef = React.useRef(null);
  const handleCTA = () => {
    window.location.href = 'contact.html';
  };

  // hero copy intensity rendered through prop
  return (
    <div style={{ position: 'relative' }}>
      <Header onCTA={handleCTA} />
      <Hero onCTA={handleCTA} copyStrength={t.heroIntensity} />
      <EmpathySection />
      <CauseSection />
      <SolutionSection />
      <GradeTabs />
      <DiagnosisSim onCTA={handleCTA} />
      <InstructorSection />
      <PriceSection />
      <ResultsSection />
      <ParentsSection />
      <FAQSection />
      <div ref={ctaRef}>
        <FinalCTA onCTA={handleCTA} />
      </div>
      <Footer />
      {t.showStickyCTA && <StickyMobileCTA onCTA={handleCTA} />}

      {t.showTweaksPanel && (
      <TweaksPanel>
        <TweakSection label="アクセントカラー" />
        <TweakRadio label="メインの差し色" value={t.accent}
          options={[
            { value: 'blue', label: '青' },
            { value: 'green', label: '緑' },
            { value: 'orange', label: '橙' },
          ]}
          onChange={(v) => setTweak('accent', v)} />

        <TweakSection label="タイポグラフィ" />
        <TweakRadio label="見出しフォント" value={t.headFont}
          options={[
            { value: 'gothic', label: 'ゴシック' },
            { value: 'mincho', label: '明朝' },
          ]}
          onChange={(v) => setTweak('headFont', v)} />

        <TweakSection label="ファーストビュー" />
        <TweakRadio label="コピー強度" value={t.heroIntensity}
          options={[
            { value: 'soft', label: 'やさしい' },
            { value: 'medium', label: '中間' },
            { value: 'strong', label: '宣言的' },
          ]}
          onChange={(v) => setTweak('heroIntensity', v)} />

        <TweakSection label="レイアウト" />
        <TweakRadio label="セクション間の余白" value={t.spacing}
          options={[
            { value: 'tight', label: '狭い' },
            { value: 'regular', label: '標準' },
            { value: 'roomy', label: '広い' },
          ]}
          onChange={(v) => setTweak('spacing', v)} />
        <TweakToggle label="モバイル下部CTA" value={t.showStickyCTA}
          onChange={(v) => setTweak('showStickyCTA', v)} />
      </TweaksPanel>
      )}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
