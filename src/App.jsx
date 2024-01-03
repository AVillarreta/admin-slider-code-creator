import { useEffect, useState } from "react";
import "./App.css";
import { useSelector } from "react-redux";
import Preview from "./components/preview.jsx";
import Editor from "./components/editor.jsx";
import "./k2css/maink2.js";
import "./k2css/maink2.css";

function App() {
  return (
    <div>
      <h1>Welcome</h1>
      <div className="App">
        <Preview />
        <Editor />
      </div>
    </div>
  );
}

export default App;
