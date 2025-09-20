import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";

// Email regex: /\S+@\S+\.\S+/

function SignupForm() {
  const { register, formState, getValues, handleSubmit } = useForm();
  const { errors } = formState;

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="ユーザー名" error={errors?.fullName?.message}>
        <Input
          type="text"
          id="fullName"
          {...register("fullName", { required: "この項目は入力してください" })}
        />
      </FormRow>

      <FormRow label="メールアドレス" error={errors?.email?.message}>
        <Input
          type="email"
          id="email"
          {...register("email", {
            required: "この項目は入力してください",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "メールアドレスの形式が正しくありません",
            },
          })}
        />
      </FormRow>

      <FormRow
        label="パスワード(8文字以上で入力してください)"
        error={errors?.password?.message}
      >
        <Input
          type="password"
          id="password"
          {...register("password", {
            required: "この項目は入力してください",
            minLength: {
              value: 8,
              message: "パスワードは8文字以上で入力してください",
            },
          })}
        />
      </FormRow>

      <FormRow
        label="確認用パスワード"
        error={errors?.passwordConfirm?.message}
      >
        <Input
          type="password"
          id="passwordConfirm"
          {...register("passwordConfirm", {
            required: "この項目は入力してください",
            validate: (value) =>
              value === getValues().password || "パスワードが一致しません",
          })}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button>Create new user</Button>
      </FormRow>
    </Form>
  );
}

export default SignupForm;
