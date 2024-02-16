// Pegando elementos do formulário
let app = document.querySelector(".app")
let inputElement = document.querySelector(".app input");

let btnElement = document.querySelector(".app button");
btnElement.setAttribute("onclick", "verificarCPF()");

let status = document.querySelector(".app h2");
status.innerText = "";

function verificarCPF() {
  let cpf = inputElement.value;
  
  if(ValidarDig(cpf)){ 
    status.style = 'color: green;';
    status.innerHTML = "CPF Válido!!";
  }else{ 
    status.style = 'color: red;';
    status.innerHTML = "CPF Inválido!!";
  }

  function ValidarDig(cpf) {
    // Removendo caracteres especias
    cpf = cpf.replace(/\D/g, "");
    
    // Interrompe a função caso o cpf não tenha 11 digitos
    if (cpf.length != 11) {
      status.style = 'color: red;';
      status.innerHTML = "Um CPF contém 8 dígitos!!";
      return false
    }

    // Calculando primeiro dígito
    let soma = 0;
    let resto = 0;
    for (let i = 1; i <= 9; i++) {
      soma += (parseInt(cpf[i]) * i);
    }
    resto = soma % 11;
    if(resto == 10 || resto == 11){ resto = 0 }

    //  Retorna falso 
    //  caso o primeiro dígito não seja igual ao dígito do CPF
    if (resto !== parseInt(cpf[10])) { return false }

    // Calculando Segundo dígito
    soma = 0;
    resto = 0;
    for (let i = 0; i <= 9; i++) {
      soma += (parseInt(cpf[i]) * i);
    }
    resto = soma % 11;
    if(resto == 10 || resto == 11){ resto = 0 }

    //  Retorna falso 
    //  caso o primeiro dígito não seja igual ao dígito do CPF
    if (resto != parseInt(cpf[10])) { return false }

    return true
  }
}



