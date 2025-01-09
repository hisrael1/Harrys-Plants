import AuthForm from "./AuthForm";
import FormContainer from "./AuthForm/FormContainer";
import { Link } from "react-router-dom";

const SignUp = () => {
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
          {
            label: "confirm password",
            type: "password",
          },
        ]}
        submitButtonLabel="create account"
      />
      <Link className="text-emerald-500 text-sm underline" to="/">
        sign in
      </Link>
    </FormContainer>
  );
};

export default SignUp;
