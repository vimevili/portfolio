import { useCallback, useState } from 'react';
import { sectionsConfig } from '../domain/constants';

export function useNavigation() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSections = sectionsConfig.length;

  const nextSection = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalSections);
  }, [totalSections]);

  const prevSection = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalSections) % totalSections);
  }, [totalSections]);

  const goToSection = useCallback(
    (index: number) => {
      if (index >= 0 && index < totalSections) {
        setCurrentIndex(index);
      }
    },
    [totalSections]
  );

  return {
    currentSection: sectionsConfig[currentIndex],
    currentIndex,
    totalSections,
    nextSection,
    prevSection,
    goToSection,
    sections: sectionsConfig,
  };
}
