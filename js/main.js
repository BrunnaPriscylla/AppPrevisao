const key = 'e0283766cee7e7e70be7e75409ae8042'

function coletarDado(){
    const cidade = document.querySelector(".input-cidade").value 
    Dado(cidade)
}

async function Dado(cidade){
    let Dado = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(Resposta => Resposta.json())
    console.log(Dado)
    trocarInfo(Dado)
}

function trocarInfo(Dado){
    document.querySelector(".titulo").innerHTML = Dado.name
    document.querySelector(".temperatura").innerHTML = Math.floor(Dado.main.temp) + "ºC"
    document.querySelector(".texto-previsao").innerHTML = Dado.weather[0].description
    document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${Dado.weather[0].icon}.png`
    document.querySelector(".Umidade").innerHTML = "Umidade Relativa do Ar: " + Dado.main.humidity + "%"
}