function leer() {
  let usuario = document.getElementById("username1");
  let comentario = document.getElementById("comment-text");
      usuario.setAttribute("placeholder", "Ingrese un usuario");
      comentario.setAttribute("placeholder", "Deja tu comentario");
  if (usuario.value == "" && comentario.value == "") {
    usuario.focus();
    usuario.setAttribute("placeholder", "Por favor ingrese usuario");
    return;
  } else {
    if (usuario.value != "") {
      if (comentario.value != "") {
        let container = document.getElementById("comments-container");
        let newcomment = document.createElement("p");
        newcomment.innerHTML = "<br>" + "<span id='name'>" + usuario.value + "</span>" +  ` ` + comentario.value;

          container.appendChild(newcomment);
       
          comentario.value = "";

        if (container.contains(newcomment)) {
          let contenedorBoton = document.createElement("div");
          let botonEliminar = document.createElement("button");

          botonEliminar.id = "eliminar";
          botonEliminar.textContent = "Eliminar";
          contenedorBoton.id = "buttonContainer";
          contenedorBoton.appendChild(botonEliminar);
          container.appendChild(contenedorBoton);

          botonEliminar.addEventListener("click", function () {
            container.removeChild(newcomment);
            container.removeChild(contenedorBoton);
          });
        }
      } else {
          comentario.focus();
          comentario.setAttribute("placeholder", "Por favor ingrese un comentario");

        return;
      }
    } else {
           usuario.focus();
           usuario.setAttribute("placeholder", "Por favor ingrese usuario");

    }
  }
}

document.getElementById("submit-button").addEventListener("click", leer);



function cambiarTexto() {
  var boton = document.getElementById("boton_seg");
  if (boton.innerHTML === "Seguir") {
    boton.innerHTML = "Seguido";
  } else {
    boton.innerHTML = "Seguir";
  }
}



const likeButton = document.getElementById('like-button');
const likeCount = document.getElementById('like-count');
let count = 200;

likeButton.addEventListener('click', () => {
  if (likeButton.classList.contains('liked')) {
    likeButton.classList.remove('liked');
    count--;
  } else {
    likeButton.classList.add('liked');
    count++;
  }
  likeCount.textContent = count;
});


const button = document.querySelector("#like-button");
button.addEventListener("click", function() {
  this.classList.toggle("clicked");
});


const button1 = document.querySelector("#boton_seg");
button1.addEventListener("click", function() {
  this.classList.toggle("clicked");
});





























