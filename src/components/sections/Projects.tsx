import { FiExternalLink, FiCpu } from 'react-icons/fi';
import { projects } from '../../domain/constants';
import { useTranslation } from 'react-i18next';
import { Chip } from '../ui';

const ProjectsSection = () => {
  const { t } = useTranslation();

  return (
    <div className="h-full min-h-120 my-auto space-y-6 animate-in slide-in-from-right-8 duration-500 pt-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-slate-40 rounded-lg text-[#D2ADDC] dark:text-amber-400 ">
          <FiCpu size={24} />
        </div>
        <h2 className="text-2xl font-bold text-[#D2ADDC] dark:text-amber-400">
          {t('projects.title')}
        </h2>
      </div>

      <div className="grid h-80 gap-4 overflow-y-auto pr-2 pb-2 custom-scrollbar">
        {projects.map((proj) => (
          <div
            key={proj.id}
            className="h-fit bg-white/30 p-4 rounded-2xl border border-white/40 group hover:bg-white/50 transition-all"
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold text-slate-800 dark:text-slate-100">
                {t(proj.title)}
              </h3>
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-slate-800 dark:text-slate-200 transition-colors"
              >
                <FiExternalLink size={20} />
              </a>
            </div>
            <p className="text-sm text-slate-600 mb-3 dark:text-slate-200">
              {t(proj.description)}
            </p>
            <div className="flex flex-wrap gap-2">
              {proj.tags.map((tag) => (
                <Chip key={tag} tag={tag} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ProjectsSection;
