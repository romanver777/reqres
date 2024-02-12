/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import SignUpLayout from "../../components/layouts/sign-up-layout/sign-up-layout";
import SignUpForm from "../../components/sign-up-form/sign-up-form";
import Input from "../../components/input/input";
import type { TFormData } from "../../components/sign-up-form/sign-up-form";

function SignUp() {
  const onSendForm = (data: TFormData) => console.log("form data", data);

  return (
    <SignUpLayout>
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
    </SignUpLayout>
  );
}

export default SignUp;
