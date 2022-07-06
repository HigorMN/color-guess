function balls() {
  const section = document.getElementById('sec');
  for (let index = 0; index < 6; index += 1) {
    const createBolls = document.createElement('div');
    createBolls.className = 'ball';
    section.appendChild(createBolls);
  }
}

balls();
