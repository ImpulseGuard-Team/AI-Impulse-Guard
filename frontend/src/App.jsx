
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



}

export default App;
