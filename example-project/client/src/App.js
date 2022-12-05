import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Chef from "./components/signin/Chef";
import Home from "./components/Home";

function App() {
  return (
    <div >
      <Home/>
    </div>
  );
}

export default App;
