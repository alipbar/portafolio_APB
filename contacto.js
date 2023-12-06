const btn = document.getElementById("btnEnviar");
let txtNumber = document.getElementById("Telefono");
let mensaje = document.getElementById("message");
let alertValidaciones = document.getElementById("alertValidaciones");
let email = document.getElementById("email_id");

function validarCorreo(){
    let validEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (! validEmail.test(email.value)){
        return false;
    }
    return true;
}

function telefono(){
    if( !(/^[1-9]\d*$/.test(txtNumber.value))){ 
        return false;
    }
    return true;
}

function validarMensaje(){
    if (mensaje.value==0){
        return false;
    }
    return true;
}

document.getElementById('form')
.addEventListener('submit',function(event){
    let isValid = true;
    event.preventDefault();

    txtNumber.style.border="solid thin pink";
    email.style.border="solid thin pink";
    mensaje.style.border="solid thin pink";

    if (! validarMensaje()){
        Swal.fire({
            title: 'Oops!, te faltó un mensajito',
            text: 'Por favor cuéntame más de tu idea en el campo "Mensaje"',
            icon: 'error',
            confirmButtonColor: "#990808",
            confirmButtonText: 'Entendido'
          })
        mensaje.style.border="solid thin red";
        isValid = false;
    }

    if (! validarCorreo()){
        Swal.fire({
            title: 'Oops!, te faltó ingresar tu correo',
            text: 'Por favor coloca con formato correcto tu correo.',
            icon: 'error',
            confirmButtonColor: "#990808",
            confirmButtonText: 'Entendido'
          })
        email.style.border="solid thin red";
        isValid = false;
    }

    if (! telefono()){
        Swal.fire({
            title: 'Oops!, te faltó ingresar tu número de teléfono',
            text: 'Por favor coloca tu correo en el campo "Teléfono"',
            icon: 'error',
            confirmButtonColor: "#990808",
            confirmButtonText: 'Entendido'
          })
        txtNumber.style.border="solid thin red";
        isValid = false;
    }

    let completo = ((telefono())+(validarCorreo())+(validarMensaje()));
    if (!completo){
        Swal.fire({
            title: 'Oops!, aún no se puede enviar tu mensaje',
            text: 'Por favor, llena los campos correctamente',
            icon: 'error',
            confirmButtonColor: "#990808",
            confirmButtonText: 'Entendido'
          })
    }

    if (isValid){
        btn.value = "Enviando...";
        const serviceID = 'default_service';
        const templateID = 'template_ztopsl7';
    
       emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
          btn.value = 'Send Email';
          Swal.fire({
            title: 'He recibido tu mensaje',
            text: 'Por favor, mantente pendiente, pronto te contactaré vía email :)',
            icon: 'success',
            confirmButtonColor: "#EF9494",
            confirmButtonText: '¡Gracias!'
          })
        }, (err) => {
          btn.value = 'Send Email';
          alert(JSON.stringify(err));
        });

        txtNumber.value="";
        email.value="";
        mensaje.value="";
        }
    });