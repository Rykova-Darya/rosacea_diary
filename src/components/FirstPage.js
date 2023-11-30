import Header from "./Header";
import styles from "./FirstPage.module.css";
import React, { useRef, useEffect, useState } from 'react';
import Text from "../images/text.png";

function FirstPage() {

  const headerRef = useRef(null);
  const [paddingTop, setstylesSlogan] = useState(0);
  const stylesSlogan = {
    paddingTop: paddingTop + 'px',
  }

  useEffect(() => {
    let screenHeight = window.innerHeight;
    let headerHeight = headerRef.current.offsetHeight;
    let containerHeight = document.querySelector(`.${styles.container}`).offsetHeight;
    let marginTop = (screenHeight - headerHeight - containerHeight - 80) / 2 ;
    console.log(marginTop);
    setstylesSlogan(marginTop);
  }, []);

  return (
    <div className={styles['first-page']}>
      <Header ref={headerRef} />
      <div className={styles.container}>
      <p className={styles['left-wrapper']} style={stylesSlogan}><span className={styles.word}>Простой</span> способ <span className={styles.word}>найти</span> и <span className={styles.word}>избежать</span> индивидуальные <span className={styles.word}>триггеры</span>, вызывающие обострение розацеа</p>
      </div>
    </div>
  );
}

export default FirstPage;