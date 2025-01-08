import AuthForm from "./AuthForm";

const SignUp = () => {
    return <div className="font-playfair flex justify-center items-center">
        <AuthForm 
            fields={[
                {
                    label: 'username',
                    type: 'text'
                }, 
                {
                    label: 'password',
                    type: 'password'
                }, 
                {
                    label: 'confirm password',
                    type: 'password'
                }
            ]}
            submitButtonLabel="Create Account"
        />
    </div>
}

export default SignUp;