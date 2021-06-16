export class Conta{
    constructor(agencia, cliente, saldoInicial){
        if(this.constructor == Conta){
            throw new Error("Você não deveria instanciar um objeto do tipo conta diretament, pois essa é uma classe abstrata");  
        } //classes abstratas
        this._agencia = agencia; 
        this._cliente = cliente;
        this._saldo = saldoInicial;
       
        // this._tipo = tipo; esse é o tipo que define o tipo de conta mais não é muito legal de fazer
    }

    set cliente(novoValor){
        if(novoValor instanceof cliente){
            this._cliente = novoValor;
        }
        
    }   // colocando o cliente como um novo valor e deixando ele privado é uma sintex diferente
        // dessa forma ele não vai aceitar qualquer coisa no nome do cliente ele tem uma cara de metodo porem
        // é um acessor
    
    get cliente(){
        return this._cliente;
    }

     
    get saldo(){
        return this._saldo;
    }
    // método abstrato  
    sacar(valor){
        throw new Error("o método sacar da conta é abstrato");
        // let taxa = 1;
        // return this._sacar(valor, taxa);  esse metodo é somente se for ter uma conta que não tenha taxa
    }
    _sacar(valor, taxa){
        const valorSacado = taxa * valor;
        if(this._saldo >= valorSacado){
            this._saldo -= valorSacado;
            return valorSacado;
    }
        return 0;
        // if(this._tipo == "corrente"){
        //     taxa = 1.1;
        // }
        // if(this._tipo == "salario"){
        //     taxa = 1.05;
        // }
        // if(this._tipo == "empresarial"){
        //     taxa = 1.15;
        // }  apesar de dar certo esse tipo de codigo devemos diminuir ao maximo nosso código
    }
    depositar(valor){
        // if(valor <= 100){
        //     return;
        // }    lembrando que temos que diminuir o maximo possivel nosso código   
        this._saldo += valor;
    }
    transferir(valor, conta){
        // if(this._tipo == "salario"){
        //     return;
        // } essa não é uma forma legal pois vai ficar com muitos if
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}

/*/ENCAPSULAMENTO é aonde agente quer proteger ao máximo as propriedades
 e os atributos que são sensiveis a nossa classe usando os gets e sets