//import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Home from "./HomeComponents/Home";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Provider>
  );
}

export default App;
