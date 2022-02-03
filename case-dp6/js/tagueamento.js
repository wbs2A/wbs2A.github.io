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

//including analytics
ga('create', 'UA-12345-6', 'auto');

$('.card-montadoras').on('click',function(e){
    var card_name = $(this).attr('data-name')
    dataLayer.push({
     'event': 'ver_mais',
      'label_name'    : card_name,
      'category_name' : 'analise',
      'action_name'   : 'ver_mais'
    })

    ga('send', {
      hitType: 'ver_mais',
      eventCategory: 'analise',
      eventAction: 'ver_mais',
      eventLabel: card_name
    });

})

$('.menu-lista-contato').on('click', function(e){
    dataLayer.push({
     'event': 'entre_em_contato',
      'label_name'    : 'link_externo',
      'category_name' : 'menu',
      'action_name'   : 'entre_em_contato'
    })
    ga('send', {
      hitType: 'entre_em_contato',
      eventCategory: 'menu',
      eventAction: 'entre_em_contato',
      eventLabel: 'link_externo'
    });
})

$('.menu-lista-download').on('click', function(e){
    dataLayer.push({
     'event': 'download_pdf',
      'label_name'    : 'download_pdf',
      'category_name' : 'menu',
      'action_name'   : 'download_pdf'
    })
    ga('send', {
      hitType: 'download_pdf',
      eventCategory: 'menu',
      eventAction: 'download_pdf',
      eventLabel: 'download_pdf'
    });
})

$(".contato :input").on('change', function(){
    var field_name = $(this).attr('id')
    dataLayer.push({
        'event': 'preencheu',
        'label_name'    : 'preencheu',
        'category_name' : 'contato',
        'action_name'   : field_name
    })
    ga('send', {
      hitType: 'preencheu',
      eventCategory: 'contato',
      eventAction: field_name,
      eventLabel: 'preencheu'
    });
})

$('.contato').on('submit', function (e){
    dataLayer.push({
     'event': 'enviado',
      'label_name'    : 'enviado',
      'category_name' : 'contato',
      'action_name'   : 'enviado'
    })
    ga('send', {
      hitType: 'enviado',
      eventCategory: 'contato',
      eventAction: 'enviado',
      eventLabel: 'enviado'
    });
})