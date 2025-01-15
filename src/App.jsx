import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import * as userService from 'services/user'

const App = () => {
  // create context next to avoid prop drilling
  const [sessionToken, setSessionToken] = useState(() => userService.getSessionTokenStorage());

  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<SignIn/>} />
      <Route path="/sign-up" element={<SignUp/>} />
    </Routes>
  </BrowserRouter>
}

export default App
