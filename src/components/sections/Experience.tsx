import { useTranslation } from 'react-i18next';
import { FiBriefcase } from 'react-icons/fi';
import { experiences } from '../../domain/constants';
import { Chip } from '../ui';

const ExperienceSection = () => {
  const { t } = useTranslation();

  return (
    <section className="section-container">
      <div className="title-container">
        <image className="title-icon">
          <FiBriefcase size={24} />
        </image>
        <h2 className="titles">{t('experience.title')}</h2>
      </div>

      <div className="flex flex-col justify-between h-full max-h-100 overflow-y-auto gap-2 md:space-y-4 custom-scrollbar">
        {experiences.map((exp) => (
          <div key={exp.id} className="card-container">
            <div className="flex justify-between items-start mb-2">
              <div className="flex justify-center gap-1 md:gap-3">
                <img
                  src={exp.companyLogo}
                  alt={t(exp.company)}
                  className="w-8 h-8 md:w-10 md:h-10 rounded-lg object-cover"
                />
                <div>
                  <h3 className="subtitles">{t(`${exp.role}`)}</h3>
                  <p className="details">{t(exp.period)}</p>
                  <p className="text-xs md:text-lg text-[#D2ADDC] font-medium dark:text-amber-400">
                    {t(exp.company)}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-1">
              {exp.tags.map((tag) => (
                <Chip key={tag} tag={tag} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default ExperienceSection;
