import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}
function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  return (
    <div>
      <div>
        <button onClick={() => setStep((s) => s - 1)}>-</button>
        <span>step: {step}</span>
        <button onClick={() => setStep((s) => s + 1)}>+</button>
      </div>
      <div>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <span>Count: {count}</span>
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>
      <div></div>
    </div>
  );
}
