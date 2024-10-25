//1º Soma será 91.

//2º
function fibonacci(n) {
    const sequencia = [0, 1]; // Inicia a sequência com 0 e 1

    // Gera a sequência de Fibonacci até o número n
    while (true) {
        const proximo = sequencia[sequencia.length - 1] + sequencia[sequencia.length - 2];
        if (proximo > n) break; // Para se o próximo número for maior que n
        sequencia.push(proximo);
    }
    
    return sequencia;
}

function pertenceAFibonacci(numero) {
    const sequencia = fibonacci(numero);
    return sequencia.includes(numero);
}

// Número fictício para testar
const numeroFicticio = 55; // Você pode alterar esse valor
if (pertenceAFibonacci(numeroFicticio)) {
    console.log(`O número ${numeroFicticio} pertence à sequência de Fibonacci.`);
} else {
    console.log(`O número ${numeroFicticio} não pertence à sequência de Fibonacci.`);
}


//3º
const faturamentoJSON = `{
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
            console.log(`Menor valor de faturamento: R$ ${menorValor}`);
            console.log(`Maior valor de faturamento: R$ ${maiorValor}`);
            console.log(`Número de dias acima da média mensal: ${diasAcimaDaMedia}`);
        }

        // Executar a função
        calcularFaturamento();

//4º
const faturamento = {
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

//5º
function inverterString(str) {
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
