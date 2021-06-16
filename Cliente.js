export class cliente{
    get cpf(){
        return this._cpf
    }
    get rg(){
        return this._rg
    }

    constructor(nome, cpf, rg, senha){
        this.nome = nome;
        this._cpf = cpf;
        this._rg = rg;
        this._senha = senha;
    }
    autenticar(senha){
        return senha == this._senha;
    }

    cadastrarSenha(senha){
        this._senha = senha;
    }

}

   
 /* com a class definimos que todos os os clientes terão uma variável ,  na class criamos um molde o que define o que eu quero ter

 na orientação de objetos tem dois pilares muito importantes são polimorfismo e encapsulamento
POLIMORFISMO É TRATAR OBJETOS DIFERENTES DE MANEIRA SEMELHANTES isso economiza muitos if e muitos códigos
ENCAPSULAMENTO é aonde agente quer proteger ao máximo as propriedades e os atributos que são sensiveis a nossa classe */