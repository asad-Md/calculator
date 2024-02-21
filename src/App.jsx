import "./App.css";
import Display from "./components/Display";
import Btns from "./components/BtnsContainer";
import CalcContextProvider from "./components/CalcContextProvider";
import { useState } from 'react';

function App() {
  const [theme,setTheme] = useState('');
  
  return (
    <CalcContextProvider>
      <div id="calcContainer" className={theme}>
        <Display />
        <Btns bType='util' />
        <Btns bType='nums' />
      </div>
    </CalcContextProvider>
  )
}

export default App;
