import { useState } from "react";
import "./App.css";
import Display from "./components/Display";
import Btns from "./components/BtnsContainer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div id='mainContainer'>
        <Display />
        <Btns />
      </div>
    </>
  );
}

export default App;
