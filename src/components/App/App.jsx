import React, { useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';

import useResize from 'use-resize';

import Header from '../Header';
import Footer from '../Footer';
import Main from '../Main';
import PopupTop from '../PopupTop';
import PopupBottom from '../PopupBottom';
import NotFound from '../NotFound';
import Rules from '../Rules';
import Winners from '../Winners';

import styles from './App.module.scss';
function App() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const windowWidth = useResize().width;

  return (
    <div className={styles.app}>
      <Header pathname={pathname} />
      <PopupTop />
      <PopupBottom windowWidth={windowWidth} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/rules" element={<Rules windowWidth={windowWidth} />} />
        <Route path="/winners" element={<Winners windowWidth={windowWidth} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
