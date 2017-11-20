var text = document.getElementById('text');
var contador = 140;
var button = document.getElementById('button');
var counter = document.getElementsByClassName('counter')[0];
var container = document.getElementById('container');
var boxRight = document.getElementsByClassName('box-right')[0];
// Agregando evento click al boton para q te retorne el contenido ingresado
button.addEventListener('click', function(event) {
  var firstBox = document.createElement('div');
  var content = document.createElement('p');
  content.textContent = text.value;
  var time = document.createElement('p');
  time.textContent = timeDate();
  // Agregando los estilos con css
  firstBox.className = 'styleBox';
  content.className = 'styleLetter';
  time.className = 'styleLetter';
  if (text.value === false) {
    alert('Ingrese contenido:');
  } else {
    firstBox.appendChild(content);
    firstBox.appendChild(time);
    container.appendChild(firstBox);
    text.value = '';
  }
});

// Cambio de color del boton al ingresar texto
text.addEventListener('keyup', function() {
  var contenido = text.value;
  var length = text.value.lenght;
  if (contenido === '') {
    button.className = 'Original';
  } else {
    button.className = 'buttonColor';
    text.style.height = '80px';
    text.style.height = text.scrollHeight + 'px';
    boxRight.style.height = '200px';
    boxRight.style.height = boxRight.scrollHeight + 'px';
  }
  // Agregando el contador
  var letters = text.value.length;
  var restaContador = 140 - letters;
  counter.textContent = restaContador;
});

// Agregando colores a los caracteres
text.addEventListener('keyup', function() {
  var letters = text.value.length;
  if (letters >= 0 && letters <= 119) {
    counter.className = 'original';
  } else if (letters = 120 && letters <= 129) {
    counter.className = 'green';
  } else {
    counter.className = 'red';
  }
}) ;

// Desabilitar el boton cuando pasa de los 140 caracteres
text.addEventListener('keyup', function() {
  var letters = text.value.length;
  if (letters > 140) {
    button.disabled = true;
  } else {
    button.disabled = false;
  }
});
// Agregando la hora
var timeDate = function() {
  var date = new Date();
  var time = date.getHours() + ":" + date.getMinutes();
  var timeAbsolute = '';
  if (date.getHours() <= 12) {
    timeAbsolute = time + ' AM';
  } else {
    timeAbsolute = time + ' PM';
  }
  return timeAbsolute;
};
