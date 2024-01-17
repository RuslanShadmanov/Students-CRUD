import React from "react";
import "./App.css";
import Header from "./components/Header";
import Students from "./components/Students";

function App() {
  return (
    <div className="App">
      <h1> React Students CRUD App</h1>
      <Header />
      <Students />
      <footer>
        Seytech LLC. All Rights Reserved
      </footer>
    </div>
  );
}

export default App;
