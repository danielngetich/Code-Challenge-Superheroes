import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Chef from "./components/signin/Chef";

function App() {
  return (
    <div >
      <h1>Welcome to Foodies</h1>
      <Chef />
    </div>
  );
}

export default App;
