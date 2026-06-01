/**
 * SuperBenefit UI Kit — App Shell
 *
 * Tabbed component browser showing 6 shadcn-inspired layout configurations.
 * Each tab composes existing SB components into a real app surface:
 * 1. Dashboard  — KPI cards, sidebar, activity table, quick actions
 * 2. Chat       — ChatThread + Composer + ChatMessage live conversation
 * 3. Data Table — sortable table with search, toolbar, pagination
 * 4. Form       — settings form with inputs, switches, toasts, modal
 * 5. Editor     — TextEditor + CodeBlock + formatting toolbar
 * 6. Cards      — StoryCard + BlogCard gallery with theme filters
 *
 * Uses lucide icons (loaded via CDN in index.html).
 * All tokens from ../../colors_and_type.css.
 */

/* ───────────────────────────────────────────────────────────────
   SVG icon components (inlined for reliability — no CDN needed)
   Each returns a 20×20 viewBox SVG matching lucide style.
   ─────────────────────────────────────────────────────────────── */

const iconPaths = {
  'layout-dashboard':  'M3 3h7v7H3V3zm11 0h7v7h-7V3zM3 14h7v7H3v-7zm11 0h7v7h-7v-7z',
  'message-square':    'M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z',
  'table':             'M3 3h18v18H3V3zm0 6h18M3 9h18M3 15h18',
  'settings':          'M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z',
  'code2':             'm18 16 4-4-4-4M6 8l-4 4 4 4m8-12-4 16',
  'palette':           'M12 2a10 10 0 0 0 0 20c.73 0 1.4-.5 1.4-1.2 0-.3-.1-.6-.3-.8-.2-.3-.3-.6-.3-1 0-.8.7-1.5 1.5-1.5H16a6 6 0 0 0 6-6c0-5-4.5-9.5-10-9.5zM6.5 11a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm3 4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5-4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z',
  'search':            'M21 21l-6-6m2-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0z',
  'plus':              'M12 5v14m-7-7h14',
  'check':             'M20 6 9 17l-5-5',
  'x':                 'M18 6 6 18M6 6l12 12',
  'chevron-down':      'm6 9 6 6 6-6',
  'chevron-up':        'm18 15-6-6-6 6',
  'chevrons-up-down':  'm7 15 5 5 5-5M7 9l5-5 5 5',
  'more-horizontal':   'M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-7 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm14 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z',
  'filter':            'M22 3H2l8 9.46V19l4 2v-8.54L22 3z',
  'sliders-horizontal':'M4 21v-7m0-4V3m8 18v-9m0-4V3m8 18v-5m0-4V3M1 14h6m2-6h6m2 8h6',
  'trash2':            'M3 6h18M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2m-4 5v6m4-6v6',
  'copy':              'M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2zM9 14h6',
  'info':              'M12 16v-4m0-4h.01M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z',
  'alert-circle':      'M12 8v4m0 4h.01M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z',
  'menu':              'M4 6h16M4 12h16M4 18h16',
  'bar-chart3':        'M3 3v18h18M18 9v9m-5-6v6m-5-3v3',
  'user':              'M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z',
  'users':             'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75M13 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0z',
  'calendar':          'M8 2v4m8-4v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z',
  'clock':             'M12 6v6l4 2m6-2a10 10 0 1 1-20 0 10 10 0 0 1 20 0z',
  'refresh-cw':        'M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16M21 3v5h-5M3 21v-5h5',
  'send':              'M22 2 11 13m11-11-7 20-4-9-9-4 20-7zM11 13l6 6',
  'bold':              'M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6zM6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z',
  'italic':            'M19 4h-9m4 16H5M15 4 9 20',
  'heading':           'M6 12h12M6 20V4m12 16V4m-8 4h4',
  'square':            'M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z',
  'edit3':             'M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z',
  'download':          'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3',
  'file-text':         'M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2zM14 2v6h6M16 13H8m8 4H8m2-8H8',
  'image':             'M15 8h.01M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6zm16 12-5-5-5 5M21 9l-2.5 2.5',
  'home':              'm3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zM9 22V12h6v10',
  'external-link':     'M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3',
};

const Icon = ({ name, size = 20, strokeWidth = 2, color = 'currentColor', style }) => {
  const d = iconPaths[name];
  if (!d) return null;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={style}
    >
      <path d={d} />
    </svg>
  );
};

/* ───────────────────────────────────────────────────────────────
   Shared styled components
   ─────────────────────────────────────────────────────────────── */

const tabShared = {
  focusRing: {
    outline: 'none',
    boxShadow: '0 0 0 2px var(--color-cream), 0 0 0 4px var(--color-orange)'
  }
};

/* ───────────────────────────────────────────────────────────────
   1. DASHBOARD LAYOUT
   ─────────────────────────────────────────────────────────────── */

const DashboardLayout = () => {
  const sidebarLinks = [
    { href: '#', label: 'Overview' },
    { href: '#', label: 'Analytics' },
    { href: '#', label: 'Projects' },
    { href: '#', label: 'Knowledge' },
    { href: '#', label: 'Governance' }
  ];

  const stats = [
    { label: 'Total Members', value: '2,847', change: '+12%', up: true },
    { label: 'Active DAOs', value: '143', change: '+8%', up: true },
    { label: 'Grants Funded', value: '€4.2M', change: '+23%', up: true },
    { label: 'Research Papers', value: '68', change: '+5', up: true }
  ];

  const activity = [
    { project: 'Greenpill Grants', action: 'Round 7 closed', date: 'May 28, 2026', status: 'Completed' },
    { project: 'DAOstar', action: 'Proposal submitted', date: 'May 26, 2026', status: 'In Review' },
    { project: 'Plurality Book', action: 'Translation published', date: 'May 24, 2026', status: 'Live' },
    { project: 'Regen Score', action: 'Audit completed', date: 'May 22, 2026', status: 'Completed' },
  ];

  return (
    <div style={{ display: 'flex', minHeight: '100%' }}>
      <Sidebar links={sidebarLinks} currentPath="#" />
      <div style={{ flex: 1, padding: 'var(--space-xl)', background: 'var(--bg)', overflowY: 'auto' }}>
        {/* Stats row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'var(--space-lg)', marginBottom: 'var(--space-xl)' }}>
          {stats.map(s => (
            <div key={s.label} style={{
              background: 'var(--surface)',
              borderRadius: 'var(--radius-md)',
              padding: 'var(--space-lg)',
              border: '1px solid var(--border-light)',
              transition: 'box-shadow var(--transition-fast), transform var(--transition-fast)'
            }}
            onMouseEnter={e => { e.currentTarget.style.boxShadow = 'var(--shadow-md)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'none'; }}
            >
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--muted)', marginBottom: 'var(--space-xs)' }}>{s.label}</p>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 'var(--space-sm)' }}>
                <span style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, fontFamily: 'var(--font-serif)', color: 'var(--fg)' }}>{s.value}</span>
                <span style={{
                  fontSize: 'var(--text-sm)', fontWeight: 600,
                  color: s.up ? 'var(--color-green)' : 'var(--color-red)',
                  background: s.up ? 'rgba(122, 154, 78, 0.12)' : 'rgba(196, 64, 26, 0.12)',
                  padding: '0.15em 0.5em', borderRadius: 'var(--radius-pill)'
                }}>{s.change}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Activity table */}
        <div style={{ background: 'var(--surface)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
          <div style={{
            padding: 'var(--space-md) var(--space-lg)',
            borderBottom: '1px solid var(--border-light)',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between'
          }}>
            <h3 style={{ fontSize: 'var(--text-lg)', fontFamily: 'var(--font-serif)', fontWeight: 700, color: 'var(--fg)' }}>Recent Activity</h3>
            <button style={{
              fontSize: 'var(--text-sm)', fontWeight: 500, color: 'var(--color-orange)',
              background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4
            }}>
              View all <Icon name="chevron-down" size={14} />
            </button>
          </div>

          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
                <th style={thStyle}>Project</th>
                <th style={thStyle}>Action</th>
                <th style={thStyle}>Date</th>
                <th style={thStyle}>Status</th>
              </tr>
            </thead>
            <tbody>
              {activity.map((row, i) => (
                <tr key={i} style={{ borderBottom: '1px solid var(--border-light)' }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'var(--bg)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}
                >
                  <td style={{ ...tdStyle, fontWeight: 500, color: 'var(--fg)' }}>{row.project}</td>
                  <td style={tdStyle}>{row.action}</td>
                  <td style={tdStyle}>{row.date}</td>
                  <td style={tdStyle}>
                    <span style={{
                      display: 'inline-block', fontSize: 'var(--text-xs)', fontWeight: 600, padding: '0.15em 0.6em', borderRadius: 'var(--radius-pill)',
                      color: row.status === 'Live' ? 'var(--color-green)' : row.status === 'In Review' ? 'var(--color-gold)' : 'var(--muted)',
                      background: row.status === 'Live' ? 'rgba(122, 154, 78, 0.12)' : row.status === 'In Review' ? 'rgba(212, 168, 67, 0.12)' : 'rgba(45, 45, 45, 0.08)'
                    }}>{row.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const thStyle = { padding: 'var(--space-sm) var(--space-lg)', textAlign: 'left', fontSize: 'var(--text-xs)', fontWeight: 600, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.06em' };
const tdStyle = { padding: 'var(--space-md) var(--space-lg)', fontSize: 'var(--text-sm)', color: 'var(--muted)' };

/* ───────────────────────────────────────────────────────────────
   2. CHAT LAYOUT
   ─────────────────────────────────────────────────────────────── */

const ChatLayout = () => {
  const [messages, setMessages] = React.useState([
    { id: 1, sender: { name: 'Maya Chen', avatar: null, initials: 'MC', status: 'online' }, text: 'Hey! Have you seen the latest governance proposal from the Greenpill Network?', timestamp: '10:32 AM', isUser: false },
    { id: 2, sender: { name: 'You', avatar: null, initials: 'YO', status: 'online' }, text: 'Not yet — what does it cover?', timestamp: '10:33 AM', isUser: true },
    { id: 3, sender: { name: 'Maya Chen', avatar: null, initials: 'MC', status: 'online' }, text: 'It proposes a quadratic funding round for public goods in the regenerative finance space. They\'re looking for co-sponsors.', timestamp: '10:34 AM', isUser: false },
    { id: 4, sender: { name: 'You', avatar: null, initials: 'YO', status: 'online' }, text: 'That sounds aligned with our mission. Let\'s bring it to the governance call next week.', timestamp: '10:36 AM', isUser: true },
    { id: 5, sender: { name: 'Maya Chen', avatar: null, initials: 'MC', status: 'online' }, text: 'Great idea. I\'ll prepare a brief. Here\'s the contract snippet:', timestamp: '10:37 AM', isUser: false, type: 'code', codeLang: 'solidity' },
  ]);
  const [isTyping, setIsTyping] = React.useState(false);
  const typingRef = React.useRef(null);

  const handleSend = (text) => {
    const newMsg = { id: Date.now(), sender: { name: 'You', avatar: null, initials: 'YO', status: 'online' }, text, timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), isUser: true };
    setMessages(prev => [...prev, newMsg]);
    setIsTyping(true);
    clearTimeout(typingRef.current);
    typingRef.current = setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        sender: { name: 'Maya Chen', avatar: null, initials: 'MC', status: 'online' },
        text: 'Got it — I\'ll review and get back to you.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isUser: false
      }]);
    }, 1800);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', borderLeft: '1px solid var(--border-light)' }}>
      <ChatThread messages={messages} isTyping={isTyping} title="Maya Chen" />
      <Composer onSend={handleSend} placeholder="Type a message... (Enter to send)" />
    </div>
  );
};

/* ───────────────────────────────────────────────────────────────
   3. DATA TABLE LAYOUT
   ─────────────────────────────────────────────────────────────── */

const TableLayout = () => {
  const [search, setSearch] = React.useState('');
  const [sortKey, setSortKey] = React.useState('name');
  const [sortDir, setSortDir] = React.useState('asc');
  const [selected, setSelected] = React.useState(new Set());
  const [page, setPage] = React.useState(1);
  const perPage = 8;

  const allProjects = [
    { id: 'GP-001', name: 'Greenpill Grants Round 7', lead: 'Kevin Owocki', status: 'Active', members: 23, budget: '€150,000' },
    { id: 'DA-002', name: 'DAOstar One Standard', lead: 'Auryn Macmillan', status: 'Active', members: 18, budget: '€85,000' },
    { id: 'PL-003', name: 'Plurality Research Network', lead: 'Glen Weyl', status: 'Active', members: 31, budget: '€200,000' },
    { id: 'RG-004', name: 'Regen Score MVP', lead: 'Sacha St. Hilaire', status: 'Active', members: 12, budget: '€60,000' },
    { id: 'ZK-005', name: 'ZK Credentials WG', lead: 'Anna Rose', status: 'In Review', members: 8, budget: '€45,000' },
    { id: 'CO-006', name: 'Coordination Tooling', lead: 'Primavera De Filippi', status: 'In Review', members: 15, budget: '€120,000' },
    { id: 'DS-007', name: 'Design System Initiative', lead: 'Ricky Mondello', status: 'Active', members: 7, budget: '€30,000' },
    { id: 'AI-008', name: 'AI Alignment Study', lead: 'Divya Siddarth', status: 'In Review', members: 11, budget: '€90,000' },
    { id: 'TO-009', name: 'Token Engineering Commons', lead: 'Griff Green', status: 'Completed', members: 29, budget: '€175,000' },
    { id: 'PU-010', name: 'Public Goods Dashboard', lead: 'Carl Cervone', status: 'Active', members: 9, budget: '€55,000' },
    { id: 'VT-011', name: 'Conviction Voting Research', lead: 'Michael Zargham', status: 'Completed', members: 13, budget: '€70,000' },
    { id: 'SD-012', name: 'Soulbound Tokens Lab', lead: 'Puja Ohlhaver', status: 'In Review', members: 10, budget: '€80,000' },
  ];

  const filtered = allProjects
    .filter(p => !search || p.name.toLowerCase().includes(search.toLowerCase()) || p.lead.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      const av = String(a[sortKey] || '').toLowerCase();
      const bv = String(b[sortKey] || '').toLowerCase();
      return sortDir === 'asc' ? av.localeCompare(bv) : bv.localeCompare(av);
    });

  const totalPages = Math.ceil(filtered.length / perPage);
  const paged = filtered.slice((page - 1) * perPage, page * perPage);
  const allSelected = paged.length > 0 && paged.every(p => selected.has(p.id));

  const toggleAll = () => {
    const next = new Set(selected);
    if (allSelected) paged.forEach(p => next.delete(p.id));
    else paged.forEach(p => next.add(p.id));
    setSelected(next);
  };
  const toggleOne = (id) => {
    const next = new Set(selected);
    next.has(id) ? next.delete(id) : next.add(id);
    setSelected(next);
  };
  const handleSort = (key) => {
    if (sortKey === key) setSortDir(d => d === 'asc' ? 'desc' : 'asc');
    else { setSortKey(key); setSortDir('asc'); }
  };

  return (
    <div style={{ padding: 'var(--space-xl)', background: 'var(--bg)', minHeight: '100%' }}>
      {/* Toolbar */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)', marginBottom: 'var(--space-lg)' }}>
        <div style={{ flex: 1, position: 'relative', maxWidth: 360 }}>
          <Icon name="search" size={16} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--muted)', pointerEvents: 'none' }} />
          <input
            type="text" placeholder="Search projects..." value={search} onChange={e => { setSearch(e.target.value); setPage(1); }}
            style={{
              width: '100%', padding: '0.65em 1em 0.65em 2.5em', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)',
              background: 'var(--surface)', color: 'var(--fg)', fontSize: 'var(--text-sm)', outline: 'none',
              fontFamily: 'var(--font-sans)'
            }}
            onFocus={e => { e.target.style.borderColor = 'var(--color-orange)'; e.target.style.boxShadow = '0 0 0 3px rgba(245,135,44,0.15)'; }}
            onBlur={e => { e.target.style.borderColor = 'var(--border-light)'; e.target.style.boxShadow = 'none'; }}
          />
        </div>
        <div style={{ display: 'flex', gap: 'var(--space-sm)' }}>
          <button style={btnSmStyle}><Icon name="sliders-horizontal" size={14} /><span style={{ marginLeft: 6 }}>Filter</span></button>
          <button style={btnSmStyle}><Icon name="download" size={14} /><span style={{ marginLeft: 6 }}>Export</span></button>
          <button style={{ ...btnSmStyle, background: 'var(--color-orange)', color: 'var(--color-cream)', fontWeight: 600, borderColor: 'transparent' }}>
            <Icon name="plus" size={14} color="var(--color-cream)" /><span style={{ marginLeft: 6 }}>New Project</span>
          </button>
        </div>
      </div>

      {/* Bulk actions */}
      {selected.size > 0 && (
        <div style={{
          padding: 'var(--space-sm) var(--space-lg)', background: 'var(--surface)', borderRadius: 'var(--radius-md)',
          border: '1px solid var(--color-orange)', marginBottom: 'var(--space-md)',
          display: 'flex', alignItems: 'center', gap: 'var(--space-md)'
        }}>
          <span style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--color-orange)' }}>{selected.size} selected</span>
          <button style={btnSmStyle}><Icon name="trash2" size={14} /><span style={{ marginLeft: 6 }}>Delete</span></button>
          <button style={btnSmStyle}><Icon name="copy" size={14} /><span style={{ marginLeft: 6 }}>Duplicate</span></button>
        </div>
      )}

      {/* Table */}
      <div style={{ background: 'var(--surface)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
              <th style={{ ...thStyle, width: 40 }}>
                <button onClick={toggleAll} style={{ background: 'none', border: `1px solid ${allSelected ? 'var(--color-orange)' : 'var(--border-light)'}`, borderRadius: 4, width: 16, height: 16, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 0, background: allSelected ? 'var(--color-orange)' : 'transparent' }}>
                  {allSelected && <Icon name="check" size={12} color="#fff" />}
                </button>
              </th>
              {[{ key: 'id', label: 'ID' }, { key: 'name', label: 'Project' }, { key: 'lead', label: 'Lead' }, { key: 'status', label: 'Status' }, { key: 'members', label: 'Members' }, { key: 'budget', label: 'Budget' }].map(col => (
                <th key={col.key} style={{ ...thStyle, cursor: 'pointer', userSelect: 'none' }} onClick={() => handleSort(col.key)}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                    {col.label}
                    <Icon name="chevrons-up-down" size={12} style={{ opacity: sortKey === col.key ? 1 : 0.3 }} />
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr><td colSpan={7} style={{ padding: 'var(--space-xl)', textAlign: 'center', color: 'var(--muted)', fontSize: 'var(--text-base)' }}>No projects found.</td></tr>
            ) : paged.map(p => {
              const isSelected = selected.has(p.id);
              return (
                <tr key={p.id}
                  style={{ borderBottom: '1px solid var(--border-light)', background: isSelected ? 'rgba(245,135,44,0.04)' : 'transparent', transition: 'background var(--transition-fast)' }}
                  onMouseEnter={e => { if (!isSelected) e.currentTarget.style.background = 'var(--bg)'; }}
                  onMouseLeave={e => { if (!isSelected) e.currentTarget.style.background = 'transparent'; }}
                >
                  <td style={{ padding: 'var(--space-md) var(--space-lg)', textAlign: 'center' }}>
                    <button onClick={() => toggleOne(p.id)} style={{ background: 'none', border: `1px solid ${isSelected ? 'var(--color-orange)' : 'var(--border-light)'}`, borderRadius: 4, width: 16, height: 16, cursor: 'pointer', padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: isSelected ? 'var(--color-orange)' : 'transparent' }}>
                      {isSelected && <Icon name="check" size={12} color="#fff" />}
                    </button>
                  </td>
                  <td style={{ ...tdStyle, fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--muted)', fontWeight: 500 }}>{p.id}</td>
                  <td style={{ ...tdStyle, fontWeight: 500, color: 'var(--fg)' }}>{p.name}</td>
                  <td style={tdStyle}>{p.lead}</td>
                  <td style={tdStyle}>
                    <span style={{ display: 'inline-block', fontSize: 'var(--text-xs)', fontWeight: 600, padding: '0.15em 0.6em', borderRadius: 'var(--radius-pill)',
                      color: p.status === 'Active' ? 'var(--color-green)' : p.status === 'In Review' ? 'var(--color-gold)' : 'var(--muted)',
                      background: p.status === 'Active' ? 'rgba(122, 154, 78, 0.12)' : p.status === 'In Review' ? 'rgba(212, 168, 67, 0.12)' : 'rgba(45, 45, 45, 0.08)'
                    }}>{p.status}</span>
                  </td>
                  <td style={tdStyle}>{p.members}</td>
                  <td style={{ ...tdStyle, fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)' }}>{p.budget}</td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {/* Pagination */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 'var(--space-md) var(--space-lg)', borderTop: '1px solid var(--border-light)' }}>
          <span style={{ fontSize: 'var(--text-sm)', color: 'var(--muted)' }}>Showing {(page - 1) * perPage + 1}–{Math.min(page * perPage, filtered.length)} of {filtered.length}</span>
          <div style={{ display: 'flex', gap: 'var(--space-xs)' }}>
            <button onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1} style={pageBtnStyle(page === 1)}>Previous</button>
            {Array.from({ length: totalPages }, (_, i) => (
              <button key={i} onClick={() => setPage(i + 1)} style={pageBtnStyle(page === i + 1, true)}>{i + 1}</button>
            ))}
            <button onClick={() => setPage(p => Math.min(totalPages, p + 1))} disabled={page === totalPages} style={pageBtnStyle(page === totalPages)}>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const btnSmStyle = {
  display: 'inline-flex', alignItems: 'center', padding: '0.5em 1em', borderRadius: 'var(--radius-sm)',
  border: '1px solid var(--border-light)', background: 'var(--surface)', color: 'var(--fg)',
  fontSize: 'var(--text-sm)', fontWeight: 500, cursor: 'pointer', transition: 'border-color var(--transition-fast), background var(--transition-fast)', fontFamily: 'var(--font-sans)'
};

const pageBtnStyle = (isCurrent, isPage) => {
  const base = { padding: '0.4em 0.75em', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)', background: 'var(--surface)', color: 'var(--fg)', fontSize: 'var(--text-sm)', cursor: 'pointer', fontFamily: 'var(--font-sans)', fontWeight: 500 };
  const disabled = { ...base, opacity: 0.5, cursor: 'default' };
  const active = { ...base, background: 'var(--color-orange)', color: 'var(--color-cream)', borderColor: 'var(--color-orange)', fontWeight: 600 };
  if (isCurrent === true && isPage === true) return active;
  if (isCurrent === true && isPage !== true) return disabled;
  return base;
};

/* ───────────────────────────────────────────────────────────────
   4. FORM LAYOUT — Settings page with inputs, toasts, modal
   ─────────────────────────────────────────────────────────────── */

const FormLayout = () => {
  const [form, setForm] = React.useState({
    displayName: 'SuperBenefit Governance',
    email: 'governance@superbenefit.org',
    bio: 'Community of practice working on decentralized governance and systems transformation.',
    notifications: true,
    newsletter: false,
    theme: 'light'
  });
  const [toasts, setToasts] = React.useState([]);
  const [showModal, setShowModal] = React.useState(false);
  const [saving, setSaving] = React.useState(false);

  const update = (key, value) => setForm(f => ({ ...f, [key]: value }));

  const addToast = (message, type = 'success') => {
    const id = Date.now();
    setToasts(t => [...t, { id, message, type }]);
    setTimeout(() => setToasts(t => t.filter(x => x.id !== id)), 4500);
  };

  const handleSave = () => {
    setSaving(true);
    setTimeout(() => {
      setSaving(false);
      addToast('Settings saved successfully.', 'success');
    }, 800);
  };

  const handleDelete = () => {
    setShowModal(false);
    addToast('Project deleted.', 'error');
  };

  return (
    <div style={{ padding: 'var(--space-xl)', background: 'var(--bg)', minHeight: '100%', display: 'flex', justifyContent: 'center' }}>
      <div style={{ width: '100%', maxWidth: 640 }}>
        <h2 style={{ fontSize: 'var(--text-2xl)', fontFamily: 'var(--font-serif)', fontWeight: 700, color: 'var(--fg)', marginBottom: 'var(--space-xs)' }}>Settings</h2>
        <p style={{ fontSize: 'var(--text-sm)', color: 'var(--muted)', marginBottom: 'var(--space-xl)' }}>Manage your project profile and notification preferences.</p>

        {/* Profile section */}
        <fieldset style={fieldsetStyle}>
          <legend style={legendStyle}>Profile</legend>
          <div style={fieldRowStyle}>
            <label style={labelStyle}>Display Name</label>
            <input type="text" value={form.displayName} onChange={e => update('displayName', e.target.value)} style={inputStyle} />
          </div>
          <div style={fieldRowStyle}>
            <label style={labelStyle}>Email</label>
            <input type="email" value={form.email} onChange={e => update('email', e.target.value)} style={inputStyle} />
          </div>
          <div style={fieldRowStyle}>
            <label style={labelStyle}>Bio</label>
            <textarea value={form.bio} onChange={e => update('bio', e.target.value)} rows={3} style={{ ...inputStyle, resize: 'vertical', minHeight: 80 }} />
          </div>
        </fieldset>

        {/* Preferences section */}
        <fieldset style={fieldsetStyle}>
          <legend style={legendStyle}>Preferences</legend>
          <div style={fieldRowStyle}>
            <label style={labelStyle}>Email Notifications</label>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
              <button
                onClick={() => update('notifications', !form.notifications)}
                aria-checked={form.notifications}
                role="switch"
                style={{
                  width: 44, height: 24, borderRadius: 12, border: 'none', cursor: 'pointer', padding: 2,
                  background: form.notifications ? 'var(--color-orange)' : 'var(--border-light)',
                  transition: 'background var(--transition-fast)', display: 'flex', alignItems: 'center',
                  justifyContent: form.notifications ? 'flex-end' : 'flex-start'
                }}
              >
                <span style={{ width: 20, height: 20, borderRadius: '50%', background: '#fff', boxShadow: '0 1px 3px rgba(0,0,0,0.2)', transition: 'transform var(--transition-fast)' }} />
              </button>
              <span style={{ fontSize: 'var(--text-sm)', color: 'var(--muted)' }}>{form.notifications ? 'On' : 'Off'}</span>
            </div>
          </div>
          <div style={fieldRowStyle}>
            <label style={labelStyle}>Newsletter</label>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
              <button
                onClick={() => update('newsletter', !form.newsletter)}
                aria-checked={form.newsletter}
                role="switch"
                style={{
                  width: 44, height: 24, borderRadius: 12, border: 'none', cursor: 'pointer', padding: 2,
                  background: form.newsletter ? 'var(--color-orange)' : 'var(--border-light)',
                  transition: 'background var(--transition-fast)', display: 'flex', alignItems: 'center',
                  justifyContent: form.newsletter ? 'flex-end' : 'flex-start'
                }}
              >
                <span style={{ width: 20, height: 20, borderRadius: '50%', background: '#fff', boxShadow: '0 1px 3px rgba(0,0,0,0.2)', transition: 'transform var(--transition-fast)' }} />
              </button>
              <span style={{ fontSize: 'var(--text-sm)', color: 'var(--muted)' }}>{form.newsletter ? 'On' : 'Off'}</span>
            </div>
          </div>
          <div style={fieldRowStyle}>
            <label style={labelStyle}>Appearance</label>
            <div style={{ display: 'flex', gap: 'var(--space-sm)' }}>
              {['light', 'dark', 'system'].map(t => (
                <label key={t} style={{
                  display: 'flex', alignItems: 'center', gap: 6, padding: '0.5em 1em', borderRadius: 'var(--radius-sm)',
                  border: `1px solid ${form.theme === t ? 'var(--color-orange)' : 'var(--border-light)'}`,
                  background: form.theme === t ? 'rgba(245,135,44,0.08)' : 'var(--surface)',
                  cursor: 'pointer', fontSize: 'var(--text-sm)', fontWeight: form.theme === t ? 600 : 400,
                  color: form.theme === t ? 'var(--color-orange)' : 'var(--fg)', transition: 'all var(--transition-fast)', fontFamily: 'var(--font-sans)'
                }}>
                  <input type="radio" name="theme" value={t} checked={form.theme === t} onChange={e => update('theme', e.target.value)} style={{ display: 'none' }} />
                  {t.charAt(0).toUpperCase() + t.slice(1)}
                </label>
              ))}
            </div>
          </div>
        </fieldset>

        {/* Danger zone */}
        <fieldset style={{ ...fieldsetStyle, borderColor: 'var(--color-red)', borderStyle: 'dashed' }}>
          <legend style={{ ...legendStyle, color: 'var(--color-red)' }}>Danger Zone</legend>
          <p style={{ fontSize: 'var(--text-sm)', color: 'var(--muted)', marginBottom: 'var(--space-md)' }}>Permanently delete this project and all associated data. This action cannot be undone.</p>
          <button onClick={() => setShowModal(true)}
            style={{
              padding: '0.65em 1.4em', borderRadius: 'var(--radius-sm)', fontWeight: 600, fontSize: 'var(--text-sm)', cursor: 'pointer',
              background: 'transparent', color: 'var(--color-red)', border: '1px solid var(--color-red)',
              transition: 'all var(--transition-fast)', fontFamily: 'var(--font-sans)'
            }}
            onMouseEnter={e => { e.target.style.background = 'var(--color-red)'; e.target.style.color = '#fff'; }}
            onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.color = 'var(--color-red)'; }}
          >
            Delete Project
          </button>
        </fieldset>

        {/* Submit */}
        <div style={{ marginTop: 'var(--space-xl)', display: 'flex', gap: 'var(--space-md)', justifyContent: 'flex-end' }}>
          <button onClick={() => addToast('Changes discarded.', 'warning')}
            style={{ padding: '0.7em 1.6em', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)', background: 'var(--surface)', color: 'var(--fg)', fontWeight: 500, fontSize: 'var(--text-sm)', cursor: 'pointer', fontFamily: 'var(--font-sans)' }}
          >Cancel</button>
          <button onClick={handleSave} disabled={saving}
            style={{
              padding: '0.7em 2em', borderRadius: 'var(--radius-sm)', border: 'none', fontWeight: 600, fontSize: 'var(--text-sm)', cursor: saving ? 'default' : 'pointer', fontFamily: 'var(--font-sans)',
              background: saving ? 'var(--border)' : 'var(--color-orange)', color: saving ? 'var(--muted)' : 'var(--color-cream)',
              transition: 'background var(--transition-fast), transform var(--transition-fast)'
            }}
          >{saving ? 'Saving...' : 'Save Changes'}</button>
        </div>

        {/* Modal */}
        <Modal isOpen={showModal} onClose={() => setShowModal(false)} title="Delete Project" size="small">
          <p style={{ fontSize: 'var(--text-base)', color: 'var(--fg)', marginBottom: 'var(--space-lg)' }}>
            Are you sure you want to delete this project? This action cannot be undone.
          </p>
          <div style={{ display: 'flex', gap: 'var(--space-md)', justifyContent: 'flex-end' }}>
            <button onClick={() => setShowModal(false)}
              style={{ padding: '0.6em 1.4em', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)', background: 'var(--surface)', color: 'var(--fg)', fontWeight: 500, fontSize: 'var(--text-sm)', cursor: 'pointer', fontFamily: 'var(--font-sans)' }}
            >Cancel</button>
            <button onClick={handleDelete}
              style={{ padding: '0.6em 1.4em', borderRadius: 'var(--radius-sm)', border: 'none', background: 'var(--color-red)', color: '#fff', fontWeight: 600, fontSize: 'var(--text-sm)', cursor: 'pointer', fontFamily: 'var(--font-sans)' }}
            >Delete</button>
          </div>
        </Modal>

        {/* Toast stack */}
        <div style={{ position: 'fixed', bottom: 24, right: 24, display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)', zIndex: 999 }}>
          {toasts.map(t => <Toast key={t.id} message={t.message} type={t.type} onDismiss={() => setToasts(x => x.filter(y => y.id !== t.id))} />)}
        </div>
      </div>
    </div>
  );
};

const fieldsetStyle = {
  border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)', padding: 'var(--space-lg)',
  marginBottom: 'var(--space-lg)', background: 'var(--surface)'
};
const legendStyle = {
  fontFamily: 'var(--font-sans)', fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--fg)',
  padding: '0 var(--space-sm)', textTransform: 'uppercase', letterSpacing: '0.06em'
};
const fieldRowStyle = {
  display: 'flex', flexDirection: 'column', gap: 'var(--space-xs)', marginBottom: 'var(--space-md)'
};
const labelStyle = {
  fontSize: 'var(--text-sm)', fontWeight: 500, color: 'var(--fg)'
};
const inputStyle = {
  padding: '0.65em 1em', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)',
  background: 'var(--bg)', color: 'var(--fg)', fontSize: 'var(--text-sm)', outline: 'none',
  fontFamily: 'var(--font-sans)', width: '100%', transition: 'border-color var(--transition-fast), box-shadow var(--transition-fast)'
};

/* ───────────────────────────────────────────────────────────────
   5. EDITOR LAYOUT — TextEditor + CodeBlock + preview
   ─────────────────────────────────────────────────────────────── */

const EditorLayout = () => {
  const [content, setContent] = React.useState('## Project Proposal: Quadratic Funding Round\n\nSuperBenefit proposes a new QF round focused on regenerative public goods in the Global South. This builds on our existing Greenpill Grants program.\n\n### Key objectives\n\n- Fund 10-15 early-stage projects with grants up to €20,000\n- Match contributions 1:1 using Gitcoin\'s quadratic funding protocol\n- Focus on climate resilience, community coordination, and open source tooling\n\n### Timeline\n\n- **May 2026** — Call for proposals\n- **June 2026** — Community review period\n- **July 2026** — Funding round goes live\n- **August 2026** — Recipients announced');
  const [preview, setPreview] = React.useState(false);

  const sampleCode = `// Quadratic funding matching pool
interface QFRound {
  matchingPool: bigint;
  contributions: Map<string, Contribution[]>;
}

function calculateMatch(
  round: QFRound,
  recipientId: string
): bigint {
  const contribs = round.contributions
    .get(recipientId) || [];
  
  const sumSqrt = contribs.reduce(
    (acc, c) => acc + sqrt(c.amount), BigInt(0)
  );
  
  return (sumSqrt * sumSqrt) / BigInt(contribs.length);
}`;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      {/* Toolbar */}
      <Toolbar
        title="Editor"
        actions={[
          { label: 'Write', active: !preview, onClick: () => setPreview(false) },
          { label: 'Preview', active: preview, onClick: () => setPreview(true) },
          { type: 'separator' },
          { label: 'Save Draft', icon: <Icon name="check" size={14} />, onClick: () => {} },
          { label: 'Publish', icon: <Icon name="send" size={14} />, onClick: () => {}, disabled: true }
        ]}
      />

      {/* Content area */}
      <div style={{ flex: 1, padding: 'var(--space-xl)', background: 'var(--bg)', overflowY: 'auto', maxWidth: 'var(--max-width)', margin: '0 auto', width: '100%' }}>
        {preview ? (
          /* Preview with CodeBlock */
          <div style={{ maxWidth: '72ch', margin: '0 auto' }}>
            <div style={{
              fontFamily: 'var(--font-serif)', fontSize: 'var(--text-2xl)', fontWeight: 700, color: 'var(--fg)',
              lineHeight: 1.15, marginBottom: 'var(--space-lg)'
            }}>Project Proposal: Quadratic Funding Round</div>
            <div style={{
              fontSize: 'var(--text-base)', lineHeight: 1.8, color: 'var(--fg)',
              whiteSpace: 'pre-wrap', marginBottom: 'var(--space-xl)'
            }}>
              {content.split('\n\n').map((p, i) => {
                if (p.startsWith('###')) return <h4 key={i} style={{ fontSize: 'var(--text-xl)', fontFamily: 'var(--font-serif)', fontWeight: 700, margin: 'var(--space-lg) 0 var(--space-sm)' }}>{p.replace(/^###\s*/, '')}</h4>;
                if (p.startsWith('##')) return <h3 key={i} style={{ fontSize: 'var(--text-2xl)', fontFamily: 'var(--font-serif)', fontWeight: 700, margin: 'var(--space-xl) 0 var(--space-md)' }}>{p.replace(/^##\s*/, '')}</h3>;
                if (p.startsWith('- ')) return (
                  <ul key={i} style={{ paddingLeft: '1.5em', marginBottom: 'var(--space-md)' }}>
                    {p.split('\n').filter(l => l.startsWith('- ')).map((l, j) => <li key={j} style={{ fontSize: 'var(--text-base)', lineHeight: 1.8, marginBottom: 'var(--space-xs)' }}>{l.replace(/^-\s*/, '')}</li>)}
                  </ul>
                );
                if (p.startsWith('**')) return <p key={i} style={{ marginBottom: 'var(--space-md)', lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: p.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />;
                return <p key={i} style={{ marginBottom: 'var(--space-md)', lineHeight: 1.8 }}>{p}</p>;
              })}
            </div>
            <CodeBlock
              code={sampleCode}
              language="typescript"
              filename="quadratic-funding.ts"
            />
          </div>
        ) : (
          <TextEditor value={content} onChange={setContent} placeholder="Write your proposal..." minHeight={400} />
        )}
      </div>
    </div>
  );
};

/* ───────────────────────────────────────────────────────────────
   6. CARDS LAYOUT — StoryCard + BlogCard gallery with filters
   ─────────────────────────────────────────────────────────────── */

const CardsLayout = () => {
  const [filter, setFilter] = React.useState('all');

  const stories = [
    { theme: 'green', label: 'Knowledge Garden', heading: 'Research & Publishing', body: 'Collective research on governance patterns, DAO structures, and systems innovation. Open-source and community-reviewed.', ctaText: 'Explore research', ctaHref: '#' },
    { theme: 'orange', label: 'Programs', heading: 'Incubation & Grants', body: 'Supporting early-stage projects that align with our mission. Grants, mentorship, and community resources for builders.', ctaText: 'Apply for grants', ctaHref: '#' },
    { theme: 'red', label: 'Community', heading: 'Events & Gatherings', body: 'Regular workshops, salons, and retreats. Building the relationships that make decentralized coordination work.', ctaText: 'Join events', ctaHref: '#' },
  ];

  const posts = [
    { title: 'Conviction Voting in Practice', excerpt: 'How communities use time-weighted voting to surface high-conviction proposals.', date: 'May 15, 2026', tags: ['Governance', 'DAOs'], image: '../../assets/brand-showcase.webp' },
    { title: 'Holographic Consensus Explained', excerpt: 'A two-layer approach combining prediction markets with collective voting.', date: 'May 2, 2026', tags: ['Mechanism Design'], image: '../../assets/brand-showcase.webp' },
    { title: 'Regenerative Token Economics', excerpt: 'Designing token systems that create positive-sum outcomes for communities.', date: 'Apr 18, 2026', tags: ['Tokenomics', 'Research'], image: '../../assets/brand-showcase.webp' },
    { title: 'DAOs as Coordination Infrastructure', excerpt: 'How decentralized autonomous organizations are reshaping institutional design.', date: 'Apr 5, 2026', tags: ['DAOs', 'Governance'], image: '../../assets/brand-showcase.webp' },
    { title: 'Web3 for Public Goods', excerpt: 'Leveraging blockchain coordination mechanisms for funding the commons.', date: 'Mar 22, 2026', tags: ['Public Goods', 'Funding'], image: '../../assets/brand-showcase.webp' },
    { title: 'The Plurality Thesis', excerpt: 'Moving beyond binary governance toward pluralistic decision-making systems.', date: 'Mar 10, 2026', tags: ['Plurality', 'Research'], image: '../../assets/brand-showcase.webp' },
  ];

  const filterTabs = [
    { id: 'all', label: 'All Cards' },
    { id: 'stories', label: 'Story Cards' },
    { id: 'blog', label: 'Blog Cards' },
  ];

  return (
    <div style={{ padding: 'var(--space-xl)', background: 'var(--bg)', minHeight: '100%' }}>
      {/* Filter tabs */}
      <div style={{ display: 'flex', gap: 'var(--space-xs)', marginBottom: 'var(--space-xl)', borderBottom: '1px solid var(--border-light)', paddingBottom: 'var(--space-md)' }}>
        {filterTabs.map(t => (
          <button key={t.id} onClick={() => setFilter(t.id)}
            style={{
              padding: '0.5em 1.2em', borderRadius: 'var(--radius-sm)', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-sans)',
              fontSize: 'var(--text-sm)', fontWeight: filter === t.id ? 600 : 400,
              background: filter === t.id ? 'var(--color-orange)' : 'transparent',
              color: filter === t.id ? 'var(--color-cream)' : 'var(--muted)',
              transition: 'all var(--transition-fast)'
            }}
          >{t.label}</button>
        ))}
      </div>

      {/* Story Cards */}
      {(filter === 'all' || filter === 'stories') && (
        <div style={{ marginBottom: 'var(--space-2xl)' }}>
          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-xl)', fontWeight: 700, color: 'var(--fg)', marginBottom: 'var(--space-lg)' }}>Story Cards — theme variants</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)', background: 'var(--color-black)', padding: 'var(--space-xl)', borderRadius: 'var(--radius-lg)' }}>
            {stories.map((s, i) => <StoryCard key={i} {...s} />)}
          </div>
        </div>
      )}

      {/* Blog Cards */}
      {(filter === 'all' || filter === 'blog') && (
        <div>
          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-xl)', fontWeight: 700, color: 'var(--fg)', marginBottom: 'var(--space-lg)' }}>Blog Cards — grid with hover lift</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 'var(--space-lg)' }}>
            {posts.map((p, i) => <BlogCard key={i} {...p} />)}
          </div>
        </div>
      )}
    </div>
  );
};

/* ───────────────────────────────────────────────────────────────
   APP SHELL — tabbed navigation with layout rendering
   ─────────────────────────────────────────────────────────────── */

const App = () => {
  const [activeTab, setActiveTab] = React.useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: 'layout-dashboard' },
    { id: 'chat',      label: 'Chat',      icon: 'message-square' },
    { id: 'table',     label: 'Table',     icon: 'table' },
    { id: 'form',      label: 'Form',      icon: 'settings' },
    { id: 'editor',    label: 'Editor',    icon: 'code2' },
    { id: 'cards',     label: 'Cards',     icon: 'palette' },
  ];

  return (
    <div className="sb-app" style={{ display: 'flex', flexDirection: 'column', height: '100vh', background: 'var(--bg)' }}>
      {/* ── Header bar ── */}
      <header style={{
        display: 'flex', alignItems: 'center', padding: '0 var(--space-lg)',
        height: 'var(--header-height)', borderBottom: '1px solid var(--border-light)',
        background: 'var(--surface)', gap: 'var(--space-lg)', flexShrink: 0
      }}>
        {/* Brand */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
          <img src="../../assets/sb-icon.jpg" alt="" style={{ width: 32, height: 32, borderRadius: '50%' }} />
          <span style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, fontSize: 'var(--text-lg)', color: 'var(--fg)' }}>SuperBenefit</span>
        </div>
        <span style={{
          fontSize: 'var(--text-xs)', fontWeight: 600, color: 'var(--color-orange)',
          padding: '0.15em 0.6em', borderRadius: 'var(--radius-pill)', background: 'rgba(245,135,44,0.1)',
          textTransform: 'uppercase', letterSpacing: '0.08em'
        }}>UI Kit</span>

        <div style={{ flex: 1 }} />

        {/* Tab navigation — desktop: inline buttons */}
        <nav style={{ display: 'flex', gap: 2, background: 'var(--bg)', borderRadius: 'var(--radius-md)', padding: 3 }}>
          {tabs.map(tab => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  display: 'flex', alignItems: 'center', gap: 6,
                  padding: '0.45em 1em', borderRadius: 'var(--radius-sm)',
                  border: 'none', cursor: 'pointer', fontFamily: 'var(--font-sans)',
                  fontSize: 'var(--text-sm)', fontWeight: isActive ? 600 : 500,
                  background: isActive ? 'var(--surface)' : 'transparent',
                  color: isActive ? 'var(--fg)' : 'var(--muted)',
                  transition: 'all var(--transition-fast)',
                  boxShadow: isActive ? 'var(--shadow-sm)' : 'none'
                }}
                onMouseEnter={e => { if (!isActive) { e.target.style.color = 'var(--fg)'; e.target.style.background = 'rgba(245,135,44,0.06)'; } }}
                onMouseLeave={e => { if (!isActive) { e.target.style.color = 'var(--muted)'; e.target.style.background = 'transparent'; } }}
              >
                <Icon name={tab.icon} size={16} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </nav>
      </header>

      {/* ── Layout area ── */}
      <div style={{ flex: 1, display: 'flex', overflow: 'hidden' }}>
        {activeTab === 'dashboard' && <DashboardLayout />}
        {activeTab === 'chat' && <ChatLayout />}
        {activeTab === 'table' && <TableLayout />}
        {activeTab === 'form' && <FormLayout />}
        {activeTab === 'editor' && <EditorLayout />}
        {activeTab === 'cards' && <CardsLayout />}
      </div>
    </div>
  );
};

window.App = App;
