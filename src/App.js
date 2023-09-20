import { Routes, Route } from "react-router-dom";
import "./App.css";

import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import PhoneSignUp from "./components/PhoneSignUp";

function App() {
  return (
    <div>
      <UserAuthContextProvider>
        <Routes>
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="/" element={<Login />} />
          <Route path="/phonesignup" element={<PhoneSignUp />} />

          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </UserAuthContextProvider>
    </div>
  );
}

export default App;
