import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import styles from './Navigation.module.scss';

const Navigation = ({ pathname }) => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  const clickBurger = () => {
    setIsBurgerOpen(!isBurgerOpen);
  };

  const chooseMenuItem = () => {
    setIsBurgerOpen(!isBurgerOpen);
  };

  return (
    <>
      <div className={styles.menu}>
        <Link
          to="/"
          className={`${styles.menu__button} ${styles.menu__button_main} ${
            pathname === '/' ? styles.menu__button_active : ''
          }`}>
          о май гад
        </Link>
        <Link
          to="/rules"
          className={`${styles.menu__button} ${styles.menu__button_rules} ${
            pathname === '/rules' ? styles.menu__button_active : ''
          }`}>
          правила
        </Link>
        <Link
          to="/winners"
          className={`${styles.menu__button} ${styles.menu__button_winners} ${
            pathname === '/winners' ? styles.menu__button_active : ''
          }`}>
          победители
        </Link>
      </div>

      <div className={styles.menu__mobile}>
        <nav className={`${styles.nav} ${isBurgerOpen && styles.nav_active}`}>
          <nav className={`${styles.nav__toplinks}`}>
            <Link
              onClick={chooseMenuItem}
              to="/"
              className={`${styles.menu__link} ${pathname === '/' && styles.menu__link_topactive} ${
                styles.menu__toplink_main
              }`}>
              О МАЙ ГАД
            </Link>

            <Link
              to="/rules"
              onClick={chooseMenuItem}
              className={`${styles.menu__link} ${
                pathname === '/rules' && styles.menu__link_topactive
              } ${styles.menu__toplink_films}`}>
              ПРАВИЛА
            </Link>

            <Link
              to="/winners"
              onClick={chooseMenuItem}
              className={`${styles.menu__link} ${
                pathname === '/winners' && styles.menu__link_topactive
              } ${styles.menu__toplink_saved}`}>
              ПОБЕДИТЕЛИ
            </Link>
          </nav>
        </nav>

        <div className={`${styles.blackout} ${isBurgerOpen && styles.blackout_active}`}></div>

        <button
          onClick={clickBurger}
          type="button"
          className={`${styles.menu__burger} ${isBurgerOpen && styles.menu__burger_active}`}>
          <span className={styles.menu__lines}></span>
        </button>
      </div>
    </>
  );
};

export default Navigation;
