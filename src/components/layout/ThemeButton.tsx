import { FiMoon, FiSun } from 'react-icons/fi';

interface ThemeButtonProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const ThemeButton = ({ isDarkMode, toggleTheme }: ThemeButtonProps) => {
  return (
    <button
      onClick={toggleTheme}
      className="p-3 rounded-full bg-slate-200/30 dark:bg-slate-700/50 hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors text-[#D2ADDC] dark:text-slate-200"
      aria-label="Alternar Tema"
    >
      {isDarkMode ? (
        <FiSun size={18} className="dark:text-amber-400" />
      ) : (
        <FiMoon size={18} />
      )}
    </button>
  );
};
export default ThemeButton;
