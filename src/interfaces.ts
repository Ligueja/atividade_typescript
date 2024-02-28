export interface Media_resultado {
    nota1: number;
    nota2: number;
    resultado: boolean;
    media?: number;
}

export interface Notapeso {
    nota: number;
    peso: number;
} 

export interface Saldos {
    saldo: number;
    entrada: number;
    saida: number;
}

export interface Produto {
    id: number;
    descricao: string;
    preco: number;
}

export interface User {
    nome: string;
    idade: number;
    ocupacao: string;
    salario?: number;
}

export interface Diretor {
    nome: string;
    idade: number;
    salario?: number;
    comissao: number;
}