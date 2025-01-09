const FormContainer = (props) => {
    const { children } = props;

    return <div className="flex">
        <div className="relative hidden md:block">
            <img className="h-screen object-cover" src='https://static-task-assets.react-formula.com/capstone_sign_in_scene.png'/>
            <div className="h-full w-full absolute top-0 left-0 bg-black/10"></div>
            <div className="h-full w-full absolute top-0 left-0 bg-emerald-800/20"></div>
        </div>
        <div className="flex flex-col justify-center items-center h-screen border flex-1 bg-emerald-50">
            <img className="w-16"
            src="https://static-task-assets.react-formula.com/capstone_logo_dark.png"/>
            <div className="text-emerald-700 font-lato text-3xl m-4">
                Harry's Plants
            </div>
            {children}
        </div>
    </div>
}

export default FormContainer;