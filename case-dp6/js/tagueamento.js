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

$('.card-montadoras').on('click',function(e){
    var card_name = $(this).attr('data-name')
    dataLayer.push({
     'event': 'ver_mais',
      'label_name'    : card_name,
      'category_name' : 'analise',
      'action_name'   : 'ver_mais'
    })
})

$('.menu-lista-contato').on('click', function(e){
    dataLayer.push({
     'event': 'entre_em_contato',
      'label_name'    : 'link_externo',
      'category_name' : 'menu',
      'action_name'   : 'entre_em_contato'
    })
})

$('.menu-lista-download').on('click', function(e){
    dataLayer.push({
     'event': 'entre_em_contato',
      'label_name'    : 'link_externo',
      'category_name' : 'menu',
      'action_name'   : 'entre_em_contato'
    })
})