import React, { useState } from 'react';
import CalculatorDisplay from './CalculatorDisplay';

const CalculatorBtn = () => {
  const [input, setInput] = useState('');

  const handleButtonClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleCalculate = () => {
    try {
      // eslint-disable-next-line
      const result = eval(input);
      setInput(result.toString());
    } catch (error) {
      setInput('Error');
    }
  };

  const handleClear = () => {
    setInput('');
  };

  return (
    <>
      <CalculatorDisplay value={input} /> {/* Assuming CalculatorDisplay is in a separate file */}
      <div className="container mt-6">
        <div className="row justify-content-center">
          <div className="col-md-3">
            <div className="card">
              <div className="card-body">
                <div className="calculator-grid gap-3">
                  {[1, 2, 3, '+', 4, 5, 6, '-', 7, 8, 9, '*', 0].map((value) => (
                    <button
                      key={value}
                      className="btn btn-custom btn-rounded" // Added custom class 'btn-rounded'
                      onClick={() => handleButtonClick(value)}
                    >
                      {value}
                    </button>
                  ))}
                  <button
                    className="btn btn-equal btn-rounded" // Added custom class 'btn-rounded'
                    onClick={handleCalculate}
                  >
                    =
                  </button>
                  <button
                    className="btn btn-clear btn-rounded" // Added custom class 'btn-rounded'
                    onClick={handleClear}
                  >
                    C
                  </button>
                  <button
                    className="btn btn-custom btn-rounded" // Added custom class 'btn-rounded'
                    onClick={() => handleButtonClick('/')}
                  >
                    /
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


export default CalculatorBtn;
