import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
import { auth } from "./firebase.js";

window.onload = function(){
    window.location.hash = "no-back-button"
    window.location.hash = "Again-No-back-button"

    window.onhashchange = function(){
        window.location.hash = "no-back-button"
    }
}

const entrar = document.querySelector("#login");
entrar.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = entrar["email"].value;
  const contraseña = entrar["contraseña"].value;

  login.reset();

  try {
    const credenciales = await signInWithEmailAndPassword(
      auth,
      email,
      contraseña
    );
    location.href = "paginas_audio/INICIO.html";

    console.log(credenciales);
  } catch (error) {
    if (error.code === "auth/wrong-password") {
      alert("La contraseña es erronea");
    } else if (error.code === "auth/user-not-found") {
      alert("Correo erroneo");
    } else {
      alert(error.message, "error");
    }
    login.reset();
  }

  /*     try {
        const userCreate = await createUserWithEmailAndPassword(auth, email , contraseña)
        alert('Usuario registrado')
        console.log(userCreate)
    } catch (error) {
        console.log(error.message)
        console.log(error.code)
        if(error.code === 'auth/email-already-in-use'){
            alert('El usuario ya exite')
        }
        else if(error.code === 'auth/invalid-email'){
            alert('Correo erroneo')
        } else if (error.code === 'auth/weak-password'){
            alert('La contraseña debe tener 6 caracteres como minimo')
        }
    } */
});
