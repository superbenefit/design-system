/**
 * SuperBenefit UI Kit — Header
 * Fixed glass header with logo, navigation, and rainbow border.
 * Source: src/components/Header.astro
 */

const Header = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#knowledge', label: 'Knowledge' },
    { href: '#governance', label: 'Governance' }
  ];

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      color: 'var(--color-cream)',
      backgroundColor: 'rgba(26, 26, 26, 0.8)',
      backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 'var(--header-height)',
        maxWidth: 'var(--max-width)',
        margin: '0 auto',
        padding: '0 var(--space-lg)'
      }}>
        <a href="#" style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--space-sm)',
          color: 'var(--color-cream)',
          fontWeight: 700,
          fontSize: 'var(--text-lg)',
          textDecoration: 'none',
          fontFamily: 'var(--font-serif)',
          letterSpacing: '-0.02em'
        }}>
          <img
            src="../../assets/sb-icon.jpg"
            alt=""
            style={{ width: 36, height: 36, borderRadius: '50%', objectFit: 'cover' }}
          />
          <span>SuperBenefit</span>
        </a>

        <nav style={{
          display: 'flex',
          gap: 'var(--space-lg)',
          listStyle: 'none',
          ...(window.innerWidth <= 768 ? {
            position: 'fixed',
            top: 'var(--header-height)',
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(26, 26, 26, 0.97)',
            backdropFilter: 'blur(16px)',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: menuOpen ? 1 : 0,
            visibility: menuOpen ? 'visible' : 'hidden',
            transition: 'opacity var(--transition-medium), visibility var(--transition-medium)'
          } : {})
        }}>
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              style={{
                color: 'var(--color-cream)',
                fontSize: window.innerWidth <= 768 ? 'var(--text-xl)' : 'var(--text-sm)',
                fontWeight: 500,
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                padding: 'var(--space-xs) 0',
                position: 'relative',
                transition: 'color var(--transition-fast)'
              }}
              onMouseEnter={e => { e.target.style.color = 'var(--color-orange)'; }}
              onMouseLeave={e => { e.target.style.color = 'var(--color-cream)'; }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: window.innerWidth <= 768 ? 'flex' : 'none',
            width: 36,
            height: 36,
            alignItems: 'center',
            justifyContent: 'center',
            background: 'none',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          <span style={{
            display: 'block',
            width: 22,
            height: 2,
            background: 'var(--color-cream)',
            borderRadius: 2,
            position: 'relative',
            transform: menuOpen ? 'rotate(45deg)' : 'none',
            transition: 'transform var(--transition-fast)'
          }}>
            <span style={{
              content: '""',
              position: 'absolute',
              top: menuOpen ? 0 : -7,
              left: 0,
              width: 22,
              height: 2,
              background: 'var(--color-cream)',
              borderRadius: 2,
              transform: menuOpen ? 'rotate(90deg)' : 'none',
              transition: 'transform var(--transition-fast)'
            }} />
          </span>
        </button>
      </div>
      <div style={{
        height: 2,
        background: 'var(--gradient-rainbow)'
      }} />
    </header>
  );
};

window.Header = Header;
