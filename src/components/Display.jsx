import './Display.css'
import { CalcContext } from './CalcContextProvider'
import { useContext , useState } from 'react'

export default function Display() {
    const calcCtx = useContext(CalcContext)
    const [copiedText,setCopiedText] = useState('')

    function handleCopy(clickedBtn){
        if(clickedBtn === 'input'){
            setCopiedText('')
            navigator.clipboard.writeText(calcCtx.input)
            setCopiedText('visible')
            setTimeout(()=>setCopiedText(''), 2000)
        }
        else if(clickedBtn === 'output'){
            setCopiedText('')
            navigator.clipboard.writeText(calcCtx.output)
            setCopiedText('visible')
            setTimeout(()=>setCopiedText('false'), 2000)
        }
    }

    return (<div id='display'>
            <p id='input' onClick={()=>handleCopy('input')}
             className="displayP" >{ calcCtx.input ? calcCtx.input : "〜(￣▽￣〜)" }</p>
            <p id='output' onClick={()=>handleCopy('output')}
            className="displayP" >{ calcCtx.output != null ? calcCtx.output : "༼ つ ◕_◕ ༽つ" }</p>
            
            <p id="copiedText" className={copiedText} >Copied Text To ClipBoard</p>

        </div>)
}
