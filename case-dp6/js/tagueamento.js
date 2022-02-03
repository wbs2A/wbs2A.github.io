// Preencha este arquivo com qualquer código que você necessite para realizar a
// coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag 
// Manager. No último caso, não é necessário implementar a tag <noscript>.
// O ambiente dispõe da jQuery 3.5.1, então caso deseje, poderá utilizá-la
// para fazer a sua coleta.
// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato.
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-5SMMFB7G19');

let label_name    = null;
let category_name = null;
let action_name   = null;

 $('.card-montadoras').on('click',function(e){
    var card_name = $(this).attr('data-name')
    console.log(card_name, 'mandei')
    label_name    = card_name
    category_name = 'analise'
    action_name   = 'ver_mais'
    gtag('event', 'click', {
        eventCategory: 'BT CARD MONTADORA',
        eventLabel: card_name
    });

    gtag('event', 'ver_mais', {
    'send_to': [
      'GTM-NTD9D6T',
      'G-5SMMFB7G19'
    ],
    'items': {
      'category'  : 'EVENTO CARD MONTADORAS',
      'Categoria' : 'analise',
      'Ação'      : 'ver_mais',
      'Rótulo'    : $(this).attr('data-name'),
      'label_name'    : card_name,
      'category_name' : 'analise',
      'action_name'   : 'ver_mais'
    }
    });

 })
