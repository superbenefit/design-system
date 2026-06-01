/**
 * SuperBenefit UI Kit — StoryCard
 * Elevated dark card with theme-colored accent stripe, glass overlay, and CTA.
 * Source: src/components/StorySection.astro
 */

const StoryCard = ({ theme, label, heading, body, ctaText, ctaHref }) => {
  const themeColors = {
    green: { stripe: 'var(--color-green)', label: 'var(--color-green-sage)', glow: 'rgba(122, 154, 78, 0.08)' },
    orange: { stripe: 'var(--color-orange)', label: 'var(--color-orange)', glow: 'rgba(245, 135, 44, 0.08)' },
    red: { stripe: 'var(--color-red)', label: 'var(--color-red)', glow: 'rgba(196, 64, 26, 0.08)' }
  };

  const t = themeColors[theme] || themeColors.orange;

  return (
    <section style={{
      position: 'relative',
      overflow: 'hidden',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-card-dark)',
      background: 'var(--color-charcoal)',
      color: 'var(--color-cream)',
      margin: '0 var(--space-lg)'
    }}>
      {/* Accent stripe */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 3,
        background: t.stripe,
        borderRadius: '20px 20px 0 0',
        zIndex: 10
      }} />

      {/* Ambient glow */}
      <div style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        background: `radial-gradient(ellipse at 35% 25%, ${t.glow} 0%, transparent 60%)`,
        borderRadius: 'var(--radius-lg)'
      }} />

      {/* Content */}
      <div style={{
        position: 'relative',
        zIndex: 3,
        padding: 'calc(40px + var(--space-lg)) var(--space-xl) var(--space-xl)'
      }}>
        <div style={{
          maxWidth: 'var(--max-width)',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'var(--space-xl)',
          alignItems: 'center'
        }}>
          <div>
            <span style={{
              display: 'inline-block',
              fontSize: 'var(--text-xs)',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              color: t.label,
              marginBottom: 'var(--space-sm)'
            }}>{label}</span>
            <h2 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'var(--text-3xl)',
              color: 'var(--color-cream)',
              marginBottom: 'var(--space-md)',
              lineHeight: 1.15
            }}>{heading}</h2>
            <p style={{
              color: 'var(--color-cream)',
              opacity: 0.75,
              fontSize: 'var(--text-lg)',
              lineHeight: 1.75
            }}>{body}</p>
          </div>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            justifyContent: 'center',
            gap: 'var(--space-md)'
          }}>
            <a href={ctaHref} style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5em',
              borderRadius: '50px',
              color: 'var(--color-cream)',
              fontWeight: 600,
              letterSpacing: '0.04em',
              textDecoration: 'none',
              whiteSpace: 'nowrap',
              padding: '0.85em 2em',
              fontSize: 'var(--text-base)',
              background: t.glow.replace('0.08', '0.18'),
              border: `1px solid ${t.stripe}`,
              transition: 'background var(--transition-medium), border-color var(--transition-medium), transform var(--transition-fast), box-shadow var(--transition-medium)'
            }}
            onMouseEnter={e => {
              e.target.style.background = t.glow.replace('0.08', '0.30');
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={e => {
              e.target.style.background = t.glow.replace('0.08', '0.18');
              e.target.style.transform = 'none';
            }}
            >
              {ctaText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

window.StoryCard = StoryCard;
