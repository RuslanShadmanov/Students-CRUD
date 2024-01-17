import React from "react";
import "./App.css";
import Header from "./components/Header";
import Students from "./components/Students";
import { useState } from "react";
function App() {
  const [searchQuery, setSearchQuery] = useState("")
  return (
    <div className="App">
      <h1> React Students CRUD App</h1>
      <Header searchQuery={searchQuery} setSearchQuery = {setSearchQuery} />
      <Students />
      <footer>
        Seytech LLC. All Rights Reserved
      </footer>
    </div>
  );
}

export default App;
