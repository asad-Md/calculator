import { useContext } from "react";
import { CalcContext } from "./CalcContextProvider.jsx";
import IconBtn from "./IconBtn";


export default function Btn({ btn, bType, themeFn }) {
    
    const calcContext = useContext(CalcContext); 
    let Icon = undefined;
    let btnClass = 'numBtn innBtns'
    if (bType === 'util'){
        btnClass = 'numBtn innBtns utilInnBtns'

        Icon = <IconBtn themeFn={themeFn} btn={btn} />
    }

    
  return <div className={btnClass} onClick={()=>calcContext.upCalcInfo(bType,btn)}  >{ Icon ? Icon : btn }</div>;
}

//onclick

//string.append
//if +-*,,, string[-1] = new operator
