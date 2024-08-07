import { ReactNode, useState } from "react";
import "./App.css";
import { RichTextarea } from "rich-textarea";

function App() {
  const [input, setInput] = useState("");
  const renderer = (value: string): ReactNode[] => {
    return [<span>{value}</span>];
  };
  return (
    <>
      <RichTextarea
        className="editor"
        value={input}
        style={{
          width: "100%",
          height: "100%",
          resize: "none",
          border: "none",
          fontFamily: "monospace",
          fontSize: "15px",
        }}
        onChange={(e) => setInput(e.target.value)}
      >
        {renderer}
      </RichTextarea>
    </>
  );
}

export default App;
