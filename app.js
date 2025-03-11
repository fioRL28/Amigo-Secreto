
//Almacenar nombres

let nombreSecreto=0;
let nombreAmigos=[];
let listanombreSorteados=[]; 


function asignarTextoElemento(elemento, texto){
    let elementoHTML=document.querySelector(elemento);
    elementoHTML.innerHTML=texto;
    return;
}

//Función para agregar amigos

function agregarAmigo(){
    let nombreAmigo=document.getElementById('amigo').value;

    if(nombreAmigo.trim()===""){
        alert('Por favor, Ingrese un nombre');
    }
    else{
        nombreAmigos.push(nombreAmigo);
        limpiarCaja();
        actualizarListaAmigos();
    }
}

//Función Limpiar Caja

function limpiarCaja(){
    document.getElementById('amigo').value='';
}

//Función para actualizar la lista de amigos

function actualizarListaAmigos() {
    let lista=document.getElementById('listaAmigos');
    
    lista.innerHTML = '';

    for(let amigo of nombreAmigos){
        let li=document.createElement('li');
        li.textContent=amigo;
        lista.appendChild(li);
    }
}

//Función para Sortear Amigo



function sortearAmigo() {
    if (nombreAmigos.length === 0) {
        asignarTextoElemento();
    } else {
        if (listanombreSorteados.length === nombreAmigos.length) {
            asignarTextoElemento('h2', 'Ya se sortearon todos los nombres posibles.');
        } else {
            let indice = Math.floor(Math.random() * nombreAmigos.length);
            if (listanombreSorteados.includes(indice)) {
                sortearAmigo(); // Vuelve a intentar si ya fue sorteado
            } else {
                listanombreSorteados.push(indice);
                let nombreSeleccionado = nombreAmigos[indice];

                let resultado = document.getElementById('resultado');
                resultado.innerHTML = `El amigo sorteado es: <strong>${nombreSeleccionado}</strong>`;
            }
        }
    }
}



function condicionesIniciales(){
    asignarTextoElemento('h2',"Digite el nombre de sus amigos");
    nombreSecreto=sortearAmigo();
    //generarAmigoSecreto();
    
}



condicionesIniciales();

//sortearAmigo();
console.log(agregarAmigo());
