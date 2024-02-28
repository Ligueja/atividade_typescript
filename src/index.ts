import { Media_resultado, Notapeso, Saldos, Produto, User, Diretor } from './interfaces';

// import { User1, Diretor1, Cadastros } from './types';

// EXERCÍCIO 01: Crie uma função que receba 2 números e retorne um objeto contendo a média e também um indicador booleano de aprovado/reprovado. Considere aprovado com média >= 6.


// crianda variáveis com valores pré-definidos:
let nota1: number = 8;
let nota2: number = 6;


// função para calcular a média entre as notas pré-definidas. Tem uma verificação com IF para verificar se a média é maior ou igual a 6 (aprovado- true) ou se a média é menor que 6 (reprovado - false)
function media_resultado (nota1: number, nota2: number): Media_resultado {
    let resultado: boolean
    let media: number = (nota1 + nota2) / 2;

    if (media >= 6) {
        resultado = true;
    } else {
        resultado = false;
    }

    return {nota1, nota2, media, resultado}       
}

console.log("EXERCÍCIO 01 RESPOSTA: ", media_resultado(nota1, nota2))


// EXERCÍCIO 2. Crie uma função que receba uma lista de objetos contendo nota e peso, realize a média das notas considerando o peso. Exemplos: 
// Lista com 2 notas: (N1*P1) + (N2*P2) / 2 = Resultado
// Lista com 3 notas: (N1*P1) + (N2*P2) + (N3*P3) / 3 = Resultado

// criado array com objetos com atributos notas e pesos, com valores pré-definidos.
const notas: Notapeso[] = [
    {nota: 8, peso: 2},
    {nota: 7, peso: 3},
];


// função para calcular a média ponderada das notas e pesos, conforme atributo. Utilizado um for of para iterar o array de objetos fazendo os calculos necessários para calcular a média ponderada. Após um retorno com o calculo da médica ponderada. 
function calcular_media_ponderada (notas: Notapeso[]) {
    let somaNotas: number = 0;
    let somaPesos: number = 0;
    
    for (const notaPeso of notas) {
        somaNotas += notaPeso.nota * notaPeso.peso;
        somaPesos += notaPeso.peso 
    }

    return somaNotas / somaPesos;   
}

const mediaPonderada = calcular_media_ponderada(notas)

console.log(`EXERCÍCIO 02 RESPOSTA: lista com 2 notas a média ponerada é: ${mediaPonderada}`)


// EXERCÍCIO 3. Crie um programa que simule uma carteira de dinheiro. Este programa vai precisar ter uma carteira contendo saldo, transações de entrada e saídas. Ou seja, será um objeto com estas propriedades. Depois crie uma função para lançar uma entrada e uma saída. Caso ao lançar uma saída e não tiver saldo, precisa dar um erro ou avisar.

// criado um arrar de objetos com atributos com valores pré-fixados.
const saldoconta: Saldos[] = [
    {
    saldo: 150.00,
    entrada: 50.00,
    saida: 250.00
    }
]

// função com variáveis simulando os valores das ações depósito e saque. Após foi utilizado um for of para percorrer o array de objetos saldoconta para realizar os calculos com os valores pré-definidos com os valores de depósito e saque e calculo do saldo final. Após os calculos, foi realizada uma verificação com IF para verificar qual o saldo após as ações de saque e depósito.
function carteira_dinheiro (saldoconta: Saldos[]) {
    let deposito: number = 50.00;
    let saque: number = 50.00;
    let saldoAtual: number = 0;
    
    for (const saldos of saldoconta) {
        deposito += saldos.entrada;
        saque += saldos.saida;
        saldoAtual = saldos.saldo + deposito - saque;

    }
    
    if (saldoAtual < 0) {
        console.log(`EXERCÍCIO 03 RESPOSTA: Saque não disponível. Saldo insuficiente.`);
        return
      } else {
        console.log(`EXERCÍCIO 03 RESPOSTA: O saldo atual depois do depósito ou saque é ${saldoAtual.toFixed(2)}`)
        return
      }
}

// chamando a função para imprimir no console o resultado. 
carteira_dinheiro(saldoconta)


// EXERCÍCIO 04:  Crie um programa para cadastrar, listar e excluir produtos de uma lista com tipagem de Produto.

// criado um array vazio para armazenamento dos produtos a serem cadastrados.  
let produtos: Array<Produto> = []


// função para cadastrar o produto com seus parâmetros. .push para jogar as informações dadas pelo usuário para dentro do array produtos, onde ficará "na memória"
function cadastrarProduto (id: number, descricao: string, preco: number): void {
    const novoProduto: Produto = {
        id,
        descricao,
        preco,
    };

    produtos.push(novoProduto);

    console.log (`Produto com o ID ${id}, foi cadastrado com sucesso:`)
}


// função para listar os produtos cadastrados. primeiro é feita uma verificação com o .length, onde verifica que se o tamanha do array produtos for 0 é porque não tem nehum produto cadastrado. Foi usado o loop for of para percorrer todos os elementos do array produtos e após mostrar os mesmos em tela. 

    function listarProdutos(): void {

    if (produtos.length === 0) {
        console.log("Não há nenhum produto cadastrado!")
        
    }

    for (const produto of produtos) {
        console.log (`ID: ${produto.id}, Descrição: ${produto.descricao}, Preço R$ ${produto.preco}`)
        
    }
    
}

// função para deletar produtos através do id, conforme atributa informado. inicialmente é utilizado o metodo findIndex para verficar a existência do id informado pelo usuário.O findIndex percorre o array produtos e ao achar o id informado ele para a iteração. Após é feita uma verificação da existência ou não do id através de um IF. Caso o id exista, é utilizado o metodo slice que deleta o objeto com o o id informadn e retorna um novo array produtos sem o objetos deletado. 
function deletarPrdutos(id: number): void {
    const indiceProduto = produtos.findIndex((prod) => prod.id === id);

    if (indiceProduto === -1) {
        console.log (`Não existe nenhum produto com o ID: ${id} cadastrado!`);
        return
    }

    produtos.slice(indiceProduto, 1);
    console.log(`o produto com o ID: ${id}, foi deletado com sucesso!`);
}


console.log("EXERCÍCIO 04 RESPOSTA:");
// chamando as funções para rodar o código:
cadastrarProduto(1, "Carvão", 25.00);
cadastrarProduto(2, "Espeto", 15.00);
console.log("Abaixo a lista dos produtos cadastrados:");
listarProdutos();
deletarPrdutos(1);


// EXERCÍCIO 05: Crie um programa para mostrar informações de usuários (User) de uma empresa. Crie o tipo User com as seguintes propriedades: nome, idade, ocupação e salário (opcional). Caso o salário do usuário não seja informado, mostre o valor “N/A”. Exemplo:
// a. “Daphne, 23 anos, analista de TI, salário R$ 1000”
// b. “Daphne, 23 anos, analista de TI, salário N/A”


// cirado usuários pré-definidos, um com salario informando e outro não.
const usuarios: User[] = [
    {
        nome: "Luiz Henrique",
        idade: 41,
        ocupacao: "corretor de seguros"
    },
    {
        nome: "Fernanda",
        idade: 40,
        ocupacao: "Nutricionista",
        salario: 12.000
    } 
]


// fução para listar os usuários cadastrados. Inicalmente uma verificação com .length para verifica o tamannho do array e caso mesmo ter o tamanho igual a "0" é porque não tem nada cadastrado no array. Após feito um for of para percorrer o arry e capturar as informações dos usuários cadastrados. Dentro o for of foi feito uma verificação com IF para verificar se quando o salario (opcional0 não fosse informado (undefined) é para ser impresso no console como "N/A" e caso ele fosse informado, ser exibido normalmente. )
function mostrarUsuarios () : void {

    if (usuarios.length === 0) {
        console.log("Não há nenhum produto cadastrado!")
        return
    }

    for (const usuario of usuarios) {
        if (usuario.salario === undefined) {
            console.log(`Nome: ${usuario.nome}, Idade: ${usuario.idade}, Ocupação: ${usuario.ocupacao}, Salário: N/A`);
        } else {
            console.log(`Nome: ${usuario.nome}, Idade: ${usuario.idade}, Ocupação: ${usuario.ocupacao}, Salário: ${usuario.salario.toFixed(3)}`);
        }
    }
}

console.log ("EXERCÍCIO 05 RESPOSTA:")
mostrarUsuarios()


// EXERCICIO 06: Usando o contexto do exercício 6, crie um tipo de usuário que representa funcionários da diretoria da empresa. O tipo Diretor deve conter as propriedades: nome, idade, salário (opcional) e nível de comissionamento (numérico). Crie uma função que receba um Diretor e mostre suas informações. Exemplos: 
// a. “Diretor(a) Daphne, 23 anos, comissão nível 5, salário R$ 1000”
// b. “Diretor(a) Daphne, 23 anos, comissão nível 5, salário N/A”

// cirado usuários pré-definidos, um com salario informando e outro não.
const diretores: Diretor[] = [
    {
        nome: "Luiz Henrique",
        idade: 41,
        comissao: 5
    },
    {
        nome: "Fernanda",
        idade: 40,
        salario: 12.000,
        comissao: 4
    } 
]


// fução para listar os usuários cadastrados. Inicalmente uma verificação com .length para verifica o tamannho do array e caso mesmo ter o tamanho igual a "0" é porque não tem nada cadastrado no array. Após feito um for of para percorrer o arry e capturar as informações dos usuários cadastrados. Dentro o for of foi feito uma verificação com IF para verificar se quando o salario (opcional0 não fosse informado (undefined) é para ser impresso no console como "N/A" e caso ele fosse informado, ser exibido normalmente. )
function mostrarDiretores () : void {

    if (diretores.length === 0) {
        console.log("Não há nenhum produto cadastrado!")
        return
    }

    for (const diretoria of diretores) {
        if (diretoria.salario === undefined) {
            console.log(`Nome: ${diretoria.nome}, Idade: ${diretoria.idade}, nivel de comissão: ${diretoria.comissao}, Salário: N/A`);
        } else {
            console.log(`Nome: ${diretoria.nome}, Idade: ${diretoria.idade}, nivel de comissão: ${diretoria.comissao}, Salário: ${diretoria.salario.toFixed(3)}`);
        }
    }
}

console.log ("EXERCÍCIO 05 RESPOSTA:")
mostrarDiretores()


// EXERCÍCIO 07: 7. Crie um tipo que seja composto por um User OU por um Diretor usando interseção de tipos. Desenvolva uma função que receba uma lista desse novo tipo e, para cada item da lista, imprima: 
// a. O mesmo que o exercício 5, em caso de objeto User.
// b. O mesmo que o exercício 6, em caso de objeto Diretor.


//criação dos tipos de user e diretor e fazendo a junção por interseção (ou).
type Usuario1 = {
    nome: string;
    idade: number;
    ocupacao: string;
    salario?: number;
}

type Diretor1 = {
    nome: string;
    idade: number;
    salario?: number;
    comissao: number;
}

type Cadastros = Usuario1 | Diretor1; 

//cadastrando objeto pré-definidos para rodar a função.
const cadastros: Cadastros[] = [
  {
    nome: "Luiz Henrique",
    idade: 41,
    ocupacao: "corretor de seguros"
},
{
    nome: "Fernanda",
    idade: 40,
    ocupacao: "nutricionista",
    salario: 12.000
},
{
    nome: "Marcos",
    idade: 38,
    salario: 5.000,
    comissao: 5
},
{
    nome: "Claudia",
    idade: 47,
    comissao: 4
}
]

// função para mostrar os itens cadastrados. Usando o operador IN para fazer a verificação se existe a infromação de "ocupação" para mostrar que é um usuário ou um diretor. Validação if e else para monstrar no console N/A quando nenhum salário informado. 
function mostrarCadastros (cadastros: Cadastros): void {
    if ("ocupacao" in cadastros) {
        console.log("Trata-se de um usuário");
        
        if (cadastros.salario === undefined) {
            console.log (`Nome: ${cadastros.nome}, Idade: ${cadastros.idade}, Ocupação ${cadastros.ocupacao}, Salário: N/A.`)
        } else {
            console.log (`Nome: ${cadastros.nome}, Idade: ${cadastros.idade}, Ocupação ${cadastros.ocupacao}, Salário: ${cadastros.salario}`)
        }
    } else {
        console.log("Trata-se de um Diretor:")
        if (cadastros.salario === undefined) {
            console.log (`Nome: ${cadastros.nome}, Idade: ${cadastros.idade}, Comissão nível ${cadastros.comissao}, Salário: N/A.`)
        } else {
            console.log (`Nome: ${cadastros.nome}, Idade: ${cadastros.idade}, Comissão nível ${cadastros.comissao}, Salário: ${cadastros.salario}`)
        }
    } 
}

console.log ("EXERCÍCIO 07 RESPOSTA:")


// usado o método array forEach para iterar item por item no array e chamando a função para mostras os dados cadastrados. 
cadastros.forEach((cadastro) => mostrarCadastros(cadastro));