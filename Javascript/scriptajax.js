$(function(){

    $txt_cep = $('#txt_cep');

    $txt_cep.mask("99999-999");

    $txt_logradouro = $('#txt_logradouro');
    $txt_bairro = $('#txt_bairro');
    $txt_localidade = $('#txt_localidade');
    $txt_uf = $('#txt_uf');
    
    $txt_cep.bind('keydown', function(event){ 
        if(event.keyCode == 13){ 
          event.preventDefault();


    
          //validar se o campo CEP tem pelo menos 8 caracteres
            if($txt_cep.val().length < 8){
                alert('O CEP deve ter pelo menos 8 digitos.');
                $txt_cep.val("");
                return false;
                }

            $txt_cep.next('span').removeClass('hide');

            var $option = {
                "url" : "https://viacep.com.br/ws/"+$txt_cep.val().replace("-","") + "/json/",
            };

            $.ajax($option).done(function($data){
                $txt_logradouro.val($data.logradouro);
                $txt_bairro.val($data.bairro);
                $txt_localidade.val($data.localidade);
                $txt_uf.val($data.uf);
            }).always(function(){
                $txt_cep.next('span').addClass('hide'); 
            });
        }
      });


});