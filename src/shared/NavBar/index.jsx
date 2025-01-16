import { useContext } from "react";
import SessionContext from "contexts/SessionContext";

const NavBar = () => {
    const { username } = useContext(SessionContext);

    return <nav className="bg-emerald-700 flex justify-center font-lato">
        <div className="w-full max-w-5xl flex items-center justify-between px-8 py-4">
            <div className="flex items-center text-white text-2xl font-playfair">
                <img className="w-10 mr-2" src="https://static-task-assets.react-formula.com/capstone_logo_light.png" />
                Harry's Plants
            </div>
            <div>
                <button className="flex items-center text-white">
                    <i className="fa-solid fa-user mr-2 text-xl"></i>{username} 
                </button>
            </div>
        </div>
    </nav>
}

export default NavBar;