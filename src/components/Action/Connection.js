

const connect = props => {
    const CEP = props;
//function connect (CEP){
  window.alert(CEP);
  var url = 'https://viacep.com.br/ws/' + CEP + '/json/'
  return fetch(url).then(
        function(res) {
          if (res.status !== 200) {
              window.alert('Looks like there was a problem. Status Code: ' +
              res.status);
              console.log(url,res,CEP) ;
            return;
          }
    
          // Examine the text in the response
          return res.json().then(function(data) {
              console.log(data);
              console.log("deu good");
              //Jason.push(data);
             //  obj = doArrayMini(data);
              return data;
              
          });
        }
      )
      .catch(function(err) {
          window.alert('Fetch Error :-S', err);
      });         
      window.alert(CEP)

    }

    export default connect;