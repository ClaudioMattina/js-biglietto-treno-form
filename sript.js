

/* importato l'imput dell'utente dell'imput-text del html nel paragrafo con ID "nomeUtente"  */
const inputNome = document.getElementById("nome");
/* importo l'input dell'utente che dichiara i km da percorrere */
let inputKm = document.getElementById("chilometri");

let biglietto = document.getElementById("biglietto")
/* inporto il contenitore dove ci stamperemo il nome utente */
let nomeUtente = document.getElementById("nomeUtente");
/* dove stamperemo l'offerta */
let offerta = document.getElementById("offert");
/* dove stamperemo la carrozza */
let carrozza = document.getElementById("carrozza");
/* dove stamperemo il codice CP */
let codeCP = document.getElementById("codiceCP");
/* importo l'input età per poi generare lo sconto se maggiorenne o minorenne */
let età = document.getElementById("età")
/* importo il costo del biglietto */
let costoBiglietto = document.getElementById("costoBiglietto")
/* genero un numero random da 1 a 20 che indicherà la carrozza */
let randomNumber = Math.floor(Math.random() * 20 ) +1;
/* genero un numero random per il codiceCP */
let randomCode = Math.floor(Math.random() * 9999 ) +1;


/* constante che dichiara il prezzo al km */
const priceKm = 0.21;
/* somma per calcolare il costo del biglietto in base ai km dell'utente e il costo per km */
const somma = inputKm.value * 0.21;

/* somma scontanta del 20% per i minorenni */
const scontoSomma = (somma * 20) / 100;





document.querySelector("button").addEventListener("click", function(){

    biglietto.classList.remove("d-none")

    nomeUtente.innerHTML=`<p> ${inputNome.value} </p>`;

    carrozza.innerHTML= randomNumber;
    codeCP.innerHTML = randomCode;

    if(età.value == "maggiorenne"){
        offerta.innerHTML = "Offerta per persone maggiorenni"
        costoBiglietto.innerHTML = somma + "€";
    }
    else{
        offerta.innerHTML = "Offerta per minorenni"
        costoBiglietto.innerHTML = somma - scontoSomma + "€";
    }

    
  

    
    
});







