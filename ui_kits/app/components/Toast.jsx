/**
 * SuperBenefit UI Kit — Toast
 * Status notification with auto-dismiss and stacking support.
 * Use for confirmations, errors, and transient feedback.
 */

const Toast = ({ message, type = 'info', onDismiss, duration = 4000 }) => {
  const [visible, setVisible] = React.useState(true);

  React.useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        setVisible(false);
        setTimeout(() => onDismiss && onDismiss(), 300);
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [duration, onDismiss]);

  const typeStyles = {
    info: { bg: 'var(--surface)', border: 'var(--border)', icon: 'i' },
    success: { bg: 'rgba(122, 154, 78, 0.12)', border: 'var(--color-green)', icon: '✓' },
    warning: { bg: 'rgba(212, 168, 67, 0.12)', border: 'var(--color-gold)', icon: '!' },
    error: { bg: 'rgba(196, 64, 26, 0.12)', border: 'var(--color-red)', icon: '✕' }
  };

  const t = typeStyles[type] || typeStyles.info;

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-sm)',
      padding: 'var(--space-md) var(--space-lg)',
      background: t.bg,
      borderLeft: `3px solid ${t.border}`,
      borderRadius: '0 var(--radius-md) var(--radius-md) 0',
      boxShadow: 'var(--shadow-md)',
      minWidth: 280,
      maxWidth: 400,
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateX(0)' : 'translateX(100%)',
      transition: 'opacity 0.3s ease, transform 0.3s ease',
      pointerEvents: 'auto'
    }}>
      <span style={{
        width: 20,
        height: 20,
        borderRadius: '50%',
        background: t.border,
        color: 'var(--color-cream)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 'var(--text-xs)',
        fontWeight: 700,
        flexShrink: 0
      }}>{t.icon}</span>
      <span style={{
        flex: 1,
        fontSize: 'var(--text-sm)',
        color: 'var(--fg)',
        lineHeight: 1.5
      }}>{message}</span>
      <button
        onClick={() => {
          setVisible(false);
          setTimeout(() => onDismiss && onDismiss(), 300);
        }}
        style={{
          background: 'transparent',
          border: 'none',
          color: 'var(--muted)',
          fontSize: 'var(--text-lg)',
          cursor: 'pointer',
          padding: 0,
          lineHeight: 1,
          width: 24,
          height: 24,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        &times;
      </button>
    </div>
  );
};

window.Toast = Toast;
