import { Fragment } from "react";
import { useState } from "react";
import styles from "./ModalLogin.module.css";
import ReactDOM from "react-dom";
import FormLogin from "../FormLogin";
import DeleteIcon from "../../images/delete.svg";
import RegistrationForm from "../RegistrationForm";
import ButtonForForm from "./ButtonForForm";

const portalElement = document.getElementById("overlays");

console.log(portalElement);

const ModalLogin = (props) => {
  const [authButtonState, setAuthButtonstate] = useState(true);

  const changeFormHandler = () => {
    authButtonState ? setAuthButtonstate(false) : setAuthButtonstate(true);
  };

  const Modal = (
    <Fragment>
      <div className={styles.wrapper}>
        <div className={styles["left-space"]} onClick={props.onHideModal}></div>
        <div className={styles["right-space"]}>
          <button onClick={props.onHideModal} className={styles["btn-delete"]}>
            <img src={DeleteIcon} alt="Кнопка закрыть модальное окно" />
          </button>

          {authButtonState ? (
            <FormLogin onHideModal={props.onHideModal} />
          ) : (
            <RegistrationForm onHideModal={props.onHideModal} />
          )}
          <ButtonForForm
            authButtonState={authButtonState}
            changeFormHandler={changeFormHandler}
          />
        </div>
      </div>
    </Fragment>
  );

  return ReactDOM.createPortal(Modal, portalElement);
};

export default ModalLogin;
