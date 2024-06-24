var FXManager = {
    snd_certo : new Audio("assets/snd/acerto.mp3"),
    snd_erro : new Audio("assets/snd/erro.mp3"),
    snd_aplauso : new Audio("assets/snd/aplauso.mp3"),
}

function Checker(el){
    var c = $(el).parent().parent().parent().find('.certo').not('.bt-alts, .bt-res');
    var e = $(el).parent().parent().parent().find('.enunciado');
    console.log("parent= ",$(el).parent().parent().parent());
    console.log('enunciados=',e.length)
    console.log('certos=', c.length)
    if(c.length == e.length){
        console.log('terminou');
        FXManager.snd_aplauso.play();
    }
}


/**
 *Bem simples, coloca a classe esquemaDaBru no container, e alt-c na alternativa certa ,
  alt-e na alternativa errada
 */

  var EsquemaDaBru = {
    init: function(){
        console.log('Esquema init')
        eb = this;
        $(".esquemaDaBru .alt-e").on('click', function(){           
            eb.clear(this);
            $(this).addClass('errado');
            //$(this).parent().find('button').prop('disabled', true);
            FXManager.snd_erro.play();                  
            
        })
        $(".esquemaDaBru .alt-c").on('click', function(){            
            eb.clear(this);
            $(this).addClass('certo');
            //$(this).parent().find('button').prop('disabled', true);
            FXManager.snd_certo.play();            
           
        })
        //acessibilidade
        $('.enunciado').attr('tabindex',0);
        //$('.enunciado').attr('role','dialog');
        $('.esquemaDaBru .alt-c,.esquemaDaBru .alt-e').attr('title','alternativa: ')
       

    },   
    clear: function(el){      
        $(el).parent().find('.alt-c').removeClass('certo');
        $(el).parent().find('.alt-e').removeClass('errado');
    },
    check: function(el){
        console.log('check')
        console.log('certos >>', $(el).parent().parent().parent().find('.esquemaDaBru .certo').length)
        console.log('esquemas da bru >>', $(el).parent().parent().parent().find('.esquemaDaBru').length)
        if($(el).parent().parent().parent().find('.esquemaDaBru .certo').length == $(el).parent().parent().parent().find('.esquemaDaBru').length){
            console.log('aqui')
            Checker(el);
        }
    }
}



//window.addEventListener('load', function(){
    EsquemaDaBru.init();  
//})