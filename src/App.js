import React, { useState } from "react";

function App() {
  const now = new Date().toLocaleTimeString();

  const [time, setTime] = useState(now);
  setInterval(Timer, 1000);

  function Timer() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={Timer}>Get Time</button>
    </div>
  );
}
export default App;
