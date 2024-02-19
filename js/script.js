let app = document.querySelector(".app")
let btnElement = document.querySelector(".app #BtnGerar");
btnElement.setAttribute("onclick", "GerarSenha()");
let status = document.createElement("textarea");

function GerarSenha() {

    // Adicionando e validando valores do input
    let qtdeInput = parseInt(document.querySelector(".app form #qtde").value);
    if(qtdeInput > 10 || qtdeInput < 0){ alert("Quantidade de senha inválido"); return false}
    let sizeInput = parseInt(document.querySelector(".app .options #size").value);
    if(sizeInput > 20 || sizeInput < 0){ alert("Tamanho de senha inválido"); return false }

    

    // Funções para checar as opções selecionadas
    let especialChecked = () => {
        if (document.querySelector(".app form #Especiais").checked) { return true }
        else { return false }
    }

    let numeroChecked = () => {
        if (document.querySelector(".app form #Numeros").checked) { return true }
        else { return false }
    }

    let maiusculasChecked = () => {
        if (document.querySelector(".app form #Maiusculas").checked) { return true }
        else { return false }
    }

    // Inicializando as opções selecionadas
    let especialChar = especialChecked();
    let numerosChar = numeroChecked();
    let maiusculasChar = maiusculasChecked();

    // Valores iniciais para gerar senha
    let charSet = "abcdefghijklmnopqrstuvxwyz"

    // Validando e adicionando opções para o gerador 
    if(especialChar){ charSet += "!@#$%&*"; }
    if(numerosChar){ charSet += "0123456789"}
    if(maiusculasChar){ charSet += "ABCDEFGHIJKLMNOPQRSTUVXWYZ"}

    let senha = "";
    for(let j = 0; j < qtdeInput; j++){
        senha = "";
        for(let i = 0; i < sizeInput; i++){
            senha += `${charSet.charAt(Math.random() * (charSet.length - 0 + 1))}`;
        }
        status.innerHTML += `${senha} \n`; 
    }
    app.appendChild(status);
}
