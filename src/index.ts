import { es } from "@faker-js/faker";

let exercicio: number = Infinity * 0

// 1. Crie uma função que receba 2 números e retorne um objeto contendo a média e também um indicador booleano de aprovado/reprovado. Considere aprovado com média >= 6.
exercicio = 1.1

const notaA: number = Number(((Math.random() * 9) + 1.01).toFixed(2));
const notaB: number = Number(((Math.random() * 9) + 1.01).toFixed(2));

function calculaMedia(nota1: number, nota2: number) {
    const media: number = Number(((nota1 + nota2) / 2).toFixed(2));

    const aprovado: boolean = media >= 6;

    const Resposta1: { nota1: number; nota2: number; media: number; aprovado: boolean } = { nota1, nota2, media, aprovado };

    return Resposta1
}

console.log(exercicio, calculaMedia(notaA, notaB));

exercicio = 1.2

class Avaliacao {
    num3: number
    num4: number
    constructor(num3: number, num4: number) {
        this.num3 = num3
        this.num4 = num4
    }

    calculaMedia(): number {
        return (this.num3 + this.num4) / 2;
    }

    objterResultado(): { media: number; aprovacao: boolean } {
        const media: number = this.calculaMedia();
        const aprovacao: boolean = media >= 6;

        return { media: media, aprovacao: aprovacao }
    }
}

const aprovacao = new Avaliacao(Number(((Math.random() * 9) + 1.01).toFixed(2)), Number(((Math.random() * 9) + 1.01).toFixed(2)))
const resultado = aprovacao.objterResultado();

console.log(exercicio, aprovacao, resultado);

console.log(`/////////////////////////////////////////`);


// 2. Crie uma função que receba uma lista de objetos contendo nota e peso, realize a média das notas considerando o peso. Exemplos: Lista com 2 notas: (N1*P1) + (N2*P2) / 2 = Resultado Lista com 3 notas: (N1*P1) + (N2*P2) + (N3*P3) / 3 = Resultado
exercicio = 2.1

interface NotaPeso {
    nota: number;
    peso: number;
}

function mediaPonderada(notasComPeso: NotaPeso[]): number {
    let somaPonderada: number = 0
    let somaDosPesos: number = 0

    notasComPeso.forEach(item => {
        somaPonderada += item.nota * item.peso
        somaDosPesos += item.peso
    })

    return somaPonderada / somaDosPesos
}

const notasComPesos: NotaPeso[] = [
    { nota: Number(((Math.random() * 9) + 1.01).toFixed(2)), peso: Number(((Math.random() * 9) + 1.01).toFixed(2)) },
    { nota: Number(((Math.random() * 9) + 1.01).toFixed(2)), peso: Number(((Math.random() * 9) + 1.01).toFixed(2)) },
    { nota: Number(((Math.random() * 9) + 1.01).toFixed(2)), peso: Number(((Math.random() * 9) + 1.01).toFixed(2)) }
];

console.log(exercicio, mediaPonderada(notasComPesos), notasComPesos);

console.log(`/////////////////////////////////////////`);

// 3. Crie um programa que simule uma carteira de dinheiro. Este programa vai precisar ter uma carteira contendo saldo, transações de entrada e saídas. Ou seja, será um objeto com estas propriedades. Depois crie uma função para lançar uma entrada e uma saída. Caso ao lançar uma saída e não tiver saldo, precisa dar um erro ou avisar.

exercicio = 3.1

class Carteira {
    saldo: number
    constructor(saldo: number) {
        this.saldo = saldo
    }

    movimentacao(tipo: boolean, valor: number): string {
        let resultado: string = ""

        if (tipo === true) {
            this.saldo = this.saldo + valor
            resultado = `Movimentação realizada com sucesso, seu novo saldo é ${this.saldo}`
        } else if (tipo === false && this.saldo >= valor) {
            this.saldo = this.saldo - valor
            resultado = `Movimentação realizada com sucesso, seu novo saldo é ${this.saldo}`
        } else { resultado = `Movimentação não realizada, saldo insuficiente` }

        return resultado
    }
}

const carteiraJoel = new Carteira(1000)
console.log(exercicio, carteiraJoel);
console.log(exercicio, carteiraJoel.movimentacao(true, 1403));

exercicio = 3.2

class ContaCorrente {
    saldo: number;

    constructor(saldoInicial: number) {
        this.saldo = saldoInicial
    }

    movimentacao(tipo: boolean, valor: number): string {
        if (tipo) {
            this.saldo += valor
            return `Movimentação realizada com sucesso, seu novo saldo é ${this.saldo}`;
        } else if (!tipo && this.saldo >= valor) {
            this.saldo -= valor
            return `Movimentação realizada com sucesso, seu novo saldo é ${this.saldo}`;
        } else { return `Movimentação não realizada, saldo insuficiente` }
    }
}

const contaJoel = new ContaCorrente(2000)
console.log(exercicio, contaJoel.movimentacao(false, 1403));

console.log(`/////////////////////////////////////////`);

// 4. Crie um programa para cadastrar, listar e excluir produtos de uma lista com tipagem de Produto.

exercicio = 4.1

const estoque: Item[] = [];

class Item {
    id: number;
    produto: string;
    quantidade: number;

    constructor(id: number,
        produto: string,
        quantidade: number) {
        this.id = id;
        this.produto = produto;
        this.quantidade = quantidade;
    }

    static movimentacoesDeEstoque(novoItem: Item): number {
        return estoque.push(novoItem)
    }

    static listagemDeEstoque(): Item[] {
        return estoque;
    }

    static deleteDeEstoque(itemDeletado: string): void {
        const seraDeletado = estoque.findIndex(i => i.produto === itemDeletado);
        estoque.splice(seraDeletado, 1)
        return
    }
}

const item1 = new Item(1, "Produto A", 10);
const item2 = new Item(2, "Produto B", 20);
const item3 = new Item(3, "Produto C", 30);
Item.movimentacoesDeEstoque(item1)
Item.movimentacoesDeEstoque(item2)
Item.movimentacoesDeEstoque(item3)
console.log(exercicio, Item.listagemDeEstoque());
Item.deleteDeEstoque("Produto B")
console.log(exercicio, Item.listagemDeEstoque());


exercicio = 4.2
class Produto {
    identificador: number;
    nome: string;
    total: number;

    static inventario: Produto[] = [];

    constructor(identificador: number, nome: string, total: number) {
        this.identificador = identificador;
        this.nome = nome;
        this.total = total;
    }

    static adicionarProduto(novoProduto: Produto): number {
        this.inventario.push(novoProduto);
        return this.inventario.length;
    }

    static listarInventario(): Produto[] {
        return this.inventario;
    }

    static removerProduto(nomeProduto: string): void {
        const indice = this.inventario.findIndex(produto => produto.nome === nomeProduto);
        if (indice !== -1) { 
            this.inventario.splice(indice, 1);
        } else {
            console.log("Produto não encontrado no inventário.");
        }
    }
}

const produto1 = new Produto(1, "Produto A", 10);
const produto2 = new Produto(2, "Produto B", 20);
const produto3 = new Produto(3, "Produto C", 30);

Produto.adicionarProduto(produto1);
Produto.adicionarProduto(produto2);
Produto.adicionarProduto(produto3);

console.log(exercicio, "Listagem inicial do inventário:", Produto.listarInventario());

Produto.removerProduto("Produto B");
console.log(exercicio, "Listagem do inventário após remoção:", Produto.listarInventario());

console.log(`/////////////////////////////////////////`);

// 5. Crie um programa para mostrar informações de usuários (User) de uma empresa. Crie o tipo User com as seguintes propriedades: nome, idade, ocupação e salário (opcional). Caso o salário do usuário não seja informado, mostre o valor “N/A”. Exemplo:
// a. “Daphne, 23 anos, analista de TI, salário R$ 1000”
// b. “Daphne, 23 anos, analista de TI, salário N/A”

exercicio = 5

console.log(`/////////////////////////////////////////`);

// 6. Usando o contexto do exercício 6, crie um tipo de usuário que
// representa funcionários da diretoria da empresa. O tipo Diretor deve
// conter as propriedades: nome, idade, salário (opcional) e nível de
// comissionamento (numérico). Crie uma função que receba um
// Diretor e mostre suas informações. Exemplos:
// a. “Diretor(a) Daphne, 23 anos, comissão nível 5, salário R$ 1000”
// b. “Diretor(a) Daphne, 23 anos, comissão nível 5, salário N/A”

exercicio = 6

console.log(`/////////////////////////////////////////`);

//7. Crie um tipo que seja composto por um User OU por um Diretor usando interseção de tipos. Desenvolva uma função que receba uma lista desse novo tipo e, para cada item da lista, imprima: 
//a. O mesmo que o exercício 5, em caso de objeto User. 
//b. O mesmo que o exercício 6, em caso de objeto Diretor.

exercicio = 7
