import styles from "./ButtonForForm.module.css";

const ButtonForForm = (props) => {
  const textButton = props.authButtonState ? "Войти" : "Зарегистироваться";
  return (
    <button onClick={props.changeFormHandler} className={styles.btn}>
      {textButton}
    </button>
  );
};

export default ButtonForForm;
