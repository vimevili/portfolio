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
      className="hover-icon"
    >
      <Icon size={18} strokeWidth={2.5} />
    </button>
  );
};

export default IconButton;
