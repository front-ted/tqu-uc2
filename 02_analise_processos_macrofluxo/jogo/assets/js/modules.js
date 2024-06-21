$(document).ready(function(){
  
    //$('section').hide(0);
    //$('.transicao ').hide(0);
   // $('header').hide(0);
   //$('nav#topicos').hide();
    redirect(window.location.href);
})

var fade_duration = 300;

function redirect(addr){
    let mod = "";
    try{
        let params = addr.split('?')[1].split('&');
        console.log(params);
        mod = params[0].toString();
        console.log(mod);
    } catch(error){
        console.warn('sem parametros - mostra tudo');
        mod = "";
    }
    $('header').fadeIn(fade_duration);
    $('nav#topicos').fadeIn(fade_duration);
    switch (mod){
        case "mod=1": 
            console.warn('modulo 01')
            $('nav#topicos').css('background-color','#95ba78');
            $('#bt-prev-topic').hide();
            //$('#bt-next-topic').html("Módulo II");
            $('section#tela-inicial').fadeIn(fade_duration);
            $('.transicao.t01').fadeIn(fade_duration);
            $('section#modulo_1').fadeIn(fade_duration);
            $('.transicao.t02').fadeIn(fade_duration);
            break;
        case 'mod=2':    
            $('header').css('background-color','#95ba78');
            $('nav#topicos').css('background-color','#3973B1');
            //$('#bt-prev-topic').html("Módulo I");
            //$('#bt-next-topic').html("Módulo III");
            $('#bt-next-topic').attr('href', 'content.html?mod=3');
            $('section#modulo_2').fadeIn(fade_duration);
            $('.transicao.t03').fadeIn(fade_duration);
            $('section#modulo_2_1').fadeIn(fade_duration);
            $('.transicao.t04').fadeIn(fade_duration);
            $('section#modulo_2_2').fadeIn(fade_duration);
            $('.transicao.t05').fadeIn(fade_duration);
            $('section#modulo_2_3').fadeIn(fade_duration);
            $('.transicao.t06').fadeIn(fade_duration);
            $('section#modulo_2_4').fadeIn(fade_duration);
            $('.transicao.t05p').fadeIn(fade_duration);
            $('nav#topicos').css('background-color','#fff9eb');
            $('nav#topicos a.btn').css('border','2px solid #3973B1');
            break;
        case 'mod=3': 
            $('#bt-prev-topic').attr('href', 'content.html?mod=2');
            $('nav#topicos').css('background-color','#3973B1');
            //$('#bt-prev-topic').html("Módulo II");
            $('#bt-next-topic').html("Encerramento");
            $('#bt-next-topic').attr('href', 'content.html?mod=4');
            $('section#modulo_3').fadeIn(fade_duration);
            $('.transicao.t07').fadeIn(fade_duration);
            $('section#modulo_3_1').fadeIn(fade_duration);
            $('.transicao.t08').fadeIn(fade_duration);
            $('section#modulo_3_2').fadeIn(fade_duration);
            $('.transicao.t09').fadeIn(fade_duration);        
            break;
        case 'mod=4': 
        
            $('nav#topicos').css('background-color','#fff9eb');
            $('nav#topicos a.btn').css('border','2px solid #3973B1');
            //$('#bt-prev-topic').html("Módulo III");
            $('#bt-prev-topic').attr('href', 'content.html?mod=3');
            $('#bt-next-topic').hide();
            $('section#encerramento').fadeIn(fade_duration);
            $('.transicao.t10').fadeIn(fade_duration);
            $('section#referencias').fadeIn(fade_duration);    
            //pra dar o curso como finalizado no scorm
            if(doLMSInitialize() === "true"){
                console.log('Scorm inicializado');
                doLMSSetValue("cmi.core.lesson_status", "completed");
                doLMSSetValue("cmi.objectives.n.status", "completed");
                doLMSCommit();  
                doLMSSetValue("cmi.core.exit", "logout"); 
                console.log('finalizado')
            } else {
                console.error('Scorm não inicializado');                
            }       
            break;
        case 'mod=editor':
            $('nav#topicos').hide();
            console.log('show all by default')
            $('section').fadeIn(fade_duration);
            $('.transicao ').fadeIn(fade_duration);
            $('header').fadeIn(fade_duration);
            break;       
        default: {
            window.location.href = 'index.html'          
        }
    }
    
}