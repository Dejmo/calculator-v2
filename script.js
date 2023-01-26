let firstNumber = prompt('What is your 1st number');
let secondNumber = prompt('What is your 2nd number');
let question = prompt('What do u want to do?\nAdd, Minus, Divide or Multiply?');
let sum = question.toUpperCase();

function add() {
		let sumAdd = Number(firstNumber) + Number(secondNumber);
			return alert(`${firstNumber} + ${secondNumber} =` + ' ' + sumAdd);
}
function minus() {
		let sumMinus = Number(firstNumber) - Number(secondNumber);
			return alert(`${firstNumber} - ${secondNumber} =` + ' ' + sumMinus);
}
function divide() {
		let sumDivide = Number(firstNumber) / Number(secondNumber);
			return alert(`${firstNumber} / ${secondNumber} =` + ' ' + sumDivide);
}
function multiply() {
		let sumMultiply = Number(firstNumber) * Number(secondNumber);
			return alert(`${firstNumber} * ${secondNumber} =` + ' ' + sumMultiply);
}
function popup() {
	if (sum === 'ADD') {
		return add();
	} else if (sum === 'MINUS') {
		return minus();
	} else if (sum === 'DIVIDE') {
		return divide();
	} else if (sum === 'MULTIPLY') {
		return multiply();
	} else {
		return alert('Stupid🤬🤬🤬🤬');
	}
}

popup();