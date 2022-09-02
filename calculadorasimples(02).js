/* Que diferença entre esses dois códigos. Um é prolixo e outro fala pouco , mas fala o necessário, ha, ha!
^^'
*/
var operacoes = prompt ( "Você deseja soma, subtração, multiplicação ou divisão? Escreva o que você quer" )
var numero1 = parseFloat ( prompt ( "Digite um número: " ))
var numero2 = parseFloat ( prompt ( "Digite outro número: " ))
switch ( operacoes ) {
    case "soma": alert ( `O resultado da soma é ${numero1 + numero2}` ) ; break ;
    case "subtração": alert ( `O resultado da subtração é ${numero1 - numero2}` ) ; break ; 
    case "multiplicação": alert ( `Ò resultado da multiplicação é ${numero1 * numero2}` ) ; break ;
    case "divisão": alert ( `O resultado da divisão é ${numero1 / numero2}` ); break ; 
}