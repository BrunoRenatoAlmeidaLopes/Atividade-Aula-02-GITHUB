//Aluno: Bruno Renato Almeida Lopes
var peso = parseFloat ( prompt ( "Quanto você pesa?" ) ) 
var altura = parseFloat ( prompt ( "Qual a sua altura" ) ) 
var resultado = peso / ( altura * altura ) 
if ( resultado < 18.5 ) {
    alert ( "Abaixo do peso" )
}else if ( resultado >= 18.5 && resultado <= 24.9 ) {
    alert ( "Peso Normal" )
}else if ( resultado >= 25 && resultado <= 29.9 ) {
    alert ( "Sobrepeso" )
}else if ( resultado >= 30 && resultado <= 34.9 ) {
    alert ( "Obesidade grau 1" )
}else if ( resultado >= 35 && resultado <= 39.9 ) {
    alert ( "Obesidade grau 2" )
}else if ( resultado > 40 ) {
    alert ( "Obesidade grau 3" )
}
    