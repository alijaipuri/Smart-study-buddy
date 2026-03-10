import { useState } from "react";

export default function TaskManager() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    setTasks([...tasks, task]);
    setTask("");
  };

  return (
    <div>
      <h2>Task Manager</h2>

      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={addTask}>Add</button>

      <ul>
        {tasks.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
    </div>
  );
}
