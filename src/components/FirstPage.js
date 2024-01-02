import Header from "./Header";
import styles from "./FirstPage.module.css";
import React, { useState } from "react";
import Text from "../images/text.png";
import ModalLogin from "./UX/ModalLogIn";

function FirstPage() {
  const [isVisibleModalLogin, setIsVisibleModalLogin] = useState(false);

  const showModalLogin = () => {
    setIsVisibleModalLogin(true);
    console.log(isVisibleModalLogin);
  };

  const hideModalLogin = () => {
    setIsVisibleModalLogin(false);
  };

  return (
    <div className={styles["first-page"]}>
      <Header onShowModal={showModalLogin} />
      <div className={styles.container}>
        <p className={styles["left-wrapper"]}>
          <span className={styles.word}>Простой</span> способ{" "}
          <span className={styles.word}>найти</span> и{" "}
          <span className={styles.word}>избежать</span> индивидуальные{" "}
          <span className={styles.word}>триггеры</span>, вызывающие обострение
          розацеа
        </p>
      </div>
      {isVisibleModalLogin && <ModalLogin onHideModal={hideModalLogin} />}
    </div>
  );
}

export default FirstPage;
