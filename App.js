import React, { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");

  const handleSend = async () => {
    setResponse("Feature under development...");
  };

  return (
    <div style={{ padding: 20, fontFamily: "sans-serif" }}>
      <h1>AI Buddy</h1>
      <p>Don't search 10 sites. Just ask your buddy.</p>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask something..."
        style={{ width: "100%", height: 100 }}
      />
      <button onClick={handleSend} style={{ marginTop: 10 }}>Send</button>
      <pre style={{ marginTop: 20 }}>{response}</pre>
    </div>
  );
}

export default App;