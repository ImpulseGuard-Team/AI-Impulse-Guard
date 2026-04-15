<<<<<<< HEAD
import LoginPage from "./pages/Login"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import InsightPage from "./pages/InsightPage";
import LandingPage from "../src/pages/LandingPage"


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



=======

import LandingPage from "./pages/LandingPage"
import Login from "./pages/Login"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import InsightPage from "./pages/InsightPage";
function App() {
  return (

 <>
   <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard></Dashboard>} />
       <Route path="/login" element={<Login></Login>}></Route>
       <Route path="/" element={<LandingPage></LandingPage>}></Route>
       <Route path="insights" element={<InsightPage></InsightPage> }/>
      </Routes>
    </BrowserRouter>
 </>
 )


>>>>>>> b434a81f6bede4225e9da7c4472dc85f700f16e2

}

export default App;
