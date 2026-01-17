import { useEffect, useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { LavaBackground, NavigationButton } from './components/layout';
import ThemeButton from './components/layout/ThemeButton';
import {
  AboutSection,
  ExperienceSection,
  MainSection,
  ProjectsSection,
} from './components/sections';
import { GlassCard, IconButton, Navbar } from './components/ui';
import { sectionsConfig } from './domain/constants';
import { useNavigation } from './hooks/useNavigation';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Verifica se já tem algo salvo
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    // Se não, verifica a preferência do sistema
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  // Sincroniza estado inicial com HTML na primeira renderização
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.toggle('dark', isDarkMode);
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const {
    currentIndex,
    prevSection,
    nextSection,
    currentSection,
    goToSection,
    totalSections,
  } = useNavigation();

  const renderContent = () => {
    switch (currentIndex) {
      case 0:
        return <MainSection />;
      case 1:
        return <AboutSection />;
      case 2:
        return <ExperienceSection />;
      case 3:
        return <ProjectsSection />;
      default:
        return <MainSection />;
    }
  };

  const renderLineTracker = () => (
    <div className="flex gap-2 justify-center my-4 md:mt-auto">
      {sectionsConfig.map((section) => (
        <button
          key={section.id}
          onClick={() => goToSection(section.index)}
          className={`h-1.5 md:h-2 rounded-full transition-all duration-300 ease-in-out ${
            section.index === currentSection.index
              ? 'w-8 bg-[#D2ADDC]  dark:bg-amber-400'
              : 'w-1.5 md:w-2 bg-[#ad9db2] hover:bg-[#c9ba95] dark:bg-[#c9ba95] dark:hover:bg-amber-400'
          } `}
        />
      ))}
    </div>
  );

  return (
    <main
      className={`w-full font-sans text-slate-800 dark:text-slate-200 antialiased lg:overflow-hidden relative selection:bg-rose-200 dark:selection:bg-rose-900 selection:text-rose-900 dark:selection:text-rose-100`}
    >
      <LavaBackground />

      <div className="relative z-10 w-full h-full min-h-dvh flex items-center justify-center p-4 md:p-8">
        <div className="w-full max-w-6xl flex items-center justify-between gap-4 md:gap-8">
          {/* Back Button */}
          <NavigationButton
            type="prev_section"
            navigateSection={prevSection}
            icon={FiChevronLeft}
          />

          {/* Central Container */}
          <GlassCard>
            <header className="flex justify-between items-center">
              {/* Inner Navbar */}
              <Navbar
                currentSection={currentSection.index}
                goToSection={goToSection}
              />

              {/* Page Counter and Theme Button */}
              <div className="top-6 right-6 flex items-center gap-4">
                <ThemeButton
                  isDarkMode={isDarkMode}
                  toggleTheme={toggleTheme}
                />
                <div className="hidden md:flex">
                  0{currentSection.index + 1} / 0{totalSections}
                </div>
              </div>
            </header>

            {/* Content */}
            {renderContent()}

            {/* Currenct Section Line Tracker */}
            {renderLineTracker()}

            {/* Navegação Mobile */}
            <div className="md:hidden flex justify-between pt-2 border-t border-slate-200/30">
              <IconButton
                onClick={prevSection}
                Icon={FiChevronLeft}
                type="prev_section"
              />
              <IconButton
                onClick={nextSection}
                Icon={FiChevronRight}
                type="next_section"
              />
            </div>
          </GlassCard>

          {/* Next Button */}
          <NavigationButton
            type="next_section"
            navigateSection={nextSection}
            icon={FiChevronRight}
          />
        </div>
      </div>
    </main>
  );
}

export default App;
