/**
 * SuperBenefit UI Kit — CodeBlock
 * Syntax-highlighted code display with copy button and language label.
 * Use for documentation, chat code snippets, and technical content.
 */

const CodeBlock = ({ code, language, filename }) => {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(code).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    }
  };

  return (
    <div style={{
      background: 'var(--color-charcoal)',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      margin: 'var(--space-md) 0',
      fontFamily: "'JetBrains Mono', 'IBM Plex Mono', ui-monospace, Menlo, monospace",
      fontSize: 'var(--text-sm)',
      lineHeight: 1.7
    }}>
      {/* Header */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 'var(--space-sm) var(--space-md)',
        background: 'rgba(0,0,0,0.3)',
        borderBottom: '1px solid rgba(255,255,255,0.06)'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--space-sm)'
        }}>
          <div style={{
            display: 'flex',
            gap: 6
          }}>
            <span style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--color-red)' }} />
            <span style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--color-gold)' }} />
            <span style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--color-green)' }} />
          </div>
          {filename && (
            <span style={{
              color: 'var(--color-cream)',
              opacity: 0.6,
              fontSize: 'var(--text-xs)',
              marginLeft: 'var(--space-sm)'
            }}>{filename}</span>
          )}
        </div>
        <button
          onClick={handleCopy}
          style={{
            background: 'transparent',
            border: '1px solid rgba(255,255,255,0.12)',
            color: 'var(--color-cream)',
            opacity: 0.7,
            padding: '0.3em 0.8em',
            borderRadius: 'var(--radius-sm)',
            fontSize: 'var(--text-xs)',
            cursor: 'pointer',
            transition: 'opacity var(--transition-fast), background var(--transition-fast)'
          }}
          onMouseEnter={e => { e.target.style.opacity = '1'; e.target.style.background = 'rgba(255,255,255,0.08)'; }}
          onMouseLeave={e => { e.target.style.opacity = '0.7'; e.target.style.background = 'transparent'; }}
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>

      {/* Code */}
      <pre style={{
        margin: 0,
        padding: 'var(--space-md) var(--space-lg)',
        overflowX: 'auto',
        color: 'var(--color-cream)',
        background: 'transparent'
      }}>
        <code>{code}</code>
      </pre>
    </div>
  );
};

window.CodeBlock = CodeBlock;
