import React, { useState } from "react";
import Timer from "./Timer";

function ParentTimer() {
  const [showTimer, setShowTimer] = useState(true);

  return (
    <div>
      <button onClick={() => setShowTimer(!showTimer)}>
        Show / Hide Timer
      </button>

      {showTimer && <Timer />}
    </div>
  );
}

export default ParentTimer;