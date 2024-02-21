import { createContext, useState } from "react";

export const CalcContext = createContext({
  nums: [],
  operators: [],
  input: "",
  output: "",

  //function to update nums
});

const OPERATORS = ["+", "-", "x", "÷", "²","%"];

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
      const numArr = [...calcState.nums];
      //for each element in numArr, if it is x then replace it with *, and ÷ with / and ² with **2
      for (let i = 0; i < numArr.length; i++){
        if (numArr[i] === "x") {numArr[i] = "*"}
        if (numArr[i] === "÷") {numArr[i] = "/"}
        if (numArr[i] === "²") {numArr[i] = "**2"}
      }
      let outPut
      try{
        outPut = eval(numArr.join(''));
        console.log(outPut);
      }catch(e){
        outPut = "Error";
      }
      setCalcState((prev) => { 
        return {
          ...prev,
          output: outPut,
        };
      })
      
      return;
    }

    else if (bType === "nums") {
      if (btnVal === "x²") { btnVal= "²"}
      if (
        OPERATORS.includes(btnVal) &&
        OPERATORS.includes(calcState.nums[calcState.nums.length - 1])
      ) {
        
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
            output: null ,
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
            output: newNums.length=== 0 ? null : 'Thinking ...',
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
