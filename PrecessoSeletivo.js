1- Soma será 91.
2- function fibonacci(n) {
    const fibSequence = [0, 1];
    while (fibSequence[fibSequence.length - 1] < n) {
        const nextFib = fibSequence[fibSequence.length - 1] + fibSequence[fibSequence.length - 2];
        fibSequence.push(nextFib);
    }
    return fibSequence;
}

function pertenceFibonacci(numero) {
    const fibSequence = fibonacci(numero);
    if (fibSequence.includes(numero)) {
        return `O número ${numero} pertence à sequência de Fibonacci.`;
    } else {
        return `O número ${numero} não pertence à sequência de Fibonacci.`;
    }
}

// Entrada do usuário
const numeroInformado = parseInt(prompt("Informe um número: "), 10);
const resultado = pertenceFibonacci(numeroInformado);
alert(resultado);

3- const faturamentoJSON = `{
            "faturamento": {
                "1": 150,
                "2": 0,
                "3": 250,
                "4": 300,
                "5": 0,
                "6": 400,
                "7": 500,
                "8": 600,
                "9": 0,
                "10": 700,
                "11": 800,
                "12": 0,
                "13": 900,
                "14": 1000,
                "15": 1200,
                "16": 0,
                "17": 300,
                "18": 400,
                "19": 0,
                "20": 600,
                "21": 550,
                "22": 310,
                "23": 200,
                "24": 500,
                "25": 350,
                "26": 700,
                "27": 900,
                "28": 100,
                "29": 50
            }
        }`;

        function calcularFaturamento() {
            const data = JSON.parse(faturamentoJSON);
            const faturamento = data.faturamento;

            // Filtrar apenas os dias com faturamento
            const valores = Object.values(faturamento).filter(valor => valor > 0);
            
            if (valores.length === 0) {
                console.log("Não há dias com faturamento.");
                return;
            }

            // Calcular menor e maior valor de faturamento
            const menorValor = Math.min(...valores);
            const maiorValor = Math.max(...valores);
            
            // Calcular média mensal
            const mediaMensal = valores.reduce((acc, valor) => acc + valor, 0) / valores.length;

            // Calcular número de dias acima da média
            const diasAcimaDaMedia = valores.filter(valor => valor > mediaMensal).length;

            // Exibir resultados
            console.log(Menor valor de faturamento: R$ ${menorValor});
            console.log(Maior valor de faturamento: R$ ${maiorValor});
            console.log(Número de dias acima da média mensal: ${diasAcimaDaMedia});
        }

        // Executar a função
        calcularFaturamento();

4- const faturamento = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
};

// Calcular o total de faturamento
const totalFaturamento = Object.values(faturamento).reduce((acc, valor) => acc + valor, 0);

// Calcular percentual por estado
const percentualRepresentacao = {};
for (const estado in faturamento) {
    percentualRepresentacao[estado] = ((faturamento[estado] / totalFaturamento) * 100).toFixed(2) + '%';
}

// Exibir resultados
console.log('Percentual de representação por estado:');
for (const estado in percentualRepresentacao) {
    console.log(`${estado}: ${percentualRepresentacao[estado]}`);
}

5- function inverterString(str) {
    let stringInvertida = '';
    for (let i = str.length - 1; i >= 0; i--) {
        stringInvertida += str[i];
    }
    return stringInvertida;
}

// Exemplo de uso
const stringOriginal = "Hello, World!";
const stringInvertida = inverterString(stringOriginal);
console.log(`String original: "${stringOriginal}"`);
console.log(`String invertida: "${stringInvertida}"`);
