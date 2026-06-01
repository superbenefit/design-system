/**
 * SuperBenefit UI Kit — Avatar
 * User/assistant avatar with optional status indicator and initials fallback.
 * Use for message authors, user profiles, and participant lists.
 */

const Avatar = ({ src, alt, size = 40, status, initials }) => {
  const statusColors = {
    online: 'var(--color-green)',
    away: 'var(--color-gold)',
    busy: 'var(--color-red)',
    offline: 'var(--muted)'
  };

  const fontSize = size * 0.4;

  return (
    <div style={{
      position: 'relative',
      width: size,
      height: size,
      flexShrink: 0
    }}>
      {src ? (
        <img
          src={src}
          alt={alt || ''}
          style={{
            width: size,
            height: size,
            borderRadius: '50%',
            objectFit: 'cover',
            border: '2px solid var(--surface)'
          }}
        />
      ) : (
        <div style={{
          width: size,
          height: size,
          borderRadius: '50%',
          background: 'var(--gradient-warm)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--color-cream)',
          fontWeight: 700,
          fontSize: fontSize,
          fontFamily: 'var(--font-serif)',
          border: '2px solid var(--surface)'
        }}>
          {initials || '?'}
        </div>
      )}
      {status && (
        <span style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          width: size * 0.3,
          height: size * 0.3,
          borderRadius: '50%',
          background: statusColors[status] || statusColors.offline,
          border: `2px solid var(--surface)`,
          boxShadow: `0 0 0 1px ${statusColors[status] || statusColors.offline}`
        }} />
      )}
    </div>
  );
};

window.Avatar = Avatar;
