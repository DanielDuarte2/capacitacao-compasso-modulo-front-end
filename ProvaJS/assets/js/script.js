
//cria o slider na div e define suas propriedades
$('.container-dealimg').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    arrows:true,
    centerMode: true
});


var $debug = true;
var $campo_busca = document.getElementById('search');
var $container_resultados = document.getElementById('container-resultado');
var $sugestoes_produtos = document.getElementById('sugestoes-produtos');
var $resultado_busca = document.getElementById('resultado-busca');



$container_resultados.style.display = "none";


//array de sugestoes de produtos
var $ar_sugestoes_produtos = [
    "Notebooks",
    "Smartphones",
    "TVs",
    "Moveis",
    "Cozinha"
];


//crio um array de objetos com as informacoes que serao retornadas na busca
var $ar_resultado_busca = [
    {
        "nome" : "Smartphone Samsung Galaxy J7",
        "link" : "#",
        "preco" : 919.00
    },
    {
        "nome" : "Smart TV Samsung",
        "link" : "#",
        "preco" : 1999.99
    },
    {
        "nome" : "Notebook Lenovo",
        "link" : "#",
        "preco" : 2499.99
    }
];




//metodo que manda para o documento o conteudo do array de sugestoes e coloca
function renderizaSugestoes(){
    var $retorno = "";

    for(var $i in $ar_sugestoes_produtos){

        $retorno += "<p>"+$ar_sugestoes_produtos[$i]+"</p><br>";
    };
    $sugestoes_produtos.innerHTML = $retorno;
};


//metodo que manda para o documento o conteudo do array de busca e coloca na div de resultados de busca na div destinada
function renderizaResultadoBusca(){
    var $retorno = "";

    for(var $i in $ar_resultado_busca){
        $retorno += "<div>" +
                    "<p>" +$ar_resultado_busca[$i].nome+" </p>" +
                    "<p>R$: " +$ar_resultado_busca[$i].preco+ " </p>" +
                    "<a href='"+ $ar_resultado_busca[$i].link + "'>Veja mais</a><br>" + 
                    "</div>";
    }

    $resultado_busca.innerHTML = $retorno;
};        


//define que ao entrar no campo pesquisa as sugestoes de produtos aparecerao
//se houver caracteres no campo as sugestoes de busca aparecerao
$campo_busca.onfocus =function(){
    $container_resultados.style.display = "block";
    $container_resultados.style.position = "absolute";
    $container_resultados.style.zIndex = "1";

    if(this.value.length === 0){
        $sugestoes_produtos.style.display = "block";
        $resultado_busca.style.display = "none";
        renderizaSugestoes(); 
    } else {
        $sugestoes_produtos.style.display = "block";
        $resultado_busca.style.display = "block";
        renderizaResultadoBusca();
        $sugestoes_produtos.style.display = "none";
    } 
}

/*define que quando o usuario digitar algo no campo pesquisa, os resultados de busca se tornarao visiveis
e as sugestoes serao escondidas
*/
$campo_busca.onkeyup = function(){
    $container_resultados.style.display = "block";
    $container_resultados.style.position = "absolute";
    $container_resultados.style.zIndex = "1";
   

    if(this.value.length === 0){
        $sugestoes_produtos.style.display = "block";
        $resultado_busca.style.display = "none";
        renderizaSugestoes(); 
    } else {
        $sugestoes_produtos.style.display = "block";
        $resultado_busca.style.display = "block";
        renderizaResultadoBusca();
        $sugestoes_produtos.style.display = "none";
    }

    
};


//ao sair do campo a div de resultados desaparece
$campo_busca.onblur = function(){
        $container_resultados.style.display = "none";
};


/*
//funcao para validar emails inacabada
$(function(){

$txt_email = $('#txt_email');



function isEmail($email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test($email);
  }

  $txt_email.bind('keydown', function(event){ 
        if(event.keyCode == 13){ 
        
            if($txt_email.val().length < 3){
                alert('O email deve ter pelo menos 8 digitos.');
                $txt_email.val("");
                return false;
                }
            
        if( !isEmail($txt_email)) {
            
        };

    }
  });
});*/