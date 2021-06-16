import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta{
    static numerosDeContas = 0;
    constructor(agencia, cliente){
        super(agencia, cliente, 0)
        ContaCorrente.numerosDeContas += 1;
    }

    //sobrescrevendo o comportamento de sacar
    sacar(valor){
        let taxa = 1.1;
        return this._sacar(valor, taxa);
    } 
}

//cada atributos fazem parte da composição o pessoal chama de composição