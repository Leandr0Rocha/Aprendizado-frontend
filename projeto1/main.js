function mudarCorDeFundo(){
    let cores = ['silver', 'gray', 'white', 'maroon', 'red', 'purple', 'fuschia', 'green', 'lime', 'olive', 'yellow', 'navy', 'blue', 'teal', 'aqua']
    let corAleatoria = cores[Math.floor(Math.random() * cores.length)]
    document.body.style.backgroundColor = corAleatoria
}
