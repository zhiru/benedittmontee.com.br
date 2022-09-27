
// FULLMOBILE
FULLMOBILE = [
    {
        link: 'https://www.benedittmontee.com.br/sale',
        image: 'https://cdn.awsli.com.br/2202/2202038/arquivos/BANNER ROTATIVO 01 - V03.jpg',
    },
    {
        link: 'https://www.benedittmontee.com.br/nova-colecao',
        image: 'https://cdn.awsli.com.br/2202/2202038/arquivos/BANNER ROTATIVO 01.jpg',
    },
    {
        link: '#',
        image: 'https://cdn.awsli.com.br/2202/2202038/arquivos/BANNER ROTATIVO 03 - V03.jpg',
    },
    {
        link: '#',
        image: 'https://cdn.awsli.com.br/2202/2202038/arquivos/BANNER ROTATIVO 02 - V03.jpg',
    },
];


// Página publicação = todas as páginas
// Local de publicação = rodape
// tipo = javascript

// DEPOIMENTOS
DEPOIMENTOS = [
    {
        imagem: 'https://cdn.awsli.com.br/2202/2202038/arquivos/fran.jpg',
        nome: 'Fran',
        cargo: 'São Jose do Anta - MG',
        depoimento: 'Adorei! Os produtos de exelente qualidade. Vou recomendar a todos os meus amigos, com certeza.'
    },
    {
        imagem: 'https://cdn.awsli.com.br/2202/2202038/arquivos/leo.jpg',
        nome: 'Leopoldina',
        cargo: 'Copacabana - RJ',
        depoimento: '<Muito carinho com o produto e bem embalado.'
    },
    {
        imagem: 'https://cdn.awsli.com.br/2202/2202038/arquivos/renata.jpg',
        nome: 'Renata',
        cargo: 'Governador Valadares - MG',
        depoimento: 'Exelente acabamento e muito capricho e delicadeza com a embalagem.'
    },
    {
        imagem: 'https://cdn.awsli.com.br/2202/2202038/arquivos/jana.jpg',
        nome: 'Janaina',
        cargo: 'Governador Valadares - MG',
        depoimento: 'Adorei! Produto de exetente qualidade e otimo bom gosto .'
    },
    {
        imagem: 'https://cdn.awsli.com.br/2202/2202038/arquivos/carol lima.jpg',
        nome: 'Carol Lima',
        cargo: 'Governador Valadares - MG',
        depoimento: 'Muito bom gosto, é a segunda vez que compro e recomendo .'
    },
    {
        imagem: 'https://cdn.awsli.com.br/2202/2202038/arquivos/narjara.jpg',
        nome: 'Narjara',
        cargo: 'Ipatinga- MG',
        depoimento: 'Amei o cuidado da embalagem e o cheirinho maravilhoso.'
    },
    {
        imagem: 'https://cdn.awsli.com.br/2202/2202038/arquivos/sione.jpg',
        nome: 'Larissa',
        cargo: 'Belo Horizonte- MG',
        depoimento: 'Exelente qualidade e o atendimento exelente.'
    },
];

    $(function(){
        
        $("img").each(function(){this.src=this.src.replace("https://cdn.awsli.com.br/300x300/","https://cdn.awsli.com.br/")})

        setInterval(function(){
            $("img").each(function(){this.src=this.src.replace("https://cdn.awsli.com.br/300x300/","https://cdn.awsli.com.br/")})
        }, 5000)
    
        template = $('.template-slider').html();
        if(template != ""){
            $('.barra-inicial.fundo-secundario').before(template);
            $('#topo-slider').flexslider({
                animation: "slide",
                controlNav: false
            });
            // $('.barra-inicial.fundo-secundario').remove();
        }
        
        templateLogo = $('.conteiner-principal #cabecalho .conteiner h2.logo').html();        
        templateSearch = $('.conteiner-principal #cabecalho .conteudo-topo .busca-mobile').html();
        console.log(templateLogo);
        console.log(templateSearch);
        
        setTimeout(function(){
            Fancybox.bind('.secao-principal span.produto img');    
        }, 1000)
    })
    
