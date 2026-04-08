<<<<<<< HEAD
import LandingPage from "./pages/LandingPage"
import LoginPage from "./pages/Login"
=======
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
>>>>>>> cb823816864b20bdcf4b97b3f0f577b6ef940404

function App() {
  return (
<<<<<<< HEAD
    <>
   {/* <LandingPage></LandingPage> */}
   <LoginPage></LoginPage>
    </>
  )
=======
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/insights" element={<Dashboard />} />
        <Route path="/transactions" element={<Dashboard />} />
        <Route path="/ai-advisor" element={<Dashboard />} />
        <Route path="*" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
>>>>>>> cb823816864b20bdcf4b97b3f0f577b6ef940404
}

export default App;
