import React, { useState } from "react";
import Bored from "./Bored";

export default function App() {
  const [showBored, setShowBored] = useState(false);

  return (
    <>
      {!showBored && (
        <div className="btn-container">
          <button onClick={() => setShowBored(true)} className="btn">
            I'm bored
          </button>
        </div>
      )}

      {showBored && <Bored setShowBored={setShowBored} />}
    </>
  );
}
