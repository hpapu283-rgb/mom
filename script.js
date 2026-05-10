function irCarta(){

    window.location.href = "carta.html";

}

function volverInicio(){

    window.location.href = "index.html";

}

setInterval(() => {

    let corazon = document.createElement("div");

    corazon.innerHTML = "❤️";

    corazon.className = "heart";

    corazon.style.left = Math.random() * 100 + "%";

    document.body.appendChild(corazon);

    setTimeout(() => {

        corazon.remove();

    }, 4000);

}, 500);