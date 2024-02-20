import ghIcon from "../assets/gh.svg";
import ghDark from "../assets/ghd.svg";
import del from "../assets/delIcon.png";
import clear from "../assets/crossIcon.png";
import themesIcon from "../assets/themesIcon.png";

export default function IconBtn({ btn }) {
  if (btn === "gh") {
    btn = (
      <a
        href='https://github.com/N0Uchan/calculator'
        target='_blank'
        rel='noopener noreferrer'
      >
        <img
          src={ghDark}
          alt='github'
          id='ghIcon'
          className='icons'
        />
      </a>
    );
  } else if (btn === "Del") {
    btn = (
      <img
        src={del}
        alt='delete'
        id='delIcon'
        className='icons'
      />
    );
  } else if (btn === "clear") {
    btn = (
      <img
        src={clear}
        alt='clear'
        id='clearIcon'
        className='icons'
      />
    );
  } else if (btn === "Th") {
    btn = (
      <img
        src={themesIcon}
        alt='themes'
        id='themesIcon'
        className='icons'
      />
    );
  }

  return btn;
}
