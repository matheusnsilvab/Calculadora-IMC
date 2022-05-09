function calculate() {
  var altura = document.getElementById("altura").value / 100;
  var peso = document.getElementById("peso").value;

  var imc = (peso / (altura * altura)).toFixed(2);
  var text=""
  if (imc < 18.5) {
    text=("Você está magro!")
  } else if (imc < 24.9) {
    text=("Você está normal!")
  } else if (imc < 29.9) {
    text=("Você está com sobrepeso!")
  } else if (imc < 39.9) {
    text=("Você está com obesidade!")
  } else if (imc > 39.9) {
    text=("Você está com obesidade mórbida!")
  }
  document.getElementById("text_area").innerText=text
}