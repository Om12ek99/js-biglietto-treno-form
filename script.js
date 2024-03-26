
// Richiamo delle variabili dei pulsanti e visualizzazione in console
const sendBtn = document.getElementById("gen");
// console.log(sendBtn);

const delBtn = document.getElementById("del");
// console.log(delBtn);

// aggiungo un eventListener ai pulsani. Inizio con il pulsante GENERA
// GENERA
sendBtn.addEventListener("click", function() {
    //leggo il nome e cognome
    const name = document.getElementById("nome").value; //è un object
    console.log(name);

    // leggo il km che si vuole percorrere
    const kmPercorsi = document.getElementById("km").value; //è un object
    console.log(kmPercorsi);

    // a me serve il valore contenuto e non l'elemento input, e gia che ci sono con typeof osservo il tipo di variabile
    const kmValue = parseInt(kmPercorsi); // number
    // console.log(kmValue, typeof kmValue);

    //leggo la fascia di età del passeggero
    const etaPass = document.getElementById("eta").value;
    console.log(etaPass);


    let sconto = 0;
    if (etaPass === 'minorenne') {
      sconto = 0.2; // Sconto del 20% per i minorenni
    } else if (etaPass === 'anziano') {
      sconto = 0.4; // Sconto del 40% per gli anziani
    } else if (etaPass === 'bambino') {
      sconto = 1; // Sconto del 100% per i bambini
    }
    console.log(sconto);

    const prezzoBase = kmPercorsi * 0.21;
    const prezzoScontato = prezzoBase * (1 - sconto);
    console.log(prezzoScontato);

    
    document.getElementById('result').innerHTML = `
      <h2>Risultato</h2>
      <p>Nome: ${name}</p>
      <p>Kilometri: ${kmPercorsi}</p>
      <p>Età: ${etaPass}</p>
      <p>Prezzo del biglietto: ${prezzoScontato.toFixed(2)} €</p>
    `;
})