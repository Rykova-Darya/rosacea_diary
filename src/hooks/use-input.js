import { useState } from "react";
import styles from "../components/Form.module";

const useInput = (registrationForm, FormLogin) => {
  const [emailPlaceholder, setEmailPlaceholder] = useState(
    "Введите адрес электронной почты"
  );
  const [passwordPlaceholder, setPasswordPlaceholder] =
    useState("Введите пароль");
  const [newPasswordPlaceholder, setNewPasswordPlaceholder] =
    useState("Повторите пароль");

  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleFocus = (field) => {
    if (field === "email") {
      setEmailPlaceholder("");
    } else if (field === "password") {
      setPasswordPlaceholder("");
    } else if (field === "newPassword") {
      setNewPasswordPlaceholder("");
    }
  };

  const handleBlur = (field, value) => {
    if (!value) {
      if (field === "email") {
        setEmailPlaceholder("Введите ваш email");
      } else if (field === "password") {
        setPasswordPlaceholder("Введите ваш пароль");
      } else if (field === "newPassword") {
        setNewPasswordPlaceholder("Повторите пароль");
      }
    }
  };

  const regExpEmail =
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
  const regExpPsw =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]$/;

  const showPasswordHandler = () => {
    setShowPassword((prevState) => !prevState);
  };

  const showNewPasswordHandler = () => {
    setShowNewPassword((prevState) => !prevState);
  };

  const validate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = "Пожалуйста, укажите адрес электронной почты";
      setEmailError(true);
    }
    if (values.email && !regExpEmail.test(values.email)) {
      errors.email = "Некорректный адрес электронной почты";
      setEmailError(true);
    }
    if (!values.password) {
      errors.password = registrationForm
        ? "Пожалуйста, придумайте пароль"
        : "Пожалуйста, введите свой пароль";
      setPasswordError(true);
    }

    if (values.password && values.password.length < 8) {
      errors.password = "Пароль доджен включать минимум 8 символов";
      setPasswordError(true);
      if (registrationForm) {
        errors.newPassword = "Пароль не совпадает";
        setPasswordError(true);
      }
    }
    console.log(values.password);
    if (
      values.password &&
      values.password.length >= 8 &&
      !regExpPsw.test(values.password)
    ) {
      console.log("Зашли сюда");
      errors.password =
        "Пароль должен включать заглавную букву, цифру или символ [@$!%*?&]";
      setPasswordError(true);

      if (registrationForm) {
        errors.newPassword = "Пароль не совпадает";
        setPasswordError(true);
      }
    }

    if (registrationForm) {
      if (!values.newPassword) {
        errors.newPassword = "Пожалуйста, повторите пароль";
        setPasswordError(true);
      }

      if (values.newPassword !== values.password) {
        errors.newPassword = "Пароль не совпадает";
        setPasswordError(true);
      }
    }

    console.log(errors);
    return errors;
  };

  let classEmailError = emailError ? `${styles["error-message"]}` : "";
  let classPasswordError = passwordError ? `${styles["error-message"]}` : "";

  return {
    emailPlaceholder,
    passwordPlaceholder,
    newPasswordPlaceholder,
    handleFocus,
    handleBlur,
    showPassword,
    showNewPassword,
    showPasswordHandler,
    showNewPasswordHandler,
    validate,
    classEmailError,
    classPasswordError,
  };
};

export default useInput;
