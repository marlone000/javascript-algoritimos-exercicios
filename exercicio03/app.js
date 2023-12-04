function calcularsoma(){
    let nota1, nota2, media
    nota1 = document.getElementById("numero1").value
    nota2 = document.getElementById("numero2").value 
    media = (parseFloat(nota1) + parseFloat(nota2))
    document.getElementById("resultado").innerText = "Sua média é:" + media
}
