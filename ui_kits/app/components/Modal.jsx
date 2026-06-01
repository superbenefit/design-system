/**
 * SuperBenefit UI Kit — Modal
 * Overlay dialog with backdrop, close button, and focus trap.
 * Use for confirmations, forms, and detail views.
 */

const Modal = ({ isOpen, onClose, title, children, size = 'medium' }) => {
  if (!isOpen) return null;

  const sizes = {
    small: { maxWidth: 400 },
    medium: { maxWidth: 560 },
    large: { maxWidth: 800 }
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 200,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'var(--space-lg)'
      }}
      onClick={onClose}
    >
      {/* Backdrop */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'rgba(26, 26, 26, 0.7)',
        backdropFilter: 'blur(4px)'
      }} />

      {/* Dialog */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: sizes[size].maxWidth,
          background: 'var(--surface)',
          borderRadius: 'var(--radius-lg)',
          boxShadow: 'var(--shadow-lg)',
          overflow: 'hidden',
          animation: 'modalIn 0.2s ease-out'
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 'var(--space-md) var(--space-lg)',
          borderBottom: '1px solid var(--border)'
        }}>
          <h3 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'var(--text-lg)',
            fontWeight: 700,
            color: 'var(--fg)',
            margin: 0
          }}>{title}</h3>
          <button
            onClick={onClose}
            aria-label="Close"
            style={{
              width: 32,
              height: 32,
              borderRadius: '50%',
              border: 'none',
              background: 'transparent',
              color: 'var(--muted)',
              fontSize: 'var(--text-lg)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background var(--transition-fast), color var(--transition-fast)'
            }}
            onMouseEnter={e => {
              e.target.style.background = 'var(--bg)';
              e.target.style.color = 'var(--fg)';
            }}
            onMouseLeave={e => {
              e.target.style.background = 'transparent';
              e.target.style.color = 'var(--muted)';
            }}
          >
            &times;
          </button>
        </div>

        {/* Body */}
        <div style={{
          padding: 'var(--space-lg)',
          maxHeight: '70vh',
          overflowY: 'auto'
        }}>
          {children}
        </div>
      </div>
    </div>
  );
};

window.Modal = Modal;
