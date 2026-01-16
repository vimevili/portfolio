import { useTranslation } from 'react-i18next';
import { FiBriefcase } from 'react-icons/fi';
import { experiences } from '../../domain/constants';
import { Chip } from '../ui';

const ExperienceSection = () => {
  const { t } = useTranslation();

  return (
    <section className="h-full my-auto space-y-6 animate-in slide-in-from-right-8 duration-500 mt-10">
      <div className="flex items-center gap-3 mb-6">
        <image className="p-2 bg-slate-40 rounded-lg text-[#D2ADDC] dark:bg-white/20 dark:text-amber-400">
          <FiBriefcase size={24} />
        </image>
        <h2 className="text-2xl font-bold text-[#D2ADDC] dark:text-amber-400">
          {t('experience.title')}
        </h2>
      </div>

      <div className="space-y-4 h-100 overflow-y-auto pr-2 custom-scrollbar">
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className="bg-white/20 p-4 rounded-2xl border border-white/40 hover:bg-white/50 transition-colors dark:bg-white/20"
          >
            <div className="flex justify-between items-start mb-2">
              <div className="flex justify-center gap-3">
                <img
                  src={exp.companyLogo}
                  alt={t(exp.company)}
                  className="w-10 h-10 rounded-lg object-cover"
                />
                <div>
                  <h3 className="lg:text-lg font-bold text-slate-800  dark:text-slate-200">
                    {t(`${exp.role}`)}
                  </h3>
                  <p className="lg:text-md text-[#D2ADDC] font-medium dark:text-amber-400">
                    {t(exp.company)}
                  </p>
                </div>
              </div>
              <span className="text-xs bg-white/40 px-2 py-1 rounded-full text-slate-600 font-medium border border-white/30">
                {t(exp.period)}
              </span>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
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
