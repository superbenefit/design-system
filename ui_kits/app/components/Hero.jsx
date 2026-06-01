/**
 * SuperBenefit UI Kit — Hero
 * Full-viewport hero with starfield background, centered icon, and gradient tagline.
 * Source: src/components/Hero.astro
 */

const Hero = () => {
  return (
    <section style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--color-black)',
      overflow: 'hidden',
      padding: 'var(--space-2xl) var(--space-lg)',
      paddingTop: 'calc(var(--header-height) + var(--space-2xl))'
    }}>
      {/* Starfield background */}
      <div style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        background: `
          radial-gradient(1px 1px at 5% 15%, #fff, transparent),
          radial-gradient(1px 1px at 12% 42%, #fff, transparent),
          radial-gradient(1px 1px at 25% 8%, #fff, transparent),
          radial-gradient(1px 1px at 45% 25%, #fff, transparent),
          radial-gradient(1px 1px at 65% 48%, #fff, transparent),
          radial-gradient(1px 1px at 85% 62%, #fff, transparent),
          radial-gradient(1.5px 1.5px at 8% 35%, rgba(245,135,44,0.8), transparent),
          radial-gradient(1.5px 1.5px at 55% 85%, rgba(122,154,78,0.7), transparent),
          radial-gradient(2px 2px at 15% 50%, rgba(212,168,67,0.9), transparent),
          radial-gradient(2px 2px at 75% 65%, rgba(255,255,255,0.9), transparent)
        `,
        opacity: 0.5
      }} />

      {/* Content */}
      <div style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 'var(--space-lg)',
        textAlign: 'center',
        zIndex: 1
      }}>
        {/* Icon with glow */}
        <div style={{ position: 'relative', width: 160, height: 160 }}>
          <div style={{
            position: 'absolute',
            inset: -6,
            borderRadius: '50%',
            background: 'var(--gradient-rainbow)',
            filter: 'blur(2px)',
            boxShadow: '0 0 30px rgba(245, 135, 44, 0.5), 0 0 70px rgba(212, 168, 67, 0.2)'
          }} />
          <img
            src="../../assets/sb-icon.jpg"
            alt="SuperBenefit"
            style={{
              position: 'relative',
              width: 160,
              height: 160,
              borderRadius: '50%',
              objectFit: 'cover',
              zIndex: 1,
              border: '3px solid rgba(26, 26, 26, 0.5)'
            }}
          />
        </div>

        {/* Tagline */}
        <p style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'var(--text-hero)',
          fontWeight: 900,
          lineHeight: 1,
          letterSpacing: '-0.02em',
          background: 'linear-gradient(135deg, var(--color-cream), var(--color-gold), var(--color-orange))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          filter: 'drop-shadow(0 2px 10px rgba(212, 168, 67, 0.3))'
        }}>
          SuperBenefit
        </p>

        {/* Subtitle */}
        <p style={{
          fontSize: 'var(--text-lg)',
          color: 'var(--color-cream)',
          opacity: 0.7,
          maxWidth: '36ch',
          lineHeight: 1.5
        }}>
          Let's make better faster, together.
        </p>
      </div>
    </section>
  );
};

window.Hero = Hero;
