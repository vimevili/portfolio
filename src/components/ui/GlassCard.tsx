interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

const GlassCard = ({ children, className }: GlassCardProps) => {
  return (
    <div
      className={`h-full backdrop-blur-md bg-white/30 dark:bg-slate-800/40 border border-white/40 dark:border-slate-700/40 shadow-md rounded-[3rem] ${className}`}
    >
      {children}
    </div>
  );
};
export default GlassCard;
