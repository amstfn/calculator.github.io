import React, { useState } from "react";

const Interface = () => {

    const [input, setInput] = useState(0);
    const [result, setResult] = useState(null);
    const [count, setCount] = useState(0);

    const calculate = () => {
        const tns = input.replace(/\-{2}/g, "+") //tns : two negative sign in row
        const ss = tns.replace(/(\D)(\D)/g, '$2') // ss: two sign in row
        setResult(eval(ss));
    }

    return (
        <div id='container'>
            <div id="calculator">
                <div id="inputContainer">
                    <input id="display" value={result ? `${input} = ${result}` : input} readOnly />
                </div>
                <div className="numbersBox" id="numbers">
                    <button id="clear" className="buttonReset" onClick={() => { setResult(0); setInput(0); setCount(0) }}>AC</button>
                    <button id="divide" className="buttonsOperator" value={"/"} onClick={() => { setInput(input + "/"); setCount(0) }}>/</button>
                    <button id="multiply" className="buttonsOperator" onClick={() => { setInput(input + "*"); setCount(0) }}>*</button>
                    <button id="seven" className="buttonsNumber" onClick={() => input == 0 ? setInput("7") : setInput(input + "7")}>7</button>
                    <button id="eight" className="buttonsNumber" onClick={() => input == 0 ? setInput("8") : setInput(input + "8")}>8</button>
                    <button id="nine" className="buttonsNumber" onClick={() => input == 0 ? setInput("9") : setInput(input + "9")}>9</button>
                    <button id="subtract" className="buttonsOperator" onClick={() => { setInput(input + "-"); setCount(0) }}>-</button>
                    <button id="four" className="buttonsNumber" onClick={() => input == 0 ? setInput("4") : setInput(input + "4")}>4</button>
                    <button id="five" className="buttonsNumber" onClick={() => input == 0 ? setInput("5") : setInput(input + "5")}>5</button>
                    <button id="six" className="buttonsNumber" onClick={() => input == 0 ? setInput("6") : setInput(input + "6")}>6</button>
                    <button id="add" className="buttonsOperator" onClick={() => { setInput(input + "+"); setCount(0) }}>+</button>
                    <button id="one" className="buttonsNumber" onClick={() => input == 0 ? setInput("1") : setInput(input + "1")}>1</button>
                    <button id="two" className="buttonsNumber" onClick={() => input == 0 ? setInput("2") : setInput(input + "2")}>2</button>
                    <button id="three" className="buttonsNumber" onClick={() => input == 0 ? setInput("3") : setInput(input + "3")}>3</button>
                    <button id="equals" className="buttonEqual" value={"="} onClick={() => { calculate(); setCount(0) }}>=</button>
                    <button id="zero" className="buttonZero" onClick={() => input == 0 ? setInput("0") : setInput(input + "0")}>0</button>
                    <button id="decimal" className="buttonsNumber" onClick={() => { if (count < 1) { setInput(input + "."); setCount(1) } }}>.</button>
                </div>
            </div>
        </div>
    )
}

export default Interface;