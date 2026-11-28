/** A small set of line icons, drawn inline (no icon font, no network). */
const P: Record<string, React.ReactNode> = {
  users: (<><circle cx="9" cy="8" r="3.2" /><path d="M3 19c.6-3.2 3-5 6-5s5.4 1.8 6 5" /><circle cx="17" cy="9" r="2.4" /><path d="M16 14.2c2.4.2 4.3 1.8 4.8 4.8" /></>),
  home: (<><path d="M4 10.5 12 4l8 6.5V20H4z" /><path d="M10 20v-5h4v5" /></>),
  play: (<><rect x="5" y="3" width="14" height="18" rx="3" /><path d="m10.5 9 4 3-4 3z" /></>),
  story: (<><circle cx="12" cy="12" r="8" strokeDasharray="3 2.2" /><circle cx="12" cy="12" r="4" /></>),
  sun: (<><circle cx="12" cy="12" r="3.6" /><path d="M12 3v2.2M12 18.8V21M3 12h2.2M18.8 12H21M5.6 5.6l1.6 1.6M16.8 16.8l1.6 1.6M5.6 18.4l1.6-1.6M16.8 7.2l1.6-1.6" /></>),
  chat: (<><path d="M4 5h16v11H9l-5 4z" /><path d="M8 9.5h8M8 12.5h5" /></>),
  rooms: (<><path d="M3 6h12v8H7l-4 3z" /><path d="M9 17h8l4 3V9h-3" /></>),
  pin: (<><path d="M12 21s-6-5.6-6-11a6 6 0 0 1 12 0c0 5.4-6 11-6 11z" /><circle cx="12" cy="10" r="2.2" /></>),
  search: (<><circle cx="11" cy="11" r="6" /><path d="m20 20-4.6-4.6" /></>),
  calendar: (<><rect x="4" y="5" width="16" height="15" rx="2.5" /><path d="M4 10h16M9 3v4M15 3v4" /></>),
  shield: (<><path d="M12 3 5 6v5.5c0 4.3 3 7.8 7 9.5 4-1.7 7-5.2 7-9.5V6z" /><path d="m9 12 2.2 2.2L15.5 10" /></>),
  id: (<><rect x="3" y="5" width="18" height="14" rx="2.5" /><circle cx="9" cy="11" r="2.2" /><path d="M5.8 16c.5-1.6 1.7-2.4 3.2-2.4s2.7.8 3.2 2.4M14.5 10h4M14.5 13h3" /></>),
  scan: (<><path d="M4 8V5.5A1.5 1.5 0 0 1 5.5 4H8M16 4h2.5A1.5 1.5 0 0 1 20 5.5V8M20 16v2.5a1.5 1.5 0 0 1-1.5 1.5H16M8 20H5.5A1.5 1.5 0 0 1 4 18.5V16" /><path d="M7 12h10" /></>),
  flag: (<><path d="M5 21V4" /><path d="M5 4h11l-2 4 2 4H5" /></>),
  lock: (<><rect x="5" y="10.5" width="14" height="10" rx="2.5" /><path d="M8 10.5V7.5a4 4 0 0 1 8 0v3" /></>),
  server: (<><rect x="4" y="4" width="16" height="7" rx="2" /><rect x="4" y="13" width="16" height="7" rx="2" /><path d="M8 7.5h.01M8 16.5h.01" /></>),
  cpu: (<><rect x="6" y="6" width="12" height="12" rx="2" /><rect x="9.5" y="9.5" width="5" height="5" rx="1" /><path d="M9 3v3M15 3v3M9 18v3M15 18v3M3 9h3M3 15h3M18 9h3M18 15h3" /></>),
  globe: (<><circle cx="12" cy="12" r="8.5" /><path d="M3.5 12h17M12 3.5c2.4 2.4 3.5 5.2 3.5 8.5s-1.1 6.1-3.5 8.5c-2.4-2.4-3.5-5.2-3.5-8.5s1.1-6.1 3.5-8.5z" /></>),
  video: (<><rect x="3" y="6" width="13" height="12" rx="2.5" /><path d="m16 10.5 5-3v9l-5-3" /></>),
  spark: (<><path d="M12 3v4M12 17v4M3 12h4M17 12h4" /><path d="m12 8 1.4 2.6L16 12l-2.6 1.4L12 16l-1.4-2.6L8 12l2.6-1.4z" /></>),
  rupee: (<><path d="M7 5h10M7 9h10M10 5c3.3 0 5 1.4 5 4s-2 4-5 4H7l7 7" /></>),
  ban: (<><circle cx="12" cy="12" r="8.5" /><path d="m6 6 12 12" /></>),
  mail: (<><rect x="3" y="5" width="18" height="14" rx="2.5" /><path d="m4 7 8 6 8-6" /></>),
  doc: (<><path d="M6 3h8l4 4v14H6z" /><path d="M14 3v4h4M9 12h6M9 16h6" /></>),
  phone: (<><rect x="7" y="3" width="10" height="18" rx="2.5" /><path d="M11 18h2" /></>),
  check: (<><path d="m5 12.5 4.5 4.5L19 7.5" /></>),
};

export default function Icon({ name }: { name: keyof typeof P | string }) {
  return (
    <span className="ico" aria-hidden="true">
      <svg viewBox="0 0 24 24">{P[name] ?? P.spark}</svg>
    </span>
  );
}
