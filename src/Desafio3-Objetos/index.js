// Classe genérica para um herói
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    // Método de ataque com base no tipo de herói
    atacar() {
        let ataque;

        // Determina o tipo de ataque com base no tipo de herói
        switch (this.tipo.toLowerCase()) {
            case "mago":
                ataque = "magia";
                break;
            case "guerreiro":
                ataque = "espada";
                break;
            case "monge":
                ataque = "artes marciais";
                break;
            case "ninja":
                ataque = "shuriken";
                break;
            default:
                ataque = "um ataque desconhecido";
                break;
        }

        // Exibe a mensagem de ataque
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

// Criando instâncias de heróis
const heroi1 = new Heroi("Aragorn", 87, "guerreiro");
const heroi2 = new Heroi("Gandalf", 2019, "mago");
const heroi3 = new Heroi("Ryu", 35, "monge");
const heroi4 = new Heroi("Naruto", 16, "ninja");

// Invocando o método de ataque
heroi1.atacar();  // Saída: O guerreiro atacou usando espada
heroi2.atacar();  // Saída: O mago atacou usando magia
heroi3.atacar();  // Saída: O monge atacou usando artes marciais
heroi4.atacar();  // Saída: O ninja atacou usando shuriken
