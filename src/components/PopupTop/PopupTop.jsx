import bottom from '../../images/popupbottom.png';
import top from '../../images/popuptop.png';

import styles from './PopupTop.module.scss';

const PopupTop = () => {
  return (
    <div className={styles.popuptop}>
      <div className={styles.popuptop__container}>
        <img
          className={`${styles.popuptop__img} ${styles.popuptop__img_bottom}`}
          src={bottom}
          alt="подложка снизу"
        />
        <img
          className={`${styles.popuptop__img} ${styles.popuptop__img_top}`}
          src={top}
          alt="подложка сверху"
        />
        <p className={styles.popuptop__text}>girls only!</p>
      </div>
    </div>
  );
};

export default PopupTop;
