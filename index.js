import {cliente} from "./Cliente.js";
import {ContaCorrente} from "./conta/ContaCorrente.js";
import {ContaPoupanca} from "./conta/ContaPoupança.js";   
import {ContaSalario} from "./conta/ContaSalario.js";
import {Gerente} from "./Funcionarios/Gerente.js";
import {Diretor} from "./Funcionarios/Diretor.js";
import {SistemaAutenticacao} from "./SistemaAutenticacao.js";


const gerente = new Gerente("Arthur Nunes de Souza", 5000, 12345678911);
const diretor = new Diretor("Ricardo dos Anjos de Paula", 10000, 11122299900); 
const cliente1 = new cliente("Rodrigo Nunes de Paula Galvan", 11122233300, 123456789);  // nesse codigo ele cria um novo cliente e referencia o cliente a cliente1 é o meu objeto
             //aqui criamos a variável cliente e colocamos um ponto uma sintex para separar 
const cliente2 = new cliente("Juliana de Souza Galvan Nunes", 22233344400, 555666777);  // quando criamos o new cliente estamos instanciando a uma class
const cliente3 = new cliente("Alice Nunes de Souza", 33344455500, 666777888);
diretor.cadastrarSenha("123456");
gerente.cadastrarSenha("1234");
cliente1.cadastrarSenha("4567");
cliente2.cadastrarSenha("0987");
cliente3.cadastrarSenha("235");

const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "1234");
const clienteEstaLogado = SistemaAutenticacao.login(cliente1, "4567");
const cliente2EstaLogado = SistemaAutenticacao.login(cliente2, "0987 ");
const cliente3EstaLogado = SistemaAutenticacao.login(cliente3, "2345");


const contaCorrenteRodrigo = new ContaCorrente(1001, cliente1, 0);
contaCorrenteRodrigo.depositar(700);
contaCorrenteRodrigo.sacar(100);

const contaPoupanca = new ContaPoupanca(1001, cliente1, 0);
contaPoupanca.depositar(10000);
contaPoupanca.sacar(1000);

const contaSalario = new ContaSalario(1001, cliente1, 0);
contaSalario.depositar(1000);
contaSalario.sacar(100);

let valor = 100;
contaPoupanca.transferir(valor, contaCorrenteRodrigo);

const conta2 = new ContaCorrente(1001, cliente2);
const conta3 = new ContaCorrente(1001, cliente3);
conta3.depositar(1000);

contaCorrenteRodrigo.transferir(valor, conta2);

console.log(diretor);
console.log(gerente);
console.log(cliente1, cliente2, cliente3);
console.log(conta3);
console.log(contaPoupanca);
console.log(contaCorrenteRodrigo);
console.log(contaSalario);
console.log(gerenteEstaLogado, diretorEstaLogado, clienteEstaLogado);

contaCorrenteRodrigo.depositar(100);
contaCorrenteRodrigo.depositar(100);

//const valorSacado = contaCorrenteRodrigo.sacar(150);

//console.log(contaCorrenteRodrigo);
 


const cliente2Nome = "Juliana de Souza Galvan Nunes";
const cliente2Cpf = 22233344400;
const cliente2Agencia = 1001;                   // não é uma prática legal repitir muitos códigos  quando estamos programando 
const cliente2Saldo = 0;                         //e vamos ter como esse exemplo muitos clientes temos que criar uma class      

// SOBRE OS CAMPOS PRIVADOS # NO CURSO ELE EXPLICOU QUE AINDA NÃO ESTAVA FUNCIONANDO TENHO ESSA DÚVIDA E QUE A COMUNIDADE ENTENDE _ COMO PRIVADO