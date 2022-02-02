// Preencha este arquivo com qualquer código que você necessite para realizar a
// coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag 
// Manager. No último caso, não é necessário implementar a tag <noscript>.
// O ambiente dispõe da jQuery 3.5.1, então caso deseje, poderá utilizá-la
// para fazer a sua coleta.
// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato.

  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-E7SSJ8VB0H');


 $('.card-montadoras').on('click',function(e){
    var card_name = $(this).attr('data-name')
    console.log(card_name, 'mandei')
    gtag('event', 'click', {
        eventCategory: 'BT CARD MONTADORA',
        eventLabel: card_name
    });
    gtag('event', 'click', { 'send_to': 'G-E7SSJ8VB0H' });

 })