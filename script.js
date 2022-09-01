function colorChange (color){
    const blocoDeCores = document.getElementsByClassName('color');
  for(let i = 0; i < blocoDeCores.length ; i += 1){
    blocoDeCores[i].style.backgroundColor = 'color'
  }
}
colorChange('black');