
import LandingPage from "./pages/LandingPage"
import LoginPage from "./pages/Login"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";


function App() {
  return (

       <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage></LandingPage>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<LoginPage></LoginPage>} />
       
      </Routes>
    </BrowserRouter>
  )



}

export default App;
