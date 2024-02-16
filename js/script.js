// Montando HTML
let App = document.querySelector(".app");
// Inserindo Título
let h1Element = document.createElement("h1");
h1Element.innerHTML = "Convertor de Celsius para Fahrenheit";
App.appendChild(h1Element);

//  Inserindo Input
let inputElement = document.createElement("input");
inputElement.setAttribute("type", "number");
inputElement.setAttribute("placeholder", "Celsius");
inputElement.setAttribute("maxlength", "3");
App.appendChild(inputElement);

//  Inserindo botao
let btnElement = document.createElement("button");
btnElement.setAttribute("onclick", "Converter()");
btnElement.innerHTML = "Converter";
App.appendChild(btnElement);

// Inserindo texto do resultado
const text = document.createElement("h2");
text.innerText = ``;

// Função deconverter Celcius em Fahrenheit
function Converter() {
    // Limpando campo de texto do elemento;
    text.innerText = ``;

    const celcius = parseInt(inputElement.value)
    // Convertendo Celcius para Fahrenheit
    const fahrenheit = celcius * 1.8 + 32;

    // Adicionando Status a página
    text.innerHTML = `Fahrenheits <br>  <span>${fahrenheit.toFixed(0)}</span>`;
    text.style = 'transition: 2s;opacity:1;';
    document.querySelector(".app").appendChild(text);
}