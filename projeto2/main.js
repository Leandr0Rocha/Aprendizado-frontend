let numeroAleatorio = Math.floor(Math.random() * 1000)
console.log(numeroAleatorio)
let tentativas = 0

function checarChute(){
    let palpite = document.getElementById("palpite").value
    let mensagem = document.getElementById("mensagem")
    let minimo = document.getElementById("minimo")
    let maximo = document.getElementById("maximo")
    tentativas++

    if(palpite == numeroAleatorio){
        mensagem.innerHTML = "Parabéns! Você acertou em " + tentativas + " tentativas!"
        document.getElementById("palpite") = palpite
    } else if(palpite > numeroAleatorio){
        mensagem.innerHTML = "Tente um número menor!"
        maximo.innerHTML = " < " + palpite
    } else if(palpite < numeroAleatorio){ 
        mensagem.innerHTML = "Tente um número maior!"
        minimo.innerHTML = palpite + " < "
    }
    document.getElementById("palpite").value = ""
}