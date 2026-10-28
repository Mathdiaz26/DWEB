const opcoes = ["Papel", "Pedra", "Tesoura"];
let vitorias = 0;
let derrotas = 0;
let empates = 0;

function jogar(jogador) {
    const bola = document.querySelector(".bola");
    bola.classList.remove("girando");
    void bola.offsetWidth;
    bola.classList.add("girando");
    const computador = Math.floor(Math.random() * 3) + 1;
    let resultado;

    if (jogador === computador) {
        resultado = "Empate!";
        empates++;
    } else if (
        (jogador === 1 && computador === 2) ||
        (jogador === 2 && computador === 3) ||
        (jogador === 3 && computador === 1)
    ) {
        resultado = "Você ganhou!";
        vitorias++;
    } else {
        resultado = "Você perdeu!";
        derrotas++;
    }

    document.getElementById("escolhas").textContent =
        "Você escolheu: " + opcoes[jogador - 1] +
        " | Computador escolheu: " + opcoes[computador - 1];
    document.getElementById("resultado").textContent = resultado;
    document.getElementById("placar").textContent =
        "Vitórias: " + vitorias + " | Derrotas: " + derrotas + " | Empates: " + empates;
}