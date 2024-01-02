import React, { Fragment, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import styles from "./Form.module.css";

const RegistrationForm = () => {
  const [emailPlaceholder, setEmailPlaceholder] = useState(
    "Введите адрес электронной почты"
  );
  const [passwordPlaceholder, setPasswordPlaceholder] =
    useState("Введите пароль");

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleFocus = (field) => {
    if (field === "email") {
      setEmailPlaceholder("");
    } else if (field === "password") {
      setPasswordPlaceholder("");
    }
  };

  const handleBlur = (field, value) => {
    if (!value) {
      if (field === "email") {
        setEmailPlaceholder("Введите ваш email");
      } else if (field === "password") {
        setPasswordPlaceholder("Введите ваш пароль");
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
      errors.password = "Пожалуйста, введите свой пароль";
      setPasswordError(true);
    }

    if (values.password && values.password.length < 8) {
      errors.password = "Пароль доджен включать минимум 8 символов";
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
    }

    return errors;
  };

  console.log({ ddd: "ddd" });

  let classEmailError = emailError ? `${styles["error-message"]}` : "";
  let classPasswordError = passwordError ? `${styles["error-message"]}` : "";

  return (
    <Fragment>
      <h1>Войти</h1>
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
              <Field
                type="password"
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
              <ErrorMessage
                className={classPasswordError}
                name="password"
                component="div"
              />
            </div>
            <div className={styles["btn-container"]}>
              <input className={styles.btn} type="submit" value="Войти"></input>
            </div>
          </Form>
        )}
      </Formik>
    </Fragment>
  );
};

export default RegistrationForm;
