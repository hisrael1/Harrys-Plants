import { useState } from "react";
import Field from "./Field";

const AuthForm = (props) => {
  const { fields, submitButtonLabel, onSubmit } = props;
  const [values, setValues] = useState(() => {
    const initialState = {};
    fields.forEach((field) => {
      initialState[field.label] = "";
    });
    return initialState;
  });
  const [loading, setLoading] = useState(false);

  return (
    <form
      className="border border-slate-300 rounded-lg m-4 p-4 font-lato"
      onSubmit={async (e) => {
        e.preventDefault();
        setLoading(true);
        await onSubmit(values);
        setLoading(false)
      }}
    >
      {fields.map((field) => (
        <Field
          key={field.label}
          label={field.label}
          type={field.type}
          value={values[field.label]}
          onChange={(e) => {
            setValues({
              ...values,
              [field.label]: e.target.value,
            });
          }}
        />
      ))}
      <button className=" bg-emerald-600 text-white w-full rounded-md py-2 mt-4 relative">
        {submitButtonLabel}
        {loading && (
          <div className="absolute top-0 right-2 h-full flex items-center">
            <i className="fa-solid fa-spinner text-xl animate-spin text-emerald-200"></i>
          </div>
        )}
      </button>
    </form>
  );
};

export default AuthForm;
