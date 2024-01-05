import React, { Fragment, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import styles from "./Form.module.css";
import BtnHideShowPass from "./UX/BtnHideShowPass";

const RegistrationForm = (props) => {
  const [emailPlaceholder, setEmailPlaceholder] = useState(
    "Введите адрес электронной почты"
  );
  const [passwordPlaceholder, setPasswordPlaceholder] =
    useState("Введите пароль");
  const [newPasswordPlaceholder, setNewPasswordPlaceholder] =
    useState("Повторите пароль");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const showPasswordHandler = () => {
    setShowPassword((prevState) => !prevState);
  };

  const showNewPasswordHandler = () => {
    setShowNewPassword((prevState) => !prevState);
  };

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

  const initialValues = {
    email: "",
    password: "",
    newPassword: "",
  };
  const onSubmit = async (values, { setSubmitting }) => {
    try {
      console.log({ val: values });
      setSubmitting(false);
    } catch (err) {
      console.error(err);
      setSubmitting(false);
    }
  };
  const validate = (values) => {
    const errors = {};
    const regExp =
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
    const regExpPsw =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]$/;

    if (!values.email) {
      errors.email = "Пожалуйста, укажите адрес электронной почты";
      setEmailError(true);
    }
    if (values.email && !regExp.test(values.email)) {
      errors.email = "Некорректный адрес электронной почты";
      setEmailError(true);
    }
    if (!values.password) {
      errors.password = "Пожалуйста, придумайте пароль";
      setPasswordError(true);
    }

    if (values.password && values.password.length < 8) {
      errors.password = "Пароль доджен включать минимум 8 символов";
      setPasswordError(true);

      errors.newPassword = "Пароль не совпадает";
      setPasswordError(true);
    }

    if (
      values.password &&
      values.password >= 8 &&
      !regExpPsw.test(values.password)
    ) {
      errors.password =
        "Пароль должен включать заглавную букву, цифру или символ [@$!%*?&]";
      setPasswordError(true);

      errors.newPassword = "Пароль не совпадает";
      setPasswordError(true);
    }

    if (!values.newPassword) {
      errors.newPassword = "Пожалуйста, повторите пароль";
      setPasswordError(true);
    }

    if (values.newPassword !== values.password) {
      errors.newPassword = "Пароль не совпадает";
      setPasswordError(true);
    }

    return errors;
  };

  let classEmailError = emailError ? `${styles["error-message"]}` : "";
  let classPasswordError = passwordError ? `${styles["error-message"]}` : "";

  return (
    <Fragment>
      <h1>Зарегистироваться</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validate={validate}
      >
        {({ touched, errors }) => (
          <Form>
            <div className={styles["label-container"]}>
              <label htmlFor="email">Email:</label>
              <Field
                type="email"
                id="email"
                name="email"
                placeholder={emailPlaceholder}
                onFocus={(e) => {
                  handleFocus("email");
                }}
                onBlur={(e) => handleBlur("email", e.target.value)}
                autoComplete="username"
                className={
                  touched.email && errors.email ? styles["error-input"] : ""
                }
              />
              <ErrorMessage
                className={classEmailError}
                name="email"
                component="div"
              />
            </div>

            <div className={styles["label-container"]}>
              <label htmlFor="password">Пароль:</label>
              <div className={styles["psw-container"]}>
                <Field
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder={passwordPlaceholder}
                  onFocus={() => handleFocus("password")}
                  onBlur={(e) => handleBlur("password", e.target.value)}
                  autoComplete="new-password"
                  className={
                    touched.password && errors.password
                      ? styles["error-input"]
                      : ""
                  }
                />
                <BtnHideShowPass showPasswordHandler={showPasswordHandler} />
              </div>
              <ErrorMessage
                className={classPasswordError}
                name="password"
                component="div"
              />
            </div>

            <div className={styles["label-container"]}>
              <label htmlFor="password">Повторите пароль:</label>
              <div className={styles["psw-container"]}>
                <Field
                  type={showNewPassword ? "text" : "password"}
                  id="newPassword"
                  name="newPassword"
                  placeholder={newPasswordPlaceholder}
                  onFocus={() => handleFocus("newPassword")}
                  onBlur={(e) => handleBlur("newPassword", e.target.value)}
                  autoComplete="new-password"
                  className={
                    touched.newPassword && errors.newPassword
                      ? styles["error-input"]
                      : ""
                  }
                />
                <BtnHideShowPass showPasswordHandler={showNewPasswordHandler} />
              </div>
              <ErrorMessage
                className={classPasswordError}
                name="newPassword"
                component="div"
              />
            </div>
            <div className={styles["btn-container"]}>
              <input
                className={styles.btn}
                type="submit"
                value="Зарегистрироваться"
              ></input>
            </div>
          </Form>
        )}
      </Formik>
    </Fragment>
  );
};

export default RegistrationForm;
