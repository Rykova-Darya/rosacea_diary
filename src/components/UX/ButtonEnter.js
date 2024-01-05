import styles from './ButtonEnter.module.css';

const ButtonEnter = (props) => {
    return (
      <div className={styles['button-container']}>
        <button onClick={props.onClick} className={styles.button}>Войти</button>
        <div className={styles.line}></div>
      </div>
    );
}

export default ButtonEnter;