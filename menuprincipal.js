function imprime_menu()
{    
    var escolha = prompt ("MENU 1: \n1. Calculadora Simples \n2. Media das notas \n3. Encerrar \nEscolha o numero: ") ;

    while (!(escolha == "1" || escolha == "2" || escolha == "3")) 
    {
        var escolha = prompt ("Resposta invalida. Digite 1, 2 ou 3. \nMENU 1: \n1. Calculadora Simples \n2. Media das notas \n3. Encerrar \nEscolha o numero: ") ;
    }
    return escolha
}


function imprime_menu2()
{    
    var escolha = prompt ("MENU 2: \n1. Soma \n2. Subtração \n3. Multiplicação \n4. Divisão. \nEscolha o numero: ")

    while (!(escolha == "1" || escolha == "2" || escolha == "3" || escolha == "4")) 
    {
        var escolha = prompt ("Resposta invalida. Digite 1, 2, 3 ou 4: \nMENU 2: \n1. Soma \n2. Subtração \n3. Multiplicação \n4. Divisão. \nEscolha o numero: ") ;
    }
    return escolha
}

function pega_nota_valida(disciplina)
{
    var nota = parseFloat (prompt (`Quanto você tirou em ${disciplina}`) ) ;
    while (nota<0 || nota > 10)
    {
        var nota = parseFloat (prompt (`Resposta invalida. Digite uma nota entre 0 e 10 para ${disciplina}: `)) ;
    }
    return nota
}


do 
{
    var escolha = imprime_menu() ;

    switch ( escolha ) 
    {
        /*
        MENU 1:
        1. Calculadora Simples
        2. Media das notas 
        3. Encerrar 
        */
        case "1": //1. Calculadora Simples 
        {

            var operacao = imprime_menu2() ;
            if (operacao != "4") //se nao for divisão
            {
                var numero1 = parseFloat ( prompt ( "Digite o número: " )) ;
                var numero2 = parseFloat ( prompt ( "Digite outro número: " )) ;  
            }
            else //se for divisao
            {
                var numero1 = parseFloat ( prompt ( "Digite o numerador: " )) ;
                var numero2 = parseFloat ( prompt ( "Digite o denominador: " )) ;
                while (numero2 == 0)
                {
                    var numero2 = prompt ("Denominador nao pode ser zero! Digite outro valor: ") ;
                }

            }
            switch ( operacao ) 
            {
            /*
                MENU 2:
                1. Soma 
                2. Subtração 
                3. Multiplicação 
                4. Divisão.
            */ 
                case "1": //1. Soma 
                    alert ( `O resultado da soma é ${numero1 + numero2}` ) ; 
                    break ;
                case "2": //2. Subtração 
                    alert ( `O resultado da subtração é ${numero1 - numero2}` ) ; break ; 
                case "3": //3. Multiplicação 
                alert ( `O resultado da multiplicação é ${numero1 * numero2}` ) ; break ;
                case "4": //4. Divisão.
                alert ( `O resultado da divisão é ${numero1 / numero2}` ); 
                break ; 
            }
        } break ;
        case "2": //2. Media das notas 
        {
            //Pesos:
            peso1 = 1.5
            peso2 = 1.5
            peso3 = 3
            peso4 = 4
            
            //Notas
            var nota1 = pega_nota_valida("Comunicação") ;
            var nota2 = pega_nota_valida("Português") ;
            var nota3 = pega_nota_valida("Programação") ;
            var nota4 = pega_nota_valida("Matemática") ;

            //Média Ponderada:
            var resultado = ((nota1 * peso1) + (nota2 * peso2)+ (nota3 * peso3) + (nota4 * peso4)) / (peso1 + peso2 + peso3 + peso4)
            
            if (resultado >= 7) 
            {
                alert (`Parabéns, você passou de Média! Sua média foi ${resultado}`)
            }
            else if (resultado >= 5)
            {
                alert(`:O Você está em recuperação... Sua média foi ${resultado}, há uma chance, meu xará! FORÇA!  `)
            }
            else 
            {
                alert(`...KKKKKKKKKKK...KKKKK...REPROVADO! Sua média foi ${resultado}...`);
            }
        } break;
        case "3": //3. Encerrar 
            alert ( "Obrigado por usar o programa, até logo!" );
            break;
    }
}while (escolha != 3 );



