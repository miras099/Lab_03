import { useState } from "react";

function StepCounter({ initialValue = 0, step = 1 }) {

  // Основной счетчик
  const [count, setCount] = useState(initialValue);

  // История изменений
  const [history, setHistory] = useState([]);

  // Количество операций
  const [operationCount, setOperationCount] = useState(0);

  function handleIncrement() {
    const newValue = count + step;
    setCount(newValue);
    setHistory([...history, newValue]);
    setOperationCount(operationCount + 1);
  }

  function handleDecrement() {
    const newValue = count - step;
    setCount(newValue);
    setHistory([...history, newValue]);
    setOperationCount(operationCount + 1);
  }

  function handleReset() {
    setCount(initialValue);
    setHistory([]);
    setOperationCount(0);
  }

  // Берем только последние 5 значений
  const lastFive = history.slice(-5);

  return (
    <div style={{ border: "1px solid gray", padding: "20px", margin: "10px" }}>
      <h2>Step Counter</h2>

      <p>Current Count: {count}</p>
      <p>Total Operations: {operationCount}</p>

      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>

      <h3>Last 5 Values:</h3>
      <ul>
        {lastFive.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
    </div>
  );
}

export default StepCounter;
