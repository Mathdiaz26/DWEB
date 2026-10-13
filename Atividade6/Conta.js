 nome = prompt("Nome")
    nota1 = prompt("Nota da primeira prova")
    nota2 = prompt("Nota da segunda prova")
    nota3 = prompt("Nota da terceira prova")
    nota4 = prompt("Nota da quarta prova")
    media = (parseFloat(nota1)+parseFloat(nota2)+parseFloat(nota3)+parseFloat(nota4))/4
    alert("Nome:" + nome)
    alert("Média total:" + media)