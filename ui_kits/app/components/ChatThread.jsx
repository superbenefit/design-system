/**
 * SuperBenefit UI Kit — ChatThread
 * Scrollable message thread with typing indicator and empty state.
 * Composes ChatMessage components into a real conversation view.
 */

const ChatThread = ({ messages, isTyping, title }) => {
  const threadRef = React.useRef(null);

  React.useEffect(() => {
    if (threadRef.current) {
      threadRef.current.scrollTop = threadRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  return (
    <div style={{
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--bg)',
      overflow: 'hidden'
    }}>
      {title && (
        <div style={{
          padding: 'var(--space-md) var(--space-lg)',
          borderBottom: '1px solid var(--border)',
          background: 'var(--surface)',
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--space-sm)',
          flexShrink: 0
        }}>
          <Avatar
            src="../../assets/sb-icon.jpg"
            alt="SuperBenefit"
            size={32}
            status="online"
          />
          <div>
            <div style={{
              fontWeight: 600,
              fontSize: 'var(--text-sm)',
              color: 'var(--fg)'
            }}>{title}</div>
            <div style={{
              fontSize: 'var(--text-xs)',
              color: 'var(--color-green)'
            }}>Online</div>
          </div>
        </div>
      )}

      <div
        ref={threadRef}
        style={{
          flex: 1,
          overflowY: 'auto',
          padding: 'var(--space-lg)',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        {messages.length === 0 ? (
          <div style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--muted)',
            gap: 'var(--space-md)'
          }}>
            <Avatar
              src="../../assets/sb-icon.jpg"
              alt="SuperBenefit"
              size={64}
            />
            <p style={{ fontSize: 'var(--text-lg)' }}>Start a conversation</p>
            <p style={{ fontSize: 'var(--text-sm)', opacity: 0.7 }}>Ask about governance, DAOs, or systems innovation.</p>
          </div>
        ) : (
          messages.map((msg, i) => (
            <ChatMessage key={msg.id || i} message={msg} />
          ))
        )}

        {isTyping && (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--space-sm)',
            marginTop: 'var(--space-sm)'
          }}>
            <Avatar
              src="../../assets/sb-icon.jpg"
              alt="SuperBenefit"
              size={32}
            />
            <div style={{
              background: 'var(--surface)',
              padding: 'var(--space-md) var(--space-lg)',
              borderRadius: '0 var(--radius-lg) var(--radius-lg) var(--radius-lg)',
              display: 'flex',
              gap: '4px',
              alignItems: 'center'
            }}>
              {[0, 1, 2].map(i => (
                <span key={i} style={{
                  width: 6,
                  height: 6,
                  borderRadius: '50%',
                  background: 'var(--muted)',
                  animation: `typingBounce 1.4s infinite ease-in-out ${i * 0.16}s`
                }} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

window.ChatThread = ChatThread;
