import { Link, Route, Routes, useLocation, useNavigate } from 'react-router-dom';

import clevergirl from '../../images/2clever.png';
import beautygirl from '../../images/2beauty.png';
import leftgirl from '../../images/3girlleft.png';
import rightgirl from '../../images/3girlright.png';
import centergirl from '../../images/3girlbottom.png';

import styles from './Winners.module.scss';

const Winners = ({ windowWidth }) => {
  const navigate = useNavigate();

  return (
    <>
      <img
        className={`${styles.winners__girl} ${styles.winners__girl_right}`}
        src={rightgirl}
        alt="девочка справа"></img>
      <main className={styles.winners}>
        {windowWidth > 670 && (
          <>
            <img
              className={`${styles.winners__girl} ${styles.winners__girl_left}`}
              src={leftgirl}
              alt="девочка слева"></img>
            <img
              className={`${styles.winners__girl} ${styles.winners__girl_center}`}
              src={centergirl}
              alt="девочка в центре"></img>

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

            <div className={`${styles.lists}`}>
              <div className={`${styles.listContainer} ${styles.listContainer_first}`}>
                <ol className={`${styles.list} ${styles.list_left}`}>
                  <li className={`${styles.list__item_num} ${styles.list__item}`}>
                    <span className={`${styles.list__text}`}>SASHA PEREVEZENTSEVA</span>
                  </li>
                  <li className={`${styles.list__item_num} ${styles.list__item}`}>
                    <span className={`${styles.list__text}`}>wildangel69</span>
                  </li>
                  <li className={`${styles.list__item_num} ${styles.list__item}`}>
                    <span className={`${styles.list__text}`}>NATASHA KONSTANTINOVA</span>
                  </li>
                  <li className={`${styles.list__item_num} ${styles.list__item}`}>
                    <span className={`${styles.list__text}`}>DRUNKEVERYDAY87</span>
                  </li>
                  <li className={`${styles.list__item_num} ${styles.list__item}`}>
                    <span className={`${styles.list__text}`}>OLESYA SHELKOVENKO </span>
                  </li>
                  <li className={`${styles.list__item_num} ${styles.list__item}`}>
                    <span className={`${styles.list__text}`}>SUMMERWAVESLOVE</span>
                  </li>
                  <li className={`${styles.list__item_num} ${styles.list__item}`}>
                    <span className={`${styles.list__text}`}>SLIPKNOTWHYNOT76</span>
                  </li>
                  <li className={`${styles.list__item_num} ${styles.list__item}`}>
                    <span className={`${styles.list__text}`}>tRATATAPIUPIUPIU</span>
                  </li>
                  <li className={`${styles.list__item_num} ${styles.list__item}`}>
                    <span className={`${styles.list__text}`}>RASKRUTKAKAUNTOV2019</span>
                  </li>
                  <li className={`${styles.list__item_num} ${styles.list__item}`}>
                    <span className={`${styles.list__text} ${styles.list__text_last}`}>
                      OLGA PETROVA
                    </span>
                  </li>
                </ol>
                <ul className={`${styles.list} ${styles.list_right}`}>
                  <li className={styles.list__item_yes}>23</li>
                  <li className={styles.list__item_yes}>18</li>
                  <li className={styles.list__item_yes}>16</li>
                  <li className={styles.list__item_yes}>14</li>
                  <li className={styles.list__item_yes}>10</li>
                  <li className={styles.list__item_yes}>9</li>
                  <li className={styles.list__item_yes}>7</li>
                  <li className={styles.list__item_yes}>5</li>
                  <li className={styles.list__item_yes}>3</li>
                  <li className={styles.list__item_yes}>2</li>
                </ul>
              </div>

              <div className={`${styles.listContainer} ${styles.listContainer_second}`}>
                <ol className={`${styles.list} ${styles.list_left}`}>
                  <li className={`${styles.list__item_num} ${styles.list__item}`}>
                    <span className={`${styles.list__text}`}>SASHA PEREVEZENTSEVA</span>
                  </li>
                  <li className={`${styles.list__item_num} ${styles.list__item}`}>
                    <span className={`${styles.list__text}`}>wildangel69</span>
                  </li>
                  <li className={`${styles.list__item_num} ${styles.list__item}`}>
                    <span className={`${styles.list__text}`}>NATASHA KONSTANTINOVA</span>
                  </li>
                  <li className={`${styles.list__item_num} ${styles.list__item}`}>
                    <span className={`${styles.list__text}`}>DRUNKEVERYDAY87</span>
                  </li>
                  <li className={`${styles.list__item_num} ${styles.list__item}`}>
                    <span className={`${styles.list__text}`}>OLESYA SHELKOVENKO</span>{' '}
                  </li>
                </ol>
                <ul className={`${styles.list} ${styles.list_right}`}>
                  <li className={styles.list__item_like}>387</li>
                  <li className={styles.list__item_like}>278</li>
                  <li className={styles.list__item_like}>205</li>
                  <li className={styles.list__item_like}>174</li>
                  <li className={styles.list__item_like}>136</li>
                </ul>
              </div>
            </div>
          </>
        )}

        {windowWidth <= 670 && (
          <>
            <img
              className={`${styles.winners__girl} ${styles.winners__girl_left}`}
              src={leftgirl}
              alt="девочка слева"></img>
            <img
              className={`${styles.winners__girl} ${styles.winners__girl_center}`}
              src={centergirl}
              alt="девочка в центре"></img>
            <h2 className={styles.girl}>
              <span className={`${styles.girl__header_clever} ${styles.girl__header}`}>УМНЫЕ</span>
            </h2>
            <div className={`${styles.listContainer} ${styles.listContainer_first}`}>
              <ol className={`${styles.list} ${styles.list_left}`}>
                <li className={`${styles.list__item_num} ${styles.list__item}`}>
                  <span className={`${styles.list__text}`}>SASHA PEREVEZENTSEVA</span>
                </li>
                <li className={`${styles.list__item_num} ${styles.list__item}`}>
                  <span className={`${styles.list__text}`}>wildangel69</span>
                </li>
                <li className={`${styles.list__item_num} ${styles.list__item}`}>
                  <span className={`${styles.list__text}`}>NATASHA KONSTANTINOVA</span>
                </li>
                <li className={`${styles.list__item_num} ${styles.list__item}`}>
                  <span className={`${styles.list__text}`}>DRUNKEVERYDAY87</span>
                </li>
                <li className={`${styles.list__item_num} ${styles.list__item}`}>
                  <span className={`${styles.list__text}`}>OLESYA SHELKOVENKO </span>
                </li>
                <li className={`${styles.list__item_num} ${styles.list__item}`}>
                  <span className={`${styles.list__text}`}>SUMMERWAVESLOVE</span>
                </li>
                <li className={`${styles.list__item_num} ${styles.list__item}`}>
                  <span className={`${styles.list__text}`}>SLIPKNOTWHYNOT76</span>
                </li>
                <li className={`${styles.list__item_num} ${styles.list__item}`}>
                  <span className={`${styles.list__text}`}>tRATATAPIUPIUPIU</span>
                </li>
                <li className={`${styles.list__item_num} ${styles.list__item}`}>
                  <span className={`${styles.list__text}`}>RASKRUTKAKAUNTOV2019</span>
                </li>
                <li className={`${styles.list__item_num} ${styles.list__item}`}>
                  <span className={`${styles.list__text} ${styles.list__text_last}`}>
                    OLGA PETROVA
                  </span>
                </li>
              </ol>

              <ul className={`${styles.list} ${styles.list_right}`}>
                <li className={styles.list__item_yes}>23</li>
                <li className={styles.list__item_yes}>18</li>
                <li className={styles.list__item_yes}>16</li>
                <li className={styles.list__item_yes}>14</li>
                <li className={styles.list__item_yes}>10</li>
                <li className={styles.list__item_yes}>9</li>
                <li className={styles.list__item_yes}>7</li>
                <li className={styles.list__item_yes}>5</li>
                <li className={styles.list__item_yes}>3</li>
                <li className={styles.list__item_yes}>2</li>
              </ul>
            </div>

            <h2 className={styles.girl}>
              <span className={`${styles.girl__header_beauty} ${styles.girl__header}`}>
                КРАСИВЫЕ
              </span>
            </h2>
            <div className={`${styles.listContainer} ${styles.listContainer_second}`}>
              <ol className={`${styles.list} ${styles.list_left}`}>
                <li className={`${styles.list__item_num} ${styles.list__item}`}>
                  <span className={`${styles.list__text}`}>SASHA PEREVEZENTSEVA</span>
                </li>
                <li className={`${styles.list__item_num} ${styles.list__item}`}>
                  <span className={`${styles.list__text}`}>wildangel69</span>
                </li>
                <li className={`${styles.list__item_num} ${styles.list__item}`}>
                  <span className={`${styles.list__text}`}>NATASHA KONSTANTINOVA</span>
                </li>
                <li className={`${styles.list__item_num} ${styles.list__item}`}>
                  <span className={`${styles.list__text}`}>DRUNKEVERYDAY87</span>
                </li>
                <li className={`${styles.list__item_num} ${styles.list__item}`}>
                  <span className={`${styles.list__text}`}>OLESYA SHELKOVENKO</span>{' '}
                </li>
              </ol>
              <ul className={`${styles.list} ${styles.list_right}`}>
                <li className={styles.list__item_like}>387</li>
                <li className={styles.list__item_like}>278</li>
                <li className={styles.list__item_like}>205</li>
                <li className={styles.list__item_like}>174</li>
                <li className={styles.list__item_like}>136</li>
              </ul>
            </div>
          </>
        )}
      </main>
    </>
  );
};

export default Winners;
