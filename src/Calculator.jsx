import React, {useState} from "react";
import "./Calculator.css";

export default function Calculator(){
    const [expression, setExpression] = useState('');
    const [result, setResult] = useState('');

    const handleButtonClick = (value) => { 
        if(value === "clear"){
            setExpression('');
            setResult('');
        }
        else if(value === "equal"){
            try {
                const evalResult = eval(expression);
                setResult(evalResult.toString());
            } catch (Error) {
                setResult('Error');
            }
        }
        else {
            setExpression((prevExpression) => prevExpression + value);
        }
    }

    return (
        <div className="container">
            <div className="box">
                <h1>React Calculator</h1>
                <input type="text"
                    value={expression}
                    readOnly />
                <div className="result">{result}</div>
                <div className="grid-container">
                    <button class="grid-item" onClick={() => handleButtonClick("7")}>7</button>
                    <button class="grid-item" onClick={() => handleButtonClick("8")}>8</button>
                    <button class="grid-item" onClick={() => handleButtonClick("9")}>9</button>
                    <button class="grid-item" onClick={() => handleButtonClick("+")}>+</button>
                    <button class="grid-item" onClick={() => handleButtonClick("4")}>4</button>
                    <button class="grid-item" onClick={() => handleButtonClick("5")}>5</button>
                    <button class="grid-item" onClick={() => handleButtonClick("6")}>6</button>
                    <button class="grid-item" onClick={() => handleButtonClick("-")}>-</button>
                    <button class="grid-item" onClick={() => handleButtonClick("1")}>1</button>
                    <button class="grid-item" onClick={() => handleButtonClick("2")}>2</button>
                    <button class="grid-item" onClick={() => handleButtonClick("3")}>3</button>
                    <button class="grid-item" onClick={() => handleButtonClick("*")}>*</button>
                    <button class="grid-item" onClick={() => handleButtonClick("clear")}>C</button>
                    <button class="grid-item" onClick={() => handleButtonClick("0")}>0</button>
                    <button class="grid-item" onClick={() => handleButtonClick("equal")}>=</button>
                    <button class="grid-item" onClick={() => handleButtonClick("/")}>/</button>
                </div>
            </div>
        </div>
    )
}