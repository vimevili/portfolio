interface ChipProps {
  tag: string;
}

const Chip = ({ tag }: ChipProps) => {
  return (
    <span className="p-1 md:px-3 md:py-1 text-[8px] md:text-xs font-bold text-slate-700 bg-white/40 border border-white/30 rounded-full shadow-sm ">
      {tag}
    </span>
  );
};
export default Chip;
