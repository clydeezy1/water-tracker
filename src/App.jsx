import { useState } from "react";
import "./App.css";

function App() {
  const [glasses,setGlasses] = useState(0);
  const [goals, setGoals] = useState(8);

  return (
    <div>
      <h1>Water Tracker</h1>
      <p>Glasses consumed: {glasses}</p>
      <p>Daily goal: {goals} glasses</p>
      <button onClick={() => setGlasses(glasses + 1)}>Add Glass</button>
      <button onClick={() => setGlasses(Math.max(0, glasses -1))}>Remove Glass</button>
      <button onClick={() => setGlasses(0)}>Reset</button>
      <p>Daily goal: {glasses} / 8 glasses</p>
      <progress value={glasses} max={8} />
      {glasses >= 8 && <p>💦💧🌊 Daily goal reeached!</p>}
    </div>
  );
  
}

export default App;