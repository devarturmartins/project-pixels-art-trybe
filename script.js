function colorChange() {
  const blocoDeCores = document.querySelectorAll('.color');
  for (let i = 0; i < blocoDeCores.length; i += 1) {
    if (blocoDeCores[i] === blocoDeCores[0]) {
      blocoDeCores[i].style.backgroundColor = 'rgb(0,0,0)';
    } else {
      const r = Math.floor(Math.random() * 255);
      const g = Math.floor(Math.random() * 255);
      const b = Math.floor(Math.random() * 255);
      blocoDeCores[i].style.backgroundColor = 'rgb('+r+','+g+','+b+')';
    }
  }
}

const button = document.querySelector('#button-random-color');
button.addEventListener('click', colorChange);

function armazenaCores() {
  const blocoDeCores = document.querySelectorAll('.color');
  let f = JSON.parse(localStorage.getItem('colorPalette')) || [];
  for (let i = 0; i < blocoDeCores.length; i += 1) {
    const r = JSON.stringify(blocoDeCores[i].style.backgroundColor);
    f.push(r);
  }
  localStorage.setItem('colorPalette', f);
}

document.querySelector('#button-random-color').onclick = armazenaCores;
