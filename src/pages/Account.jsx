import UpdateUserDataForm from "../features/authentication/UpdateUserDataForm";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import UpdatePasswordForm from "../features/authentication/UpdatePasswordForm";

function Account() {
  return (
    <>
      <Heading as="h1">アカウント情報の更新</Heading>

      <Row>
        <Heading as="h3">ユーザー名</Heading>
        <UpdateUserDataForm />
      </Row>

      <Row>
        <Heading as="h3">パスワード</Heading>
        <UpdatePasswordForm />
      </Row>
    </>
  );
}

export default Account;
