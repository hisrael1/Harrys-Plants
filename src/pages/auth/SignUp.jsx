import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthForm from "./AuthForm";
import FormContainer from "./AuthForm/FormContainer";
import { Link } from "react-router-dom";
import * as userService from 'services/user';
import RedirectToPlantsIfSignedIn from 'shared/RedirectToPlantsIfSignedIn';



const SignUp = () => {
  const [error, setError] = useState('');
  const navigate = useNavigate();

  return (
    <RedirectToPlantsIfSignedIn>
      <FormContainer>
        <div className="text-red-700 font-lato">{error}</div>
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
          onSubmit={async (values) => {
            setError("")

            if (values.username.length < 4) {
              setError('username too short');  
              return;
            }

            if (values.password.length < 4) {
              setError('password too short');  
              return;
            }

            if (values.password !== values['confirm password']) {
              setError("passwords don't match");  
              return;
            }

            const response = await userService.createUser({
              username: values.username,
              password: values.password
            })

            const data = await response.json();
            if (response.status == 201) {
              setError('');
              navigate('/', {
                state: {
                  accountCreated: true
                }
              })
              console.log('signed up')
            } else {
              setError(data.error);
            }
          }}
        />
        <Link className="text-emerald-500 text-sm underline" to="/">
          sign in
        </Link>
      </FormContainer>
    </RedirectToPlantsIfSignedIn>
  );
};

export default SignUp;
