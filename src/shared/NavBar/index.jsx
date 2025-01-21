import { useState, useContext } from "react";
import SessionContext from "contexts/SessionContext";
import { Link } from 'react-router-dom'

const NavBar = () => {
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const { username, signOut } = useContext(SessionContext);

  return (
    <nav
      className="bg-emerald-700 flex justify-center font-lato"
      onMouseLeave={() => setUserMenuOpen(false)}
    >
      <div className="w-full max-w-5xl flex items-center justify-between px-8 py-4">
        <Link to='/plants' className="cursor-pointer">
          <div className="flex items-center text-white text-2xl font-playfair">
            <img
              className="w-10 mr-2"
              src="https://static-task-assets.react-formula.com/capstone_logo_light.png"
            />
            Harry's Plants
          </div>
        </Link>
        <div className="relative flex-1 flex justify-end">
          <button
            className="flex items-center text-white"
            onClick={() => setUserMenuOpen(true)}
          >
            <i className="fa-solid fa-user mr-2 text-xl"></i>
            {username}
          </button>
          {userMenuOpen && (
            <button
              className="absolute top-10 shadow-xl p-4 rounded-md right-0 bg-white border border-slate-200 text-slate-500 hover:text-emerald-600"
              onClick={signOut}
            >
              <i className="fa-solid fa-arrow-right-from-bracket mr-2"></i>
              Sign Out
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
