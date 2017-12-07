import superagent from 'superagent';

const connect = props => {
    const CEP = props;
//function connect (CEP){
  window.alert(CEP);
  var url = 'https://viacep.com.br/ws/' + CEP + '/json/'
  superagent.get(url).then(
        response => {
          if (response.status !== 200) {
              window.alert('Looks like there was a problem. Status Code: ' +
              response.status);
              console.log(url,response,CEP) ;
          }
          console.log(response)
          console.log(typeof(response))
          
            const { logradouro: rua, localidade: cidade, bairro, erro} = response.body;
            if(erro == true){
                alert("CEP inválido");
            }else{
            const endereco = 'Endereco: ' + rua + ', ' + bairro + ', ' + cidade +'. CEP: ' + CEP;
            console.log(endereco);
            return endereco
        }
        }
      )
      .catch(function(err) {
          window.alert('Fetch Error :-S', err);
          alert("CEP inválido");
      });       
      window.alert(CEP)

    }

    export default connect;


    