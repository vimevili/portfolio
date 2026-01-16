import type { ElementType } from 'react';
import { IconButton } from '../ui';

interface NavigationButtonProps {
  navigateSection: () => void;
  icon: ElementType;
  type: 'next_section' | 'prev_section';
}

const NavigationButton = ({
  navigateSection,
  icon,
  type,
}: NavigationButtonProps) => {
  return (
    <div className="hidden md:block">
      <IconButton onClick={navigateSection} Icon={icon} type={type} />
    </div>
  );
};
export default NavigationButton;
