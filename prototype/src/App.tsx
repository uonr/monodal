import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  return (
    <>
      <textarea
        className="editor"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </>
  );
}

export default App;
