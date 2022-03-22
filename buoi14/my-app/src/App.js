import { useState } from "react";
import "./App.css";

function App() {
  const [c, setc] = useState(10);
  return (
    <div className="App">
      <h1>{c}</h1>
      <button
        onClick={() => {
          setc(c + 13);
        }}
      >
        Click
      </button>
    </div>
  );
}

export default App;
