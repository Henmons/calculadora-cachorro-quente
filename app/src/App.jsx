import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Help from "./pages/Help";
import Sobre from "./pages/Sobre";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Login</Link> |{" "}
        <Link to="/home">Home</Link> |{" "}
        <Link to="/help">Help</Link> |{" "}
        <Link to="/sobre">Sobre</Link>
      </nav>

      <hr />

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/help" element={<Help />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;