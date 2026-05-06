// hand.jsx — 手書き風アクセントSVGs
// マル・下線・矢印・チェック・括弧 — 線が描かれるアニメーションつき

function HandUnderline({ color = 'var(--orange)', width = '100%', height = 14, strokeWidth = 3, style = {} }) {
  return (
    <svg className="hand-underline deco" width={width} height={height} viewBox="0 0 300 14" preserveAspectRatio="none" style={style} aria-hidden="true">
      <path d="M3 9 C 60 4, 120 12, 180 7 S 280 5, 297 8" stroke={color} strokeWidth={strokeWidth} />
    </svg>
  );
}

function HandUnderlineDouble({ color = 'var(--orange)', width = '100%', height = 18, style = {} }) {
  return (
    <svg className="hand-underline deco" width={width} height={height} viewBox="0 0 300 18" preserveAspectRatio="none" style={style} aria-hidden="true">
      <path d="M3 7 C 60 3, 140 11, 220 6 S 290 5, 297 7" stroke={color} strokeWidth="3" />
      <path d="M5 14 C 70 11, 150 16, 230 12 S 290 13, 295 14" stroke={color} strokeWidth="2" opacity="0.55" />
    </svg>
  );
}

function HandCircle({ color = 'var(--orange)', size = 120, strokeWidth = 3, style = {} }) {
  return (
    <svg className="hand-circle deco" width={size} height={size * 0.6} viewBox="0 0 200 120" style={style} aria-hidden="true">
      <path d="M 100 14 C 50 14, 18 38, 18 62 C 18 92, 60 110, 110 108 C 160 106, 188 86, 184 60 C 180 36, 140 16, 96 18" stroke={color} strokeWidth={strokeWidth} />
    </svg>
  );
}

function HandArrow({ color = 'var(--orange)', width = 80, height = 60, style = {} }) {
  return (
    <svg className="hand-arrow deco" width={width} height={height} viewBox="0 0 80 60" style={style} aria-hidden="true">
      <path d="M 6 8 C 24 14, 50 22, 70 48 M 70 48 L 56 38 M 70 48 L 60 30" stroke={color} strokeWidth="2.5" />
    </svg>
  );
}

function HandCheck({ color = 'var(--green)', size = 28, style = {} }) {
  return (
    <svg className="hand-check deco" width={size} height={size} viewBox="0 0 28 28" style={style} aria-hidden="true">
      <path d="M5 15 L11 22 L24 6" stroke={color} strokeWidth="3" />
    </svg>
  );
}

function HandX({ color = '#c44', size = 24, style = {} }) {
  return (
    <svg className="hand-check deco" width={size} height={size} viewBox="0 0 24 24" style={style} aria-hidden="true">
      <path d="M5 5 L19 19 M19 5 L5 19" stroke={color} strokeWidth="2.5" />
    </svg>
  );
}

function HandBracket({ color = 'var(--ink)', side = 'left', height = 80, style = {} }) {
  const d = side === 'left'
    ? 'M 18 4 C 8 4, 6 12, 6 40 C 6 68, 8 76, 18 76'
    : 'M 6 4 C 16 4, 18 12, 18 40 C 18 68, 16 76, 6 76';
  return (
    <svg className="hand-bracket deco" width="24" height={height} viewBox="0 0 24 80" preserveAspectRatio="none" style={style} aria-hidden="true">
      <path d={d} stroke={color} strokeWidth="2" />
    </svg>
  );
}

function HandLoop({ color = 'var(--orange)', width = 220, height = 60, style = {} }) {
  return (
    <svg className="hand-loop deco" width={width} height={height} viewBox="0 0 220 60" style={style} aria-hidden="true">
      <path d="M 8 36 C 30 14, 80 14, 110 32 S 200 50, 212 30 C 218 18, 200 8, 180 12" stroke={color} strokeWidth="2.5" />
    </svg>
  );
}

function HandStar({ color = 'var(--orange)', size = 40, style = {} }) {
  return (
    <svg className="hand-loop deco" width={size} height={size} viewBox="0 0 40 40" style={style} aria-hidden="true">
      <path d="M 20 4 L 24 16 L 36 17 L 27 25 L 30 36 L 20 30 L 10 36 L 13 25 L 4 17 L 16 16 Z" stroke={color} strokeWidth="2" />
    </svg>
  );
}

function HandBlob({ color = 'var(--orange-soft)', stroke = null, width = 200, height = 120, style = {} }) {
  return (
    <svg width={width} height={height} viewBox="0 0 200 120" style={style} aria-hidden="true">
      <path d="M 30 22 C 70 6, 150 4, 178 28 C 198 50, 188 96, 148 110 C 110 122, 50 116, 22 92 C -2 70, 4 38, 30 22 Z"
            fill={color} stroke={stroke || 'none'} strokeWidth={stroke ? 2 : 0} />
    </svg>
  );
}

// ── reveal-on-scroll wrapper ─────────────────────────
function Reveal({ children, delay = 0, as: As = 'div', style = {}, className = '' }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Immediate check: if already in viewport at mount, reveal right away
    // bypassing the CSS transition (so background tabs / hidden iframes still paint).
    const checkInView = (bypass) => {
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      if (r.top < vh - 40 && r.bottom > 0) {
        if (bypass) el.classList.add('no-anim');
        el.classList.add('in');
        return true;
      }
      return false;
    };
    if (checkInView(true)) return;

    let io;
    if ('IntersectionObserver' in window) {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              el.classList.add('in');
              io.unobserve(el);
            }
          });
        },
        { threshold: 0.05, rootMargin: '0px 0px -40px 0px' }
      );
      io.observe(el);
    }
    // Fallback: after 1.2s, if still not revealed, force-show without transition.
    const t = setTimeout(() => {
      if (!el.classList.contains('in')) {
        el.classList.add('no-anim');
        el.classList.add('in');
      }
    }, 1200);
    // Also try on next animation frame (after layout settles).
    const raf = requestAnimationFrame(() => { checkInView(false); });
    return () => { if (io) io.disconnect(); clearTimeout(t); cancelAnimationFrame(raf); };
  }, []);
  const cls = `reveal ${delay ? `reveal-d${delay}` : ''} ${className}`.trim();
  return <As ref={ref} className={cls} style={style}>{children}</As>;
}

Object.assign(window, {
  HandUnderline, HandUnderlineDouble, HandCircle, HandArrow,
  HandCheck, HandX, HandBracket, HandLoop, HandStar, HandBlob,
  Reveal,
});
