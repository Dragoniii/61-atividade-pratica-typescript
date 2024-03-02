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

// 3. Crie um programa que simule uma carteira de dinheiro. Este programa vai precisar ter uma carteira contendo saldo, transações de entrada e saídas. Ou seja, será um objeto com estas propriedades. Depois crie uma função para lançar uma entrada e uma saída. Caso ao lançar uma saída e não tiver saldo, precisa dar um erro ou avisar.

exercicio = 3


// 4. Crie um programa para cadastrar, listar e excluir produtos de uma
// lista com tipagem de Produto.

exercicio = 4

// 5. Crie um programa para mostrar informações de usuários (User) de
// uma empresa. Crie o tipo User com as seguintes propriedades:
// nome, idade, ocupação e salário (opcional). Caso o salário do
// usuário não seja informado, mostre o valor “N/A”. Exemplo:
// a. “Daphne, 23 anos, analista de TI, salário R$ 1000”
// b. “Daphne, 23 anos, analista de TI, salário N/A”

exercicio = 5

// 6. Usando o contexto do exercício 6, crie um tipo de usuário que
// representa funcionários da diretoria da empresa. O tipo Diretor deve
// conter as propriedades: nome, idade, salário (opcional) e nível de
// comissionamento (numérico). Crie uma função que receba um
// Diretor e mostre suas informações. Exemplos:
// a. “Diretor(a) Daphne, 23 anos, comissão nível 5, salário R$ 1000”
// b. “Diretor(a) Daphne, 23 anos, comissão nível 5, salário N/A”

exercicio = 6
