import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";

const App = () => {

  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<SignIn/>} />
      <Route path="/sign-up" element={<SignUp/>} />
    </Routes>
  </BrowserRouter>
}

export default App
