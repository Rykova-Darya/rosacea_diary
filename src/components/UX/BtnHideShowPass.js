import React, { useState } from "react";
import styles from "./BtnHideShowPass.module.css";
import ShowPass from "../../images/show-pass.svg";
import HidePass from "../../images/hide-pass.svg";

const BtnHideShowPass = (props) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleVisibility = () => {
    setShowPassword((prevState) => !prevState);
    props.showPasswordHandler();
  };

  return (
    <button
      type="button"
      onClick={toggleVisibility}
      className={styles["btn-pass"]}
    >
      <img
        className={styles["state-pass"]}
        src={showPassword ? HidePass : ShowPass}
        alt="Показать пароль"
      />
    </button>
  );
};

export default BtnHideShowPass;
