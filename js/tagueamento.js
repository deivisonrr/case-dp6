// Preencha este arquivo com qualquer código que você necessite para realizar a
// coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag 
// Manager. No último caso, não é necessário implementar a tag <noscript>.
// O ambiente dispõe da jQuery 3.5.1, então caso deseje, poderá utilizá-la
// para fazer a sua coleta.
// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato.

document.addEventListener('submit', function(e) {

  var form = e.target;

  if (!form.classList.contains('contato')) return;

  var nome = document.getElementById('nome');
  var email = document.getElementById('email');
  var telefone = document.getElementById('telefone');
  var aceito = document.getElementById('aceito');

  // validação real
  var invalido =
    !nome.value.trim() ||
    !email.value.trim() ||
    !telefone.value.trim() ||
    !aceito.checked;

  if (invalido) {
    e.preventDefault();
    e.stopImmediatePropagation(); // 🔥 ESSENCIAL

    console.log('Form bloqueado (vazio)');

    return false;
  }

}, true); // 🔥 capture phase