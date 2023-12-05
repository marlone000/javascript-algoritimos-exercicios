function converter(){
    let fahrenheit = parseFloat(document.getElementById("fahrenheit").value)
    resultado = (fahrenheit-32) / 9
    document.getElementById("resultado").innerText = "Sua conversão é: " + resultado
}