import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthForm from "./AuthForm";
import FormContainer from "./AuthForm/FormContainer";
import { Link } from "react-router-dom";
import * as userService from 'services/user';

const SignUp = () => {
  const [error, setError] = useState('');
  // is const ok instead of let, as seen in the docs 
  const navigate = useNavigate();
  // how to navigate? after a succesful sign up?
  // make a
  return (
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

          if (response.status == 201) {
            navigate('/', {
              state: {
                accountCreated: true
              }
            })
            console.log('user created');
          } else {
            const data = await response.json();
            setError(data.error);
          }
        }}
      />
      <Link className="text-emerald-500 text-sm underline" to="/">
        sign in
      </Link>
    </FormContainer>
  );
};

export default SignUp;
