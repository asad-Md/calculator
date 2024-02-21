import "./Btns.css";
import Btn from "./Btn";

const btns = [
  "x²",
  "(",
  ")",
  "%",
  1,
  2,
  3,
  "+",
  4,
  5,
  6,
  "-",
  7,
  8,
  9,
  "x",
  ".",
  0,
  "=",
  "÷",
];
const util = ["gh", "clear", "Del", "Th"];
export default function Btns({ bType , themeFn }) {
  let btnsComp, btnsId;
  if (bType === "nums") {
    btnsComp = btns.map((btn, i) => {
      btnsId = "btnsCont";
      return (
        <Btn
          bType={bType}
          key={i}
          btn={btn}
        />
      );
    });
  } else if (bType === "util") {
    btnsComp = util.map((btn, i) => {
      btnsId = "utilCont";
      return (
        <Btn
          themeFn={themeFn}
          bType={bType}
          key={i}
          btn={btn}
        />
      );
    });
  }

  return <div id={btnsId}>{btnsComp}</div>;
}
