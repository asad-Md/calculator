import { createContext , useContext } from "react"; 

const CalcContext = createContext({
    nums:[0],
    operators:[]
});

export default function CalcContextProvider({children}) {

    return (
        <CalcContext.Provider value={CalcContext}>
            {children}
        </CalcContext.Provider>
    )
}