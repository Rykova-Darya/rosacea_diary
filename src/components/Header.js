import styles from "./Header.module.css";
import LogoRosaceaDiary from "../images/logo_rosacea_diary.svg";
import LogoRosaceaDiaryMobile from "../images/logo_mobile.svg";
import ButtonEnter from "./UX/ButtonEnter";
import React from "react";

const Header = React.forwardRef((props, ref) => {
  return (
    <nav ref={ref} className={styles.canvas}>
      <div className={styles.header}>
        <img
          className={`${styles.logo} ${styles["logo_desktop"]}`}
          src={LogoRosaceaDiary}
          alt="Логотип Дневник розацеа"
        ></img>
        <img
          className={`${styles.logo} ${styles["logo_mobile"]}`}
          src={LogoRosaceaDiaryMobile}
          alt="Логотип Дневник розацеа"
        ></img>
        <ButtonEnter onClick={props.onShowModal} />
      </div>
    </nav>
  );
});

export default Header;
