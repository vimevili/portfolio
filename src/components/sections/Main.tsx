import { useTranslation } from 'react-i18next';
import { profileImage } from '../../assets';
import { socialMedia } from '../../domain/constants';
import SocialButton from '../layout/SocialButton';

const HomeSection = () => {
  const { t } = useTranslation();

  return (
    <section className="h-full my-auto text-center space-y-4 sm:space-y-1 animate-in fade-in zoom-in duration-500 pt-6">
      <div className="inline-block">
        <figure className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-linear-to-tr from-rose-300 to-indigo-300 dark:from-amber-400 dark:to-yellow-200 p-1 shadow-md mx-auto">
          <img
            className="rounded-full "
            alt={t('common.accessibility.photo_description')}
            src={profileImage}
          />
        </figure>
      </div>

      <div>
        <h1 className="text-4xl md:text-5xl font-black bg-linear-to-r from-rose-300 to-indigo-300 bg-clip-text text-transparent dark:from-amber-400 dark:to-yellow-200">
          Vinicius Meirelles
        </h1>
        <p className="text-2xl text-slate-600 font-medium dark:text-slate-200">
          {t('home.role')}
        </p>
      </div>

      <p className="text-slate-600 lg:max-w-2xl lg:mt-2 sm:max-w-md mx-auto leading-relaxed dark:text-slate-300">
        {t('home.description')}
      </p>

      <article className="flex justify-center gap-4 pt-4">
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
