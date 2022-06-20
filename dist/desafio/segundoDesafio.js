"use strict";
// Como podemos melhorar o esse código usando TS? 
let pessoa1 = {
    nome: "maria",
    idade: 29,
    profissao: "atriz"
};
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Padeiro"] = 0] = "Padeiro";
    Profissao[Profissao["Atriz"] = 1] = "Atriz";
})(Profissao || (Profissao = {}));
const pessoa2 = {
    nome: "roberto",
    idade: 19,
    profissao: Profissao.Padeiro
};
const pessoa3 = {
    nome: "laura",
    idade: 32,
    profissao: Profissao.Atriz
};
const pessoa4 = {
    nome: "carlos",
    idade: 19,
    profissao: Profissao.Padeiro
};
const pessoa5 = {
    nome: "Felipe",
    idade: 16,
    profissao: Profissao.Padeiro,
    estagiario: true
};
