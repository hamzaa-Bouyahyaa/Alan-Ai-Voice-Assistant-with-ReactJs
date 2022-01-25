import React, { useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";

const alanKey =
  "b0f46291f4219359adc1e93331242a3b2e956eca572e1d8b807a3e2338fdd0dc/stage";
useEffect(() => {
  alanBtn({
    key: alanKey,
    onCommand: ({ command }) => {
      if (command) {
      }
    },
  });
}, []);
function App() {
  return (
    <div>
      <h1>Alan Ai News application</h1>
    </div>
  );
}

export default App;
