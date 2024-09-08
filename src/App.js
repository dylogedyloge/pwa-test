import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <h1>My PWA</h1>
        <p>Welcome to my Progressive Web App!</p>
        <p>You've clicked the button {count} times.</p>
        <button onClick={() => setCount(count + 1)}>Click me!</button>
      </header>
    </div>
  );
}

export default App;
