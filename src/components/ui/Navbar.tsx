import { useTranslation } from 'react-i18next';
import { sectionsConfig } from '../../domain/constants';

interface NavbarProps {
  currentSection: number;
  goToSection: (index: number) => void;
}

const Navbar = ({ currentSection, goToSection }: NavbarProps) => {
  const { t } = useTranslation();

  return (
    <nav className="absolute top-6 left-6 md:top-8 md:left-8 z-20 flex gap-4 md:gap-6">
      {sectionsConfig.map((section) => (
        <button
          key={section.id}
          onClick={() => goToSection(section.index)}
          className={`text-sm font-medium transition-all duration-300 relative group
                        ${
                          currentSection === section.index
                            ? 'text-[#D2ADDC] dark:text-amber-400 font-bold '
                            : 'text-slate-500 dark:text-slate-400 hover:text-[#D2ADDC] dark:hover:text-amber-400'
                        }
                      `}
        >
          {t(section.label)}
          {/* Current Section Underline */}
          <span
            className={`absolute -bottom-1 left-0 h-0.5 bg-[#D2ADDC] dark:bg-amber-400 transition-all duration-300
                         ${
                           currentSection === section.index
                             ? 'w-full'
                             : 'w-0 group-hover:w-1/2'
                         }
                      `}
          ></span>
        </button>
      ))}
    </nav>
  );
};
export default Navbar;
