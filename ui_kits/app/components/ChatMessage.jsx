/**
 * SuperBenefit UI Kit — ChatMessage
 * Individual chat bubble with avatar, timestamp, status, and content variants.
 * Supports text, code blocks, and rich content. Maps to real chat UI patterns.
 */

const ChatMessage = ({ message }) => {
  const { sender, text, timestamp, status, type = 'text', codeLang, isUser } = message;

  const bubbleBg = isUser ? 'var(--color-orange)' : 'var(--surface)';
  const bubbleFg = isUser ? 'var(--color-cream)' : 'var(--fg)';
  const align = isUser ? 'flex-end' : 'flex-start';
  const maxW = 'min(70ch, 85%)';

  return (
    <div style={{
      display: 'flex',
      flexDirection: isUser ? 'row-reverse' : 'row',
      alignItems: 'flex-end',
      gap: 'var(--space-sm)',
      marginBottom: 'var(--space-md)'
    }}>
      <Avatar
        src={sender.avatar}
        alt={sender.name}
        size={36}
        status={sender.status}
        initials={sender.initials}
      />
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: align,
        maxWidth: maxW
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'baseline',
          gap: 'var(--space-xs)',
          marginBottom: 'var(--space-xs)',
          flexDirection: isUser ? 'row-reverse' : 'row'
        }}>
          <span style={{
            fontSize: 'var(--text-xs)',
            fontWeight: 600,
            color: 'var(--muted)'
          }}>{sender.name}</span>
          <span style={{
            fontSize: 'var(--text-xs)',
            color: 'var(--muted)',
            opacity: 0.7
          }}>{timestamp}</span>
        </div>

        <div style={{
          background: bubbleBg,
          color: bubbleFg,
          padding: 'var(--space-md) var(--space-lg)',
          borderRadius: isUser
            ? 'var(--radius-lg) 0 var(--radius-lg) var(--radius-lg)'
            : '0 var(--radius-lg) var(--radius-lg) var(--radius-lg)',
          boxShadow: 'var(--shadow-sm)',
          fontSize: 'var(--text-base)',
          lineHeight: 1.6,
          wordBreak: 'break-word'
        }}>
          {type === 'code' ? (
            <pre style={{
              margin: 0,
              padding: 'var(--space-sm)',
              background: 'rgba(0,0,0,0.08)',
              borderRadius: 'var(--radius-sm)',
              fontFamily: 'var(--font-mono, monospace)',
              fontSize: 'var(--text-sm)',
              overflowX: 'auto'
            }}>
              <code>{text}</code>
            </pre>
          ) : (
            <div>{text}</div>
          )}
        </div>

        {status && (
          <span style={{
            fontSize: 'var(--text-xs)',
            color: 'var(--muted)',
            opacity: 0.6,
            marginTop: 'var(--space-xs)',
            alignSelf: align
          }}>{status}</span>
        )}
      </div>
    </div>
  );
};

window.ChatMessage = ChatMessage;
