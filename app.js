// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []; // Array donde se almacenan los nombres

function agregarAmigo() {
    let nombre = document.getElementById("amigo").value.trim(); // Captura el nombre

    if (nombre === "") {
        alert("Por favor, inserte un nombre");    
    } else {
        amigos.push(nombre); // Agrega el nombre al array
        agregarNombre(); // Actualiza la lista en la página
    }
    
    document.getElementById("amigo").value = ""; // Limpia el input
}

function agregarNombre() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; // Limpia la lista antes de actualizarla

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}

function sortearAmigo(){
    if (amigos.length > 0) {
        let indiceAleatorio = Math.floor(Math.random() * amigos.length); // Genera un índice aleatorio
        let amigoSeleccionado = amigos[indiceAleatorio];
        document.getElementById("resultado").innerHTML = "Amigo sorteado: " + amigoSeleccionado;
        document.getElementById("listaAmigos").innerHTML = ""; // Borra la lista después del sorteo


    }
    
}