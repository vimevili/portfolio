import type { ElementType } from 'react';
import { useTranslation } from 'react-i18next';

interface SocialButtonProps {
  socialMedia: string;
  href: string;
  icon: ElementType;
}

const SocialButton = ({ socialMedia, href, icon: Icon }: SocialButtonProps) => {
  const { t } = useTranslation();
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t(`common.accessibility.${socialMedia.toLowerCase()}`)}
      className={` p-3 bg-white/50 hover:bg-white/70 rounded-xl transition-all shadow-sm hover:shadow-md hover:-translate-y-1 border border-white/30 dark:bg-white/20 text-[#D2ADDC] dark:text-amber-400 `}
    >
      <Icon size={20} />
    </a>
  );
};
export default SocialButton;
