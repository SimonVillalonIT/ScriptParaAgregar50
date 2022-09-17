const Precio = (numero) => {
  let agregado = numero / 2;
  let precio = numero + agregado;
  return precio;
};
const button = document.getElementById("button");
const input = document.getElementById("valor");
const resultado = document.getElementById("resultado");

button.addEventListener("click", () => {
  resultado.innerText = Precio(parseInt(input.value));
	var seleccion = document.createRange();
	seleccion.selectNodeContents(resultado);
	window.getSelection().removeAllRanges();
	window.getSelection().addRange(seleccion);
	var res = document.execCommand('copy');
	window.getSelection().removeRange(seleccion);
});
