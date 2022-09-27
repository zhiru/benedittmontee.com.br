
    $(function(){
    
        template = $('.template-slider').html();
        $('.barra-inicial.fundo-secundario').before(template);
        $('#topo-slider').flexslider({
            animation: "slide",
            controlNav: false
        });
        // $('.barra-inicial.fundo-secundario').remove();
        
        templateLogo = $('.conteiner-principal .cabecalho .conteiner').html();        
        templateSearch = $('.conteiner-principal .cabecalho .conteiner').html();
        console.log(templateLogo);
    })
    
