/**
 * SuperBenefit UI Kit — Toolbar
 * Action toolbar with icon buttons, dropdowns, and grouped actions.
 * Use for editor toolbars, chat actions, and context menus.
 */

const Toolbar = ({ actions, title }) => {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-xs)',
      padding: 'var(--space-sm) var(--space-md)',
      background: 'var(--surface)',
      borderBottom: '1px solid var(--border)',
      flexShrink: 0
    }}>
      {title && (
        <span style={{
          fontSize: 'var(--text-sm)',
          fontWeight: 600,
          color: 'var(--fg)',
          marginRight: 'var(--space-md)',
          whiteSpace: 'nowrap'
        }}>{title}</span>
      )}
      {actions.map((action, i) => (
        <React.Fragment key={i}>
          {action.type === 'separator' ? (
            <div style={{
              width: 1,
              height: 20,
              background: 'var(--border)',
              margin: '0 var(--space-xs)'
            }} />
          ) : (
            <button
              onClick={action.onClick}
              disabled={action.disabled}
              title={action.title}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-xs)',
                padding: '0.5em 0.9em',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid transparent',
                background: action.active ? 'var(--bg)' : 'transparent',
                color: action.disabled ? 'var(--muted)' : (action.active ? 'var(--color-orange)' : 'var(--fg)'),
                fontSize: 'var(--text-sm)',
                fontWeight: 500,
                cursor: action.disabled ? 'default' : 'pointer',
                transition: 'all var(--transition-fast)'
              }}
              onMouseEnter={e => {
                if (!action.disabled) {
                  e.target.style.background = 'var(--bg)';
                  e.target.style.borderColor = 'var(--border)';
                }
              }}
              onMouseLeave={e => {
                if (!action.active) {
                  e.target.style.background = 'transparent';
                  e.target.style.borderColor = 'transparent';
                }
              }}
            >
              {action.icon && (
                <span style={{ display: 'flex', alignItems: 'center' }}>{action.icon}</span>
              )}
              {action.label}
            </button>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

window.Toolbar = Toolbar;
