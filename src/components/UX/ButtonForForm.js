import styles from "./ButtonForForm.module.css";

const ButtonForForm = (props) => {
  const textButton = props.authButtonState ? "Зарегистрироваться" : "Войти";
  return (
    <button onClick={props.changeFormHandler} className={styles.btn}>
      {textButton}
    </button>
  );
};

export default ButtonForForm;
