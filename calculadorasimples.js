/*Essa foi a minha primeira tentativa para fazer uma calculadora simples em Javascript. O professor viu e recomendou outro caminho para atingir o objetivo. Estava sendo redundante. O código que refiz, de uma forma mais simples , é o arquivo calculadorasimples(02).js
*/
var operacoes = prompt ( "Você deseja soma, subtração, multiplicação ou divisão? Escreva o que você quer" )
switch (operacoes) {
    case "soma": var numero1 = parseFloat ( prompt ( "Digite um número" ) ) ; {
                 var numero2 = parseFloat ( prompt ( "Digite outro número" ) )
                 var resultado = numero1 + numero2
                 alert ( `O resultado da soma é ${resultado}` ) 
     } ; break ;
     case "subtração": var numero1 = parseFloat ( prompt ( "Digite um número" ) ) ; {
                       var numero2 = parseFloat ( prompt ( "Digite outro número" ) )
                       var resultado = numero1 - numero2
                       alert ( `O resultado da subtração é ${resultado} ` )
    } ; break ;
    case "multiplicação": var numero1 = parseFloat ( prompt ( "Digite um número" ) ) ; {
                          var numero2 = parseFloat ( prompt ( "Digite outro número" ) )
                          var resultado = numero1 * numero2
                          alert ( `O resultado da multiplicação é ${resultado}` )
    } ; break ;
    case "divisão": var numero1 = parseFloat ( prompt ( "Digite um número" ) ) ; {
                    var numero2 = parseFloat ( prompt ( "Digite outro número" ) )
                    var resultado = numero1 / numero2
                    alert ( `O resultado da divisão é ${resultado}` )
    } ; break ;  
}