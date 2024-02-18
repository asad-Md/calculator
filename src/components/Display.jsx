import './Display.css'
import { CalcContext } from './CalcContextProvider'
import { useContext } from 'react'

export default function Display() {
    const calcCtx = useContext(CalcContext)

    return (<div id='display'>
            <p id='input' className="displayP" >{ calcCtx.input }</p>
            <p id='output' className="displayP" >{ calcCtx.output }</p>
        </div>)
}
