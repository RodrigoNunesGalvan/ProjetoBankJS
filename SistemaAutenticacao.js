/*
ser autenticavel significa ter um método autenticar

Ducky Type é a aplicação do teste do pato se ele anda como pato faz o som do pato é isso que vou utilizar mesmo que ele não for pato
se ele tem a propriedade que eu quero usar então eu vou usar ele
*/

export class SistemaAutenticacao{
    static login(autenticavel, senha){
        if(SistemaAutenticacao.ehautenticavel(autenticavel)){
            return autenticavel.autenticar(senha);
        }
        return false;
    }

    static ehautenticavel(autenticavel){
        return "autenticar" in autenticavel &&
        autenticavel.autenticar instanceof Function;

    }
}

/*Ao criarmos o Sistema de Autenticação do bytebank precisamos autenticar todos usuários que são Gerentes,
 Diretores e Funcionários. Além disso, os Clientes também precisam ser autenticados pelo mesmo sistema.
 Para isso criamos um método chamado autenticar dentro de todas essas classes.

Como é possível que o Sistema de autenticação consiga receber diversos tipos de objetos por parâmetro e mesmo assim continuar funcionando?

Através do polimorfismo o JS consegue tratar diferentes objetos de maneiras semelhantes e por isso conseguimos autenticar diferentes 
tipos de objetos em nosso sistema
Sim! O Polimorfismo é uma ferramenta muito importante dentro das linguagens de programação, 
por isso é importante que você saiba como utilizá-lo

Isso é possível porque o JS não é uma linguagem fortemente tipada e por isso não depende apenas dos tipos pré-definidos
 mas sim se eles possuem ou não as propriedades que queremos utilizar.
Exatamente, assim não estamos limitados aos tipos e sim as interfaces que as classes expões.*/