import React from "react";
import './App.css'
import { incNumber, decNumber, multNumber, diviNumber } from "./actions";
import {useSelector, useDispatch} from 'react-redux'
function App() {
  const myState = useSelector((state) => state.changeTheNumber)
  const secondState = useSelector((state) => state.multiplyTheNumber)
  const dispatch = useDispatch();
  return (
    <>
      <div className="container">
        <h1>Increment/Decrement counter</h1>
        <h4>using React and Redux</h4>
        <div className="quantity">
          <a onClick={() => dispatch(decNumber())} href className="quantity__minus" title="Decrement"><span>-</span></a>
          <input name="quantity" type="text" className="quantity__input" value={myState}/>
          <a onClick={() => dispatch(incNumber(5))} href className="quantity__minus" title="Increment"><span>+</span></a>
        </div>
      </div>
      <div className="container my-5">
        <h1>Multiplication/Divide counter</h1>
        <h4>using React and Redux</h4>
        <div className="quantity">
          <a onClick={() => dispatch(diviNumber(2))} href className="quantity__minus" title="Decrement"><span>/</span></a>
          <input name="quantity" type="text" className="quantity__input" value={secondState}/>
          <a onClick={() => dispatch(multNumber(4))} href className="quantity__minus" title="Increment"><span>*</span></a>
        </div>
      </div>
    </>
  );
}

export default App;
