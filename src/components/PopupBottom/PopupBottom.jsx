import React, { useState, useEffect } from 'react';

import popup from '../../images/popup.png';
import person from '../../images/person.png';

import styles from './PopupBottom.module.scss';

const PopupBottom = ({ windowWidth }) => {
  const [isHidden, setIsHidden] = useState(false);
  const onClickImg = () => {
    if (windowWidth <= 870) {
      setIsHidden(!isHidden);
    }
  };

  useEffect(() => {
    if (windowWidth > 870) {
      setIsHidden(false);
    } else {
      setIsHidden(true);
    }
  }, [windowWidth]);

  return (
    <div className={`${styles.popupbottom} ${isHidden && styles.popupbottom_hidden}`}>
      <div className={styles.popupbottom__container}>
        <img
          className={`${styles.popupbottom__img} ${
            isHidden && styles.popupbottom__infoText_hidden
          }`}
          src={popup}
          alt="попап"
        />

        <div className={styles.popupbottom__infoContainer}>
          <img
            onClick={onClickImg}
            className={`${styles.popupbottom__avatar} ${
              isHidden && styles.popupbottom__avatar_hidden
            }`}
            src={person}
            alt="Поддержка"
          />
          <div
            className={`${styles.popupbottom__infoText} ${
              isHidden && styles.popupbottom__infoText_hidden
            }`}>
            <p className={styles.infoTextP}>Здравствуйте!</p>
            <p className={styles.infoTextP}>Могу ли вам помочь?</p>
            <button type="button" className={styles.button}>
              начать диалог
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupBottom;
