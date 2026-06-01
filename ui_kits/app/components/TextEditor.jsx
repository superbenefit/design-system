/**
 * SuperBenefit UI Kit — TextEditor
 * Rich text editing surface with toolbar and formatting actions.
 * Use for composing long-form content, notes, and documents.
 */

const TextEditor = ({ value, onChange, placeholder, minHeight = 200 }) => {
  const [content, setContent] = React.useState(value || '');

  const handleChange = (e) => {
    setContent(e.target.value);
    if (onChange) onChange(e.target.value);
  };

  const toolbarActions = [
    { label: 'B', title: 'Bold', style: { fontWeight: 'bold' } },
    { label: 'I', title: 'Italic', style: { fontStyle: 'italic' } },
    { label: 'H1', title: 'Heading 1', style: { fontSize: 'var(--text-xl)' } },
    { label: '"', title: 'Quote', style: {} },
    { label: '</>', title: 'Code', style: { fontFamily: 'monospace' } }
  ];

  return (
    <div style={{
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-md)',
      background: 'var(--surface)',
      overflow: 'hidden'
    }}>
      {/* Toolbar */}
      <div style={{
        display: 'flex',
        gap: 'var(--space-xs)',
        padding: 'var(--space-sm) var(--space-md)',
        borderBottom: '1px solid var(--border)',
        background: 'var(--bg)'
      }}>
        {toolbarActions.map((action, i) => (
          <button
            key={i}
            title={action.title}
            style={{
              padding: '0.4em 0.7em',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid transparent',
              background: 'transparent',
              color: 'var(--muted)',
              fontSize: 'var(--text-sm)',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all var(--transition-fast)',
              ...action.style
            }}
            onMouseEnter={e => {
              e.target.style.background = 'var(--bg)';
              e.target.style.borderColor = 'var(--border)';
              e.target.style.color = 'var(--fg)';
            }}
            onMouseLeave={e => {
              e.target.style.background = 'transparent';
              e.target.style.borderColor = 'transparent';
              e.target.style.color = 'var(--muted)';
            }}
          >
            {action.label}
          </button>
        ))}
        <div style={{ flex: 1 }} />
        <span style={{
          fontSize: 'var(--text-xs)',
          color: 'var(--muted)',
          alignSelf: 'center'
        }}>{content.length} chars</span>
      </div>

      {/* Editor area */}
      <textarea
        value={content}
        onChange={handleChange}
        placeholder={placeholder || "Start writing..."}
        style={{
          width: '100%',
          minHeight: minHeight,
          padding: 'var(--space-md) var(--space-lg)',
          border: 'none',
          outline: 'none',
          background: 'var(--surface)',
          color: 'var(--fg)',
          fontSize: 'var(--text-base)',
          fontFamily: 'var(--font-sans)',
          lineHeight: 1.7,
          resize: 'vertical'
        }}
      />
    </div>
  );
};

window.TextEditor = TextEditor;
