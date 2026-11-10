function maiorDeTres(a, b, c) {
  let maior = a;
  if (b > maior) maior = b;
  if (c > maior) maior = c;
  return maior;
}
function ordemCrescente(a, b, c) {
  return [a, b, c].sort(function (x, y) {
    return x - y;
  });
}
function ehPalindromo(texto) {
  const limpo = texto.toLowerCase().replace(/\s/g, "");
  const invertido = limpo.split("").reverse().join("");
  return limpo !== "" && limpo === invertido;
}
function verificaSubconjunto(palavra1, palavra2) {
  if (
    palavra1 === undefined || palavra2 === undefined ||
    palavra1 === null || palavra2 === null ||
    palavra1.trim() === "" || palavra2.trim() === ""
  ) {
    return "erro";
  }
  if (palavra1.includes(palavra2)) {
    return "é um subconjunto";
  }
  return "não é um subconjunto";
}
function diaDaSemana(dataTexto) {
  const partes = dataTexto.split("-");
  const data = new Date(partes[0], partes[1] - 1, partes[2]);
  const dias = [
    "domingo", "segunda-feira", "terça-feira", "quarta-feira",
    "quinta-feira", "sexta-feira", "sábado"
  ];
  return dias[data.getDay()];
}
function lerNumeros(ids) {
  const valores = ids.map(function (id) {
    return document.getElementById(id).value;
  });
  if (valores.some(function (v) { return v.trim() === ""; })) return null;
  return valores.map(Number);
}
function exibir(id, mensagem) {
  document.getElementById(id).textContent = mensagem;
}
function funcao1() {
  const n = lerNumeros(["n1a", "n1b", "n1c"]);
  if (!n) return exibir("r1", "Preencha os três números.");
  exibir("r1", "O maior é: " + maiorDeTres(n[0], n[1], n[2]));
}
function funcao2() {
  const n = lerNumeros(["n2a", "n2b", "n2c"]);
  if (!n) return exibir("r2", "Preencha os três números.");
  exibir("r2", "Ordem crescente: " + ordemCrescente(n[0], n[1], n[2]).join(", "));
}
function funcao3() {
  const texto = document.getElementById("texto3").value;
  if (texto.trim() === "") return exibir("r3", "Digite um texto.");
  const resposta = ehPalindromo(texto) ? "É palíndromo" : "Não é palíndromo";
  exibir("r3", resposta);
}
function funcao4() {
  const p1 = document.getElementById("p1").value;
  const p2 = document.getElementById("p2").value;
  exibir("r4", verificaSubconjunto(p1, p2));
}
function funcao5() {
  const data = document.getElementById("data5").value;
  if (data === "") return exibir("r5", "Escolha uma data.");
  exibir("r5", "Dia da semana: " + diaDaSemana(data));
}
function mostrarOperacao(numero) {
  for (let i = 1; i <= 5; i++) {
    const painel = document.getElementById("painel" + i);
    const botao = document.getElementById("menu" + i);
    const ativo = i === numero;
    painel.classList.toggle("ativo", ativo);
    botao.classList.toggle("ativo", ativo);
    botao.setAttribute("aria-pressed", ativo);
  }
}
mostrarOperacao(1);
