import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

//styles
import "./App.css";

//components
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import Nav from "./components/Nav";
import Account from "./components/Account";
import Contact from "./components/Contact";
import ItemList from "./components/ItemList";
import ItemDetails from "./components/ItemDetails";
import AddItems from "./components/AddItems";

function App() {
  const [token, setToken] = useState(null);

  return (
    <div>
      <BrowserRouter>
        <Nav token={token} setToken={setToken} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register setToken={setToken} />} />
          <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="/account" element={<Account token={token}/>} />
        <Route path="/items" element={<ItemList token={token}/>} />
        <Route path="/contact" element={<Contact />}/>
        <Route path="/details/:id" element={<ItemDetails token={token} />}/>
        <Route path="/additem" element={<AddItems token={token} />}/>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
