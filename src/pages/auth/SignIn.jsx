import AuthForm from "./AuthForm";
import FormContainer from "./AuthForm/FormContainer";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <FormContainer>
      <AuthForm
        fields={[
          {
            label: "username",
            type: "text",
          },
          {
            label: "password",
            type: "password",
          },
        ]}
        submitButtonLabel="sign in"
      />
      <Link className="text-emerald-500 text-sm underline" to='/sign-up'>create an account</Link>
    </FormContainer>
  );
};

export default SignIn;
