/*
1 - Acessar a janela (browser)
2 - Pegar o HTML todo
3 - Pegar o botão
4 - Saber que o botão está sendo clicado

5 - Acessar a janela
6 - Pegar o html todo
7 - Pegar o elements
8 - Mover o elements para a direita

9 - 
*/

const btnRight = document.querySelector(".button-arrow.-right");
const btnLeft = document.querySelector(".button-arrow.-left");
const elements = document.querySelector(".elements");
let pixels = 0;

btnRight.addEventListener("click", function () {
	pixels = pixels + 90;
	elements.style = `transform: translateX(${pixels}px)`;
});

btnLeft.addEventListener("click", function () {
	pixels = pixels - 90;
	elements.style = `transform: translateX(${pixels}px)`;
});
