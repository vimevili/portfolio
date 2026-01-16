interface ChipProps {
  tag: string;
}

const Chip = ({ tag }: ChipProps) => {
  return (
    <span className="px-3 py-1 text-[10px] md:text-xs font-bold text-slate-700 bg-white/40 border border-white/30 rounded-full shadow-sm ">
      {tag}
    </span>
  );
};
export default Chip;
