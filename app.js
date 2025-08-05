// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
function agregarAmigo(){
    let nombre = document.getElementById('amigo').value.trim();
    if (nombre == '') {
        let mensaje = document.getElementById('mensaje-error');
        mensaje.textContent = 'No se puede ingresar un elemento vacío';
        mensaje.style.display = 'block';
      } else {
        document.getElementById('mensaje-error').style.display = 'none';
        amigos.push(nombre);
        console.log(nombre);
        console.log(amigos);
        document.getElementById('amigo').value=("");
        actualizarLista(amigos)
      }

}

function actualizarLista(listaDeAmigos) {
    const listaParaMostrar = document.getElementById('listaAmigos');
    listaParaMostrar.innerHTML = "";
    for(let i = 0; i < amigos.length; i++) {
        listaParaMostrar.innerHTML += `<li>${listaDeAmigos[i]}</li>`;
    }
}



function sortearAmigo(){
    let numeroRandomSorteado = Math.floor(Math.random() * amigos.length) + 1;
    numeroRandomSorteado --;
    let amigoSecreto = amigos[numeroRandomSorteado];
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `Tu amigo secreto es :  ${amigoSecreto}!`;
    
}
