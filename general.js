
    $(function(){
        window.consultornetmais = window.consultornetmais || {}; 
        window.consultornetmais.fst = {
            "solicitaCep": "Quer FRETE GRÁTIS? Digite o seu CEP e saiba quanto falta!",
            "sucesso": "Parabéns! O frete é por nossa conta.",
            "quantoFalta": "Faltam R$ para obter Frete Grátis.",
            "regiaoSemDesconto": {
                "frase": "Não há frete grátis para esta região.",
                "mostrarMensagem": "sim"
            },
            "custom": [
                {
                    "region": "regiao_centro_oeste-e3b8e",
                    "valor": 599.90,
                    "range": [
                        {
                        "min": "70000-000",
                        "max": "72799-999"
                        },
                        {
                        "min": "73000-000",
                        "max": "73699-999"
                        },
                        {
                        "min": "72800-000",
                        "max": "72999-999"
                        },
                        {
                        "min": "73700-000",
                        "max": "76799-999"
                        },
                        {
                        "min": "78000-000",
                        "max": "78899-999"
                        },
                        {
                        "min": "79000-000",
                        "max": "79999-999"
                        }
                    ]
                },
                {
                    "region": "regiao_nordeste-280ae",
                    "valor": 599.90,
                    "range": [
                        {
                        "min": "40000-000",
                        "max": "48999-999"
                        },
                        {
                        "min": "49000-000",
                        "max": "49999-999"
                        },
                        {
                        "min": "50000-000",
                        "max": "56999-999"
                        },
                        {
                        "min": "57000-000",
                        "max": "57999-999"
                        },
                        {
                        "min": "58000-000",
                        "max": "58999-999"
                        },
                        {
                        "min": "59000-000",
                        "max": "59999-999"
                        },
                        {
                        "min": "60000-000",
                        "max": "63999-999"
                        },
                        {
                        "min": "64000-000",
                        "max": "64999-999"
                        },
                        {
                        "min": "65000-000",
                        "max": "65999-999"
                        }
                    ]
                },
                {
                    "region": "regiao_norte-81cda",
                    "valor": 599.90,
                    "range": [
                        {
                        "min": "66000-000",
                        "max": "68899-999"
                        },
                        {
                        "min": "68900-000",
                        "max": "68999-999"
                        },
                        {
                        "min": "69000-000",
                        "max": "69299-999"
                        },
                        {
                        "min": "69400-000",
                        "max": "69899-999"
                        },
                        {
                        "min": "69300-000",
                        "max": "69399-999"
                        },
                        {
                        "min": "69900-000",
                        "max": "69999-999"
                        },
                        {
                        "min": "76800-000",
                        "max": "76999-999"
                        },
                        {
                        "min": "77000-000",
                        "max": "77999-999"
                        }
                    ]
                },
                {
                    "region": "regiao_sudeste-29161",
                    "valor": 299.90,
                    "range": [
                        {
                        "min": "00262-144",
                        "max": "19999-999"
                        },
                        {
                        "min": "20000-000",
                        "max": "28999-999"
                        },
                        {
                        "min": "29000-000",
                        "max": "29999-999"
                        },
                        {
                        "min": "30000-000",
                        "max": "39999-999"
                        }
                    ]
                },
                {
                    "region": "regiao_sul-5c3b9",
                    "valor": 599.90,
                    "range": [
                        {
                        "min": "80000-000",
                        "max": "87999-999"
                        },
                        {
                        "min": "88000-000",
                        "max": "89999-999"
                        },
                        {
                        "min": "90000-000",
                        "max": "99999-999"
                        }
                    ]
                }
            ]
        }
    
        template = $('.template-slider').html();
        $('.barra-inicial.fundo-secundario').before(template);
        $('#topo-slider').flexslider({
            animation: "slide",
            controlNav: false
        });
        // $('.barra-inicial.fundo-secundario').remove();
        
        templateLogo = $('.conteiner-principal .cabecalho .conteiner').html();
    })
    
