import React, { Fragment } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import styles from "./Form.module.css";
import BtnHideShowPass from "./UX/BtnHideShowPass";
import useInput from "../hooks/use-input";

const RegistrationForm = (props) => {
  const {
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
  } = useInput(true, false);

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
