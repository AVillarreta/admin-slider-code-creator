import { useEffect, useState } from "react";
import "./App.css";
import { useSelector } from "react-redux";
import Preview from "./components/preview.jsx";
import Editor from "./components/editor.jsx";
import "./k2css/maink2.js";
import "./k2css/maink2.css";
import Nav from "./components/nav.jsx";

function App() {
  return (
    <div>
      <h1>Welcome</h1>
      <div className="App">
        <Nav />
        <Preview />
        <Editor />
      </div>
    </div>
  );
}

export default App;
