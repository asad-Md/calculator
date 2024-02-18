import "./App.css";
import Display from "./components/Display";
import Btns from "./components/BtnsContainer";
import CalcContextProvider from "./components/CalcContextProvider";

function App() {
  

  return (
    <CalcContextProvider>
      <div id="calcContainer">
        <Display />
        <Btns bType='util' />
        <Btns bType='nums' />
      </div>
    </CalcContextProvider>
  )
}

export default App;
