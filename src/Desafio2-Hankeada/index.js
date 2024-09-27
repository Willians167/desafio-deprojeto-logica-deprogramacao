const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let heroi = "Aragorn";
let energia = 100;
let inimigosDerrotados = 0;
let tesourosEncontrados = 0;
let jornada = true;

function statusHeroi() {
    console.log(`Herói: ${heroi}`);
    console.log(`Energia: ${energia}`);
    console.log(`Inimigos derrotados: ${inimigosDerrotados}`);
    console.log(`Tesouros encontrados: ${tesourosEncontrados}`);
    console.log("-----------------------------");
}

function continuarJornada() {
    readline.question("Deseja continuar a jornada? (sim/não) ", resposta => {
        if (resposta.toLowerCase() === "sim") {
            jornada = true;
            iniciarJornada(); 
        } else {
            console.log(`${heroi} decidiu encerrar a jornada.`);
            jornada = false;
            finalizarJornada();
        }
    });
}

function iniciarJornada() {
    if (energia <= 0) {
        console.log(`${heroi} não tem mais energia. A jornada terminou.`);
        finalizarJornada();
        return;
    }

    let evento = Math.floor(Math.random() * 3); 
    if (evento === 0) {
        console.log("Um inimigo apareceu!");
        let derrotou = Math.random() > 0.3; 

        if (derrotou) {
            console.log(`${heroi} derrotou o inimigo!`);
            inimigosDerrotados++;
            energia -= 10; 
        } else {
            console.log(`${heroi} foi derrotado!`);
            energia = 0; 
        }
    } else if (evento === 1) {
        console.log("Você encontrou um tesouro!");
        tesourosEncontrados++;
        energia += 10; 
    } else {
        console.log("O caminho está tranquilo... por enquanto.");
        energia -= 5; 
    }

    statusHeroi();

    continuarJornada();
}

function finalizarJornada() {
    console.log("Jornada do herói chegou ao fim.");
    console.log(`Total de inimigos derrotados: ${inimigosDerrotados}`);
    console.log(`Total de tesouros encontrados: ${tesourosEncontrados}`);
    readline.close(); 
}

console.log(`${heroi} iniciou sua jornada!`);
iniciarJornada();
