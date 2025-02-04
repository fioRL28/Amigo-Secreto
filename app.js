/*


- Visualizar la lista: Los nombres ingresados aparecerán en una lista debajo del campo de entrada.
- Sorteo aleatorio: Al hacer clic en el botón "Sortear Amigo", se seleccionará aleatoriamente un nombre de la lista 
y se mostrará en la página. */

let nombreAmigos=[];


function agregarAmigo(){
    let nombreAmigo=document.getElementById('amigo').value;

    if(nombreAmigo.trim()===""){
        alert('Por favor, inserte un número');
    }
    else{
        nombreAmigos.push(nombreAmigo);
        document.getElementById('amigo').value = '';

        console.log (nombreAmigos);

        actualizarListaAmigos();
    }
}

function actualizarListaAmigos() {
    let lista=document.getElementById('listaAmigos');
    
    lista.innerHTML = '';

    for(let amigo of nombreAmigos){
        let li=document.createElement('li');
        li.textContent=amigo;
        lista.appendChild(li);
    }
}

console.log(agregarAmigo());
