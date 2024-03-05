import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

//styles
import "./App.css";

//components
import Home from "./components/Home";
import Register from "./components/Register";
import Register from "./components/Register";
import Login from "./components/Login";
import Nav from "./components/Navbar";

function App() {
  const [token, setToken] = useState(null);

  console.log("token", token);
  return (
    <div>
      <BrowserRouter>
        <Nav token={token} setToken={setToken} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register setToken={setToken} />} />
          <Route path="/login" element={<Login setToken={setToken} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
