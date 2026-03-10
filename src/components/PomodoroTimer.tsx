import { useState, useEffect } from "react";

export default function PomodoroTimer() {
  const [time, setTime] = useState(1500);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((t) => (t > 0 ? t - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h2>Pomodoro Timer</h2>
      <p>{Math.floor(time / 60)}:{time % 60}</p>
    </div>
  );
}
