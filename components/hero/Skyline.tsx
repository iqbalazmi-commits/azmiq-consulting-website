export default function Skyline() {
  return (
    <svg
      viewBox="0 0 1600 260"
      preserveAspectRatio="xMidYMax slice"
      className="pointer-events-none absolute inset-x-0 bottom-0 h-[220px] w-full opacity-90 sm:h-[260px]"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="skylineFade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#c08a4a" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#0c0a08" stopOpacity="1" />
        </linearGradient>
        <linearGradient id="skylineGlow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e8d5b5" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#c08a4a" stopOpacity="0.05" />
        </linearGradient>
      </defs>

      {/* distant skyline blocks */}
      <g fill="#1a160f" opacity="0.9">
        <rect x="20" y="140" width="40" height="120" />
        <rect x="70" y="110" width="30" height="150" />
        <rect x="720" y="120" width="26" height="140" />
        <rect x="760" y="90" width="34" height="170" />
        <rect x="1200" y="100" width="28" height="160" />
        <rect x="1250" y="70" width="22" height="190" />
        <rect x="1300" y="130" width="30" height="130" />
      </g>

      {/* Tower Bridge silhouette (stylized) */}
      <g stroke="url(#skylineGlow)" strokeWidth="2" fill="none" opacity="0.85">
        <rect x="330" y="60" width="28" height="200" fill="#181209" stroke="none" />
        <rect x="470" y="60" width="28" height="200" fill="#181209" stroke="none" />
        <rect x="322" y="40" width="44" height="26" fill="#181209" stroke="none" />
        <rect x="462" y="40" width="44" height="26" fill="#181209" stroke="none" />
        <path d="M358 150 L470 150" strokeWidth="4" />
        <path d="M358 110 L470 60 M470 110 L358 60" strokeWidth="1.4" opacity="0.7" />
      </g>

      {/* modern towers cluster (Dubai/Mumbai inspired) */}
      <g fill="#211a10">
        <polygon points="900,260 925,60 950,260" />
        <rect x="965" y="90" width="24" height="170" />
        <rect x="1000" y="130" width="20" height="130" />
        <polygon points="1040,260 1055,40 1070,260" />
        <rect x="1085" y="150" width="18" height="110" />
      </g>

      {/* glowing window accents */}
      <g fill="#dcbf92" opacity="0.5">
        <rect x="928" y="120" width="3" height="3" />
        <rect x="935" y="160" width="3" height="3" />
        <rect x="1050" y="90" width="3" height="3" />
        <rect x="1044" y="140" width="3" height="3" />
        <rect x="970" y="120" width="3" height="3" />
      </g>

      <rect x="0" y="230" width="1600" height="30" fill="url(#skylineFade)" opacity="0.6" />
    </svg>
  );
}
