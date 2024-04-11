// caixas expansiveis
$('.caixa-container button.btpluscaixa').click(function(){
    let caixa = $(this).prev()
    if(caixa.hasClass('aberta')){
        caixa.removeClass('aberta')
        $(this).css('background-image', 'url("../03-btn-matriz/img/bt_mais2.png")')
    } else {
        caixa.addClass('aberta')
        $(this).css('background-image', 'url("../03-btn-matriz/img/bt_menos2.png")')
    }
  })

 