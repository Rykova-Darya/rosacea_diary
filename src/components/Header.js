import styles from './Header.module.css';
import LogoRosaceaDiary from '../images/logo_rosacea_diary.svg';
import ButtonEnter from './UX/ButtonEnter';
import React from 'react';

const Header = React.forwardRef((props, ref) => {

    return (
      <nav ref={ref} className={styles.canvas}>
        <div className={styles.header}>
          <img className={styles.logo} src={LogoRosaceaDiary} alt="Логотип Дневник розацеа"></img>
          <ButtonEnter/>
        </div>
      </nav>

    );
})

export default Header;