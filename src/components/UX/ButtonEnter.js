import styles from './ButtonEnter.module.css';

const ButtonEnter = (props) => {
    return (
      <div>
        <button className={styles.button}>Войти</button>
        <div className={styles.line}></div>
      </div>
    );
}

export default ButtonEnter;