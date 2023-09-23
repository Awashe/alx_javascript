function changeMode(size, weight, transform, background, color) {
    return function() {
      document.body.style.fontSize = size + 'px';
      document.body.style.fontWeight = weight;
      document.body.style.textTransform = transform;
      document.body.style.backgroundColor = background;
      document.body.style.color = color;
    }
  }
  
  function main() {
    var spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
    var darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
    var screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');
  
    var para = document.createElement('p');
    var node = document.createTextNode('Welcome Holberton!');
    para.appendChild(node);
    document.body.appendChild(para);
  
    var spookyBtn = document.createElement('button');
    spookyBtn.innerHTML = 'Spooky';
    spookyBtn.onclick = spooky;
    document.body.appendChild(spookyBtn);
  
    var darkModeBtn = document.createElement('button');
    darkModeBtn.innerHTML = 'Dark mode';
    darkModeBtn.onclick = darkMode;
    document.body.appendChild(darkModeBtn);
  
    var screamModeBtn = document.createElement('button');
    screamModeBtn.innerHTML = 'Scream mode';
    screamModeBtn.onclick = screamMode;
    document.body.appendChild(screamModeBtn);
  }
  
  main();