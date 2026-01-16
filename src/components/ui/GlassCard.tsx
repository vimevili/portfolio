interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

const GlassCard = ({ children, className }: GlassCardProps) => {
  return (
    <div
      className={`h-full backdrop-blur-md bg-white/40 dark:bg-slate-800/40 border border-white/40 dark:border-slate-700/40 shadow-md rounded-[3rem] overflow-hidden ${className}`}
      style={{
        backgroundImage:
          'url("data:image/svg+xml,%3Csvg viewBox=%220 0 100 100%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%221.5%22 numOctaves=%225%22 seed=%221%22/%3E%3C/filter%3E%3Crect width=%22100%22 height=%22100%22 filter=%22url(%23noiseFilter)%22 opacity=%220.05%22/%3E%3C/svg%3E")',
        backgroundSize: '100px 100px',
        backgroundRepeat: 'repeat',
      }}
    >
      {children}
    </div>
  );
};
export default GlassCard;
