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
      <button onClick={() => setGlasses(glasses + 1)}>Add Glass
      </button>
    </div>
  );
  
}

export default App;