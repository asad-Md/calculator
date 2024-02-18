import { createContext , useState } from "react"; 

export const CalcContext = createContext({
    cState: {},
    //function to update nums
});



//functtion to update nums
//uses setCalcState to update the state
//func to update operators


export default function CalcContextProvider({children}) {
    const [calcState, setCalcState] = useState({
        nums:[],
        operators:[],
        input:undefined,
        output:undefined,
    })

    const ctxValue = {
        nums: calcState.nums,
        operators: calcState.operators,
        input: calcState.input,
        output: calcState.output,
        
        //function to update nums
        //func to update operators
    }

    return (
        <CalcContext.Provider value={ctxValue}>
            {children}
        </CalcContext.Provider>
    )
}
