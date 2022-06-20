// Como podemos melhorar o esse código usando TS? 

let pessoa1:{nome: string, idade: number, profissao: string} = {
    nome: "maria",
    idade: 29,
    profissao: "atriz"
}

enum Profissao{
    Padeiro,
    Atriz
}

interface Pessoa {
    nome: string,
    idade: number,
    profissao: Profissao,
}

interface Estagiario extends Pessoa{
    estagiario?: boolean
}

const pessoa2:Pessoa = {
    nome: "roberto",
    idade: 19,
    profissao: Profissao.Padeiro
}

const pessoa3: Pessoa = {
    nome: "laura",
    idade: 32,
    profissao: Profissao.Atriz
};

const pessoa4: Pessoa = {
    nome: "carlos",
    idade: 19,
    profissao: Profissao.Padeiro
}

const pessoa5: Estagiario= {
    nome: "Felipe",
    idade: 16,
    profissao: Profissao.Padeiro,
    estagiario: true
}