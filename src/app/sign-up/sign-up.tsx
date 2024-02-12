/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { auth } from "../../store/auth/auth";
import SignUpLayout from "../../components/layouts/sign-up-layout/sign-up-layout";
import SignUpForm from "../../components/sign-up-form/sign-up-form";
import Input from "../../components/input/input";
import Spinner from "../../components/spinner/spinner";
import Message from "../../components/message/message";
import type { TFormData } from "../../components/sign-up-form/sign-up-form";

function SignUp() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isAuth = useAppSelector((state) => state.auth.isAuth);
  const loading = useAppSelector((state) => state.auth.loading);

  useEffect(() => {
    if (isAuth) navigate("/");
  }, [isAuth, navigate]);

  const onSendForm = (data: TFormData) => {
    dispatch(auth(data));
  };

  if (!isAuth && loading) return <Message text="Загружаем.." />;

  return (
    <SignUpLayout>
      <Spinner loading={loading}>
        <SignUpForm onSignUp={onSendForm}>
          <Input label="Имя" name="name" type="text" max={15} />
          <Input label="Электронная почта" name="email" type="text" />
          <Input
            label="Пароль"
            name="password"
            type="password"
            min={4}
            max={20}
          />
          <Input
            label="Подтвердите пароль"
            name="passwordConfirm"
            type="password"
            min={4}
          />
        </SignUpForm>
      </Spinner>
    </SignUpLayout>
  );
}

export default SignUp;
