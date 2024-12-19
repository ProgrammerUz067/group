import React from 'react';
import style from './Team.module.scss';
import Button from '../Button/Button';
import { useTranslation } from 'react-i18next';
import Reveal from '../Reveal/Reveal';
import TextUp from '../Reveal/TextUp';
// import images
import roma from '../../../public/roma.jpg'
import diyor from '../../../public/diyor.jpg'
import ramiz from '../../../public/ramiz.jpg'
import shakhnoza from '../../../public/shakhnoza.jpg'

export default function Team() {
  const [activeBackground, setActiveBackground] = React.useState(true);
  React.useEffect(() => {
    window.addEventListener('scroll', () => {
      const scrollY = window.pageYOffset;
      if (scrollY > 2345) {
        setActiveBackground(true);
      }
    });
  }, []);

  const { t } = useTranslation();
  return (
    <section id="team" className={style.team}>
      <h1 className={style.title}>{t('teachers.title')}</h1>

      <div className={style.wrapper}>
        <div className={style.card}>
          <img src={roma} alt="png" className={style.roma} />
          <h2 className={style.name}>{t('teachers.teacher1.name')}</h2>
          <h2 className={style.surname}>{t('teachers.teacher1.lastName')}</h2>
          <p className={style.skill}>{t('teachers.teacher1.skill')}</p>
        </div>

        <div className={style.card}>
          <img src={diyor} alt="png" />
          <h2 className={style.name}>{t('teachers.teacher2.name')}</h2>
          <h2 className={style.surname}>{t('teachers.teacher2.lastName')}</h2>
          <p className={style.skill}>{t('teachers.teacher2.skill')}</p>
        </div>

        <div className={style.card}>
          <img src={ramiz} alt="png" />
          <h2 className={style.name}>{t('teachers.teacher3.name')}</h2>
          <h2 className={style.surname}>{t('teachers.teacher3.lastName')}</h2>
          <p className={style.skill}>{t('teachers.teacher3.skill')}</p>
        </div>

        <div className={style.card}>
          <img src={shakhnoza} alt="png" />
          <h2 className={style.name}>{t('teachers.teacher5.name')}</h2>
          <h2 className={style.surname}>{t('teachers.teacher5.lastName')}</h2>
          <p className={style.skill}>{t('teachers.teacher5.skill')}</p>
        </div>

        {/* <div className={style.card}>
          <img src="" alt="png" />
          <h2 className={style.name}>{t('teachers.teacher6.name')}</h2>
          <h2 className={style.surname}>{t('teachers.teacher6.lastName')}</h2>
          <p className={style.skill}>{t('teachers.teacher6.skill')}</p>
        </div>

        <div className={style.card}>
          <img src="" alt="png" />
          <h2 className={style.name}>{t('teachers.teacher7.name')}</h2>
          <h2 className={style.surname}>{t('teachers.teacher7.lastName')}</h2>
          <p className={style.skill}>{t('teachers.teacher7.skill')}</p>
        </div> */}
      </div>
    </section>
  );
}
