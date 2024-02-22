import { useContext } from "react";
import { CalcContext } from "./CalcContextProvider.jsx";
import IconBtn from "./IconBtn";
import { motion } from "framer-motion";

export default function Btn({ btn, bType, themeFn , variant }) {
  const calcContext = useContext(CalcContext);
  let Icon = undefined;
  let btnClass = "numBtn innBtns";
  if (bType === "util") {
    btnClass = "numBtn innBtns utilInnBtns";
    Icon = (
      <IconBtn
        themeFn={themeFn}
        btn={btn}
      />
    );
  }

  return (
    <motion.div
      variants={variant}
      initial="initial"
      animate="animate"
      whileHover="whileHover"
      className={btnClass}
      onClick={() => calcContext.upCalcInfo(bType, btn)}
    >
      {Icon ? Icon : btn}
    </motion.div>
  );
}

//onclick

//string.append
//if +-*,,, string[-1] = new operator
