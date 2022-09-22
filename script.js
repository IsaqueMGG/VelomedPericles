const calcular = () => {
    let deslocamento = document.querySelector("#deslocamento")
    let tempo = document.querySelector("#tempo")
    let velocidade = document.querySelector("#velocidade")
        if (distancia && tempo){
            velocidade = distancia.value / tempo.value
            document.getElementById('#velocidade').value=velocidade
        }
}
const limpar = function () {
    document.querySelector("#deistancia") = ''
    document.querySelector("#tempo") = ''
}
