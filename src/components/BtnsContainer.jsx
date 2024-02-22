import "./Btns.css";
import Btn from "./Btn";
import { motion } from "framer-motion";
import { utilBtnFramer , numsBtnFramer } from "../util/framerVariants.js";


const btns = [
  "x²",
  "(",
  ")",
  "%",
  1,
  2,
  3,
  "+",
  4,
  5,
  6,
  "-",
  7,
  8,
  9,
  "x",
  ".",
  0,
  "=",
  "÷",
];

const util = ["gh", "clear", "Del", "Th"];


export default function BtnsContainer({ bType, themeFn , variant }) {
  let btnsComp, btnsId;

  if (bType === "nums") {
    btnsComp = btns.map((btn, i) => {
      btnsId = "btnsCont";
      return (
        <Btn
        variant={numsBtnFramer}
          bType={bType}
          key={i}
          btn={btn}
        />
      );
    });
    
  } else if (bType === "util") {
    btnsComp = util.map((btn, i) => {
      btnsId = "utilCont";       
      return (
        <Btn
          variant={utilBtnFramer}
          themeFn={themeFn}
          bType={bType}
          key={i}
          btn={btn}
        />
      );
    });
    
  }

  return (
    <motion.div
      id={btnsId} 
      key={bType}
      variants={variant}
      initial="initial"
      animate="animate"
      whileHover="whileHover"
    >
      {btnsComp}
    </motion.div>
  );
}
