import { Modal } from './modal.js';
import { AlertError } from './alert-error.js';
import { calculateIMC, notANumber } from './utils.js';

const form = document.querySelector('form');
const inputWeight = document.querySelector('#weight');
const inputHeight = document.querySelector('#height');

form.onsubmit = (e) => {
  e.preventDefault();
  const weight = inputWeight.value;
  const height = inputHeight.value;

  const weightOrHeightIsNotANumber = notANumber(weight) || notANumber(height);

  if (weightOrHeightIsNotANumber) {
    AlertError.open();
    return;
  }

  AlertError.close();

  const result = calculateIMC(weight, height);
  displayResultmessage(result);
};
function displayResultmessage(result) {
  const message = `Seu IMC é de ${result}`;
  Modal.message.innerText = message;
  Modal.open();
  clearInputs();
}

function clearInputs() {
  inputHeight.value = '';
  inputWeight.value = '';
}
