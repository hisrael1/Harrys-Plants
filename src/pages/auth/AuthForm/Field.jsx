const Field = (props) => {
    const { label, type, value, onChange } = props;
    return <div>
        <div key={label} className="flex flex-col my-4">
            <label htmlFor={label} className="text-slate-500 pl-1">{label}</label>
            <input id={label} type={type} className="bg-slate-50 border border-slate-300 rounded-lg px-2 py-1 focus:outline-emerald-600 w-64" value={value} onChange={onChange} />
        </div>
    </div>
}

export default Field;