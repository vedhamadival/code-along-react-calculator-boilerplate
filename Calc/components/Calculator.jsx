/* eslint-disable no-undef */
import { useReducer } from 'react';
import Display from './Display';

const ADD_INPUT = "ADD_INPUT";
const CALCULATE = "CALCULATE";
const CLEAR ="CLEAR";
const DELETE = "DELETE";

const Calculator = () => {
  const initState = {
    inputs: "",
    result: "",
  };

  const reducer = (state = initState, action) => {

    switch (action.type) {
      case ADD_INPUT: {
        return { ...state, inputs: state.inputs + action.payload };
    }
      case CALCULATE: {
        const newinput = {...state,result:eval(state.inputs),inputs:state.result}
        return { ...state, result:"",inputs:newinput.result};
      }

      case CLEAR: {
        return {...state, inputs:"", result:""}
      }

      case DELETE: {
        const newInputs = state.inputs.slice(0, -1);
        return { ...state, inputs: newInputs };
      }

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initState);
  console.log(state)

  const handleInputs = (value) => {
    dispatch({ type: ADD_INPUT, payload:value,});
  };

  const handleClear = () =>{
    dispatch({type: CLEAR})
  }

  const handleCalculate = () =>{
    dispatch({type:CALCULATE})
  }

  const handleDelete = () =>{
    dispatch({type:DELETE})
  }
  return (
    <>
      <div id="calc">
        <p>CALCULATOR</p>
        <Display inputs={state.inputs} result={state.result}/>
        <button onClick={() => handleInputs("1")}>1</button>
        <button onClick={() => handleInputs("2")}>2</button>
        <button onClick={() => handleInputs("3")}>3</button>
        <button onClick={() => handleInputs("+")}>+</button>
        <br />
        <button onClick={() => handleInputs("4")}>4</button>
        <button onClick={() => handleInputs("5")}>5</button>
        <button onClick={() => handleInputs("6")}>6</button>
        <button onClick={() => handleInputs("-")}>-</button>
        <br />
        <button onClick={() => handleInputs("7")}>7</button>
        <button onClick={() => handleInputs("8")}>8</button>
        <button onClick={() => handleInputs("9")}>9</button>
        <button onClick={() => handleInputs("/")}>/</button>
        <br />
        <button onClick={() => handleInputs("0")}>0</button>
        <button onClick={() => handleInputs("*")}>*</button>
        <button onClick={() => handleCalculate("=")}>=</button>
        <button onClick={() => handleDelete("DEL")}>DEL</button>
        <br/>
        <button onClick={() => handleClear("ALL CLEAR")} style={{width:"300px"}}>ALL CLEAR</button>
      </div>
    </>
  );

};

export default Calculator;
