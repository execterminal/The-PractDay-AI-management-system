// import Signup from "./pages/Signup";
// import Welcome from "./pages/Welcome";
import Home from "./pages/Home";
import { Route, Routes, Navigate } from "react-router-dom";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
