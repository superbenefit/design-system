/**
 * SuperBenefit UI Kit — NavigationBar
 * Bottom or top tab navigation for mobile app patterns.
 * Use for primary app navigation, section switching, and quick access.
 */

const NavigationBar = ({ items, activeItem, onSelect, position = 'bottom' }) => {
  const isBottom = position === 'bottom';

  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      background: 'var(--surface)',
      borderTop: isBottom ? '1px solid var(--border)' : 'none',
      borderBottom: !isBottom ? '1px solid var(--border)' : 'none',
      padding: isBottom ? 'var(--space-sm) 0 calc(var(--space-sm) + env(safe-area-inset-bottom, 0px))' : 'var(--space-sm) 0',
      position: isBottom ? 'sticky' : 'relative',
      bottom: isBottom ? 0 : 'auto',
      top: !isBottom ? 0 : 'auto',
      zIndex: 50,
      flexShrink: 0
    }}>
      {items.map(item => {
        const isActive = item.id === activeItem;
        return (
          <button
            key={item.id}
            onClick={() => onSelect && onSelect(item.id)}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 4,
              padding: 'var(--space-xs) var(--space-md)',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              color: isActive ? 'var(--color-orange)' : 'var(--muted)',
              transition: 'color var(--transition-fast)',
              position: 'relative'
            }}
          >
            {item.icon && (
              <span style={{
                width: 24,
                height: 24,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {item.icon}
              </span>
            )}
            <span style={{
              fontSize: 'var(--text-xs)',
              fontWeight: isActive ? 600 : 500
            }}>{item.label}</span>
            {isActive && (
              <span style={{
                position: 'absolute',
                bottom: isBottom ? -2 : 'auto',
                top: !isBottom ? -2 : 'auto',
                left: '50%',
                transform: 'translateX(-50%)',
                width: 20,
                height: 3,
                borderRadius: 2,
                background: 'var(--color-orange)'
              }} />
            )}
          </button>
        );
      })}
    </nav>
  );
};

window.NavigationBar = NavigationBar;
