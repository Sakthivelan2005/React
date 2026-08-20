import { useMemo, useState } from "react";

export default function ExpenCal() {
  const [count, setCount] = useState(0);

  const expensiveCalculation = useMemo(() => {
    console.log("Calculation running...");

    let total = 0;

    for (let i = 0; i < 10000000; i++) {
      total += i;
    }
    return total;
  }, []);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>

      <h2>{expensiveCalculation}</h2>
    </div>
  );
}
