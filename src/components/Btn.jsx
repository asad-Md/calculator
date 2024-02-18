import ghIcon from "../assets/gh.svg";
import ghDark from "../assets/ghd.svg";
import del from "../assets/delete.png";
import clear from "../assets/clear.png";
export default function Btn({ btn, bType }) {
    let btnClass = 'numBtn innBtns'
    if (bType === 'util'){
        btnClass = 'numBtn innBtns utilInnBtns'
    }
  if (btn === "gh") {
    btn = (
      <a href='https://github.com/N0Uchan/calculator'>
        <img
          src={ghDark}
          alt='github'
          id='ghIcon'
          className="icons"
        />
      </a>
    );
  }
  else if (btn === "Del") {
    btn = (
      <img
        src={del}
        alt='delete'
        id='delIcon'
        className="icons"
      />
    );
  }
  else if (btn === "clear") {
    btn = (
      <img
        src={clear}
        alt='clear'
        id='clearIcon'
        className="icons"
        />
    );
    }

  return <div className={btnClass} >{btn}</div>;
}

//onclick

//string.append
//if +-*,,, string[-1] = new operator
