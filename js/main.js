// Redux implementation for managing state
const { createStore } = Redux;
const initState = { letter: 'A', desc: 'ALPHA', score: 0 };
const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CHANGE_LETTER':
      return {
        ...state,
        letter: action.letter,
        desc: action.desc };

      break;
    case 'INCREASE_SCORE':
      return {
        ...state,
        score: state.score + 1 };

      break;

    default:
      return state;}

};

const store = createStore(rootReducer);

// Data
const dictionary = {
  A: 'ALPHA',
  B: 'BRAVO',
  C: 'CHARLIE',
  D: 'DELTA',
  E: 'ECHO',
  F: 'FOXTROT',
  G: 'GOLF',
  H: 'HOTEL',
  I: 'INDIA',
  J: 'JULIET',
  K: 'KILO',
  L: 'LIMA',
  M: 'MIKE',
  N: 'NOVEMBER',
  O: 'OSCAR',
  P: 'PAPA',
  Q: 'QUEBEC',
  R: 'ROMEO',
  S: 'SIERRA',
  T: 'TANGO',
  U: 'UNIFORM',
  V: 'VICTOR',
  W: 'WHISKY',
  X: 'X-RAY',
  Y: 'YANKEE',
  Z: 'ZULU' };

const arrayOfLetters = Object.keys(dictionary);
const code = document.getElementById('code');
const main = document.querySelector('.main');
const starter = document.querySelector('.starter');
const feedback = document.querySelector('.feedback_result');
const result_description = document.querySelector('.result_description');
const SCORE = document.querySelector('.score');

// Init
const init = () => {
  main.classList.add('hidden');
};

init();

// Get random letter, update state and update UI with the new state
const getRandomLetter = () => {
  const randomNumber = Math.floor(Math.random() * arrayOfLetters.length);
  const randomLetter = arrayOfLetters[randomNumber];
  store.dispatch({ type: 'CHANGE_LETTER', letter: randomLetter, desc: dictionary[randomLetter] });
  code.textContent = store.getState().letter;
  SCORE.textContent = `Score: ${store.getState().score}`;

  main.classList.remove('hidden');
  starter.classList.add('hidden');
};

// Validate answer from user
const validateAnswer = () => {
  const inputValFromUser = document.getElementsByTagName('input')[0].value;
  const userAnswer = inputValFromUser.trim().split(' ').join('').toLowerCase();

  const correctAnswerFromDictionary = store.getState().desc;
  const correctAnswer = correctAnswerFromDictionary.toLowerCase();

  main.classList.add('hidden');
  starter.classList.remove('hidden');

  if (userAnswer === correctAnswer) {
    store.dispatch({ type: 'INCREASE_SCORE' });
    feedback.textContent = 'YOU ARE RIGHT!';
    result_description.textContent = `${store.getState().letter} stands for ${correctAnswerFromDictionary}`;
    document.getElementsByTagName('input')[0].value = '';
  } else {
    feedback.textContent = 'YOU FAIL!';
    result_description.textContent = `${store.getState().letter} stands for ${correctAnswerFromDictionary}`;
    document.getElementsByTagName('input')[0].value = '';
  }
};