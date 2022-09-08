var clientes = [] 
do{
    var opcao = parseInt(prompt(`Escolha uma dessas opções
1 - Cadastrar um novo cliente;
2 - Consultar um cliente específico;
3 - Excluir um cliente específico;
4 - Listar todos os clientes.
5 - Encerrar o programa.`))

    switch(opcao){
        case 1:{
            var cliente = {
                nome: prompt("Qual o nome do cliente?"),
                cpf: prompt("Qual o CPF do cliente?"),
                endereço: prompt("Qual o endereço do cliente?"),
                email: prompt("Qual o email do cliente?"),
                telefone: prompt("Qual o telefone do cliente?")
            }
           
            clientes.push(cliente)

        };break;
        case 2: {
            var nome_procurado =prompt("Qual o nome do cliente que você quer consultar?")

            for (var i = 0; i < clientes.length; i++) {
                if (nome_procurado == clientes[i].nome)
                {
                    alert(JSON.stringify(clientes[i]))
                    break;
                }
                
            }
        }break;
        case 3: {
            var nome_excluir =prompt("Qual o nome do cliente que você quer excluir?")

            for (var i = 0; i < clientes.length; i++) {
                if (nome_procurado == clientes[i].nome)
                {
                    clientes.splice(i,1)                    
                    break;
                }
                
            }
        }break;
        case 4: {
            alert(JSON.stringify(clientes))
        }
    }  
}while(opcao != 5)
