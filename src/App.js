import React, { useState } from 'react'
import './App.css'
export default function App() {
    const [result, setResult] = useState("");
    const handleKeyPad = (e) => {
        setResult(result.concat(e.target.name));
    }
    const clickCLear = ()=> {
        setResult("");
    }
    const backspace = ()=> {
        setResult(result.slice(0, - 1))
    }
    const calculate = ()=> {
        try {
            setResult(eval(result).toString());
        } catch (error) {
            setResult("Error")
        }
        
    }
  return (
    <>
        <div className='container'>
            <form>
                <input type='text' value={result}/>
            </form>
            <div className='keypad'>
                <button className='highlight' onClick={clickCLear} id='clear'>Clear</button>
                <button className='highlight' onClick={backspace} id='backspace'>C</button>
                <button className='highlight' name='/' onClick={handleKeyPad}>&divide;</button>
                <button name='7'  onClick={handleKeyPad}>7</button>
                <button name='8'  onClick={handleKeyPad}>8</button>
                <button name='9'  onClick={handleKeyPad}>9</button>
                <button className='highlight' name='*'  onClick={handleKeyPad}>&times;</button>
                <button name='4'  onClick={handleKeyPad}>4</button>
                <button name='5'  onClick={handleKeyPad}>5</button>
                <button name='6'  onClick={handleKeyPad}>6</button>
                <button className='highlight' name='-'  onClick={handleKeyPad}>&ndash;</button>
                <button name='1'  onClick={handleKeyPad}>1</button>
                <button name='2'  onClick={handleKeyPad}>2</button>
                <button name='3'  onClick={handleKeyPad}>3</button>
                <button className='highlight' name='+'  onClick={handleKeyPad}>+</button>
                <button name='0'  onClick={handleKeyPad}>0</button>
                <button  name='-'  onClick={handleKeyPad}>.</button>
                <button className='highlight' id='result' onClick={calculate}>=</button>

            </div>
        </div>
    </>
  )
}
