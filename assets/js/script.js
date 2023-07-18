let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let mensagem = document.querySelector('#mensagem')
let nomeOk = false
let emailOk = false
let mensagemOk = false
let mapa = document.querySelector('#mapa')

function validarNome() {
   let txtNome = document.querySelector('#txtNome')

   if (nome.value.length < 3) {
      txtNome.innerHTML = '❌ Nome inválido'
      txtNome.style.color = 'red'
   } else {
      txtNome.innerHTML = '✅ Nome válido'
      txtNome.style.color = 'green'
      nomeOk = true
   }

}

function validarEmail() {
   let txtEmail = document.querySelector('#txtEmail')

   if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
      txtEmail.innerHTML = '❌ E-mail inválido'
      txtEmail.style.color = 'red'
   } else {
      txtEmail.innerHTML = '✅ E-mail válido'
      txtEmail.style.color = 'green'
      emailOk = true
   }
}

function validarMensagem() {
   let txtMensagem = document.querySelector('#txtMensagem')

   if (mensagem.value.length > 500) {
      txtMensagem.innerHTML = 'Você ultrapassou o limite máximo de 500 caracteres :('
      txtMensagem.style.color = 'red'
      txtMensagem.style.display = 'block'
   } else {
      txtMensagem.style.display = 'none'
      mensagemOk = true
   }
}

function enviar() {
   if (nomeOk == true && emailOk == true && mensagemOk == true) {
      alert('Formulário enviado com sucesso!')
   } else {
      alert('Por favor, verifique as informações antes de enviar...')
   }
}

function mapaZoom() {
   mapa.style.width = '800px'
   mapa.style.height = '600px'
}

function mapaNormal() {
   mapa.style.width = '390px'
   mapa.style.height = '225px'
}