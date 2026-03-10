import { useState } from "react";

export default function GoalTracker() {
  const [goal, setGoal] = useState("");

  return (
    <div>
      <h2>Goal Tracker</h2>

      <input
        placeholder="Enter your goal"
        onChange={(e) => setGoal(e.target.value)}
      />

      <p>Current Goal: {goal}</p>
    </div>
  );
}
