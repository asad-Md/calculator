import ghIcon from '../assets/gh.svg';
import ghDark from '../assets/ghd.svg';
export default function Btn({btn}) {

    if ( btn === 'gh'){
        btn = <a href='https://github.com/N0Uchan/calculator' ><img src={ghDark} alt='github' id='ghIcon'  /></a> 

    }
    return <div className='numBtn innBtns'>{btn}</div>
}


//diff button for == / Clear
//onclick

//string.append
//if +-*,,, string[-1] = new operator
