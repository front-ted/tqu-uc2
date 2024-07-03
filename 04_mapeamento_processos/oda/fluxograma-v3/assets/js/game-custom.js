// Aqui você adiciona ou remove os containers pra onde devem ir os cards
var containers = [
  // Container com os cards que serão realocados
  // Não mexer
  document.querySelector(".fluxograma-1 .card-container"),
  document.querySelector(".fluxograma-2 .card-container"),

  // Containers que irão receber os cards
  document.querySelectorAll(".slot-1")[0],
  document.querySelectorAll(".slot-1")[1],
  document.querySelectorAll('.slot-2')[0],
  document.querySelectorAll('.slot-2')[1],
  document.querySelectorAll('.slot-3')[0],
  document.querySelectorAll('.slot-3')[1],
  document.querySelectorAll('.slot-4')[0],
  document.querySelectorAll('.slot-4')[1],
  document.querySelectorAll('.slot-5')[0],
  document.querySelectorAll('.slot-5')[1],
  document.querySelectorAll('.slot-6')[0],
  document.querySelectorAll('.slot-6')[1],
  document.querySelectorAll('.slot-7')[0],
  document.querySelectorAll('.slot-7')[1],
  document.querySelectorAll('.slot-8')[0],
  document.querySelectorAll('.slot-8')[1],
  document.querySelectorAll('.slot-9')[0],
  document.querySelectorAll('.slot-9')[1],
  document.querySelectorAll('.slot-10')[0],
  document.querySelectorAll('.slot-10')[1],
  document.querySelectorAll('.slot-11')[0],
  document.querySelectorAll('.slot-11')[1],
  document.querySelectorAll('.slot-12')[0],
  document.querySelectorAll('.slot-12')[1],
  document.querySelectorAll('.slot-13')[0],
  document.querySelectorAll('.slot-13')[1],
  document.querySelectorAll('.slot-14')[0],
  document.querySelectorAll('.slot-14')[1],
  document.querySelectorAll('.slot-15')[0],
  document.querySelectorAll('.slot-15')[1],
  document.querySelectorAll('.slot-16')[0],
  document.querySelectorAll('.slot-16')[1]
];
var audio = new Audio();
var erro = 0;

// Solução ao dragindrop
var scrollable = true;

var listener = function (e) {
  console.log(scrollable)
  if (!scrollable) {
    e.preventDefault();
  }
};

document.addEventListener('touchmove', listener, { passive: false });
let drake;
// Solução ao dragindrop
function setupDragula() {
  console.log('setting dragula up')
  drake = dragula({
    containers: containers,
    revertOnSpill: true,
    direction: 'vertical',
    accepts: function (el, target, source, sibling) {
      return target.classList.contains(el.dataset.target);
    }
  }).on('drag', function (el, source) {
    // On mobile this prevents the default page scrolling while dragging an item.
    scrollable = false;
  }).on("drop", function (el, target) {
    console.log(target.classList)
    scrollable = true;
    $(el).parents('.elemento').addClass('correto');
    let slots = $(el).parents('.game-container').find('.fluxograma-row .slot');
    let qtCorretos = $(el).parents('.game-container').find('.correto').length;

    if (slots.length == qtCorretos) {

      // feedback positivo
      const feedback = $(el).parents('.game-container').find('.feedback-positivo');
      const btnContinuar = $(el).parents('.game-container').find('.btn-continuar')
      $(feedback).fadeIn();
      let proxTela = $(el).parents('.tela').next();
      console.log(proxTela)
      $(btnContinuar).click(function () {
        $(el).parents('.tela').fadeOut();
        $(proxTela).fadeIn();
        setTimeout(() => {
          let msg = proxTela.find('.hidden')[0];
          $(msg).removeClass('hidden')
        }, 500);
      })
    }
  }).on("cancel", function (el, target) {
    console.log(target.classList)
    scrollable = true;
    // feedback negativo
    const feedback = $(el).parents('.game-container').find('.feedback-negativo');
    $(feedback).addClass('active');
    setTimeout(() => {
      $(feedback).removeClass('active');
    }, 3000);
    audio.setAttribute('src', 'audios/erro.mp3'); //change the source
    audio.load(); //load the new source
    audio.play(); //play
  });
};
setupDragula();

// document.addEventListener('touchmove', function(e) { e.preventDefault(); }, { passive:false });
function resetCards() {
  $('.correto').removeClass('correto');
  const arrayFluxograma1 = $('.fluxograma-1.game-container .slot .card');
  const arrayFluxograma2 = $('.fluxograma-1.game-container .slot .card');
  for (let index = 0; index < arrayFluxograma1.length; index++) {
    console.log($('.fluxograma-1.game-container .slot .card')[index])
    $('.fluxograma-1 .card-container')[0].append($('.fluxograma-1.game-container .slot .card')[0])
  };
  for (let index = 0; index < arrayFluxograma2.length; index++) {
    console.log($('.fluxograma-2.game-container .slot .card')[index])
    $('.fluxograma-2 .card-container')[0].append($('.fluxograma-2.game-container .slot .card')[0])
  };
};

$('.btn-restart').click(function () {
  resetCards();
  $('.feedback-positivo').fadeOut();
  $('.fluxograma-1.game-container').fadeOut();
  $('.fluxograma-1.modelo').fadeIn();
  $('.fluxograma-2.game-container').fadeOut();
  $('.fluxograma-2.modelo').fadeIn();
  $('.tela-final').fadeOut();
  $('.tela-1 .msg').addClass('hidden');
  $('.tela-2 .msg').addClass('hidden');
  $('.loading').removeClass('loading');

  setTimeout(() => {
    $('.tela-inicial').fadeIn();
    $('.tela-1 .backdrop').fadeIn();
    $('.tela-2 .backdrop').fadeIn();
    $('.tela-inicial .backdrop').fadeIn();
    $('.tela-1').fadeIn();
  }, 500);
});