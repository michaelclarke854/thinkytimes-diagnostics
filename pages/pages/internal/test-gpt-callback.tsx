import { useState } from "react";

export default function TestGptCallback() {
  const [response, setResponse] = useState("");

  const sendTest = async () => {
    setResponse("Sending...");
    const res = await fetch("/api/send-gpt-test-callback", { method: "POST" });
    const data = await res.json();
    setResponse(JSON.stringify(data, null, 2));
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>Send GPT Test Callback</h1>
      <button onClick={sendTest} style={{ padding: 10, fontSize: 16 }}>
        Send Test
      </button>
      <pre style={{ marginTop: 20 }}>{response}</pre>
    </div>
  );
}
