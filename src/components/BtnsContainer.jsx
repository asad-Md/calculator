import "./Btns.css";
import Btn from "./Btn";

const btns = [ 1, 2, 3, "+", 4, 5, 6, "-", 7, 8, 9, "*", ".", 0, "=", "/"];

export default function Btns() {
  return (
    <div id='btnsCont'>
        {btns.map((btn, i) => {
            return <Btn key={i} btn={btn} />;
        })}
    </div>
  );
}
