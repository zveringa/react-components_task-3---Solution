import './App.css';
import styles from './app.module.css';
import { useState } from 'react';

export const App = () => {
	const [operand1, setOperand1] = useState('');
	const [operator, setOperator] = useState('');
	const [operand2, setOperand2] = useState('');
	const [result, setResult] = useState('');
	
	
	const NUMS = ['0','1','2','3','4','5','6','7','8','9'];
	
	const handleDigitClick = (number) => {
		if(operator === '') {
		const newOperand = operand1 + number;
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
		setOperand1('');
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
	
	return (
		<>
			<div>
				 {/* Display window styles */}
			 <div className={operator === '=' ? styles['displayAnswer'] : styles['display']}>
				{/* Display window content */}
			{operator === '=' ? (result) : (`${operand1} ${operator} ${operand2}`)}
			
			</div>
				<div className={styles['button-container']}>
					<div className={styles['number-buttons']}>	
						{NUMS.map((number) => (
							
							<button key={number} className={styles['calculator-button']} onClick={()=> handleDigitClick(number)}>
								{number}
							</button>
							))}
					</div>
							<div  className={styles['operator-buttons']}>
								<button className={styles['calculator-operator']} onClick={handleAdd}> + </button>
								<button className={styles['calculator-operator']} onClick={handleSubtract}> - </button>
								<button className={styles['calculator-cancel']} onClick={handleClear}> C </button>
								<button className={styles['calculator-equal']} onClick={handleEquals}> = </button>
							</div>
				</div>
			</div>
	</>
	)
}
