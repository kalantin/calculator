const btnPlus = document.querySelector('.btnPlus');
const btnMinus = document.querySelector('.btnMinus');
const btnMulti = document.querySelector('.btnMulti');
const btnSplit = document.querySelector('.btnSplit');
const btnClear = document.querySelector('.btnClear');
const result = document.querySelector('.result');
const inputA = document.querySelector('.inputA')
const inputB = document.querySelector('.inputB')
let sum = 0;

const plus = () => {

	sum = parseInt(inputA.value) + parseInt(inputB.value);
	result.textContent = sum;
};
const minus = () => {

	sum = parseInt(inputA.value) - parseInt(inputB.value);
	result.textContent = sum;
};
const split = () => {

	sum = parseInt(inputA.value) / parseInt(inputB.value);
	result.textContent = sum;
};
const multi = () => {

	sum = parseInt(inputA.value) * parseInt(inputB.value);
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
