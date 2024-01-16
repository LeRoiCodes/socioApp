
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import Home from "./pages/homePage/Home";
import Login from "./pages/loginPage/Login";
import Profile from "./pages/profilePage/Profile";
import { useState } from "react";


function App() {

  // const mode = useState

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
