
import LandingPage from "./pages/LandingPage"
<<<<<<< HEAD
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
=======
import LoginPage from "./pages/Login"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import InsightPage from "./pages/InsightPage";


function App() {
  return (

       <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage></LandingPage>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<LoginPage></LoginPage>} />
        <Route path="/insights" element={<InsightPage></InsightPage>} />
       
      </Routes>
    </BrowserRouter>
  )


>>>>>>> bede381f2e82cad39e4dfe7a020c782803ff2040

}

export default App;
