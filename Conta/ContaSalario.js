import { Conta } from "./Conta.js";

export class ContaSalario extends Conta{
    constructor(agencia, cliente, saldoInicial){
        super(agencia, cliente, 100);
    }
    sacar(valor){
        const taxa = 1.01;
        return this._sacar(valor, taxa);
    }
}