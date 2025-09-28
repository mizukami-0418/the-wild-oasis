import Heading from "../ui/Heading";
import SignupForm from "../features/authentication/SignupForm";

function NewUsers() {
  return (
    <>
      <Heading as="h1">新規アカウント登録</Heading>
      <SignupForm />
    </>
  );
}

export default NewUsers;
