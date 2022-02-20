const btnPlus = document.querySelector('.btnPlus');
const btnMinus = document.querySelector('.btnMinus');
const btnMulti = document.querySelector('.btnMulti');
const btnSplit = document.querySelector('.btnSplit');
const btnClear = document.querySelector('.btnClear');
const result = document.querySelector('.result');
const inputA = parseInt(document.querySelector('.inputA').value);
const inputB = parseInt(document.querySelector('.inputB').value);
let sum = 0;

const plus = () => {
	// const inputA = parseInt(document.querySelector('.inputA').value);
	// const inputB = parseInt(document.querySelector('.inputB').value);
	sum = inputA + inputB;
	result.textContent = sum;
};
const minus = () => {
	// const inputA = parseInt(document.querySelector('.inputA').value);
	// const inputB = parseInt(document.querySelector('.inputB').value);
	sum = inputA - inputB;
	result.textContent = sum;
};
const split = () => {
	// const inputA = parseInt(document.querySelector('.inputA').value);
	// const inputB = parseInt(document.querySelector('.inputB').value);
	sum = inputA / inputB;
	result.textContent = sum;
};
const multi = () => {
	// const inputA = parseInt(document.querySelector('.inputA').value);
	// const inputB = parseInt(document.querySelector('.inputB').value);
	sum = inputA * inputB;
	result.textContent = sum;
};
const clear = () => {
	result.textContent = 'Result';
	inputA.value = 'A';
	inputB.value = 'B';
};

btnPlus.addEventListener('click', plus);
btnMinus.addEventListener('click', minus);
btnSplit.addEventListener('click', split);
btnMulti.addEventListener('click', multi);
btnPlus.addEventListener('click', plus);
btnClear.addEventListener('click', clear);
