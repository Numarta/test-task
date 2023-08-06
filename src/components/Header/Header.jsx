import { Link } from 'react-router-dom';

import logo from '../../images/logo.png';

import Navigation from '../Navigation';

import styles from './Header.module.scss';

const Header = ({ pathname }) => {
  return (
    <header className={styles.header}>
      <Link to="/">
        <img src={logo} alt="Логотип сайта" className={styles.logo} />
      </Link>
      <Navigation pathname={pathname} />
    </header>
  );
};

export default Header;
