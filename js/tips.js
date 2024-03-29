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

// const code = document.querySelector('h1');
const description = document.querySelector('p');

const getLetterAndDescription = evt => {
  const capturedLetter = evt.target.dataset.id;
  // Add/remove selected class
  const boton = evt.target;
  btns.forEach(btn => btn.classList.remove('selected'));
  boton.classList.add('selected');

  // Get letter
  const letra = Object.keys(dictionary).
  filter(key => key.includes(capturedLetter)).
  reduce((acc, curr) => acc + curr);

  // Get description
  const desc = dictionary[letra];

  // Setting new state
  // code.textContent = letra;
  description.textContent = desc;
};

const generateButtonsDynamically = () => {
  const keyLetras = Object.keys(dictionary);

  for (let letra of keyLetras) {
    const boton = document.createElement('button');
    const texto = document.createTextNode(letra);
    boton.appendChild(texto);
    boton.setAttribute('data-id', letra);
    document.querySelector('.buttons-collection').appendChild(boton);
  }
};

generateButtonsDynamically();

const btns = document.querySelectorAll('button');
for (let btn of btns) {
  btn.addEventListener('click', getLetterAndDescription, false);
}