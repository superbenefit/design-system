/**
 * SuperBenefit UI Kit — BlogCard
 * Light cream card with image, date, title, excerpt, and tags.
 * Source: src/components/BlogCard.astro
 */

const BlogCard = ({ title, excerpt, date, tags, image }) => {
  return (
    <article style={{
      background: 'var(--color-cream-light)',
      borderRadius: 12,
      overflow: 'hidden',
      boxShadow: 'var(--shadow-sm)',
      transition: 'transform var(--transition-medium), box-shadow var(--transition-medium)',
      borderLeft: '3px solid transparent',
      cursor: 'pointer'
    }}
    onMouseEnter={e => {
      e.currentTarget.style.transform = 'translateY(-4px)';
      e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
      e.currentTarget.style.borderLeftColor = 'var(--color-orange)';
    }}
    onMouseLeave={e => {
      e.currentTarget.style.transform = 'none';
      e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
      e.currentTarget.style.borderLeftColor = 'transparent';
    }}
    >
      <div style={{
        aspectRatio: '16 / 9',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, var(--color-cream), var(--color-gold))'
      }}>
        <img
          src={image}
          alt={title}
          loading="lazy"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform var(--transition-slow)'
          }}
          onMouseEnter={e => { e.target.style.transform = 'scale(1.04)'; }}
          onMouseLeave={e => { e.target.style.transform = 'none'; }}
        />
      </div>
      <div style={{ padding: 'var(--space-lg)' }}>
        <time style={{
          display: 'block',
          fontSize: 'var(--text-xs)',
          color: 'var(--color-orange)',
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '0.06em',
          marginBottom: 'var(--space-xs)'
        }}>{date}</time>
        <h3 style={{
          fontSize: 'var(--text-lg)',
          color: 'var(--color-charcoal)',
          marginBottom: 'var(--space-sm)',
          lineHeight: 1.3,
          fontFamily: 'var(--font-serif)'
        }}>{title}</h3>
        {excerpt && (
          <p style={{
            fontSize: 'var(--text-sm)',
            color: 'var(--color-charcoal)',
            opacity: 0.7,
            lineHeight: 1.6
          }}>{excerpt}</p>
        )}
        {tags && tags.length > 0 && (
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 'var(--space-xs)',
            marginTop: 'var(--space-md)'
          }}>
            {tags.map(tag => (
              <span key={tag} style={{
                display: 'inline-block',
                fontSize: 'var(--text-xs)',
                padding: '0.2em 0.7em',
                background: 'rgba(122, 154, 78, 0.15)',
                color: 'var(--color-green)',
                borderRadius: '50px',
                fontWeight: 500
              }}>{tag}</span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
};

window.BlogCard = BlogCard;
