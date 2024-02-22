import "./App.css";
import "./components/themes.css";
import Display from "./components/Display";
import BtnsContainer from "./components/BtnsContainer";
import CalcContextProvider from "./components/CalcContextProvider";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  containerFramer,
  utilContainerFramer,
  btnsContainerFramer,
} from "./util/framerVariants.js";

function App() {
  const [theme, setTheme] = useState({ color: "bluish", index: 0 });
  const Themes = ["bluish", "pokeTheme", "default/noname"];
  function handleThemeChange() {
    setTheme((prev) => {
      let index = prev.index + 1;
      if (index === Themes.length) {
        index = 0;
      }
      return {
        color: Themes[index],
        index: index,
      };
    });
  }

  return (
    <CalcContextProvider>
      <motion.div
        id='calcContainer'
        variants={containerFramer}
        className={theme.color}
        initial='initial'
        animate='animate'
        whileHover='whileHover'
        when='when'
      >
        <Display />

        <BtnsContainer
          bType='util'
          variant={utilContainerFramer}
          themeFn={handleThemeChange}
        />
        <BtnsContainer
          variant={btnsContainerFramer}
          bType='nums'
        />
      </motion.div>
    </CalcContextProvider>
  );
}

export default App;
