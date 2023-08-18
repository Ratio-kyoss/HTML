//Obter referências aos elementos HTML(querySelector é pra indicar de qual id tem que pegar ou inserir informação)

const inputElement = document.querySelector("#input");
const fromElement = document.querySelector("#from");
const toElement = document.querySelector("#to");
const outputElement = document.querySelector("#output");
const convertButton = document.querySelector("#convert-btn");
const messageElement = document.querySelector("#message");

//função para converter as unidades

function convert(){
  //Obter os valores das unidades de entrada e saída
  const fromValue = fromElement.value;  //fromValue armazena a unidade de entrada (valor do "from", vai armazenar qual dos options foi escolhido (m,cm, mm, km))
  const toValue = toElement.value; //armazena o valor da unidade de saída, a mesma coisa do from, só que com o to

//verficar se a unidade de entrada e saída são iguais
if (fromValue === toValue) {
    outputElement.value = inputElement.value;
    messageElement.textContent = "";
    return;
}

//Converter o valor de entrada
let meters;
switch (fromValue) {
    case 'm':
        meters = inputElement.value;
        break;
    case 'km':
        meters = inputElement.value * 1000;
        break;
    case 'cm':
        meters = inputElement.value / 100;
        break;
    case 'mm':
        meters = inputElement.value / 1000;
        break;
}

//Converter para a unidade de saída

let result;
switch (toValue) {
    case 'm':
        result = meters;
        break;
    case 'km':
        result = meters / 1000;
        break;
    case 'cm':
        result = meters * 100;
        break;
    case 'mm':
        result = meters * 1000;
        break;
}

//Exibir resultados na caixa de saída
outputElement.value = result;

//Exibir a mensagem de conversão
const fromLabel = fromElement.options[fromElement.selectedIndex].text;
const toLabel = toElement.options[toElement.selectedIndex].text;
const message = `${
    inputElement.value
} ${fromLabel} equivalem a ${result} ${toLabel}`;
messageElement.textContent = message;
}
convertButton.addEventListener("click", convert);