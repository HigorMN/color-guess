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
