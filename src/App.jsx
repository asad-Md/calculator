import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div id='mainContainer'>
        <div id='display'>
          <p id='input' className="displayP" >1001</p>
          <p id='output' className="displayP" >99</p>
        </div>
        <div id='btnsCont'>
          
          <div class='numBtn innBtns btn1'>1</div>
          <div class='numBtn innBtns edgeTop'>2</div>
          <div class='numBtn innBtns edgeTop'>3</div>
          <div class='symBtn innBtns btn+'>+</div>
          <div class='numBtn innBtns edge'>4</div>
          <div class='numBtn innBtns mid'>5</div>
          <div class='numBtn innBtns mid'>6</div>
          <div class='symBtn innBtns edge'>-</div>
          <div class='numBtn innBtns edge'>7</div>
          <div class='numBtn innBtns mid'>8</div>
          <div class='numBtn innBtns mid'>9</div>
          <div class='symBtn innBtns edge'>x</div>
          <div class='numBtn innBtns corner'>0</div>
          <div class='symBtn innBtns edge'>.</div>
          <div class='symBtn innBtns edge'>=(or)C</div>
          <div class='symBtn innBtns corner'>/</div>



        </div>
      </div>
    </>
  );
}

export default App;
