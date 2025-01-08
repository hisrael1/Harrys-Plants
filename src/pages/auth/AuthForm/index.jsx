import { useState } from 'react';
import Field from './Field';

const AuthForm = (props) => {
    const { fields, submitButtonLabel } = props;
    const [ values, setValues ] = useState(() => {
        const initialState = {};
        fields.forEach(field => {
            initialState[field.label] = ''
        })
        return initialState;
    });

    return <form className="border border-slate-300 rounded-lg m-4 p-4 font-lato">
        {
            fields.map(field => (
                <Field key={field.label} label={field.label} type={field.type} value={values[field.label]} 
                onChange={(e) => {
                    setValues({
                        ...values, [field.label]: e.target.value
                    })
                }}
                />
            ))
        }
        <button className="bg-emerald-600 text-white w-full rounded-md py-2 mt-4">
            {submitButtonLabel}
        </button>
    </form>
}

export default AuthForm;