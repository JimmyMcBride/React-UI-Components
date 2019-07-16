import React from 'react';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton'
import './App.css';

// const symbol = {
//   divide: "/",
//   multiply: "*",
//   subtract: "-",
//   add: "+",
//   solve: "=",
// }

const App = () => {
  return (
    <div className="container">
      <CalculatorDisplay />
      <NumberButton number="clear" buttonStyle="clear" />
      <ActionButton symbol="/" buttonStyle="action" />
      <NumberButton number="7" buttonStyle="number" />
      <NumberButton number="8" buttonStyle="number" />
      <NumberButton number="9" buttonStyle="number" />
      <ActionButton symbol="*" buttonStyle="action" />
      <NumberButton number="4" buttonStyle="number" />
      <NumberButton number="5" buttonStyle="number" />
      <NumberButton number="6" buttonStyle="number" />
      <ActionButton symbol="-" buttonStyle="action" />
      <NumberButton number="1" buttonStyle="number" />
      <NumberButton number="2" buttonStyle="number" />
      <NumberButton number="3" buttonStyle="number" />
      <ActionButton symbol="+" buttonStyle="action" />
      <NumberButton number="0" buttonStyle="zero" />
      <ActionButton symbol="=" buttonStyle="action" />
    </div>
  );
};

export default App;
