/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import style from "./sign-up-form.module.scss";

export type TFormData = {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
};

type TSignUpForm = {
  children: React.ReactNode;
  onSignUp: (data: TFormData) => void;
};

function SignUpForm({ children, onSignUp }: TSignUpForm) {
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TFormData>();

  const onSubmit: SubmitHandler<TFormData> = (data) => {
    console.log("data", data);
    if (data.password !== data.passwordConfirm) {
      setConfirmPasswordError(true);
      return;
    }
    // onSignUp(data);
  };

  return (
    <form className={style.SignUpForm}>
      <div className={style.SignUpForm__fields}>
        <h2 className={style.SignUpForm__title}>Регистрация</h2>
        {React.Children.map(children, (child) => {
          return child.props.name
            ? React.createElement(child.type, {
                ...child.props,
                register,
                errors,
                confirmPasswordError,
                key: child.props.name,
              })
            : child;
        })}
      </div>

      <button
        type="button"
        className={style.SignUpForm__btn}
        onClick={handleSubmit(onSubmit)}
      >
        Зарегистрироваться
      </button>
    </form>
  );
}

export default SignUpForm;
