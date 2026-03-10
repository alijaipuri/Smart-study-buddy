import { useState } from "react";

export default function FinanceTracker() {
  const [balance, setBalance] = useState(0);
  const [amount, setAmount] = useState(0);

  return (
    <div>
      <h2>Finance Tracker</h2>

      <input
        type="number"
        onChange={(e) => setAmount(Number(e.target.value))}
      />

      <button onClick={() => setBalance(balance + amount)}>
        Add
      </button>

      <p>Total Balance: {balance}</p>
    </div>
  );
}
