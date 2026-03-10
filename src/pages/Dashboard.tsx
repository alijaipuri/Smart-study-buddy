import AIChat from "../components/AIChat";
import TaskManager from "../components/TaskManager";
import FinanceTracker from "../components/FinanceTracker";
import GoalTracker from "../components/GoalTracker";
import PomodoroTimer from "../components/PomodoroTimer";

export default function Dashboard() {
  return (
    <div>
      <h1>Smart Study Sidekick</h1>

      <AIChat />
      <TaskManager />
      <GoalTracker />
      <FinanceTracker />
      <PomodoroTimer />
    </div>
  );
}
