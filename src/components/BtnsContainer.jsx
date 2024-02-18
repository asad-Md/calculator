import "./Btns.css";
import Btn from "./Btn";


const btns = ['^','(',')','%' ,1, 2, 3, "+", 4, 5, 6, "-", 7, 8, 9, "*", ".", 0, "=", "/"];
const util = ['gh','Clr','Del','Th']
export default function Btns({bType}) {
    let btnsComp, btnsId;
    if(bType==='nums'){btnsComp =btns.map((btn, i) => {
            btnsId='btnsCont'
            return <Btn key={i} btn={btn} /> ;
        })}
    else if(bType==='util'){btnsComp =util.map((btn, i) => {
            btnsId='utilCont'
            return <Btn key={i} btn={btn} /> ;
        })}

  return (
    <div id={btnsId}>
        {btnsComp}
    </div>
  );
}
