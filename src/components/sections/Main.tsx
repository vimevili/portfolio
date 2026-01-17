import { useTranslation } from 'react-i18next';
import { profileImage } from '../../assets';
import { socialMedia } from '../../domain/constants';
import SocialButton from '../layout/SocialButton';

const HomeSection = () => {
  const { t } = useTranslation();

  return (
    <section className="section-container items-center text-center">
      <div className="inline-block">
        <figure className="w-26 h-26 md:w-48 md:h-48 rounded-full bg-linear-to-tr from-rose-300 to-indigo-300 dark:from-amber-400 dark:to-yellow-200 p-1 shadow-md mx-auto">
          <img
            className="rounded-full "
            alt={t('common.accessibility.photo_description')}
            src={profileImage}
          />
        </figure>
      </div>

      <div>
        <h1 className="text-3xl md:text-5xl font-black bg-linear-to-r from-rose-300 to-indigo-300 bg-clip-text text-transparent dark:from-amber-400 dark:to-yellow-200">
          Vinicius Meirelles
        </h1>
        <p className="titles text-slate-600! dark:text-slate-200!">
          {t('home.role')}
        </p>
      </div>

      <p className="base-text">{t('home.description')}</p>

      <article className="flex justify-center gap-4">
        {socialMedia.map((social) => (
          <SocialButton
            key={social.name}
            socialMedia={social.name}
            href={social.link}
            icon={social.icon}
          />
        ))}
      </article>
    </section>
  );
};
export default HomeSection;
