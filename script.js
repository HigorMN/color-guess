function balls() {
  const section = document.getElementById('sec');
  for (let index = 0; index < 6; index += 1) {
    const createBolls = document.createElement('div');
    createBolls.className = 'ball';
    section.appendChild(createBolls);
  }
}

balls();

function colorAleatorias() {
  const allColors = document.getElementsByClassName('ball');

  allColors[0].style.backgroundColor = `rgb(${Math.floor(
    Math.random() * 255
  )}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;

  allColors[1].style.backgroundColor = `rgb(${Math.floor(
    Math.random() * 255
  )}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;

  allColors[2].style.backgroundColor = `rgb(${Math.floor(
    Math.random() * 255
  )}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;

  allColors[3].style.backgroundColor = `rgb(${Math.floor(
    Math.random() * 255
  )}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;

  allColors[4].style.backgroundColor = `rgb(${Math.floor(
    Math.random() * 255
  )}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;

  allColors[5].style.backgroundColor = `rgb(${Math.floor(
    Math.random() * 255
  )}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
}

colorAleatorias();

function rgbColor() {
  const colorRGB = document.getElementById('rgb-color');
  const allColors = document.getElementsByClassName('ball');
  const escolher = document.getElementById('answer');
  const min = Math.ceil(0);
  const max = Math.floor(5);
  const aleatorio = Math.floor(Math.random() * (max - min)) + min;
  const pegarDiv = allColors[aleatorio].attributes[1].value;
  colorRGB.innerText = pegarDiv;
  for (let index = 0; index < allColors.length; index += 1) {
    allColors[index].addEventListener('click', function (event) {
      if (event.target.attributes[1].value === pegarDiv) {
        escolher.innerText = 'Acertou!';
      } else {
        escolher.innerText = 'Errou! Tente novamente!';
      }
    });
  }
}

rgbColor();

function reset() {
  const escolher = document.getElementById('answer');
  const btnReset = document.getElementById('reset-game');
  btnReset.addEventListener('click', function () {
    colorAleatorias();
    rgbColor();
    escolher.innerText = 'Escolha uma cor';
  });
}

reset();
