import "./App.css";
import Display from "./components/Display";
import Btns from "./components/BtnsContainer";
import CalcContextProvider from "./components/calcContext";

function App() {
  

  return (
    <CalcContextProvider>
      <div id="calcContainer">
        <Display />
        <Btns />
      </div>
    </CalcContextProvider>
  )
}

export default App;
