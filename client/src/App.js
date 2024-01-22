
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import Home from "./pages/homePage/Home";
import Login from "./pages/loginPage/Login";
import Profile from "./pages/profilePage/Profile";
import { useState } from "react";
import { useMemo } from "react";
import {  useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";


function App() {

  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])
  const isAuth = Boolean(useSelector((state) => state.token ))

  return (
    <div className="app">
      <BrowserRouter>
      <ThemeProvider theme={theme}>
      <CssBaseline />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={isAuth ? <Home /> : <Navigate to="/" />} />
          <Route path="/profile" element={isAuth ? <Profile /> : <Navigate to="/" />} />
        </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
