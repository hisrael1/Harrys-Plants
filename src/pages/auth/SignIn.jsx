import AuthForm from "./AuthForm";

const SignIn = () => {
  return (
    <div className="font-lato flex justify-center items-center">
      <AuthForm
        fields={[
          {
            label: "username",
            type: "text",
          },
          {
            label: "password",
            type: "password",
          }
        ]}
        submitButtonLabel="Sign In"
      />
    </div>
  );
};

export default SignIn;
