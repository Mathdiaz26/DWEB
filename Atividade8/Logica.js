// Cada resposta: { idade, sexo, opiniao }
var respostas = [];

var NOMES_OPINIAO = { 1: "Péssimo", 2: "Regular", 3: "Bom", 4: "Ótimo" };
var NOMES_SEXO = { F: "Feminino", M: "Masculino", O: "Outro" };

function adicionar() {
  var idade = parseInt(document.getElementById("idade").value, 10);
  var sexo = document.getElementById("sexo").value;
  var opiniao = parseInt(document.getElementById("opiniao").value, 10);
  var erro = document.getElementById("erro");

  if (isNaN(idade) || idade < 1 || idade > 120) {
    erro.textContent = "Informe uma idade válida (1 a 120).";
    return;
  }
  if (sexo === "") {
    erro.textContent = "Selecione o sexo.";
    return;
  }
  if (isNaN(opiniao)) {
    erro.textContent = "Selecione a opinião sobre o filme.";
    return;
  }

  erro.textContent = "";
  respostas.push({ idade: idade, sexo: sexo, opiniao: opiniao });

  document.getElementById("idade").value = "";
  document.getElementById("sexo").value = "";
  document.getElementById("opiniao").value = "";
  document.getElementById("idade").focus();

  atualizar();
}

function calcular() {
  var total = respostas.length;
  var somaIdades = 0;
  var maisVelha = respostas[0].idade;
  var maisNova = respostas[0].idade;
  var pessimos = 0, bons = 0, otimos = 0;
  var mulheres = 0, homens = 0, outros = 0;

  for (var i = 0; i < total; i++) {
    var r = respostas[i];
    somaIdades += r.idade;
    if (r.idade > maisVelha) maisVelha = r.idade;
    if (r.idade < maisNova) maisNova = r.idade;

    if (r.opiniao === 1) pessimos++;
    if (r.opiniao === 3) bons++;
    if (r.opiniao === 4) otimos++;

    if (r.sexo === "F") mulheres++;
    else if (r.sexo === "M") homens++;
    else outros++;
  }

  return {
    total: total,
    mediaIdade: somaIdades / total,
    maisVelha: maisVelha,
    maisNova: maisNova,
    pessimos: pessimos,
    pctBonsOtimos: ((bons + otimos) / total) * 100,
    mulheres: mulheres,
    homens: homens,
    outros: outros
  };
}

function atualizar() {
  var divRes = document.getElementById("resultados");
  var divLista = document.getElementById("lista");

  if (respostas.length === 0) {
    divRes.innerHTML = '<p class="vazio">Nenhuma resposta cadastrada ainda.</p>';
    divLista.innerHTML = '<p class="vazio">Nenhuma resposta cadastrada ainda.</p>';
    return;
  }

  var c = calcular();
  divRes.innerHTML =
    '<div class="grid">' +
      cartao("Total de respostas", c.total) +
      cartao("Média de idade", c.mediaIdade.toFixed(1) + " anos") +
      cartao("Idade mais velha", c.maisVelha + " anos") +
      cartao("Idade mais nova", c.maisNova + " anos") +
      cartao("Quantidade de péssimos", c.pessimos) +
      cartao("Ótimos e bons", c.pctBonsOtimos.toFixed(1) + "%") +
      cartao("Mulheres", c.mulheres) +
      cartao("Homens", c.homens) +
      cartao("Outros", c.outros) +
    '</div>';

  var linhas = "";
  for (var i = 0; i < respostas.length; i++) {
    var r = respostas[i];
    linhas += "<tr><td>" + (i + 1) + "</td><td>" + r.idade + "</td><td>" +
              NOMES_SEXO[r.sexo] + "</td><td>" + r.opiniao + " - " +
              NOMES_OPINIAO[r.opiniao] + "</td></tr>";
  }
  divLista.innerHTML =
    "<table><thead><tr><th>#</th><th>Idade</th><th>Sexo</th><th>Opinião</th></tr></thead><tbody>" +
    linhas + "</tbody></table>";
}

function cartao(titulo, valor) {
  return '<div class="stat"><span>' + titulo + '</span><strong>' + valor + '</strong></div>';
}

function limpar() {
  respostas = [];
  document.getElementById("erro").textContent = "";
  atualizar();
}

document.getElementById("btnAdd").addEventListener("click", adicionar);
document.getElementById("btnLimpar").addEventListener("click", limpar);
document.getElementById("opiniao").addEventListener("keydown", function (e) {
  if (e.key === "Enter") adicionar();
});

atualizar();