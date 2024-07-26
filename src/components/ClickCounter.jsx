import { useState } from "react";
function ClickCounter() {
  const [count, setCount] = useState(0);
  return (
    <div className="card">
      <button onClick={() => setCount((count) => count + 1)}>
       Click count is {count}
      </button>
    </div>
  );
}
export default ClickCounter;
