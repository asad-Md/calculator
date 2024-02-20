import { createContext, useState } from "react";

export const CalcContext = createContext({
  nums: [],
  operators: [],
  input: "",
  output: "",

  //function to update nums
});

const OPERATORS = ["+", "-", "x", "÷", "x²","%", "."];

export default function CalcContextProvider({ children }) {
  const [calcState, setCalcState] = useState({
    nums: [],
    operators: [],
    input: "",
    output: "",
  });
  //functtion to update nums
  //uses setCalcState to update the state
  //func to update operators
  function updateCalcInfo(bType, btnVal) {

    if (btnVal === '='){
      //result function
      return;
    }

    if (bType === "nums") {
      if (
        OPERATORS.includes(btnVal) &&
        OPERATORS.includes(calcState.nums[calcState.nums.length - 1])
      ) {
        
          console.log(btnVal);
          setCalcState((prev) => {
            const newNums = [...prev.nums];
            newNums.pop();
            newNums.push(btnVal);
            return {
              ...prev,
              nums: newNums,
              input: newNums.join(""),
              output: "Thinking ...",
            };
          });
        
        
      } else if (OPERATORS.includes(btnVal) && calcState.nums.length === 0) {
        setCalcState((prev) => {
          console.log(btnVal);
          const newNums = [...prev.nums];
          newNums.pop();
          newNums.push('0',btnVal);
          return {
            ...prev,
            nums: newNums,
            input: newNums.join(""),
            output: "Thinking ...",
          };
        });

      }else {

        if (btnVal === "x²") { btnVal= "²"}

        setCalcState((prev) => {
          
          const newNums = [...prev.nums, btnVal];
          return {
            ...prev,
            nums: newNums,
            input: newNums.join(""),
            output: "Thinking ...",
          };
        });
      }
    } 
    else if ( bType === "util") {
      if ( btnVal === "clear"){
        setCalcState((prev) => {
          return {
            ...prev,
            nums: [],
            operators: [],
            input: "",
            output: "",
          };
        });
      }
      else if ( btnVal === "Del"){
        setCalcState((prev) => {
          const newNums = [...prev.nums];
          newNums.pop();
          return {
            ...prev,
            nums: newNums,
            input: newNums.join(""),
            output: prev.nums.length=== 1 ? '' : 'Thinking ...',
          };
        })
      } 
    }
  }

  function delCalcInfo() {
    setCalcState((prev) => {
      const newNums = [...prev.nums];
      newNums.pop();
      return {
        ...prev,
        nums: newNums,
        input: newNums.join(""),
        output: prev.output.length=== 1 ? '' : 'Thinking ...'  ,
      };
    });
  }

  const ctxValue = {
    nums: calcState.nums,
    operators: calcState.operators,
    input: calcState.input,
    output: calcState.output,
    upCalcInfo: updateCalcInfo,
    delCalcInfo: delCalcInfo,
  };

  return (
    <CalcContext.Provider value={ctxValue}>{children}</CalcContext.Provider>
  );
}
