Aqui está a versão atualizada do **README** com a adição da funcionalidade de partidas ranqueadas:

---

# 🛡️ A Jornada de Aragorn 🏹

**Bem-vindo(a) à aventura de Aragorn!**  
Neste projeto, você acompanhará Aragorn, um bravo herói, em sua jornada épica, enfrentando inimigos, encontrando tesouros e superando desafios no caminho. O destino dele está em suas mãos! 🌟

## 🎮 Como funciona o jogo?

- Você controla Aragorn, um herói que começa sua aventura com 100 de energia.
- Durante a jornada, eventos aleatórios ocorrerão: inimigos poderão aparecer, tesouros serão encontrados ou o caminho poderá ficar tranquilo por um tempo.
- A cada inimigo derrotado, Aragorn perde energia, mas ganha experiência e pode encontrar tesouros que o fortalecem! ⚔️💰
- No final de cada evento, você decidirá se Aragorn continuará a jornada ou se encerrará a aventura.

### 📋 Funcionalidades principais:

- **Herói**: Aragorn, o bravo herói.
- **Eventos aleatórios**: Inimigos, tesouros, caminhos tranquilos.
- **Status**: O status de Aragorn é atualizado após cada evento, mostrando energia, inimigos derrotados e tesouros encontrados.

### 🏅 Rank de Partidas Rankeadas

Aragorn agora também participa de partidas **rankeadas**! A cada inimigo derrotado, o jogador ganha vitórias ou derrotas, acumulando pontos de rank.

### ⚔️ Sistema de Rank:

O rank de Aragorn será classificado com base no número de vitórias que ele acumular ao longo da jornada:

- **Ferro**: Menos de 10 vitórias.
- **Bronze**: Entre 11 e 20 vitórias.
- **Prata**: Entre 21 e 50 vitórias.
- **Ouro**: Entre 51 e 80 vitórias.
- **Diamante**: Entre 81 e 90 vitórias.
- **Lendário**: Entre 91 e 100 vitórias.
- **Imortal**: 101 vitórias ou mais.

No final da jornada, o saldo de vitórias e derrotas é calculado, e o rank é mostrado em uma mensagem como:

```
"O Herói tem um saldo de **{saldoVitorias}** e está no nível de **{nivel}**"
```
## 3️ Escrevendo as classes de um Jogo

Neste desafio, criamos uma classe `Heroi` que permite representar um herói com as seguintes propriedades: `nome`, `idade`, e `tipo`. O tipo do herói determina o tipo de ataque que ele executa, conforme a tabela abaixo:

- **Mago**: usa magia.
- **Guerreiro**: usa espada.
- **Monge**: usa artes marciais.
- **Ninja**: usa shuriken.

### Exemplo de Saída:
- "O mago atacou usando magia"
- "O guerreiro atacou usando espada"
- "O monge atacou usando artes marciais"
- "O ninja atacou usando shuriken"

O código foi estruturado utilizando Classes e Objetos, permitindo a criação de instâncias de heróis e o uso de métodos para realizar ações dentro do jogo.

## 🚀 Como rodar o projeto:

1. **Pré-requisitos**: Certifique-se de ter o Node.js instalado em sua máquina.
2. **Instale as dependências** (caso necessário):
   ```bash
   npm install
   ```
3. **Execute o projeto**:
   ```bash
   node index.js
   ```
4. A jornada de Aragorn começará automaticamente, e você será perguntado se deseja continuar após cada evento.

## 📜 Código Explicado:

- **Variáveis**:
  - `heroi`: Nome do herói (Aragorn).
  - `energia`: A quantidade de energia que Aragorn tem (inicia com 100).
  - `inimigosDerrotados`: Número de inimigos derrotados.
  - `tesourosEncontrados`: Número de tesouros encontrados.
  
- **Funções**:
  - `statusHeroi()`: Exibe o status atual do herói (energia, inimigos derrotados, tesouros).
  - `continuarJornada()`: Pergunta ao jogador se ele deseja continuar a jornada.
  - `iniciarJornada()`: Inicia a jornada, criando eventos aleatórios e atualizando o status do herói.
  - `finalizarJornada()`: Mostra os resultados finais da jornada e encerra o jogo.

- **Rank de Partidas Rankeadas**: Classifica o jogador com base no número de vitórias e derrotas usando a fórmula `(vitórias - derrotas)` e determina o nível do herói.

---

💡 **Dica**: Faça o máximo de vitórias possíveis para alcançar o rank **Imortal** e torne-se uma lenda!

---

Espero que este README organize e explique tudo de forma clara e divertida!
