(() => {
    'use strict'
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
    })

})()

function sendMail(){
    var params = {
        nom: document.getElementById("nom").value,
        email: document.getElementById("email").value,
        objet: document.getElementById("objet").value,
        message: document.getElementById("message").value,
    }

    const serviceID = "service_27j6fl9";
    const templateID = "template_50bm7oj";

    emailjs.send(serviceID, templateID, params)
        .then(res=>{
            document.getElementById("nom").value = "";
            document.getElementById("email").value = "";
            document.getElementById("objet").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            alert("Votre message a été envoyez avec success!!")

        })
        .catch(err=>console.log(err));

}

function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("afficherplus");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Voir plus";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Voir moins";
        moreText.style.display = "inline";
    }
}




// Recupére le boutton
let mybutton = document.getElementById("btnscrolhaut");

// Lorsque l'utilisateur fait défiler vers le bas 20 pixels à partir du haut du document, affichez le bouton
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// Lorsque l'utilisateur clique sur le bouton, faites défiler vers le haut du document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

