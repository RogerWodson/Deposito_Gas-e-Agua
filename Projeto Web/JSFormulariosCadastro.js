 // tras as variaveis que foram listadas no imput do html, definidas como ID
const form = document.getElementById("form");
const username = document.getElementById("username");
const cpf_cnpj = document.getElementById("cpf-cnpj");
const NumTelefone  = document.getElementById("NumTelefone ");
const NumCelular  = document.getElementById("NumCelular");
const nuncep  = document.getElementById("nuncep");
const nuncasa  = document.getElementById("nuncasa");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});
 
 // verifica os imputs para definir se altera as classes do controle de formulario em erro ou não
function checkInputs() {
  const usernameValue = username.value;
  const emailValue = email.value;


  if (usernameValue === "") {
    setErrorFor(username, "O nome de usuário é obrigatório.");
  } else {
    setSuccessFor(username);
  }

  if (NumTelefoneValue === "" || NumCelularvalue === "") {
    setErrorFor(Fones, "Favor informar pelo ao menos 1 telefone.");
  }  else {
    setSuccessFor(Fones);
  }

  if (nuncepValue === "" ) {
    setErrorFor(cep, "Favor informar o CEP.");
  }  else {
    setSuccessFor(cep);
  }

  
  if (nuncasa === "" ) {
    setErrorFor(nuncasa, "Favor informar o numero residencial.");
  }  else {
    setSuccessFor(nuncasa);
  }

  const formControls = form.querySelectorAll(".form-control");

  const formIsValid = [...formControls].every((formControl) => {
    return formControl.className === "form-control success";
  });

  if (formIsValid) {
    console.log("O formulário está 100% válido!");
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  // Adiciona a mensagem de erro
  small.innerText = message;

  // Adiciona a classe de erro
  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;

  // Adicionar a classe de sucesso
  formControl.className = "form-control success";
}


  let cep = document.querySelector('#cep');
  let endereco = document.querySelector('#endereco');
  let bairro = document.querySelector('#bairro');
  let cidade = document.querySelector('#cidade');
  let uf = document.querySelector('#uf');
  cep.value = '';
  cep.addEventListener('blur', function(e){
    let nuncep = e.target.value;
    let script = document.createElement('script');
    script.src = 'https://viacep.com.br/ws/'+ nuncep + '/json/?callback=popularform';
    document.body.appendChild(script);
  })

  function popularform(resposta){
    if('erro' in resposta){
      alert('Cep não encontrado');
      return
    }

    endereco.value = resposta.logradouro;
    bairro.value = resposta.bairro;
    cidade.value = resposta.localidade;
    uf.value = resposta.uf;
  }

