import { FiMoon, FiSun } from 'react-icons/fi';

interface ThemeButtonProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const ThemeButton = ({ isDarkMode, toggleTheme }: ThemeButtonProps) => {
  return (
    <button
      onClick={toggleTheme}
      className="hover-icon"
      aria-label="Alternar Tema"
    >
      {isDarkMode ? (
        <FiSun size={18} className="dark:text-amber-400 z-10" />
      ) : (
        <FiMoon size={18} className="dark:text-amber-400 z-10" />
      )}
    </button>
  );
};
export default ThemeButton;
