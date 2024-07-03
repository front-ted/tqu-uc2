window.onload = () => {
    setTimeout(() => {
        setTimeout(() => {

        }, 700);
    }, 1000);
}
$('.tela-2').hide();
$('.tela-final').hide();

$('.tela-inicial .start-btn').click(function () {
    $('.tela-inicial').fadeOut();
    setTimeout(() => {
        $('.tela-1 .msg').removeClass('hidden');
    }, 750);
});

$('.tela-1 .start-btn').click(function () {
    $('.tela-1 .backdrop').fadeOut();
})
$('.tela-2 .start-btn').click(function () {
    $('.tela-2 .backdrop').fadeOut();
    $('.tela-2 .select-option')[0].classList.add('active');
})

$('.opcao').click(function () {
    let activeBtn = $('.active')[0];
    let clickedOption = $(this)[0];
    if (clickedOption.dataset.answer == activeBtn.dataset.option) {
        activeBtn.append(clickedOption);
        activeBtn.classList.remove('active');
        $(activeBtn).next('button').addClass('active');
        activeBtn.classList.add('done');

        if ($(activeBtn).parents('.tela')[0].classList.contains('tela-1')) {
            if ($('#modal-fluxograma-1 .opcao').length == 0) {
                $('.tela-1').fadeOut();
                setTimeout(() => {
                    $('.tela-2').fadeIn();
                }, 750);
            }
        } else if ($(activeBtn).parents('.tela')[0].classList.contains('tela-2')) {
            if ($('#modal-fluxograma-2 .opcao').length == 0) {
                $('.tela-2').fadeOut();
                setTimeout(() => {
                    $('.tela-final').fadeIn();
                }, 750);
            }
        }
    } else {
        const modalErro = new bootstrap.Modal(document.getElementById('modal-fluxograma-erro'));
          modalErro.toggle();
    }

})

$(document).ready(function() {
    
  
    function shuffleButtons(id) {
        const $buttons = $('#'+id+' .modal-body button'); 
        const $parent = $buttons.parent();
      for (let i = $buttons.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [$buttons[i], $buttons[j]] = [$buttons[j], $buttons[i]]; // Troca os elementos
      }
      $buttons.detach().appendTo($parent); // Reinsere no DOM na nova ordem
    }
  
    shuffleButtons("modal-fluxograma-1"); // Embaralhar ao carregar a página
    shuffleButtons("modal-fluxograma-2"); // Embaralhar ao carregar a página
  });
// $('.btn-start').click(function () {
// $('.tela-inicial').fadeOut();
// $('.tela-1 .msg').removeClass('hidden');
// });

// $('.start-fluxograma').click(function () {
//     const tela = $(this).parents('.tela');
//     const contador = $(tela).find('.load');
//     const fluxogramaModelo = $(tela).find('.modelo');
//     const gameContainer = $(tela).find('.game-container');
//     $(tela).children('.backdrop').fadeOut();
//     $(contador).addClass('loading');
//     setTimeout(() => {
//         $(fluxogramaModelo).fadeOut();
//         setTimeout(() => {
//             $(gameContainer).fadeIn();
//         }, 800);
//     }, 3000);
// });