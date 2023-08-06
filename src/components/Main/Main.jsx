/* eslint-disable no-lone-blocks */
/* eslint-disable no-undef */
/* eslint-disable max-len */
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useResize from 'use-resize';

import anim from '../../images/anim.gif';

import styles from './Main.module.scss';

export const ANIMATION_HTML = `
<body onload="init();" style="margin:0px;">
	<div id="animation_container" style="background-color:rgba(255, 255, 255, 0.00); width:1014px; height:262px">
		<canvas id="canvas" width="1014" height="262" style="position: absolute; display: block; background-color:rgba(255, 255, 255, 0.00);"></canvas>
		<div id="dom_overlay_container" style="pointer-events:none; overflow:hidden; width:1014px; height:262px; position: absolute; left: 0px; top: 0px; display: block;">
		</div>
	</div>
</body>
`;

export const ANIMATION_HTML_SQUARE = `
<body onload="init();" style="margin:0px;">
	<div id="animation_container" style="background-color:rgba(255, 255, 255, 0.00); width:572px; height:503px">
		<canvas id="canvas" width="572" height="503" style="position: absolute; display: block; background-color:rgba(255, 255, 255, 0.00);"></canvas>
		<div id="dom_overlay_container" style="pointer-events:none; overflow:hidden; width:572px; height:503px; position: absolute; left: 0px; top: 0px; display: block;">
		</div>
	</div>
`;

const Main = () => {
  const windowWidth = useResize().width;

  useEffect(() => {
    init();
  });

  const navigate = useNavigate();
  const onClickButton = () => {
    navigate('/rules');
  };
  return (
    <main className={styles.main}>
      <section className={styles.main__section}>
        <h1 className={`${styles.main__text} ${styles.main__text_header}`}>о май гад!</h1>
        {windowWidth >= 1000 && (
          <>
            <div className={`${styles.main__textContainer} ${styles.main__textContainer_first}`}>
              <p className={styles.main__text}>да это же</p>
              <p className={styles.main__text}>самая настоящая</p>
            </div>
            <div className={`${styles.main__textContainer} ${styles.main__textContainer_second}`}>
              <p className={styles.main__text}>8мартовская</p>
              <p className={styles.main__text}>интеллектуальная викторина</p>
            </div>
          </>
        )}
        {windowWidth < 1000 && (
          <p className={`${styles.main__text} ${styles.main__text_mobile}`}>
            да это же самая настоящая 8мартовская интеллектуальная викторина
          </p>
        )}
        <div
          dangerouslySetInnerHTML={{ __html: ANIMATION_HTML }}
          className={`${styles.main__photoContainer} ${
            windowWidth < 1000 && styles.main__photoContainer_translucent
          }`}
          id="maintemplate"></div>
        {windowWidth < 1000 && (
          <img src={anim} alt="главная анимация" className={styles.main__anim}></img>
        )}

        <div className={`${styles.main__textContainer} ${styles.main__textContainer_bottom}`}>
          <p className={styles.main__text}>с реально сложными вопросами</p>
          <p className={`${styles.main__text} ${styles.main__text_bottomstring}`}>
            и <span className={styles.main__text_blue}>нереальными*</span> призами
          </p>
        </div>
      </section>
      <button type="button" className={styles.button} onClick={onClickButton}>
        участвовать
      </button>
    </main>
  );
};

export default Main;
