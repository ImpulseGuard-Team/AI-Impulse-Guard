
import LandingPage from "./pages/LandingPage"
import Login from "./pages/Login"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import LandingPage from "./pages/LandingPage";
function App() {
  return (

 <>
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
       <Route path="/login" element={Login}></Route>
       <Route path="/" element={LandingPage}></Route>
      </Routes>
    </BrowserRouter>
 </>
 )

}

export default App;
