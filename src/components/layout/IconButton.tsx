import type { ElementType } from 'react';
import { useTranslation } from 'react-i18next';

interface IconButtonProps {
  onClick: () => void;
  Icon: ElementType;
  type: 'next_section' | 'prev_section';
}

const IconButton = ({ onClick, Icon, type }: IconButtonProps) => {
  const { t } = useTranslation();

  return (
    <button
      onClick={onClick}
      aria-label={t(`common.accessibility.${type}`)}
      className="p-3 md:p-4 rounded-full backdrop-blur-md border border-white/40 shadow-lg transition-all duration-300 bg-white/60
       text-[#D2ADDC] hover:bg-white/70 hover:scale-110 active:scale-95 hover:shadow-purple-200/50 dark:bg-white/30 dark:text-amber-400"
    >
      <Icon size={24} strokeWidth={2.5} />
    </button>
  );
};

export default IconButton;
