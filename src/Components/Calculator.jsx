import React from 'react';
import CalculatorBtn from './CalculatorBtn';
const Calculator = () => {
  return (
    <div className="container mt-5">
      <div className="card border-primary"> 
        <div className="card-body">
          <h3 className="card-title text-center mb-4">
          <span
              className="text-dark"
              style={{
                fontSize: '1em',
                fontFamily: 'Arial, sans-serif',
                textShadow: '1px 1px 2px #333',
                letterSpacing: '1px',
                textTransform: 'uppercase',
             
                transition: 'color 0.3s ease-in-out',
              }}
            >
              Math
            </span>{' '}
            <span
              className="text-dark"
              style={{
                fontSize: '1em',
                fontFamily: 'Georgia, serif',
                textShadow: '1px 1px 2px #333',
                letterSpacing: '1px',
                textTransform: 'uppercase',
              
                transition: 'color 0.3s ease-in-out',
              }}
            >
              Magician
            </span>{' '}
            <span
              className="text-danger"
              style={{
                fontSize: '1em',
                fontFamily: 'Verdana, sans-serif',
                textShadow: '1px 1px 2px #333',
                letterSpacing: '1px',
                textTransform: 'uppercase',
             
                transition: 'color 0.3s ease-in-out',
              }}
            >
              Calculator
            </span>
          </h3>
          <CalculatorBtn />
        </div>
      </div>
    </div>
  );
};


export default Calculator;
