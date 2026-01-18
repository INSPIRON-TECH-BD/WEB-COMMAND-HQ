/**
 * INSPIRON TECH - Institutional Logo Node
 * Mandate: Lowercase human ("inspiron") / Uppercase system ("TECH")
 */
export const InspironLogo = ({ className = "", size = "280px" }) => (
  <div className={`relative inline-flex items-center gap-4 ${className}`} style={{ width: size, height: '80px' }}>
    <img 
      src="/brand_lockup.svg" 
      alt="INSPIRON TECH" 
      className="h-full w-auto object-contain scale-125 origin-left" 
    />
    <h2 className="text-4xl font-black tracking-tighter leading-none text-white italic-none">
      inspiron<span className="text-[#FFD700]">TECH</span>
    </h2>
  </div>
);
