/**
 * SuperBenefit UI Kit — Sidebar
 * Navigation sidebar component for the app shell.
 * Maps to website nav patterns from src/components/Nav.astro.
 */

const Sidebar = ({ links, currentPath }) => {
  return (
    <aside style={{
      width: 240,
      background: 'var(--color-charcoal)',
      color: 'var(--color-cream)',
      padding: 'var(--space-lg)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-md)',
      borderRight: '2px solid transparent',
      borderImage: 'var(--gradient-rainbow) 1',
      flexShrink: 0
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-sm)',
        marginBottom: 'var(--space-lg)'
      }}>
        <img
          src="../../assets/sb-icon.jpg"
          alt=""
          style={{ width: 32, height: 32, borderRadius: '50%' }}
        />
        <span style={{
          fontFamily: 'var(--font-serif)',
          fontWeight: 700,
          fontSize: 'var(--text-lg)'
        }}>SuperBenefit</span>
      </div>
      <nav style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
        {links.map(link => {
          const isActive = link.href === currentPath;
          return (
            <a
              key={link.href}
              href={link.href}
              style={{
                color: isActive ? 'var(--color-orange)' : 'var(--color-cream)',
                fontSize: 'var(--text-sm)',
                fontWeight: 500,
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                padding: 'var(--space-sm) var(--space-md)',
                borderRadius: 'var(--radius-sm)',
                background: isActive ? 'rgba(245, 135, 44, 0.15)' : 'transparent',
                transition: 'color var(--transition-fast), background var(--transition-fast)',
                borderLeft: isActive ? '3px solid var(--color-orange)' : '3px solid transparent'
              }}
              onMouseEnter={e => { if (!isActive) e.target.style.color = 'var(--color-orange)'; }}
              onMouseLeave={e => { if (!isActive) e.target.style.color = 'var(--color-cream)'; }}
            >
              {link.label}
            </a>
          );
        })}
      </nav>
    </aside>
  );
};

window.Sidebar = Sidebar;
