import { useState, useContext } from "react";
import AuthForm from "./AuthForm";
import FormContainer from "./AuthForm/FormContainer";
import { Link, useLocation } from "react-router-dom";
import * as userService from "services/user";
import SessionContext from "contexts/SessionContext";
import RedirectToPlantsIfSignedIn from "shared/RedirectToPlantsIfSignedIn";

const SignIn = () => {
  const [error, setError] = useState("");
  const location = useLocation();
  const sessionContext = useContext(SessionContext);

  return (
    <RedirectToPlantsIfSignedIn>
      <FormContainer>
        <div className="text-red-700 font-lato">{error}</div>
        {location?.state?.accountCreated && (
          <div className="bg-emerald-200 text-emerald-700 font-lato m-4 p-4 rounded-lg">
            Account created succesfully. Please sign in. 
          </div>
        )}
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
          onSubmit={async (values) => {
            if (values.username.length < 4) {
              setError("username too short");
              return;
            }

            if (values.password.length < 4) {
              setError("password too short");
              return;
            }

            const response = await userService.createSession({
              username: values.username,
              password: values.password,
            });
            
            const data = await response.json();
            if (response.status == 201) {
              const sessionToken = data.capstone_session_token;
              sessionContext.signIn(sessionToken);
              setError("");
            } else {
              setError(data.error);
            }
          }}
        />
        <Link className="text-emerald-500 text-sm underline" to="/sign-up">
          create an account
        </Link>
      </FormContainer>
    </RedirectToPlantsIfSignedIn>
  );
};

export default SignIn;
