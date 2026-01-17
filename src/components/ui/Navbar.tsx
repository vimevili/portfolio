import { useTranslation } from 'react-i18next';
import { sectionsConfig } from '../../domain/constants';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

interface NavbarProps {
  currentSection: number;
  goToSection: (index: number) => void;
}

interface MobileNavbarProps extends NavbarProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
}

const MobileNavbar = ({
  currentSection,
  goToSection,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}: MobileNavbarProps) => {
  const { t } = useTranslation();

  return (
    <>
      {/* Botão Hamburguer (Visível apenas em mobile) */}
      <button
        onClick={() => setIsMobileMenuOpen(true)}
        className="md:hidden hover-icon"
      >
        <FiMenu size={18} />
      </button>

      {/* Overlay do Menu (Aparece quando aberto) */}
      {isMobileMenuOpen && (
        <div className="p-6 absolute inset-0 z-50 rounded-4xl md:rounded-[3rem] bg-white/90 dark:bg-black/90 backdrop-blur-xl flex flex-col items-center justify-start gap-8 animate-in fade-in duration-300">
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="ml-auto top-6 right-6 hover-icon"
          >
            <FiX size={18} />
          </button>

          <div className="flex flex-col gap-6 text-center">
            {sectionsConfig.map((section) => (
              <button
                key={section.id}
                onClick={() => {
                  goToSection(section.index);
                  setIsMobileMenuOpen(false);
                }}
                className={`text-xl font-bold transition-all duration-300
                  ${
                    currentSection === section.index
                      ? 'text-[#D2ADDC] dark:text-amber-400 scale-110'
                      : 'text-slate-400 dark:text-slate-500'
                  }
                `}
              >
                {t(section.label)}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

const DesktopNavbar = ({ currentSection, goToSection }: NavbarProps) => {
  const { t } = useTranslation();

  return (
    <div className="hidden md:flex top-8 left-8 z-20 gap-6">
      {sectionsConfig.map((section) => (
        <button
          key={section.id}
          onClick={() => goToSection(section.index)}
          className={`text-sm font-medium transition-all duration-300 relative group
            ${
              currentSection === section.index
                ? 'text-[#D2ADDC] dark:text-amber-400 font-bold'
                : 'text-slate-500 dark:text-slate-400 hover:text-[#D2ADDC] dark:hover:text-amber-400'
            }
          `}
        >
          {t(section.label)}
          {/* Linha indicadora animada */}
          <span
            className={`absolute -bottom-1 left-0 h-0.5 bg-[#D2ADDC] dark:bg-amber-400 transition-all duration-300
                    ${currentSection === section.index ? 'w-full' : 'w-0 group-hover:w-1/2'}
                  `}
          ></span>
        </button>
      ))}
    </div>
  );
};

const Navbar = ({ currentSection, goToSection }: NavbarProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="top-6 left-6 md:top-8 md:left-8 z-20 flex gap-4 md:gap-6 justify-between">
      <MobileNavbar
        currentSection={currentSection}
        goToSection={goToSection}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />

      <DesktopNavbar
        currentSection={currentSection}
        goToSection={goToSection}
      />
    </nav>
  );
};
export default Navbar;
