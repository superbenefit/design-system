/**
 * SuperBenefit UI Kit — Composer
 * Rich chat input with send button, attachment hint, and keyboard support.
 * Maps to real messaging app composer patterns.
 */

const Composer = ({ onSend, placeholder, disabled }) => {
  const [text, setText] = React.useState('');
  const textareaRef = React.useRef(null);

  const handleSend = () => {
    const trimmed = text.trim();
    if (trimmed && onSend) {
      onSend(trimmed);
      setText('');
      if (textareaRef.current) {
        textareaRef.current.style.height = 'auto';
      }
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleInput = (e) => {
    setText(e.target.value);
    e.target.style.height = 'auto';
    e.target.style.height = e.target.scrollHeight + 'px';
  };

  return (
    <div style={{
      padding: 'var(--space-md) var(--space-lg)',
      borderTop: '1px solid var(--border)',
      background: 'var(--surface)',
      display: 'flex',
      gap: 'var(--space-sm)',
      alignItems: 'flex-end'
    }}>
      <textarea
        ref={textareaRef}
        value={text}
        onChange={handleInput}
        onKeyDown={handleKeyDown}
        placeholder={placeholder || "Type a message..."}
        disabled={disabled}
        rows={1}
        style={{
          flex: 1,
          padding: '0.85em 1.2em',
          borderRadius: 'var(--radius-md)',
          border: '1px solid var(--border)',
          background: 'var(--bg)',
          color: 'var(--fg)',
          fontSize: 'var(--text-base)',
          fontFamily: 'var(--font-sans)',
          resize: 'none',
          outline: 'none',
          maxHeight: 120,
          lineHeight: 1.5,
          transition: 'border-color var(--transition-fast)'
        }}
        onFocus={e => { e.target.style.borderColor = 'var(--color-orange)'; }}
        onBlur={e => { e.target.style.borderColor = 'var(--border)'; }}
      />
      <button
        onClick={handleSend}
        disabled={!text.trim() || disabled}
        style={{
          padding: '0.85em 1.4em',
          borderRadius: 'var(--radius-md)',
          border: 'none',
          background: text.trim() && !disabled ? 'var(--color-orange)' : 'var(--border)',
          color: text.trim() && !disabled ? 'var(--color-cream)' : 'var(--muted)',
          fontWeight: 600,
          fontSize: 'var(--text-base)',
          cursor: text.trim() && !disabled ? 'pointer' : 'default',
          transition: 'background var(--transition-fast), color var(--transition-fast), transform var(--transition-fast)',
          whiteSpace: 'nowrap',
          flexShrink: 0
        }}
        onMouseEnter={e => {
          if (text.trim() && !disabled) {
            e.target.style.transform = 'translateY(-1px)';
            e.target.style.boxShadow = '0 4px 12px rgba(245, 135, 44, 0.3)';
          }
        }}
        onMouseLeave={e => {
          e.target.style.transform = 'none';
          e.target.style.boxShadow = 'none';
        }}
      >
        Send
      </button>
    </div>
  );
};

window.Composer = Composer;
