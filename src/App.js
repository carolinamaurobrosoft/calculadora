import './App.css';
import Button from './components/Button';
import Screen from './components/Screen';
import ButtonClear from './components/ButtonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';


function App() {

  const [input, setInput] = useState('');

  const addInput = val => {
    setInput(input+val)
  }

  const result = () => {
    setInput(evaluate(input))
  }

  return (
    <div className="App">
      <div className="name-container">
        <h1 className='nombre'> Calculadora Caro </h1>
      </div>
      <div className='calculator-container'>
        <Screen input={input} />
        <div className='fila'>
          <Button clickHandle={addInput}>1</Button>
          <Button clickHandle={addInput}>2</Button>
          <Button clickHandle={addInput}>3</Button>
          <Button clickHandle={addInput}>+</Button>
        </div>
        <div className='fila'>
          <Button clickHandle={addInput}>4</Button>
          <Button clickHandle={addInput}>5</Button>
          <Button clickHandle={addInput}>6</Button>
          <Button clickHandle={addInput}>-</Button>
        </div>
        <div className='fila'>
          <Button clickHandle={addInput}>7</Button>
          <Button clickHandle={addInput}>8</Button>
          <Button clickHandle={addInput}>9</Button>
          <Button clickHandle={addInput}>*</Button>
        </div>
        <div className='fila'>
          <Button clickHandle={result}>=</Button>
          <Button clickHandle={addInput}>0</Button>
          <Button clickHandle={addInput}>.</Button>
          <Button clickHandle={addInput}>/</Button>
        </div>
        <div className='fila'>
          <ButtonClear clearHandle={ () => setInput('')}>
            Clear
          </ButtonClear>
        </div>

      </div>
     
     
    </div>
  );
}

export default App;
