import { Link } from 'react-router-dom';

import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';

import clevergirl from '../../images/2clever.png';
import beautygirl from '../../images/2beauty.png';
import leftquest from '../../images/quest1.png';
import rightquest from '../../images/quest2.png';

import styles from './Rules.module.scss';

const Rules = ({ windowWidth }) => {
  const navigate = useNavigate();
  const onClickButton = () => {
    navigate('/winners');
  };

  return (
    <main className={styles.rules}>
      <img
        className={`${styles.rules__quest} ${styles.rules__quest_left}`}
        src={leftquest}
        alt="фоновое изображение"></img>
      <img
        className={`${styles.rules__quest} ${styles.rules__quest_right}`}
        src={rightquest}
        alt="фоновое изображение"></img>
      <div className={styles.rules__content}>
        <h2 className={styles.rules__subheader}>
          БЕЗ ПАНИКИ, НА САМОМ ДЕЛЕ ВСЕ ОЧЕНЬ ПРОСТО, У НАС ЕСТЬ ДВА ГИГАНТСКИХ КОНКУРСА:
        </h2>
        {windowWidth > 600 && (
          <>
            <h1 className={styles.girl}>
              <img
                className={`${styles.girl__img} ${styles.girl__img_left}`}
                src={clevergirl}
                alt="умные"></img>
              <img
                className={`${styles.girl__img} ${styles.girl__img_right}`}
                src={beautygirl}
                alt="красивые"></img>
              <span className={`${styles.girl__header_clever} ${styles.girl__header}`}>УМНЫЕ</span>
              <span className={`${styles.girl__header_and} ${styles.girl__header}`}>&</span>
              <span className={`${styles.girl__header_beauty} ${styles.girl__header}`}>
                КРАСИВЫЕ
              </span>
            </h1>
            <div className={styles.lists}>
              <ul className={`${styles.list} ${styles.list__left}`}>
                <li className={styles.list__item}>
                  1. СМЕЛО ПОДПИСЫВАЙСЯ НА{' '}
                  <a href="http://instagram.com" className={styles.list__item_link}>
                    {'>>'} НАШ ИНСТАГРАМ {'<<'}
                  </a>
                </li>
                <li className={styles.list__item}>
                  2. БЫСТРЕЕ ВСЕХ И ПРАВИЛЬНО ОТВЕЧАЙ НА ВОПРОСЫ
                </li>
                <li className={styles.list__item}>3. 10 УМНИЦ получат ОТЛИЧИТЕЛЬНЫЕ призы</li>
              </ul>

              <ul className={`${styles.list} ${styles.list__right}`}>
                <li className={`${styles.list__item} ${styles.list__item_right}`}>
                  1. ПОСЕТИ ЛЮБУЮ ИЗ 5 СТРАН, НЕ ВЫХОДЯ ИЗ ОФИСА
                </li>
                <li className={`${styles.list__item} ${styles.list__item_right}`}>
                  2. Запили селфи C ХЕШТЕГОМ{' '}
                  <a
                    href="http://instagram.com/"
                    className={`${styles.list__item_link} ${styles.list__item_linkSecond}`}>
                    #LOREMIPSUM
                  </a>
                  , чтоб залайкали
                </li>
                <li className={`${styles.list__item} ${styles.list__item_right}`}>
                  3. 5 КРАСАВИЦ ТОЖЕ ПОЛУЧАТ ПРИЗЫ
                </li>
              </ul>
            </div>
          </>
        )}

        {windowWidth <= 600 && (
          <>
            <h2 className={styles.girl}>
              <span className={`${styles.girl__header_clever} ${styles.girl__header}`}>УМНЫЕ</span>
            </h2>
            <ul className={`${styles.list} ${styles.list__left}`}>
              <li className={styles.list__item}>
                1. СМЕЛО ПОДПИСЫВАЙСЯ НА{' '}
                <a href="http://instagram.com" className={styles.list__item_link}>
                  {'>>'} НАШ ИНСТАГРАМ {'<<'}
                </a>
              </li>
              <li className={styles.list__item}>2. БЫСТРЕЕ ВСЕХ И ПРАВИЛЬНО ОТВЕЧАЙ НА ВОПРОСЫ</li>
              <li className={styles.list__item}>3. 10 УМНИЦ получат ОТЛИЧИТЕЛЬНЫЕ призы</li>
            </ul>

            <h2 className={styles.girl}>
              <span className={`${styles.girl__header_beauty} ${styles.girl__header}`}>
                КРАСИВЫЕ
              </span>
            </h2>
            <ul className={`${styles.list} ${styles.list__right}`}>
              <li className={`${styles.list__item} ${styles.list__item_right}`}>
                1. ПОСЕТИ ЛЮБУЮ ИЗ 5 СТРАН, НЕ ВЫХОДЯ ИЗ ОФИСА
              </li>
              <li className={`${styles.list__item} ${styles.list__item_right}`}>
                2. Запили селфи C ХЕШТЕГОМ{' '}
                <a
                  href="http://instagram.com/"
                  className={`${styles.list__item_link} ${styles.list__item_linkSecond}`}>
                  #LOREMIPSUM
                </a>
                , чтоб залайкали
              </li>
              <li className={`${styles.list__item} ${styles.list__item_right}`}>
                3. 5 КРАСАВИЦ ТОЖЕ ПОЛУЧАТ ПРИЗЫ
              </li>
            </ul>
          </>
        )}

        <button type="button" className={styles.button} onClick={onClickButton}>
          узнать счет
        </button>
      </div>
    </main>
  );
};

export default Rules;
