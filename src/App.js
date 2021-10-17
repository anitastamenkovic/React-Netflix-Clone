import "./App.css";
import React from "react";
import Header from "./components/layout/Header";
import Rows from "./components/movies/Rows";

function App() {
  return (
    <div className="App">
      <Header />
      <Rows />
    </div>
  );
}

export default App;
