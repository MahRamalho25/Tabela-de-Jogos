function createGame(player1, hour, player2){
    return `
    <li>
    <img src = "assets/img/icon-${player1}.png" alt = "Bandeira do ${player1}"/>
    <strong>${hour}</strong>
    <img src = "assets/img/icon-${player2}.png" alt = "Bandeira do ${player2}"/>
    </li>
    `
}
let delay = -0.4;

function createCard(date, day, games){
    delay = delay + 0.4;
    return `
    <div class = "card" style = "animation-delay: ${delay}s">
    <h2>${date}<span>${day}</span></h2>
    <ul> 
    ${games}
    </ul>
    </div>
    `
}
document.querySelector("#cards").innerHTML = createCard("02/12", "Sábado", createGame("corinthians", "16:00", "palmeiras"))+createCard("03/12", "Domingo", createGame("atletico", "15:00", "bota"))+createCard("04/12", "Segunda", createGame("flamengo", "08:30", "inter"))+createCard("05/12", "Terça", createGame("santos", "18:00", "sp"))+createCard("10/12", "Domingo", createGame("gremio", "9:30", "cruzeiro"))+createCard("20/12", "Quarta", createGame("vasco", "21:00", "bahia"))+createCard("21/12", "Quinta", createGame("atletico", "12:40", "flamengo"))+createCard("22/12", "Sexta", createGame("corinthians", "14:35", "cruzeiro"))