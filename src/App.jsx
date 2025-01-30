import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import * as userService from "services/user";
import SessionContext from "contexts/SessionContext";
import { jwtDecode } from "jwt-decode";
import PlantListPage from "pages/PlantListPage";
import PlantShowPage from "pages/PlantShowPage";
import ScrollToTop from "shared/ScrollToTop";


const App = () => {
  const [sessionToken, setSessionToken] = useState(() => userService.getSessionTokenStorage());

  return <SessionContext.Provider value={{
    signIn: (sessionTokenValue) => {
      setSessionToken(sessionTokenValue);
      userService.setSessionTokenStorage(sessionTokenValue);
    },
    signOut: () => {
      setSessionToken(null)
      userService.removeSessionTokenStorage()
    },
    username: sessionToken ? jwtDecode(sessionToken).username : null,
  }}>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/plants" element={<PlantListPage />} />
        <Route path="/plants/:plantId" element={<PlantShowPage />} />
      </Routes>
    </BrowserRouter>
  </SessionContext.Provider>;
};

export default App;
