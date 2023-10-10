const verifyButton = document.querySelector('#verify-button');
const MAX_VALUE = +document.querySelector('#max-value').textContent;
let secretNumber = Math.floor(Math.random() * MAX_VALUE) + 1;
let attempts = 0;

const updateAttempts = () => {
  const attemptsNumberElement = document.querySelector('#attempts-number')

  attemptsNumberElement.textContent = ++attempts;
}

const showSuccessMessage = () => {
  const outputElement = document.querySelector('#output');

  outputElement.textContent = `Parabéns, você acertou!`;
  outputElement.style.color = '#00ff00';
}

const cleanInput = () => {
  const kicksInput = document.querySelector('#kicks-input');

  kicksInput.value = '';
}

const updateLastKick = (kick) => {
  const lastKickContainer = document.querySelector('#last-kick-container');
  const lastKickValue = document.querySelector('#last-kick-value');

  lastKickContainer.classList.remove('hide');
  lastKickValue.textContent = kick;
}

const getInput = () => {
  const kicksInput = document.querySelector('#kicks-input');
  let kick = +kicksInput.value;

  cleanInput();
  kicksInput.focus();
  updateLastKick(kick);

  return kick;
}

const showTip = (kick) => {
  let output = '';
  const outputElement = document.querySelector('#output');
  
  output = (kick > secretNumber) ?
    'Chute um número mais baixo' :
    'Chute um número mais alto';
  outputElement.textContent = output;
}

const restartGame = () => {
  verifyButton.textContent = 'Reiniciar jogo?';
  verifyButton.addEventListener('click', () => location.reload());
}

const checkAnswer = () => {
  let kick = getInput();

  if (kick === secretNumber) {
    showSuccessMessage();
    restartGame();
  } else {
    console.log(secretNumber);
    showTip(kick);
    updateAttempts();
  }
}

verifyButton.addEventListener('click', checkAnswer);