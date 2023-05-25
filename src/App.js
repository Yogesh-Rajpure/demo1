import React, { useState } from "react";
import BMIScore from "./BMIScore";

function App() {
  const { bmi, setbmi } = useState(18);
  return <div><h1>Hello</h1>
  <BMIScore></BMIScore>
  </div>
}
export default App;
