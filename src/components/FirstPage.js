import Header from "./Header";
import styles from "./FirstPage.module.css";
import React, { useRef, useEffect, useState } from 'react';
import Text from "../images/text.png";

function FirstPage() {

  return (
    <div className={styles['first-page']}>
      <Header />
      <div className={styles.container}>
      <p className={styles['left-wrapper']} ><span className={styles.word}>Простой</span> способ <span className={styles.word}>найти</span> и <span className={styles.word}>избежать</span> индивидуальные <span className={styles.word}>триггеры</span>, вызывающие обострение розацеа</p>
      </div>
    </div>
  );
}

export default FirstPage;