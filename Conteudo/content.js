// Tenta selecionar o header a cada 1s
const interval = setInterval(() => {
    // Header com ícones
    let header = document.querySelector("header")
    if (header) {
        // Limpa o intervalo
        clearInterval(interval)

        // Input para digitar fonte
        var inputFont = document.createElement("input")

        // Verifica se o "ENTER" foi apertado e se há algo digitado
        inputFont.addEventListener("keydown", function (event) {
            if (event.key == "Enter") {
                changeFont(inputFont)
            }
        })
        
        // Adiciona o input ao lado dos ícones
        header.append(inputFont)
    }
}, 1000)

function changeFont(fontName) {
    let body = document.querySelector("body")
    
    body.style.fontFamily = fontName.value
    fontName.value = ""
}
