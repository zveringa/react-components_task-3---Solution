import './App.css';
import styles from './app.module.css';
import { useState } from 'react';

export const App = () => {
	const [operand1, setOperand1] = useState('0');
	const [operator, setOperator] = useState('');
	const [operand2, setOperand2] = useState('');
	const [result, setResult] = useState('');
	
	
	const NUMS = ['0','1','2','3','4','5','6','7','8','9'];
	
	const handleDigitClick = (number) => {
		if(operator === '') {
			const newOperand = operand1 === '0' ? number : operand1 + number;
		setOperand1(newOperand);
		
		console.log("Entered operand1:", newOperand);}
		else {
			const newOperand = operand2 + number;
		setOperand2(newOperand);
		console.log("Entered operand2:", newOperand);}
		}
	
	const handleAdd = () => {
		if(operator === '=') {
			setOperand1(result);
			setOperand2('');
		}
		setOperator('+');
	};
	
	const handleSubtract = () => {
		if(operator === '=') {
				setOperand1(result);
				setOperand2('');
			}
		setOperator('-');
	};

	const handleClear = () => {
		setOperand1('0');
		setOperand2('');
		setOperator('');
		setResult('');
		console.log("Cleared");
	};
	const handleEquals = () => {
		let result= '';
			if (operator === '+' && operand1 && operand2) {
				result = parseInt(operand1) + parseInt(operand2);
				console.log("Result:", result);
		} else if (operator === '-' && operand1 && operand2) {
				result = parseInt(operand1) - parseInt(operand2);
				console.log("Result:", result);
		}
		else {console.log('enter the number!'); 
			
		};
		setOperator('=');
		setResult(result.toString());
	};
	const handleButtonMouseDown = (event) => {
    event.target.classList.add('button-shadow'); // Add the shadow class
  };

  const handleButtonMouseUp = (event) => {
    event.target.classList.remove('button-shadow'); // Remove the shadow class
  };
	
	return (
    <div className={styles['container']}>
      													{/* Display */}
      <div className={operator === '=' ? styles['displayAnswer'] : styles['display']}>
          {operator === '=' || '' ? (result) : (`${operand1} ${operator} ${operand2}`)}
      </div>
        <div className={styles['button-container']}>
          <table className={styles['number-buttons']}>
            <tbody>
              <tr>
                {NUMS.slice(1, 4).map((number) => (
                  <td key={number}>
                    <button className={styles['calculator-button']} onClick={() => handleDigitClick(number)}
										onMouseDown={handleButtonMouseDown}
										onMouseUp={handleButtonMouseUp}
										onMouseLeave={handleButtonMouseUp}
										>
                      {number}
                    </button>
                  </td>
                ))}
              </tr>
              <tr>
                {NUMS.slice(4, 7).map((number) => (
                  <td key={number}>
                    <button className={styles['calculator-button']} onClick={() => handleDigitClick(number)}>
                      {number}
                    </button>
                  </td>
                ))}
              </tr>
              <tr>
                {NUMS.slice(7, 10).map((number) => (
                  <td key={number}>
                    <button className={styles['calculator-button']} onClick={() => handleDigitClick(number)}>
                      {number}
                    </button>
                  </td>
                ))}
              </tr>
              <tr>
                <td colSpan="2">
                  <button className={`${styles['calculator-button']} ${styles['zero-button']}`} onClick={() => handleDigitClick('0')}>
                    0
                  </button>
                </td>
                <td>
                  <button className={styles['calculator-operator']} onClick={handleEquals}> = </button>
                </td>
              </tr>
							<tr>
								<td><button className={styles['calculator-operator']} onClick={handleAdd}> + </button></td>
								<td><button className={styles['calculator-operator']} onClick={handleSubtract}> - </button></td>
								<td><button className={styles['calculator-cancel']} onClick={handleClear}> C </button></td>
							</tr>
            </tbody>
          </table>
          </div>
      
    </div>
  );
};