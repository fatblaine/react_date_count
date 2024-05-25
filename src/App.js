import { useState } from "react";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  function reduceStep() {
    if (step > 1) {
      return setStep((s) => s - 1);
    }
  }

  function increaseStep() {
    return setStep((s) => s + 1);
  }

  function reduceCount() {
    return setCount((c) => c - step);
  }

  function increaseCount() {
    return setCount((c) => c + step);
  }

  function handleSliderChange(event) {
    setStep(Number(event.target.value));
  }

  function handleInputChange(event) {
    setCount(Number(event.target.value));
  }

  function handleReset() {
    setStep(1);
    setCount(0);
  }

  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <div>
      <div className="adjustment">
        <button className="button" onClick={reduceStep}>
          -
        </button>
        <input
          className="slider"
          type="range"
          min={1}
          max={10}
          value={step}
          onChange={handleSliderChange}
        />
        <span> Step: {step}</span>
        <button className="button" onClick={increaseStep}>
          +
        </button>
      </div>

      <div className="adjustment">
        <button className="button" onClick={reduceCount}>
          -
        </button>
        <input
          type="text"
          value={count}
          size={10}
          onChange={handleInputChange}
        />
        <span> Count: {count}</span>
        <button className="button" onClick={increaseCount}>
          +
        </button>
      </div>

      <div>
        <p>
          <span>
            {count === 0
              ? "Today is "
              : count > 0
              ? `${count} days from today is `
              : `${Math.abs(count)} days ago was `}
          </span>
          <span>{date.toDateString()}</span>
        </p>
        {count !== 0 || step !== 1 ? (
          <div>
            <button className="reset" onClick={handleReset}>
              Reset{" "}
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}
