$(document).ready(function(){
    $('nav button').click(function(){       
        $('header').fadeOut(100);
        $('section').fadeOut(100);
        let mod = 'content.html?mod=' +  $(this).data('mod');
        console.log(mod);
        setTimeout(function(){
            window.location = mod;
        }, 100)
    })
})