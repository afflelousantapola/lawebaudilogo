



function loadImage(url){
   return new Promise(resolve =>{
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url ,true);
    xhr.responseType="blob";
    xhr.onload= function(e){
        const reader = new FileReader();
        reader.onload = function(event){
            const res = event.target.result;
            resolve(res);
        }
        const file = this.response;
        reader.readAsDataURL(file);

    }
    xhr.send();
   });
}


window.addEventListener('load', async ()=>{
    const form = document.querySelector('#form');
    form.addEventListener('submit',(e)=>{
       e.preventDefault();

       let nombre = document.getElementById('nombre').value;
       let apellidos = document.getElementById('apellidos').value;
       let domicilio = document.getElementById('domicilio').value;
       let codigopostal = document.getElementById('codigopostal').value;
       let telefono = document.getElementById('telefono').value;
       let movil = document.getElementById('movil').value;
       let email = document.getElementById('email').value;

       generatePDF(nombre,apellidos,domicilio,codigopostal,telefono,movil,email);
    })

});


async function generatePDF(nombre,apellidos,domicilio,codigopostal,telefono,movil,email){
    const image = await loadImage("/assets/img/ANAMNESIS.jpg")

    const pdf = new jsPDF ('p', 'pt','letter');
    pdf.addImage(image, 'PNG',0,0, 600, 789);

    pdf.setFontSize(12);
    pdf.text(nombre,120,206);
    pdf.text(apellidos,120,225);
    pdf.text(domicilio,120,249);
    pdf.text(codigopostal,65,266);
    pdf.text(telefono,353,288);
    pdf.text(movil,85,307);
    pdf.text(email,265,307);

    pdf.setFillColor(0,0,0);
    pdf.circle(335,489, 4, 'FD' );
    pdf.setProperties({
        title: "Anamnesis-pdf",
        creator: "AlexMartinez",
        });

        window.open(pdf.output('bloburl'));
        location.reload();
        /* pdf.save("ejemplo.pdf") */
    
}

