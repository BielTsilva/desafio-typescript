let funcionario = {
    codigo: 10,
    nome: 'john'
};

let funcionario2: {codigo: number, nome: string} = {
    codigo: 10,
    nome: 'john'
}

interface pessoa {
    codigo: number,
    nome: string,
    profissao?: string
}

let funcionario3: pessoa = {
    codigo: 200,
    nome: 'John',
    profissao: 'Pedreiro'
}