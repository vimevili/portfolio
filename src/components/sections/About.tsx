import { useTranslation } from 'react-i18next';
import { FiUser } from 'react-icons/fi';

const AboutSection = () => {
  const { t } = useTranslation();

  return (
    <section className="section-container">
      <div className="title-container">
        <div className="title-icon">
          <FiUser size={24} />
        </div>
        <h2 className="titles">{t('about.title')}</h2>
      </div>

      <div className="flex flex-col justify-between gap-2 h-full md:space-y-4 custom-scrollbar">
        <div className="flex flex-col gap-2 md:gap-4 base-text">
          <p>{t('about.paragraph1')}</p>
          <p>{t('about.paragraph2')}</p>
          <p>{t('about.paragraph3')}</p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="card-container">
            <h3 className="text-xs md:text-sm font-bold text-[#D2ADDC] mb-1 dark:text-amber-400">
              Front-End
            </h3>
            <p className="details">TypeScript, React, Material UI, Tailwind</p>
          </div>
          <div className="card-container">
            <h3 className="text-xs md:text-base font-bold text-[#D2ADDC] mb-1 dark:text-amber-400">
              Back-End
            </h3>
            <p className="details">Java, Python, Flask, SQL</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
