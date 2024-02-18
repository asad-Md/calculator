import "./Btns.css";
import Btn from "./Btn";
export default function Btns() {
  return (
    <div id='btnsCont'>
      <Btn btn={1} />
      <Btn btn={2} />
      <Btn btn={3} />
      <Btn btn={"+"} />
      <Btn btn={4} />
      <Btn btn={5} />
      <Btn btn={6} />
      <Btn btn={"-"} />
      <Btn btn={7} />
      <Btn btn={8} />
      <Btn btn={9} />
      <Btn btn={"*"} />
      <Btn btn={"."} />
      <Btn btn={0} />
      <Btn btn={"="} />
      <Btn btn={"/"} />
    </div>
  );
}
