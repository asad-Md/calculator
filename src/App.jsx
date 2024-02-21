import "./App.css";
import "./components/themes.css"
import Display from "./components/Display";
import Btns from "./components/BtnsContainer";
import CalcContextProvider from "./components/CalcContextProvider";
import { useState } from 'react';

function App() {
  const [theme,setTheme] = useState({color:'OrGrBlPr',index:0});
  const Themes = [ 'OrGrBlPr','pokeTheme' ]  
  function handleThemeChange (){
    setTheme((prev) => {
      let index = prev.index + 1;
      if (index === Themes.length) {index = 0}
      return {
        color: Themes[index],
        index: index
      }
    })
  }

  return (
    <CalcContextProvider>
      <div id="calcContainer" className={theme.color}>
        <Display />
        <Btns bType='util' themeFn={ handleThemeChange } />
        <Btns bType='nums' />
      </div>
    </CalcContextProvider>
  )
}

export default App;
