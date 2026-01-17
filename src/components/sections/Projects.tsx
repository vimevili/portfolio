import { FiExternalLink, FiCpu } from 'react-icons/fi';
import { projects } from '../../domain/constants';
import { useTranslation } from 'react-i18next';
import { Chip } from '../ui';

const ProjectsSection = () => {
  const { t } = useTranslation();

  return (
    <section className="section-container">
      <div className="title-container">
        <div className="title-icon">
          <FiCpu size={24} />
        </div>
        <h2 className="titles">{t('projects.title')}</h2>
      </div>

      <div className="flex flex-col justify-between h-full max-h-100 overflow-y-auto gap-2 md:gap-3 custom-scrollbar">
        {projects.map((proj) => (
          <div
            key={proj.id}
            className="flex flex-col gap-2 bg-white/30 p-3 md:p-4 rounded-2xl border border-white/40 group hover:bg-white/50 transition-all"
          >
            <div className="flex flex-col justify-between items-start">
              <div className="flex justify-between w-full">
                <h3 className="subtitles">{t(proj.title)}</h3>
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-slate-800 dark:text-slate-200 transition-colors"
                >
                  <FiExternalLink size={14} />
                </a>
              </div>
            </div>
            <p className="base-text">{t(proj.description)}</p>
            <div className="flex flex-wrap gap-2">
              {proj.tags.map((tag) => (
                <Chip key={tag} tag={tag} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default ProjectsSection;
