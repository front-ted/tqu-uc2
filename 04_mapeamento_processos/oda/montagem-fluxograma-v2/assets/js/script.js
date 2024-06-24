window.onload = () => {
    setTimeout(() => {
        $('.loader').fadeOut();
        setTimeout(() => {
            $('.oda-fluxograma .tela-inicial .msg').fadeIn();
        }, 700);
    }, 1000);
}
$('.tela-2').hide();
$('.tela-final').hide();
$('.game-container').hide();
$('.btn-start').click(function () {
    $('.tela-inicial').fadeOut();
    $('.tela-1 .msg').removeClass('hidden');
});

$('.start-fluxograma').click(function () {
    const tela = $(this).parents('.tela');
    const contador = $(tela).find('.load');
    const fluxogramaModelo = $(tela).find('.modelo');
    const gameContainer = $(tela).find('.game-container');
    $(tela).children('.backdrop').fadeOut();
    $(contador).addClass('loading');
    setTimeout(() => {
        $(fluxogramaModelo).fadeOut();
        setTimeout(() => {
            $(gameContainer).fadeIn();
        }, 800);
    }, 3000);
});