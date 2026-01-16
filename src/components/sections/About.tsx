import { useTranslation } from 'react-i18next';
import { FiUser } from 'react-icons/fi';

const AboutSection = () => {
  const { t } = useTranslation();

  return (
    <section className="h-full my-auto space-y-6 animate-in slide-in-from-right-8 duration-500 pt-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-indigo-40 rounded-lg text-[#D2ADDC] dark:text-amber-400 dark:bg-white/20">
          <FiUser size={24} />
        </div>
        <h2 className="text-2xl font-bold text-[#D2ADDC] dark:text-amber-400">
          {t('about.title')}
        </h2>
      </div>

      <div className="space-y-4 text-slate-700 leading-relaxed text-sm md:text-base  pr-2 custom-scrollbar dark:text-slate-200">
        <p>{t('about.paragraph1')}</p>
        <p>{t('about.paragraph2')}</p>
        <p>{t('about.paragraph3')}</p>

        <div className="grid grid-cols-2 gap-3 pt-4">
          <div className="bg-white/30 p-3 rounded-xl border border-white/40 dark:bg-white/20">
            <h3 className="lg:text-md font-bold text-[#D2ADDC] mb-1 dark:text-amber-400">
              Front-End
            </h3>
            <p className="text-xs lg:text-md text-slate-600 dark:text-slate-200">
              TypeScript, React, Material UI, Tailwind
            </p>
          </div>
          <div className="bg-white/30 p-3 rounded-xl border border-white/40 dark:bg-white/20">
            <h3 className="lg:text-md font-bold text-[#D2ADDC] mb-1 dark:text-amber-400">
              Back-End
            </h3>
            <p className="text-xs lg:text-md text-slate-600 dark:text-slate-200">
              Java, Python, Flask, SQL
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
